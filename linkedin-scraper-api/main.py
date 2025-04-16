import os
import json
import csv
import pandas as pd
from datetime import datetime
from fastapi import FastAPI, HTTPException, BackgroundTasks, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from dotenv import load_dotenv
import time
import re

# Import the LinkedIn scraper
from scraper import PurdueLinkedInScraper

# Load environment variables
load_dotenv()

app = FastAPI(title="LinkedIn Profile Scraper API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your Next.js app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define models
class ScrapeProfileRequest(BaseModel):
    linkedin_url: str
    
class ScrapeMultipleRequest(BaseModel):
    linkedin_urls: Optional[List[str]] = None
    max_profiles: Optional[int] = 10

class ProfileResponse(BaseModel):
    success: bool
    profile: Optional[Dict[str, Any]] = None
    message: Optional[str] = None

class ExportFormat(str):
    JSON = "json"
    CSV = "csv"

class LoginResponse(BaseModel):
    success: bool
    message: str

# Store running tasks
scraping_tasks = {}

# Output directory for exports
EXPORT_DIR = "exports"
if not os.path.exists(EXPORT_DIR):
    os.makedirs(EXPORT_DIR)

@app.get("/")
async def root():
    return {"message": "LinkedIn Scraper API is running"}

@app.post("/scrape-profile", response_model=ProfileResponse)
async def scrape_single_profile(request: ScrapeProfileRequest):
    try:
        # Initialize scraper
        email = os.environ.get("LINKEDIN_EMAIL")
        password = os.environ.get("LINKEDIN_PASSWORD")
        
        if not email or not password:
            raise HTTPException(status_code=500, 
                                detail="LinkedIn credentials not configured")
        
        # Check if cookie file exists to determine if we can use headless mode
        cookie_file_exists = os.path.exists("linkedin_cookies.json")
        
        # Use headless mode if cookies exist, otherwise use visible browser
        headless = cookie_file_exists
        manual_verification_time = 120 if not headless else 0
        
        if not headless:
            print("NOTICE: Running in visible mode. Consider using /login endpoint first to enable headless mode.")
        
        scraper = PurdueLinkedInScraper(
            email=email, 
            password=password, 
            take_screenshots=False,
            headless=headless,
            manual_verification_time=manual_verification_time
        )
        
        scraper.setup_driver()
        login_success = False
        
        # Try to login with cookies first
        if cookie_file_exists:
            try:
                scraper.login()
                if "/feed" in scraper.driver.current_url:
                    login_success = True
                else:
                    # If cookies failed but we're in headless mode, return helpful message
                    if headless:
                        return ProfileResponse(
                            success=False,
                            message="Saved cookies are expired. Please use /login endpoint to perform a new manual login."
                        )
            except Exception as login_err:
                if headless:
                    return ProfileResponse(
                        success=False,
                        message=f"Login with saved cookies failed in headless mode. Please use /login endpoint first: {str(login_err)}"
                    )
        else:
            # No cookies, try regular login
            scraper.login()
            if "/feed" in scraper.driver.current_url:
                login_success = True
        
        if not login_success:
            return ProfileResponse(
                success=False,
                message="Login failed. Please use /login endpoint to perform a manual login with verification."
            )
        
        # Scrape single profile
        try:
            scraper.scrape_profiles([request.linkedin_url])
            
            if not scraper.profile_data:
                return ProfileResponse(
                    success=False,
                    message="Failed to scrape profile data"
                )
                
            # Format according to v2 schema
            profile_data = transform_profile_for_v2(scraper.profile_data[0])
            
            return ProfileResponse(
                success=True,
                profile=profile_data
            )
        finally:
            # Always close the driver
            if scraper.driver:
                scraper.driver.quit()
                
    except Exception as e:
        return ProfileResponse(
            success=False,
            message=f"Error: {str(e)}"
        )

@app.post("/discover-profiles")
async def discover_profiles(background_tasks: BackgroundTasks, 
                           request: ScrapeMultipleRequest):
    task_id = f"task_{len(scraping_tasks) + 1}"
    
    # Add task to background
    background_tasks.add_task(
        run_discovery_task, 
        task_id, 
        request.max_profiles
    )
    
    scraping_tasks[task_id] = {"status": "running", "profiles": []}
    
    return {"task_id": task_id, "message": "Profile discovery started in background"}

@app.get("/tasks/{task_id}")
async def get_task_status(task_id: str):
    if task_id not in scraping_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    return scraping_tasks[task_id]

@app.get("/export/{task_id}")
async def export_profiles(task_id: str, format: str = "json"):
    """Export profiles from a completed task in JSON or CSV format"""
    if task_id not in scraping_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task_data = scraping_tasks[task_id]
    if task_data["status"] != "completed":
        raise HTTPException(status_code=400, detail="Task is not completed yet")
    
    if not task_data["profiles"]:
        raise HTTPException(status_code=400, detail="No profiles found in task")
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    if format.lower() == "json":
        # Export as JSON
        filename = f"{EXPORT_DIR}/profiles_{task_id}_{timestamp}.json"
        
        # Create nested JSON with proper structure for v2
        structured_data = {
            "profiles": task_data["profiles"]
        }
        
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(structured_data, f, indent=2, ensure_ascii=False)
        
        return FileResponse(
            path=filename,
            filename=os.path.basename(filename),
            media_type="application/json"
        )
    
    elif format.lower() == "csv":
        # Export as CSV (flattened structure)
        filename = f"{EXPORT_DIR}/profiles_{task_id}_{timestamp}.csv"
        
        # Flatten the nested data for CSV
        flattened_data = []
        
        for profile in task_data["profiles"]:
            # Base profile data
            base_data = {
                "name": profile["name"],
                "linkedinId": profile["linkedinId"],
                "url": profile["url"],
                "imageUrl": profile["imageUrl"],
                "isAlumni": profile["isAlumni"],
                "eloRating": profile["eloRating"]
            }
            
            # Handle educations
            for i, edu in enumerate(profile.get("educations", [])[:3]):  # Limit to first 3
                base_data[f"education_{i+1}_school"] = edu.get("school", "")
                base_data[f"education_{i+1}_degree"] = edu.get("degree", "")
                base_data[f"education_{i+1}_fieldOfStudy"] = edu.get("fieldOfStudy", "")
                base_data[f"education_{i+1}_startDate"] = edu.get("startDate", "")
                base_data[f"education_{i+1}_endDate"] = edu.get("endDate", "")
                base_data[f"education_{i+1}_isCurrent"] = edu.get("isCurrent", False)
            
            # Handle experiences
            for i, exp in enumerate(profile.get("experiences", [])[:3]):  # Limit to first 3
                base_data[f"experience_{i+1}_title"] = exp.get("title", "")
                base_data[f"experience_{i+1}_companyName"] = exp.get("companyName", "")
                base_data[f"experience_{i+1}_location"] = exp.get("location", "")
                base_data[f"experience_{i+1}_description"] = exp.get("description", "")
                base_data[f"experience_{i+1}_startDate"] = exp.get("startDate", "")
                base_data[f"experience_{i+1}_endDate"] = exp.get("endDate", "")
                base_data[f"experience_{i+1}_isCurrent"] = exp.get("isCurrent", False)
            
            # Handle projects
            for i, project in enumerate(profile.get("projects", [])[:3]):  # Limit to first 3
                base_data[f"project_{i+1}_title"] = project.get("title", "")
                base_data[f"project_{i+1}_description"] = project.get("description", "")
                base_data[f"project_{i+1}_startDate"] = project.get("startDate", "")
                base_data[f"project_{i+1}_endDate"] = project.get("endDate", "")
            
            # Handle honors
            for i, honor in enumerate(profile.get("honors", [])[:3]):  # Limit to first 3
                base_data[f"honor_{i+1}_title"] = honor.get("title", "")
                base_data[f"honor_{i+1}_issuer"] = honor.get("issuer", "")
                base_data[f"honor_{i+1}_date"] = honor.get("date", "")
            
            flattened_data.append(base_data)
        
        # Convert to DataFrame and save to CSV
        df = pd.DataFrame(flattened_data)
        df.to_csv(filename, index=False)
        
        return FileResponse(
            path=filename,
            filename=os.path.basename(filename),
            media_type="text/csv"
        )
    
    else:
        raise HTTPException(status_code=400, detail="Unsupported format. Use 'json' or 'csv'")

@app.get("/export-sql/{task_id}")
async def export_sql_insert(task_id: str):
    """Export profiles as SQL insert statements compatible with v2 schema"""
    if task_id not in scraping_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task_data = scraping_tasks[task_id]
    if task_data["status"] != "completed":
        raise HTTPException(status_code=400, detail="Task is not completed yet")
    
    if not task_data["profiles"]:
        raise HTTPException(status_code=400, detail="No profiles found in task")
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{EXPORT_DIR}/profiles_sql_{task_id}_{timestamp}.sql"
    
    with open(filename, "w", encoding="utf-8") as f:
        # Write SQL header
        f.write("-- SQL Insert statements for PurdueRanked profiles\n")
        f.write(f"-- Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        # Generate SQL for each profile
        for profile in task_data["profiles"]:
            # Profile table insert
            f.write("-- Insert profile\n")
            f.write(f"""INSERT INTO "Profile" ("id", "linkedinId", "name", "url", "imageUrl", "isAlumni", "eloRating", "createdAt", "updatedAt")
VALUES (
    '{profile['linkedinId']}',
    '{profile['linkedinId']}',
    '{profile['name'].replace("'", "''")}',
    '{profile['url']}',
    '{profile.get('imageUrl', '')}',
    {str(profile.get('isAlumni', False)).lower()},
    {profile.get('eloRating', 1200)},
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);\n\n""")
            
            # Education inserts
            if profile.get("educations"):
                f.write("-- Insert educations\n")
                for i, edu in enumerate(profile["educations"]):
                    f.write(f"""INSERT INTO "Education" ("id", "profileId", "school", "degree", "fieldOfStudy", "startDate", "endDate", "isCurrent")
VALUES (
    '{profile['linkedinId']}_edu_{i+1}',
    '{profile['linkedinId']}',
    '{edu.get('school', '').replace("'", "''")}',
    '{edu.get('degree', '').replace("'", "''")}',
    '{edu.get('fieldOfStudy', '').replace("'", "''")}',
    '{edu.get('startDate', '')}',
    '{edu.get('endDate', '')}',
    {str(edu.get('isCurrent', False)).lower()}
);\n""")
                f.write("\n")
            
            # Experience inserts
            if profile.get("experiences"):
                f.write("-- Insert experiences\n")
                for i, exp in enumerate(profile["experiences"]):
                    f.write(f"""INSERT INTO "Experience" ("id", "profileId", "title", "companyName", "location", "description", "startDate", "endDate", "isCurrent")
VALUES (
    '{profile['linkedinId']}_exp_{i+1}',
    '{profile['linkedinId']}',
    '{exp.get('title', '').replace("'", "''")}',
    '{exp.get('companyName', '').replace("'", "''")}',
    '{exp.get('location', '').replace("'", "''")}',
    '{exp.get('description', '').replace("'", "''")}',
    '{exp.get('startDate', '')}',
    '{exp.get('endDate', '')}',
    {str(exp.get('isCurrent', False)).lower()}
);\n""")
                f.write("\n")
            
            f.write("\n")
    
    return FileResponse(
        path=filename,
        filename=os.path.basename(filename),
        media_type="text/plain"
    )

@app.get("/scraper-test-ui")
async def scraper_test_ui():
    """A simple UI for testing the scraper functionality"""
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LinkedIn Scraper Test</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }
            h1 {
                color: #0077B5;
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
            }
            .container {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .form-group {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            input, button {
                padding: 10px;
                font-size: 16px;
            }
            button {
                background-color: #0077B5;
                color: white;
                border: none;
                cursor: pointer;
                font-weight: bold;
            }
            button:hover {
                background-color: #006097;
            }
            pre {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                white-space: pre-wrap;
                max-height: 500px;
                overflow-y: auto;
            }
            .error {
                color: red;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>LinkedIn Scraper Test UI</h1>
        <p>Use this page to test and verify the LinkedIn scraper functionality.</p>
        
        <div class="container">
            <div class="test-single">
                <h2>Test Single Profile Scraping</h2>
                <div class="form-group">
                    <label for="single-url">LinkedIn Profile URL:</label>
                    <input type="text" id="single-url" placeholder="https://www.linkedin.com/in/username/">
                </div>
                <button id="scrape-single-btn">Scrape Profile</button>
                <div id="single-result"></div>
            </div>
            
            <div class="test-batch">
                <h2>Test Batch Profile Discovery</h2>
                <div class="form-group">
                    <label for="max-profiles">Maximum Number of Profiles:</label>
                    <input type="number" id="max-profiles" value="5" min="1" max="20">
                </div>
                <button id="discover-btn">Discover Profiles</button>
                <div id="discover-result"></div>
            </div>
        </div>
        
        <script>
            // Single profile test
            document.getElementById('scrape-single-btn').addEventListener('click', async () => {
                const resultDiv = document.getElementById('single-result');
                resultDiv.innerHTML = '<p>Scraping... this may take a minute</p>';
                
                const url = document.getElementById('single-url').value;
                if (!url) {
                    resultDiv.innerHTML = '<p class="error">Please enter a LinkedIn URL</p>';
                    return;
                }
                
                try {
                    const response = await fetch('/scrape-profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ linkedin_url: url })
                    });
                    
                    const data = await response.json();
                    resultDiv.innerHTML = `
                        <h3>Result:</h3>
                        <pre>${JSON.stringify(data, null, 2)}</pre>
                    `;
                } catch (error) {
                    resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
                }
            });
            
            // Batch discovery test
            document.getElementById('discover-btn').addEventListener('click', async () => {
                const resultDiv = document.getElementById('discover-result');
                resultDiv.innerHTML = '<p>Starting discovery... this will run in the background</p>';
                
                const maxProfiles = document.getElementById('max-profiles').value;
                
                try {
                    const response = await fetch('/discover-profiles', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ max_profiles: parseInt(maxProfiles) })
                    });
                    
                    const data = await response.json();
                    resultDiv.innerHTML = `
                        <h3>Task Started:</h3>
                        <pre>${JSON.stringify(data, null, 2)}</pre>
                        <p>Check task status at <a href="/tasks/${data.task_id}" target="_blank">/tasks/${data.task_id}</a></p>
                        <p>Once completed, download results at <a href="/export/${data.task_id}" target="_blank">/export/${data.task_id}</a></p>
                    `;
                } catch (error) {
                    resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
                }
            });
        </script>
    </body>
    </html>
    """
    return Response(content=html_content, media_type="text/html")

@app.post("/login", response_model=LoginResponse)
async def manual_login():
    """
    Endpoint to perform a one-time manual login with visible browser.
    This saves cookies that can be used for subsequent headless operations.
    """
    try:
        # Initialize scraper with visible browser for manual verification
        email = os.environ.get("LINKEDIN_EMAIL")
        password = os.environ.get("LINKEDIN_PASSWORD")
        
        if not email or not password:
            return LoginResponse(
                success=False,
                message="LinkedIn credentials not configured in environment variables"
            )
        
        # Always use visible mode for this endpoint
        scraper = PurdueLinkedInScraper(
            email=email, 
            password=password, 
            take_screenshots=True,
            headless=False,  # Force visible browser
            manual_verification_time=180  # 3 minutes to complete verification
        )
        
        try:
            scraper.setup_driver()
            print("Browser opened for manual login. Please complete any verification steps.")
            scraper.login()
            
            # Verify login success
            if "/feed" in scraper.driver.current_url:
                # Extra wait to ensure all cookies are properly set
                time.sleep(5)
                
                # Save cookies for future use
                scraper.save_cookies()
                
                return LoginResponse(
                    success=True,
                    message="Login successful! Cookies saved for future headless operations."
                )
            else:
                return LoginResponse(
                    success=False,
                    message=f"Login failed. Current URL: {scraper.driver.current_url}"
                )
        finally:
            if scraper.driver:
                scraper.driver.quit()
                
    except Exception as e:
        return LoginResponse(
            success=False,
            message=f"Error during login: {str(e)}"
        )

def run_discovery_task(task_id: str, max_profiles: int):
    """Run profile discovery in background task"""
    try:
        # Get LinkedIn credentials
        email = os.environ.get("LINKEDIN_EMAIL")
        password = os.environ.get("LINKEDIN_PASSWORD")
        
        if not email or not password:
            scraping_tasks[task_id] = {
                "status": "failed",
                "message": "LinkedIn credentials not configured",
                "profiles": []
            }
            return
        
        # Check if cookie file exists to determine if we can use headless mode
        cookie_file_exists = os.path.exists("linkedin_cookies.json")
        headless = cookie_file_exists
        manual_verification_time = 120 if not headless else 0
        
        # Initialize scraper with appropriate mode
        scraper = PurdueLinkedInScraper(
            email=email, 
            password=password,
            take_screenshots=False,
            headless=headless,
            manual_verification_time=manual_verification_time
        )
        
        try:
            # Run the scraper
            scraper.setup_driver()
            scraper.login()
            
            # Verify login success
            if "/feed" not in scraper.driver.current_url:
                scraping_tasks[task_id] = {
                    "status": "failed",
                    "message": "Login failed - security verification may be required. Please use /login endpoint first.",
                    "profiles": []
                }
                return
            
            # Find profiles
            profile_urls = scraper.find_purdue_profiles(max_profiles=max_profiles)
            
            if not profile_urls:
                scraping_tasks[task_id] = {
                    "status": "completed",
                    "message": "No profiles found",
                    "profiles": []
                }
                return
            
            # Scrape profiles
            scraper.scrape_profiles(profile_urls)
            
            if not scraper.profile_data:
                scraping_tasks[task_id] = {
                    "status": "completed",
                    "message": "No profile data extracted",
                    "profiles": []
                }
                return
            
            # Transform profiles for v2 schema
            transformed_profiles = []
            for profile in scraper.profile_data:
                try:
                    transformed = transform_profile_for_v2(profile)
                    transformed_profiles.append(transformed)
                except Exception as transform_error:
                    print(f"Error transforming profile: {str(transform_error)}")
            
            # Update task with results
            scraping_tasks[task_id] = {
                "status": "completed",
                "profiles": transformed_profiles
            }
            
            # Save to temp file in case we want to use the data later
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            export_path = f"{EXPORT_DIR}/discovery_{task_id}_{timestamp}.json"
            with open(export_path, "w", encoding="utf-8") as f:
                json.dump({"profiles": transformed_profiles}, f, indent=2, ensure_ascii=False)
            
            print(f"Discovery task {task_id} completed with {len(transformed_profiles)} profiles")
            
        except Exception as scrape_error:
            print(f"Error during discovery: {str(scrape_error)}")
            scraping_tasks[task_id] = {
                "status": "failed",
                "message": f"Error during scraping: {str(scrape_error)}",
                "profiles": []
            }
        finally:
            if scraper.driver:
                scraper.driver.quit()
    
    except Exception as e:
        print(f"Critical error in discovery task: {str(e)}")
        scraping_tasks[task_id] = {
            "status": "failed",
            "message": f"Critical error: {str(e)}",
            "profiles": []
        }

def transform_profile_for_v2(profile: dict) -> dict:
    """Transform the profile data to match v2 schema expectations"""
    # Extract LinkedIn ID from URL
    linkedin_id = profile["url"].split("/in/")[-1].rstrip("/")
    
    # Determine if profile is alumni based on education
    is_alumni = False
    for edu in profile.get("education", []):
        if "Purdue" in edu.get("school", "") and "date_range" in edu:
            # If education has ended, they're alumni
            if "-" in edu["date_range"] and "Present" not in edu["date_range"]:
                is_alumni = True
    
    # Parse experiences to match Prisma schema
    experiences = []
    for exp in profile.get("experience", []):
        # Parse date range
        date_range = exp.get("date_range", "")
        start_date = ""
        end_date = ""
        is_current = False
        
        if date_range:
            parts = date_range.split(" - ")
            start_date = parts[0].strip() if parts and parts[0].strip() != "" else ""
            
            if len(parts) > 1:
                if parts[1].strip() == "Present":
                    is_current = True
                else:
                    end_date = parts[1].strip()
        
        # Extract skills from description if present
        skills = exp.get("skills", "")
        description = exp.get("description", "")
        
        # If skills not explicitly set but in description
        if not skills and description:
            skills_match = re.search(r'Skills:(.+?)(?:\.|$)', description, re.IGNORECASE)
            if skills_match:
                skills = skills_match.group(1).strip()
                # Remove skills from description to avoid duplication
                description = re.sub(r'Skills:(.+?)(?:\.|$)', '', description, flags=re.IGNORECASE).strip()
        
        experiences.append({
            "title": exp.get("title", ""),
            "companyName": exp.get("company", ""),
            "location": exp.get("location", ""),
            "description": description,
            "skills": skills,
            "media": exp.get("media", ""),
            "startDate": start_date,
            "endDate": end_date,
            "isCurrent": is_current
        })
    
    # Parse educations to match Prisma schema
    raw_educations = profile.get("education", [])
    processed_educations = []
    
    # First pass - extract coursework and identify main educations
    coursework_items = []
    for edu in raw_educations:
        school = edu.get("school", "").strip()
        
        # Check if this is a coursework entry
        if school.lower().startswith("relevant coursework"):
            coursework_items.append(school)
            continue
            
        if "coursework" in school.lower() or "course" in school.lower():
            coursework_items.append(school)
            continue
        
        # Extract grades if included in school or degree
        grade = edu.get("grade", "")
        degree = edu.get("degree", "")
        
        # Check if this is a skills entry masquerading as school
        skills = edu.get("skills", "")
        if not skills and school.lower().startswith("skills:"):
            skills = school.replace("Skills:", "").strip()
            continue
            
        # Check degree for activities
        activities = edu.get("activities", "")
        if not activities and degree and degree.lower().startswith("activities and societies:"):
            activities = degree.replace("Activities and societies:", "").strip()
            degree = ""
        
        # Parse date range for regular education entries
        date_range = edu.get("date_range", "")
        start_date = ""
        end_date = ""
        is_current = False
        
        if date_range:
            parts = date_range.split(" - ")
            start_date = parts[0].strip() if parts and parts[0].strip() != "" else ""
            
            if len(parts) > 1:
                if parts[1].strip() == "Present":
                    is_current = True
                else:
                    end_date = parts[1].strip()
        
        # Add to processed educations
        processed_educations.append({
            "school": school,
            "degree": degree,
            "fieldOfStudy": edu.get("fieldOfStudy", ""),
            "description": edu.get("description", ""),
            "grade": grade,
            "activities": activities,
            "skills": skills,
            "media": edu.get("media", ""),
            "startDate": start_date,
            "endDate": end_date,
            "isCurrent": is_current
        })
    
    # Second pass - merge coursework into main education entries where appropriate
    if coursework_items and processed_educations:
        # Add coursework to the most recent education (typically this is where it belongs)
        coursework_text = " ".join(coursework_items)
        if not processed_educations[0]["description"]:
            processed_educations[0]["description"] = coursework_text
    
    educations = processed_educations
    
    # Parse projects - handle potential duplicates and title/description issues
    raw_projects = profile.get("projects", [])
    processed_projects = []
    titles_seen = set()
    
    # First pass: collect full project entries and extract additional fields
    for project in raw_projects:
        title = project.get("title", "").strip()
        description = project.get("description", "").strip()
        
        # Skip empty titles
        if not title:
            continue
        
        # Skip if we've already processed this title
        if title.lower() in titles_seen:
            continue
        
        # Extract association if present in title or description
        association = project.get("association", "")
        
        # Look for common patterns indicating association
        if not association:
            # Check if title contains @ which often indicates association
            match = re.search(r'@\s*([^,]+)', title)
            if match:
                association = match.group(1).strip()
                # Remove the association from title
                title = re.sub(r'@\s*([^,]+)', '', title).strip()
            
            # Other common indicators of associations in titles
            for pattern in ["at ", "with ", "for "]:
                if pattern in title.lower():
                    parts = title.lower().split(pattern)
                    if len(parts) > 1:
                        possible_assoc = parts[1].strip()
                        # Only use if it looks like an organization name
                        if len(possible_assoc.split()) <= 4:
                            association = possible_assoc
                            # Clean up title
                            title = parts[0].strip()
                            break
        
        # Add to processed list
        processed_projects.append({
            "title": title,
            "description": description,
            "url": project.get("url", ""),
            "skills": project.get("skills", ""),
            "contributors": project.get("contributors", ""),
            "association": association,
            "media": project.get("media", ""),
            "startDate": project.get("startDate", ""),
            "endDate": project.get("endDate", "")
        })
        titles_seen.add(title.lower())
    
    # Second pass: merge descriptions that might have been split into separate entries
    i = 0
    while i < len(processed_projects):
        current = processed_projects[i]
        merged = False
        
        # If this project has no description but the title looks like a description
        if not current["description"] and len(current["title"]) > 50:
            # Look for a project with a short title that this could be a description for
            for j in range(len(processed_projects)):
                if i == j:
                    continue
                    
                potential_parent = processed_projects[j]
                if len(potential_parent["title"]) < 50 and not potential_parent["description"]:
                    # This looks like a match - merge them
                    potential_parent["description"] = current["title"]
                    processed_projects.pop(i)
                    merged = True
                    break
        
        if not merged:
            i += 1
    
    # Use the processed projects for all profiles
    projects = processed_projects
    
    # Parse honors/awards
    honors = []
    for honor in profile.get("honors_awards", []):
        raw_title = honor.get("title", "").strip()
        raw_issuer = honor.get("issuer", "").strip()
        raw_date = honor.get("date", "").strip()
        
        # Clean up the data - sometimes issuer and date are in the wrong fields
        title = raw_title
        issuer = ""
        date = ""
        description = honor.get("description", "")
        association = honor.get("association", "")
        media = honor.get("media", "")
        
        # Process issuer field
        if raw_issuer:
            if "issued by" in raw_issuer.lower():
                # The issuer field contains "Issued by Organization"
                issuer = raw_issuer
                
                # Extract association from issuer if present
                match = re.search(r'issued by\s+(.+?)$', raw_issuer, re.IGNORECASE)
                if match and not association:
                    association = match.group(1).strip()
            elif raw_issuer == raw_title:
                # Sometimes issuer repeats the title - ignore it
                issuer = ""
            else:
                issuer = raw_issuer
        
        # Process date field
        if raw_date:
            if "issued by" in raw_date.lower():
                # Extract the issuer and date
                parts = raw_date.split("·")
                if len(parts) > 1:
                    issuer_part = parts[0].strip()
                    date_part = parts[1].strip()
                    
                    if not issuer:
                        issuer = issuer_part
                    date = date_part
                    
                    # Extract association from issuer if present
                    match = re.search(r'issued by\s+(.+?)$', issuer_part, re.IGNORECASE)
                    if match and not association:
                        association = match.group(1).strip()
                else:
                    # Just has "Issued by" without a date
                    if not issuer:
                        issuer = raw_date
                        # Extract association
                        match = re.search(r'issued by\s+(.+?)$', raw_date, re.IGNORECASE)
                        if match and not association:
                            association = match.group(1).strip()
            else:
                date = raw_date
        
        # Clean up issuer
        if issuer and issuer.lower().startswith("issued by"):
            issuer = issuer.replace("Issued by", "").replace("issued by", "").strip()
        
        honors.append({
            "title": title,
            "issuer": issuer,
            "date": date,
            "description": description,
            "association": association,
            "media": media
        })
    
    # Transform to v2 schema
    return {
        "name": profile.get("name", ""),
        "linkedinId": linkedin_id,
        "url": profile.get("url", ""),
        "imageUrl": profile.get("image_url", ""),
        "isAlumni": is_alumni,
        "eloRating": 1200,  # Default ELO rating
        "experiences": experiences,
        "educations": educations,
        "projects": projects,
        "honors": honors
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)