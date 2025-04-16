import os
import json
import pandas as pd
import time
import random
import re
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from linkedin_scraper import Person, actions

class PurdueLinkedInScraper:
    def __init__(self, email=None, password=None, take_screenshots=True, headless=True, manual_verification_time=60):
        """Initialize the LinkedIn scraper with credentials."""
        load_dotenv()
        self.email = email or os.environ.get("LINKEDIN_EMAIL")
        self.password = password or os.environ.get("LINKEDIN_PASSWORD")
        self.driver = None
        self.profile_data = []
        self.take_screenshots = take_screenshots
        self.headless = headless
        self.manual_verification_time = manual_verification_time
        self.cookies_file = "linkedin_cookies.json"
        
        if not self.email or not self.password:
            raise ValueError("LinkedIn credentials not found. Please provide email and password or set LINKEDIN_EMAIL and LINKEDIN_PASSWORD environment variables.")
    
    def setup_driver(self):
        """Set up the Selenium WebDriver with appropriate options."""
        print("Setting up Chrome driver...")
        chrome_options = Options()
        
        if self.headless:
            print("Running in headless mode")
            chrome_options.add_argument("--headless")  # Run in headless mode
        else:
            print("Running in visible mode for manual verification if needed")
        
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_argument("--window-size=1920,1080")  # Set window size
        chrome_options.add_argument("--user-agent=Mozilla/5.0 (Macintosh; Apple M1 Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36")
        
        # Additional options to help avoid detection
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option("useAutomationExtension", False)
        
        try:
            # Try to use the system installed ChromeDriver first
            import subprocess
            import platform
            
            print("Checking for system ChromeDriver...")
            if platform.system() == "Darwin" and platform.machine() == "arm64":
                print("Detected Mac with ARM architecture (M1/M2/M3)")
                
                # Try finding ChromeDriver using 'which' command
                try:
                    chromedriver_path = subprocess.check_output(['which', 'chromedriver']).decode('utf-8').strip()
                    if chromedriver_path:
                        print(f"Using system ChromeDriver at: {chromedriver_path}")
                        service = Service(executable_path=chromedriver_path)
                        self.driver = webdriver.Chrome(service=service, options=chrome_options)
                        return
                except Exception as e:
                    print(f"No system ChromeDriver found via 'which' command: {str(e)}")
                
                # Try common locations
                common_locations = [
                    "/usr/local/bin/chromedriver",
                    "/usr/bin/chromedriver",
                    "/opt/homebrew/bin/chromedriver"
                ]
                
                for location in common_locations:
                    if os.path.exists(location):
                        print(f"Using ChromeDriver found at: {location}")
                        try:
                            service = Service(executable_path=location)
                            self.driver = webdriver.Chrome(service=service, options=chrome_options)
                            return
                        except Exception as e:
                            print(f"Failed to initialize ChromeDriver at {location}: {str(e)}")
                
                print("No system ChromeDriver found in common locations, trying brew install...")
                try:
                    # Try installing with Homebrew
                    subprocess.run(["brew", "install", "chromedriver"], check=True)
                    print("ChromeDriver installed via brew")
                    service = Service(executable_path="/opt/homebrew/bin/chromedriver")
                    self.driver = webdriver.Chrome(service=service, options=chrome_options)
                    return
                except Exception as e:
                    print(f"Failed to install ChromeDriver via brew: {str(e)}")
            
            # If we get here, fall back to webdriver-manager
            print("Falling back to webdriver-manager...")
            
            # Force ARM64 architecture for Mac
            os_type = "mac64_m1" if platform.system() == "Darwin" and platform.machine() == "arm64" else None
            driver_path = ChromeDriverManager(os_type=os_type).install()
            print(f"Using ChromeDriver from webdriver-manager at: {driver_path}")
            
            service = Service(executable_path=driver_path)
            self.driver = webdriver.Chrome(service=service, options=chrome_options)
        
        except Exception as e:
            print(f"Error setting up ChromeDriver: {str(e)}")
            # Last resort: try without service
            try:
                print("Trying direct Chrome instantiation...")
                self.driver = webdriver.Chrome(options=chrome_options)
            except Exception as inner_e:
                print(f"Critical failure: {str(inner_e)}")
                raise
        
        if self.driver:
            self.driver.maximize_window()
        else:
            raise Exception("Failed to initialize Chrome driver")
    
    def login(self):
        """Log in to LinkedIn."""
        print("Logging in to LinkedIn...")
        
        # First try loading saved cookies
        if self.load_cookies():
            # Navigate to feed to verify login
            self.driver.get("https://www.linkedin.com/feed/")
            time.sleep(3)
            
            # Check if already logged in
            if "/feed" in self.driver.current_url:
                print("Login successful using saved cookies!")
                return True
            else:
                print("Cookies expired or invalid. Need to log in again.")
        else:
            print("No saved cookies found or unable to load cookies.")
        
        # If we're in headless mode and cookies didn't work, we can't proceed with verification
        if self.headless:
            print("ERROR: Cannot perform manual login in headless mode with no valid cookies.")
            print("Please run once in visible mode to complete verification and save cookies.")
            return False
        
        try:
            # Make sure we're on the login page
            self.driver.get("https://www.linkedin.com/login")
            time.sleep(2)
            
            # Check if we're already logged in
            if "/feed" in self.driver.current_url:
                print("Already logged in!")
                self.save_cookies()
                return True
                
            # Try the custom login approach
            try:
                # Find username and password fields directly
                username_input = self.driver.find_element("id", "username")
                password_input = self.driver.find_element("id", "password")
                
                # Clear any existing values and enter credentials
                username_input.clear()
                username_input.send_keys(self.email)
                
                password_input.clear()
                password_input.send_keys(self.password)
                
                # Click login button
                login_button = self.driver.find_element("xpath", "//button[@type='submit']")
                login_button.click()
                
                # Wait for login to complete
                time.sleep(5)
                
                # Check for security verification
                if "checkpoint" in self.driver.current_url or "security-verification" in self.driver.current_url:
                    print(f"LinkedIn security verification detected. Please complete it manually in the browser window.")
                    print(f"Waiting {self.manual_verification_time} seconds for manual verification...")
                    
                    if not self.headless:
                        print("ATTENTION: Please complete the security verification in the opened Chrome window!")
                        print(f"You have {self.manual_verification_time} seconds to complete this verification.")
                        print("After completing verification, the scraper will continue automatically.")
                        print("IMPORTANT: This verification may involve email or phone verification.")
                    
                    if self.take_screenshots:
                        self.driver.save_screenshot("security_verification.png")
                    
                    # Wait longer for manual verification
                    time.sleep(self.manual_verification_time)
                
                # Check if login was successful
                if "/feed" in self.driver.current_url:
                    print("Login successful!")
                    self.save_cookies()
                    return True
                else:
                    # Fallback to the actions.login method
                    print("Custom login approach failed, falling back to actions.login...")
                    raise Exception("Custom login failed")
            except Exception as e:
                print(f"Custom login failed: {str(e)}")
                # Fallback to the built-in login method
                try:
                    actions.login(self.driver, self.email, self.password)
                    time.sleep(5)
                    
                    # Check for security verification after actions.login
                    if "checkpoint" in self.driver.current_url or "security-verification" in self.driver.current_url:
                        print(f"LinkedIn security verification detected after actions.login. Please complete it manually.")
                        print(f"Waiting {self.manual_verification_time} seconds for manual verification...")
                        
                        if not self.headless:
                            print("ATTENTION: Please complete the security verification in the opened Chrome window!")
                            print(f"You have {self.manual_verification_time} seconds to complete this verification.")
                        
                        if self.take_screenshots:
                            self.driver.save_screenshot("security_verification_2.png")
                        
                        # Wait longer for manual verification
                        time.sleep(self.manual_verification_time)
                except Exception as login_err:
                    print(f"Built-in login also failed: {str(login_err)}")
            
            # Final check to confirm login
            time.sleep(3)
            
            if "/feed" in self.driver.current_url:
                print("Login successful.")
                self.save_cookies()
                if self.take_screenshots:
                    self.driver.save_screenshot("login_successful.png")
                return True
            else:
                current_url = self.driver.current_url
                print(f"Login might have failed. Current URL: {current_url}")
                if "checkpoint" in current_url or "security-verification" in current_url:
                    print("LinkedIn security verification is still required!")
                    print("If you're using headless mode, try running with headless=False to complete verification.")
                elif "session" in self.driver.page_source.lower() or "expired" in self.driver.page_source.lower():
                    print("Session may have expired.")
                elif "captcha" in self.driver.page_source.lower():
                    print("CAPTCHA detected.")
                
                if self.take_screenshots:
                    self.driver.save_screenshot("login_issue.png")
                
                return False
                    
            # Wait a moment after login
            time.sleep(3)
        except Exception as e:
            print(f"Login failed: {str(e)}")
            if self.take_screenshots:
                self.driver.save_screenshot("login_failed.png")
                
            # Get more information about the failure
            current_url = "Unknown"
            page_source = "Unknown"
            try:
                current_url = self.driver.current_url
                page_fragment = self.driver.page_source[:500] + "..." if len(self.driver.page_source) > 500 else self.driver.page_source
                print(f"Current URL: {current_url}")
                print(f"Page fragment: {page_fragment}")
            except:
                pass
                
            return False
    
    def find_purdue_profiles(self, max_profiles=30):
        """Find LinkedIn profiles of Purdue CS students/alumni."""
        print(f"Finding Purdue CS profiles (limit: {max_profiles})...")
        profile_urls = []
        
        # Method 1: Use the Purdue University page to find alumni
        try:
            # Visit Purdue University page
            purdue_url = "https://www.linkedin.com/school/purdue-university/"
            print(f"Visiting Purdue University page: {purdue_url}")
            self.driver.get(purdue_url)
            time.sleep(3)
            
            # Look for the "People" or "Alumni" section
            alumni_buttons = self.driver.find_elements("xpath", "//a[contains(@href, '/school/purdue-university/people/')]")
            if alumni_buttons:
                print("Found alumni button. Clicking...")
                alumni_buttons[0].click()
                time.sleep(3)
                
                if self.take_screenshots:
                    self.driver.save_screenshot("purdue_alumni_page.png")
                
                # Try to filter for "Computer Science" if possible
                try:
                    filter_buttons = self.driver.find_elements("xpath", "//button[contains(text(), 'Filter')]")
                    if filter_buttons:
                        filter_buttons[0].click()
                        time.sleep(2)
                        
                        # Look for field of study filter
                        field_elements = self.driver.find_elements("xpath", "//button[contains(text(), 'Field of study')]")
                        if field_elements:
                            field_elements[0].click()
                            time.sleep(1)
                            
                            # Type "Computer Science"
                            input_elements = self.driver.find_elements("xpath", "//input[contains(@placeholder, 'Add') or contains(@placeholder, 'Search')]")
                            if input_elements:
                                input_elements[0].send_keys("Computer Science")
                                time.sleep(2)
                                
                                # Select first option
                                option_elements = self.driver.find_elements("xpath", "//div[contains(@role, 'option')]")
                                if option_elements:
                                    option_elements[0].click()
                                    time.sleep(1)
                                
                                # Apply filter
                                apply_buttons = self.driver.find_elements("xpath", "//button[contains(text(), 'Apply') or contains(text(), 'Show')]")
                                if apply_buttons:
                                    apply_buttons[0].click()
                                    time.sleep(3)
                except Exception as e:
                    print(f"Error applying filters: {str(e)}")
                
                # Now extract profiles
                print("Extracting profile links from alumni page...")
                for page in range(5):  # Get first 5 pages
                    # Find all profile links
                    profile_elements = self.driver.find_elements("xpath", "//a[contains(@href, '/in/')]")
                    current_page_urls = []
                    
                    for elem in profile_elements:
                        try:
                            href = elem.get_attribute("href")
                            if href and '/in/' in href:
                                clean_url = href.split('?')[0]  # Remove parameters
                                if clean_url not in profile_urls and clean_url not in current_page_urls:
                                    current_page_urls.append(clean_url)
                        except:
                            continue
                    
                    print(f"Found {len(current_page_urls)} new profile URLs on page {page+1}")
                    profile_urls.extend(current_page_urls)
                    
                    # Stop if we have enough profiles
                    if len(profile_urls) >= max_profiles:
                        break
                    
                    # Try to go to next page
                    try:
                        next_button = self.driver.find_element("xpath", "//button[contains(@aria-label, 'Next')]")
                        if next_button.is_enabled():
                            next_button.click()
                            time.sleep(3)
                        else:
                            print("Next button is disabled. No more pages.")
                            break
                    except:
                        print("No next page button found. Reached the end.")
                        break
            else:
                print("Could not find alumni section on Purdue University page.")
        except Exception as e:
            print(f"Error finding profiles from Purdue page: {str(e)}")
        
        # Method 2: If we don't have enough profiles, try search
        if len(profile_urls) < max_profiles:
            try:
                print("Using search to find more Purdue CS profiles...")
                search_url = "https://www.linkedin.com/search/results/people/?keywords=purdue%20computer%20science"
                self.driver.get(search_url)
                time.sleep(3)
                
                # Extract profiles from search results
                for page in range(3):  # Get first 3 pages
                    # Find all profile links
                    profile_elements = self.driver.find_elements("xpath", "//a[contains(@href, '/in/')]")
                    current_page_urls = []
                    
                    for elem in profile_elements:
                        try:
                            href = elem.get_attribute("href")
                            if href and '/in/' in href:
                                clean_url = href.split('?')[0]  # Remove parameters
                                if clean_url not in profile_urls and clean_url not in current_page_urls:
                                    current_page_urls.append(clean_url)
                        except:
                            continue
                    
                    print(f"Found {len(current_page_urls)} new profile URLs on search page {page+1}")
                    profile_urls.extend(current_page_urls)
                    
                    # Stop if we have enough profiles
                    if len(profile_urls) >= max_profiles:
                        break
                    
                    # Try to go to next page
                    try:
                        next_button = self.driver.find_element("xpath", "//button[contains(@aria-label, 'Next')]")
                        if next_button.is_enabled():
                            next_button.click()
                            time.sleep(3)
                        else:
                            break
                    except:
                        break
            except Exception as e:
                print(f"Error finding profiles from search: {str(e)}")
        
        # Limit to max_profiles
        profile_urls = profile_urls[:max_profiles]
        print(f"Found {len(profile_urls)} total profile URLs")
        return profile_urls
    
    def scrape_profiles(self, profile_urls):
        """Scrape data from LinkedIn profiles."""
        print(f"Scraping {len(profile_urls)} profiles...")
        
        for i, url in enumerate(profile_urls):
            print(f"\n[{i+1}/{len(profile_urls)}] Scraping profile: {url}")
            try:
                # Visit profile page first to make sure we're on the profile before scraping
                self.driver.get(url)
                time.sleep(5)  # Give more time to load
                
                # Use direct DOM methods to extract basic data
                try:
                    # Extract name
                    name_elements = self.driver.find_elements("xpath", "//h1[contains(@class, 'text-heading-xlarge')]")
                    profile_name = name_elements[0].text.strip() if name_elements else "Unknown Name"
                    print(f"Found name: {profile_name}")
                    
                    # Initialize profile data
                    profile_data = {
                        "url": url,
                        "name": profile_name,
                        "education": [],
                        "experience": [],
                        "projects": [],
                        "honors_awards": []
                    }
                    
                    # Extract LinkedIn profile image
                    try:
                        # Try with JavaScript (most reliable)
                        img_url = self.driver.execute_script("""
                            var imgs = document.querySelectorAll('img');
                            for (var i = 0; i < imgs.length; i++) {
                                var img = imgs[i];
                                if ((img.alt && (img.alt.includes('profile') || img.alt.includes('photo'))) || 
                                    (img.className && (img.className.includes('profile-photo') || img.className.includes('profile-picture')))) {
                                    return img.src;
                                }
                            }
                            return document.querySelector('.pv-top-card-profile-picture__image')?.src;
                        """)
                        
                        if img_url and "data:image" not in img_url:
                            profile_data["image_url"] = img_url
                            print(f"Found profile image via JavaScript: {img_url[:50]}...")
                    except Exception as e:
                        print(f"Could not extract profile image via JavaScript: {str(e)}")
                    
                    # If we still don't have an image, try with direct XPath
                    if not profile_data.get("image_url"):
                        selectors = [
                            "//img[contains(@class, 'pv-top-card-profile-picture__image')]",
                            "//img[contains(@class, 'profile-picture')]",
                            "//img[contains(@alt, 'profile') or contains(@alt, 'photo')]",
                            "//div[contains(@class, 'pv-top-card')]//img",
                            "//div[contains(@class, 'profile-photo')]//img"
                        ]
                        
                        for selector in selectors:
                            try:
                                profile_img_elements = self.driver.find_elements("xpath", selector)
                                if profile_img_elements:
                                    img_url = profile_img_elements[0].get_attribute("src")
                                    if img_url and "data:image" not in img_url:
                                        profile_data["image_url"] = img_url
                                        print(f"Found profile image using selector: {selector}")
                                        break
                            except Exception as e:
                                continue
                    
                    # Now try using linkedin_scraper's Person class to get structured data
                    # But we'll only use it for the data that's structured consistently
                    person = Person(url, driver=self.driver, scrape=False)
                    person.scrape(close_on_complete=False)
                    
                    # Update name if we have it from Person
                    if hasattr(person, 'name') and person.name:
                        profile_data["name"] = person.name
                    
                    # Extract education
                    # First, try to find all education listings directly from the page
                    print("Extracting education...")
                    seen_educations = set()  # To track unique educations
                    
                    # METHOD 1: First extract using the person object
                    if hasattr(person, 'educations'):
                        for edu in person.educations:
                            school = edu.institution_name if hasattr(edu, 'institution_name') else ""
                            degree = edu.degree if hasattr(edu, 'degree') else ""
                            date_range = f"{edu.from_date} - {edu.to_date}" if hasattr(edu, 'from_date') else ""
                            
                            # Create a unique key for this education
                            edu_key = f"{school}|{degree}|{date_range}"
                            
                            # Skip if we've already seen this exact education
                            if edu_key in seen_educations:
                                continue
                                
                            seen_educations.add(edu_key)
                            
                            education_entry = {
                                "school": school,
                                "degree": degree,
                                "fieldOfStudy": "",  # Will try to extract from degree
                                "date_range": date_range
                            }
                            
                            # Parse degree field to extract field of study if possible
                            if education_entry["degree"] and "," in education_entry["degree"]:
                                degree_parts = education_entry["degree"].split(",")
                                education_entry["degree"] = degree_parts[0].strip()
                                if len(degree_parts) > 1:
                                    education_entry["fieldOfStudy"] = degree_parts[1].strip()
                                    
                            profile_data["education"].append(education_entry)
                    
                    # METHOD 2: Now try to extract education sections directly from the page
                    # This is more reliable for finding all education entries
                    try:
                        # Look for the education section
                        education_sections = self.driver.find_elements("xpath", "//section[contains(@id, 'education-section')]")
                        if education_sections:
                            edu_items = education_sections[0].find_elements("xpath", ".//li")
                            for edu_item in edu_items:
                                try:
                                    # Extract school name
                                    school_elem = edu_item.find_elements("xpath", ".//h3")
                                    school = school_elem[0].text.strip() if school_elem else ""
                                    
                                    # Extract degree and field
                                    degree_elem = edu_item.find_elements("xpath", ".//span[contains(@class, 'education__item--degree')]")
                                    degree_text = degree_elem[0].text.strip() if degree_elem else ""
                                    
                                    # Check for activities in degree
                                    activities = ""
                                    if degree_text and "activities and societies:" in degree_text.lower():
                                        activities_parts = degree_text.lower().split("activities and societies:")
                                        if len(activities_parts) > 1:
                                            activities = activities_parts[1].strip()
                                            degree_text = activities_parts[0].strip()
                                    
                                    # Separate degree and field of study
                                    degree = degree_text
                                    field_of_study = ""
                                    if degree and "," in degree:
                                        degree_parts = degree.split(",")
                                        degree = degree_parts[0].strip()
                                        field_of_study = degree_parts[1].strip() if len(degree_parts) > 1 else ""
                                    
                                    # Extract grades if present
                                    grade = ""
                                    grade_elem = edu_item.find_elements("xpath", ".//span[contains(text(), 'Grade:') or contains(text(), 'GPA')]")
                                    if grade_elem:
                                        grade = grade_elem[0].text.replace("Grade:", "").replace("GPA:", "").strip()
                                    
                                    # Extract skills if present
                                    skills = ""
                                    skills_elem = edu_item.find_elements("xpath", ".//span[contains(text(), 'Skills:')]")
                                    if skills_elem:
                                        skills = skills_elem[0].text.replace("Skills:", "").strip()
                                        
                                    # Extract media if present
                                    media = ""
                                    media_elem = edu_item.find_elements("xpath", ".//a[contains(@href, 'media')]")
                                    if media_elem:
                                        media = media_elem[0].get_attribute("href")
                                    
                                    # Extract date range
                                    date_elem = edu_item.find_elements("xpath", ".//span[contains(@class, 'date-range') or contains(@class, 'education-date')]")
                                    date_range = date_elem[0].text.strip() if date_elem else ""
                                    
                                    # Create a unique key
                                    edu_key = f"{school}|{degree}|{date_range}"
                                    
                                    # Skip if we've already seen this education
                                    if edu_key in seen_educations:
                                        continue
                                    
                                    seen_educations.add(edu_key)
                                    
                                    profile_data["education"].append({
                                        "school": school,
                                        "degree": degree,
                                        "fieldOfStudy": field_of_study,
                                        "description": "",  # Will be filled in later if description is found
                                        "grade": grade, 
                                        "activities": activities,
                                        "skills": skills,
                                        "media": media,
                                        "date_range": date_range
                                    })
                                except Exception as e:
                                    print(f"Error extracting individual education: {str(e)}")
                    except Exception as e:
                        print(f"Error finding education section: {str(e)}")
                    
                    # METHOD 3: Use JavaScript as a last resort
                    if not profile_data["education"]:
                        try:
                            print("Using JavaScript to find education...")
                            educations_data = self.driver.execute_script("""
                                var educations = [];
                                
                                function findEducations() {
                                    // Look for education sections across the page
                                    var eduSections = document.querySelectorAll('section[id*="education"], div[id*="education"]');
                                    
                                    // If we found education sections
                                    for (var i = 0; i < eduSections.length; i++) {
                                        var section = eduSections[i];
                                        var items = section.querySelectorAll('li');
                                        
                                        for (var j = 0; j < items.length; j++) {
                                            var item = items[j];
                                            var school = '';
                                            var degree = '';
                                            var fieldOfStudy = '';
                                            var dateRange = '';
                                            var description = '';
                                            var grade = '';
                                            var activities = '';
                                            var skills = '';
                                            var media = '';
                                            
                                            // Get school
                                            var schoolElem = item.querySelector('h3, span[class*="school"], div[class*="school"]');
                                            if (schoolElem) school = schoolElem.textContent.trim();
                                            
                                            // Get degree
                                            var degreeElem = item.querySelector('span[class*="degree"]');
                                            if (degreeElem) degree = degreeElem.textContent.trim();
                                            
                                            // Get field of study
                                            var fieldElem = item.querySelector('span[class*="field"], span[class*="fos"]');
                                            if (fieldElem) fieldOfStudy = fieldElem.textContent.trim();
                                            
                                            // Get date range
                                            var dateElem = item.querySelector('span[class*="date"]');
                                            if (dateElem) dateRange = dateElem.textContent.trim();
                                            
                                            // Get description
                                            var descElem = item.querySelector('p, div[class*="description"]');
                                            if (descElem) description = descElem.textContent.trim();
                                            
                                            // Get grade
                                            var gradeElem = item.querySelector('span[class*="grade"], span:contains("Grade:"), span:contains("GPA")');
                                            if (gradeElem) {
                                                grade = gradeElem.textContent.trim();
                                                grade = grade.replace('Grade:', '').replace('GPA:', '').trim();
                                            }
                                            
                                            // Get activities
                                            var activitiesElem = item.querySelector('span[class*="activities"], p:contains("Activities"), div:contains("Activities")');
                                            if (activitiesElem) {
                                                activities = activitiesElem.textContent.trim();
                                                // Extract just the activities part if it contains the header
                                                if (activities.toLowerCase().includes('activities and societies:')) {
                                                    activities = activities.split('Activities and Societies:')[1].trim();
                                                }
                                            }
                                            
                                            // Look for skills in any text elements
                                            var allTextElems = item.querySelectorAll('p, span, div');
                                            for (var k = 0; k < allTextElems.length; k++) {
                                                var text = allTextElems[k].textContent.trim();
                                                if (text.toLowerCase().includes('skills:')) {
                                                    skills = text.split('Skills:')[1].trim();
                                                    // Remove any trailing periods or other punctuation
                                                    skills = skills.replace(/[.;:,]\\s*$/, '').trim();
                                                    break;
                                                }
                                            }
                                            
                                            // Get media link
                                            var mediaElem = item.querySelector('a[href*="media"], a[data-control-name*="media"]');
                                            if (mediaElem) media = mediaElem.href;
                                            
                                            // Handle special case where degree contains field of study
                                            if (degree && !fieldOfStudy && degree.includes(',')) {
                                                var parts = degree.split(',');
                                                degree = parts[0].trim();
                                                if (parts.length > 1) {
                                                    fieldOfStudy = parts[1].trim();
                                                }
                                            }
                                            
                                            // Handle case where activities are in degree field
                                            if (degree && degree.toLowerCase().includes('activities and societies:')) {
                                                var degParts = degree.split('Activities and Societies:');
                                                degree = degParts[0].trim();
                                                if (degParts.length > 1 && !activities) {
                                                    activities = degParts[1].trim();
                                                }
                                            }
                                            
                                            if (school) {
                                                educations.push({
                                                    school: school,
                                                    degree: degree,
                                                    fieldOfStudy: fieldOfStudy,
                                                    description: description,
                                                    grade: grade,
                                                    activities: activities,
                                                    skills: skills,
                                                    media: media,
                                                    date_range: dateRange
                                                });
                                            }
                                        }
                                    }
                                    
                                    // Look in accomplishments section for education
                                    var accomplishmentSections = document.querySelectorAll('section[id*="accomplishment"]');
                                    for (var i = 0; i < accomplishmentSections.length; i++) {
                                        var eduHeaders = accomplishmentSections[i].querySelectorAll('h3, h4');
                                        
                                        for (var j = 0; j < eduHeaders.length; j++) {
                                            if (eduHeaders[j].textContent.toLowerCase().includes('education')) {
                                                var container = eduHeaders[j].parentElement;
                                                var items = container.querySelectorAll('li');
                                                
                                                for (var k = 0; k < items.length; k++) {
                                                    var itemText = items[k].textContent.trim();
                                                    var lines = itemText.split('\\n').map(line => line.trim()).filter(line => line);
                                                    
                                                    if (lines.length > 0) {
                                                        var school = lines[0];
                                                        var degree = lines.length > 1 ? lines[1] : '';
                                                        var date_range = '';
                                                        
                                                        // Try to extract date range
                                                        for (var l = 0; l < lines.length; l++) {
                                                            if (lines[l].match(/\\d{4}.*\\d{4}|\\d{4}.*present|\\d{4}/i)) {
                                                                date_range = lines[l];
                                                                break;
                                                            }
                                                        }
                                                        
                                                        educations.push({
                                                            school: school,
                                                            degree: degree,
                                                            fieldOfStudy: '',
                                                            description: '',
                                                            grade: '',
                                                            activities: '',
                                                            skills: '',
                                                            media: '',
                                                            date_range: date_range
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    
                                    return educations;
                                }
                                
                                return findEducations();
                            """)
                            
                            if educations_data and isinstance(educations_data, list):
                                for edu in educations_data:
                                    # Create a unique key
                                    edu_key = f"{edu.get('school', '')}|{edu.get('degree', '')}|{edu.get('date_range', '')}"
                                    
                                    # Skip if we've already seen this education
                                    if edu_key in seen_educations:
                                        continue
                                    
                                    seen_educations.add(edu_key)
                                    profile_data["education"].append(edu)
                                
                                print(f"Found {len(educations_data)} educations using JavaScript")
                        except Exception as e:
                            print(f"Error extracting education with JavaScript: {str(e)}")
                    
                    # After all education extraction methods, add skills extraction from the profile page
                    print("Extracting skills from profile...")
                    try:
                        # Use JavaScript to extract skills section which might be hidden or collapsed
                        skills_data = self.driver.execute_script("""
                            var skills = [];
                            
                            // Look for skills in multiple ways
                            function findSkills() {
                                // Method 1: Check explicit skills section
                                var skillSections = document.querySelectorAll('section[id*="skill"], div[id*="skill"]');
                                for (var i = 0; i < skillSections.length; i++) {
                                    var section = skillSections[i];
                                    var items = section.querySelectorAll('li, span[class*="skill-name"], div[class*="skill-name"]');
                                    
                                    for (var j = 0; j < items.length; j++) {
                                        var skillText = items[j].textContent.trim();
                                        if (skillText && !skills.includes(skillText)) {
                                            skills.push(skillText);
                                        }
                                    }
                                }
                                
                                // Method 2: Look in the About section
                                var aboutSections = document.querySelectorAll('section[id*="about"], div[id*="about"]');
                                for (var i = 0; i < aboutSections.length; i++) {
                                    var aboutText = aboutSections[i].textContent;
                                    
                                    // Look for skills paragraph or list
                                    if (aboutText.toLowerCase().includes('skills:') || aboutText.toLowerCase().includes('technologies:')) {
                                        // Try to extract the skills list
                                        var skillMatch = aboutText.match(/skills:(.+?)(?:\\.|$|\\n)/i) || aboutText.match(/technologies:(.+?)(?:\\.|$|\\n)/i);
                                        if (skillMatch) {
                                            var skillList = skillMatch[1].split(',').map(s => s.trim());
                                            for (var j = 0; j < skillList.length; j++) {
                                                if (skillList[j] && !skills.includes(skillList[j])) {
                                                    skills.push(skillList[j]);
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                // Method 3: Look in accomplishments section for skills
                                var accomplishmentSections = document.querySelectorAll('section[id*="accomplishment"]');
                                for (var i = 0; i < accomplishmentSections.length; i++) {
                                    var skillHeaders = accomplishmentSections[i].querySelectorAll('h3, h4');
                                    
                                    for (var j = 0; j < skillHeaders.length; j++) {
                                        if (skillHeaders[j].textContent.toLowerCase().includes('skill')) {
                                            var container = skillHeaders[j].parentElement;
                                            var items = container.querySelectorAll('li, span');
                                            
                                            for (var k = 0; k < items.length; k++) {
                                                var skillText = items[k].textContent.trim();
                                                if (skillText && !skills.includes(skillText)) {
                                                    skills.push(skillText);
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                return skills;
                            }
                            
                            return findSkills();
                        """)
                        
                        if skills_data and isinstance(skills_data, list):
                            profile_data["skills"] = skills_data
                            print(f"Found {len(skills_data)} skills using JavaScript")
                    except Exception as e:
                        print(f"Error extracting skills with JavaScript: {str(e)}")
                        profile_data["skills"] = []
                    
                    # If still no skills, try a different approach
                    if not profile_data.get("skills"):
                        profile_data["skills"] = []
                        try:
                            # Look for skills section explicitly
                            skills_section = self.driver.find_elements("xpath", "//section[contains(@id, 'skills-section')]")
                            if skills_section:
                                skill_items = skills_section[0].find_elements("xpath", ".//li")
                                for skill_item in skill_items:
                                    skill_name = skill_item.text.strip()
                                    if skill_name and skill_name not in profile_data["skills"]:
                                        profile_data["skills"].append(skill_name)
                            
                            # Also look for skill mentions in other sections
                            skill_elements = self.driver.find_elements("xpath", "//span[contains(@class, 'skill-name')]")
                            for skill_elem in skill_elements:
                                skill_name = skill_elem.text.strip()
                                if skill_name and skill_name not in profile_data["skills"]:
                                    profile_data["skills"].append(skill_name)
                            
                            print(f"Found {len(profile_data['skills'])} skills using XPath")
                        except Exception as e:
                            print(f"Error extracting skills with XPath: {str(e)}")
                    
                    # Extract experience
                    print("Extracting experience...")
                    if hasattr(person, 'experiences'):
                        for exp in person.experiences:
                            experience_entry = {
                                "title": exp.position_title if hasattr(exp, 'position_title') else "",
                                "company": exp.institution_name if hasattr(exp, 'institution_name') else "",
                                "description": "",
                                "location": "",
                                "skills": "",
                                "media": "",
                                "date_range": f"{exp.from_date} - {exp.to_date}" if hasattr(exp, 'from_date') else ""
                            }
                            
                            # Try to get more details for each experience
                            try:
                                # Look for description for this experience
                                title_elements = self.driver.find_elements("xpath", f"//h3[contains(text(), '{experience_entry['title']}')]/ancestor::div[contains(@class, 'experience-item')]//div[contains(@class, 'description')]")
                                if title_elements:
                                    experience_entry["description"] = title_elements[0].text.strip()
                                
                                # Look for location
                                location_elements = self.driver.find_elements("xpath", f"//h3[contains(text(), '{experience_entry['title']}')]/ancestor::div[contains(@class, 'experience-item')]//span[contains(@class, 'location')]")
                                if location_elements:
                                    experience_entry["location"] = location_elements[0].text.strip()
                                    
                                # Look for skills in the description
                                if experience_entry["description"]:
                                    skills_match = re.search(r'Skills:(.+?)(?:\.|$)', experience_entry["description"], re.IGNORECASE)
                                    if skills_match:
                                        experience_entry["skills"] = skills_match.group(1).strip()
                                        # Remove skills section from description to avoid duplication
                                        experience_entry["description"] = re.sub(r'Skills:(.+?)(?:\.|$)', '', experience_entry["description"], flags=re.IGNORECASE).strip()
                                                
                                # Look for media URL in this experience entry
                                media_elements = self.driver.find_elements("xpath", f"//h3[contains(text(), '{experience_entry['title']}')]/ancestor::div[contains(@class, 'experience-item')]//a[contains(@href, 'media') or contains(@data-control-name, 'media')]")
                                if media_elements:
                                    experience_entry["media"] = media_elements[0].get_attribute("href")
                            except Exception as e:
                                print(f"Error extracting additional experience details: {str(e)}")
                            
                            profile_data["experience"].append(experience_entry)
                    
                    # Extract projects using JavaScript
                    print("Extracting projects...")
                    try:
                        print("Using JavaScript to find projects...")
                        projects_data = self.driver.execute_script("""
                            var projects = [];
                            
                            // Try to find projects section
                            function findProjects() {
                                // Try to find the projects section
                                var projectSections = document.querySelectorAll('section[id*="project"], section[class*="project"]');
                                
                                // If we found a section with projects
                                for (var i = 0; i < projectSections.length; i++) {
                                    var section = projectSections[i];
                                    var items = section.querySelectorAll('li');
                                    
                                    for (var j = 0; j < items.length; j++) {
                                        var item = items[j];
                                        var title = '';
                                        var description = '';
                                        var dateRange = '';
                                        var projectUrl = '';
                                        var skills = '';
                                        var contributors = '';
                                        var association = '';
                                        var media = '';
                                        
                                        // Look for title
                                        var titleElem = item.querySelector('h3, span[class*="title"], div[class*="title"]');
                                        if (titleElem) {
                                            title = titleElem.textContent.trim();
                                        }
                                        
                                        // Look for description
                                        var descElem = item.querySelector('p, div[class*="description"]');
                                        if (descElem) {
                                            description = descElem.textContent.trim();
                                        }
                                        
                                        // Look for date
                                        var dateElem = item.querySelector('span[class*="date"]');
                                        if (dateElem) {
                                            dateRange = dateElem.textContent.trim();
                                        }
                                        
                                        // Look for URL
                                        var urlElem = item.querySelector('a[href]:not([href*="linkedin"])');
                                        if (urlElem) {
                                            projectUrl = urlElem.href;
                                        }
                                        
                                        // Look for skills
                                        var skillsElem = item.querySelector('span[class*="skill"], div[class*="skill"]');
                                        if (skillsElem) {
                                            skills = skillsElem.textContent.trim();
                                        } else {
                                            // Try to extract skills from description if they exist
                                            var skillsMatch = description.match(/Skills:(.+?)(?:\.|$)/i);
                                            if (skillsMatch) {
                                                skills = skillsMatch[1].trim();
                                                // Remove skills portion from description to avoid duplication
                                                description = description.replace(/Skills:(.+?)(?:\.|$)/i, '').trim();
                                            }
                                        }
                                        
                                        // Look for contributors
                                        var teamElem = item.querySelector('span[class*="team"], div[class*="team"], span[class*="contributor"], div[class*="contributor"]');
                                        if (teamElem) {
                                            contributors = teamElem.textContent.trim();
                                        } else {
                                            // Try to extract team/contributors from description
                                            var teamMatch = description.match(/Team:(.+?)(?:\.|$)/i) || description.match(/Contributors:(.+?)(?:\.|$)/i);
                                            if (teamMatch) {
                                                contributors = teamMatch[1].trim();
                                                // Remove team portion from description
                                                description = description.replace(/Team:(.+?)(?:\.|$)/i, '').replace(/Contributors:(.+?)(?:\.|$)/i, '').trim();
                                            }
                                        }
                                        
                                        // Look for association
                                        var assocElem = item.querySelector('span[class*="association"], div[class*="association"]');
                                        if (assocElem) {
                                            association = assocElem.textContent.trim();
                                        } else {
                                            // Check if title contains @ which often indicates association
                                            var matchAt = title.match(/@\s*([^,]+)/);
                                            if (matchAt) {
                                                association = matchAt[1].trim();
                                                // Remove the association from title
                                                title = title.replace(/@\s*([^,]+)/, '').trim();
                                            } else {
                                                // Try to extract from title with common patterns
                                                for (var pattern of ["at ", "with ", "for "]) {
                                                    if (title.toLowerCase().includes(pattern)) {
                                                        var parts = title.toLowerCase().split(pattern);
                                                        if (parts.length > 1) {
                                                            var possibleAssoc = parts[1].trim();
                                                            // Only use if it looks like an organization name (not too long)
                                                            if (possibleAssoc.split(/\s+/).length <= 4) {
                                                                association = possibleAssoc;
                                                                // Clean up title
                                                                title = parts[0].trim();
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        
                                        // Look for media URL
                                        var mediaElem = item.querySelector('a[href*="media"], a[data-control-name*="media"], a[href*="overlay"]');
                                        if (mediaElem) {
                                            media = mediaElem.href;
                                        }
                                        
                                        if (title) {
                                            projects.push({
                                                title: title,
                                                description: description,
                                                dateRange: dateRange,
                                                url: projectUrl,
                                                skills: skills,
                                                contributors: contributors,
                                                association: association,
                                                media: media
                                            });
                                        }
                                    }
                                }
                                
                                // Check accomplishments section for projects
                                var accompSections = document.querySelectorAll('section[id*="accomplishment"]');
                                for (var i = 0; i < accompSections.length; i++) {
                                    var projHeaders = accompSections[i].querySelectorAll('h3');
                                    
                                    for (var j = 0; j < projHeaders.length; j++) {
                                        if (projHeaders[j].textContent.toLowerCase().includes('project')) {
                                            var container = projHeaders[j].parentElement;
                                            var items = container.querySelectorAll('li');
                                            
                                            for (var k = 0; k < items.length; k++) {
                                                var itemText = items[k].textContent.trim();
                                                if (itemText) {
                                                    // Extract what we can from the text
                                                    var lines = itemText.split('\\n').map(line => line.trim()).filter(line => line);
                                                    var title = lines[0] || '';
                                                    var description = lines.slice(1).join(' ');
                                                    
                                                    // Try to find URL in the item
                                                    var urlElem = items[k].querySelector('a[href]');
                                                    var projectUrl = urlElem ? urlElem.href : '';
                                                    
                                                    // Extract skills if mentioned in description
                                                    var skills = '';
                                                    var skillsMatch = description.match(/Skills:(.+?)(?:\.|$)/i);
                                                    if (skillsMatch) {
                                                        skills = skillsMatch[1].trim();
                                                        description = description.replace(/Skills:(.+?)(?:\.|$)/i, '').trim();
                                                    }
                                                    
                                                    projects.push({
                                                        title: title,
                                                        description: description,
                                                        dateRange: '',
                                                        url: projectUrl,
                                                        skills: skills,
                                                        contributors: '',
                                                        association: '',
                                                        media: ''
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                return projects;
                            }
                            
                            return findProjects();
                        """)
                        
                        if projects_data and isinstance(projects_data, list):
                            # First collect all project data without adding to profile yet
                            collected_projects = []
                            
                            for project in projects_data:
                                title = project.get('title', '')
                                description = project.get('description', '')
                                date_range = project.get('dateRange', '')
                                project_url = project.get('url', '')
                                skills = project.get('skills', '')
                                contributors = project.get('contributors', '')
                                association = project.get('association', '')
                                media = project.get('media', '')
                                
                                # Skip empty title
                                if not title:
                                    continue
                                
                                # Parse date range
                                start_date = ""
                                end_date = ""
                                if date_range:
                                    date_parts = date_range.split(" - ")
                                    start_date = date_parts[0].strip() if date_parts else ""
                                    end_date = date_parts[1].strip() if len(date_parts) > 1 else ""
                                
                                collected_projects.append({
                                    "title": title,
                                    "description": description,
                                    "url": project_url,
                                    "skills": skills,
                                    "contributors": contributors,
                                    "association": association,
                                    "media": media,
                                    "startDate": start_date,
                                    "endDate": end_date
                                })
                            
                            # Now process collected projects to merge similar entries
                            processed_projects = []
                            title_index = {}  # Maps titles to their index in processed_projects
                            
                            # First, create a lookup of project titles
                            for proj in collected_projects:
                                title = proj["title"].lower()
                                if len(title) > 80:  # This is likely a description, not a title
                                    continue
                                
                                if title not in title_index:
                                    processed_projects.append(proj)
                                    title_index[title] = len(processed_projects) - 1
                            
                            # Now try to match descriptions to titles
                            for proj in collected_projects:
                                title = proj["title"].lower()
                                
                                # Skip short entries that are already processed
                                if title in title_index:
                                    continue
                                
                                # This entry might be a description for another project
                                # Look for potential matches
                                best_match = None
                                best_score = 0
                                
                                for idx, existing_proj in enumerate(processed_projects):
                                    if not existing_proj["description"]:
                                        # Calculate similarity score based on words in common
                                        title_words = set(existing_proj["title"].lower().split())
                                        desc_words = set(title.split())
                                        common_words = title_words.intersection(desc_words)
                                        
                                        if len(common_words) > best_score:
                                            best_score = len(common_words)
                                            best_match = idx
                                
                                if best_match is not None and best_score >= 2:
                                    # Merge this entry as description
                                    processed_projects[best_match]["description"] = proj["title"]
                                elif len(title) <= 200:  # Not too long to be a separate project
                                    processed_projects.append(proj)
                            
                            # Add the processed projects to profile data
                            profile_data["projects"] = processed_projects
                            
                        print(f"Found {len(profile_data['projects'])} projects")
                        
                        # If no projects found via JavaScript, try to navigate to the projects section
                        if not profile_data["projects"]:
                            try:
                                # Try directly visiting the projects section
                                project_url = f"{url}/details/projects/"
                                print(f"Navigating to projects page: {project_url}")
                                self.driver.get(project_url)
                                time.sleep(3)
                                
                                # Improved extraction using both XPath and JavaScript for backup
                                try:
                                    # First try with JavaScript for maximum extraction
                                    projects_details_data = self.driver.execute_script("""
                                        var projects = [];
                                        
                                        // Find all project items on the details page
                                        var projectItems = document.querySelectorAll('li.pvs-list__item');
                                        
                                        for (var i = 0; i < projectItems.length; i++) {
                                            var item = projectItems[i];
                                            
                                            // Get project details
                                            var title = '';
                                            var description = '';
                                            var dateRange = '';
                                            var projectUrl = '';
                                            var skills = '';
                                            var contributors = '';
                                            var association = '';
                                            var media = '';
                                            
                                            // Try multiple ways to extract title
                                            var titleElem = item.querySelector('span[aria-hidden="true"]');
                                            if (titleElem) title = titleElem.textContent.trim();
                                            
                                            // Get all spans to try to identify parts
                                            var allSpans = item.querySelectorAll('span[aria-hidden="true"]');
                                            var allTexts = [];
                                            
                                            for (var j = 0; j < allSpans.length; j++) {
                                                var text = allSpans[j].textContent.trim();
                                                if (text && text !== title) {
                                                    allTexts.push(text);
                                                }
                                            }
                                            
                                            // Look for dates in text
                                            for (var j = 0; j < allTexts.length; j++) {
                                                if (/\\d{4}|[A-Z][a-z]+ \\d{4}/.test(allTexts[j])) {
                                                    dateRange = allTexts[j];
                                                    break;
                                                }
                                            }
                                            
                                            // Get description from paragraphs
                                            var descElems = item.querySelectorAll('p, div.pvs-list__item--one-column');
                                            for (var j = 0; j < descElems.length; j++) {
                                                var text = descElems[j].textContent.trim();
                                                if (text && text !== title && text !== dateRange) {
                                                    description = text;
                                                    break;
                                                }
                                            }
                                            
                                            // Get URL if present
                                            var urlElem = item.querySelector('a[href]:not([href*="linkedin"])');
                                            if (urlElem) projectUrl = urlElem.href;
                                            
                                            // Look for skills in description
                                            if (description) {
                                                var skillsMatch = description.match(/Skills:(.+?)(?:\\.|$)/i);
                                                if (skillsMatch) {
                                                    skills = skillsMatch[1].trim();
                                                    description = description.replace(/Skills:(.+?)(?:\\.|$)/i, '').trim();
                                                }
                                            }
                                            
                                            // Look for contributors
                                            var contribMatch = description.match(/Contributor(?:s)?:(.+?)(?:\\.|$)/i) || 
                                                            description.match(/Team:(.+?)(?:\\.|$)/i);
                                            if (contribMatch) {
                                                contributors = contribMatch[1].trim();
                                                description = description.replace(/Contributor(?:s)?:(.+?)(?:\\.|$)/i, '')
                                                            .replace(/Team:(.+?)(?:\\.|$)/i, '').trim();
                                            }
                                            
                                            // Look for association in text
                                            for (var j = 0; j < allTexts.length; j++) {
                                                var text = allTexts[j];
                                                if (text !== dateRange && !text.includes(title)) {
                                                    association = text;
                                                    break;
                                                }
                                            }
                                            
                                            // Look for media links
                                            var mediaElems = item.querySelectorAll('a[href*="media"], a[href*="overlay"], a[href*="document"]');
                                            for (var j = 0; j < mediaElems.length; j++) {
                                                var href = mediaElems[j].href;
                                                if (href && href.length > 0) {
                                                    media = href;
                                                    break;
                                                }
                                            }
                                            
                                            // Extract dates in consistent format
                                            var startDate = '';
                                            var endDate = '';
                                            
                                            if (dateRange) {
                                                var parts = dateRange.split(' - ');
                                                startDate = parts[0].trim();
                                                if (parts.length > 1) {
                                                    endDate = parts[1].trim();
                                                }
                                            }
                                            
                                            // Only add if we have a title
                                            if (title) {
                                                projects.push({
                                                    title: title,
                                                    description: description,
                                                    url: projectUrl,
                                                    skills: skills,
                                                    contributors: contributors,
                                                    association: association,
                                                    media: media,
                                                    startDate: startDate,
                                                    endDate: endDate
                                                });
                                            }
                                        }
                                        
                                        return projects;
                                    """)
                                    
                                    if projects_details_data and isinstance(projects_details_data, list):
                                        for project in projects_details_data:
                                            # Only add if this project doesn't duplicate existing ones
                                            if not any(p.get("title", "").lower() == project.get("title", "").lower() for p in profile_data["projects"]):
                                                profile_data["projects"].append(project)
                                                
                                        print(f"Found {len(projects_details_data)} additional projects from details page")
                                except Exception as e:
                                    print(f"Error using JavaScript on projects page: {str(e)}")
                                
                                # If JavaScript extraction didn't work well, try with XPath as backup
                                if len(profile_data["projects"]) == 0:
                                    # Extract projects from the dedicated page using XPath
                                    project_items = self.driver.find_elements("xpath", "//li[contains(@class, 'pvs-list__item')]")
                                    for item in project_items:
                                        try:
                                            project_title = ""
                                            project_desc = ""
                                            project_dates = ""
                                            project_url = ""
                                            project_association = ""
                                            project_skills = ""
                                            project_media = ""
                                            
                                            # Try to get title
                                            title_elem = item.find_elements("xpath", ".//span[@aria-hidden='true']")
                                            if title_elem:
                                                project_title = title_elem[0].text.strip()
                                            
                                            # Check if title is empty or matches an existing project
                                            if not project_title or any(p.get("title", "").lower() == project_title.lower() 
                                                                      for p in profile_data["projects"]):
                                                continue
                                            
                                            # Try to get description
                                            desc_elem = item.find_elements("xpath", ".//div[contains(@class, 'pvs-list__item--one-column')]")
                                            if desc_elem:
                                                project_desc = desc_elem[0].text.strip()
                                                # Remove title from description if it's there
                                                if project_title and project_desc.startswith(project_title):
                                                    project_desc = project_desc[len(project_title):].strip()
                                            
                                            # Try to get dates
                                            date_elem = item.find_elements("xpath", ".//span[contains(@class, 'date-range')]")
                                            if date_elem:
                                                project_dates = date_elem[0].text.strip()
                                            
                                            # Parse date range
                                            start_date = ""
                                            end_date = ""
                                            if project_dates:
                                                date_parts = project_dates.split(" - ")
                                                start_date = date_parts[0].strip() if date_parts else ""
                                                end_date = date_parts[1].strip() if len(date_parts) > 1 else ""
                                            
                                            # Try to find a URL
                                            url_elems = item.find_elements("xpath", ".//a[@href]")
                                            for url_elem in url_elems:
                                                href = url_elem.get_attribute("href")
                                                if href and "linkedin.com" not in href:
                                                    project_url = href
                                                    break
                                            
                                            # Try to find association 
                                            assoc_elem = item.find_elements("xpath", ".//span[position() > 1][@aria-hidden='true']")
                                            if assoc_elem and len(assoc_elem) > 1:
                                                # Usually the second span is the association
                                                potential_assoc = assoc_elem[1].text.strip()
                                                if potential_assoc and potential_assoc != project_dates:
                                                    project_association = potential_assoc
                                            
                                            # Extract skills from description if mentioned
                                            if project_desc:
                                                skills_match = re.search(r'Skills:(.+?)(?:\.|$)', project_desc, re.IGNORECASE)
                                                if skills_match:
                                                    project_skills = skills_match.group(1).strip()
                                                    # Remove skills portion from description
                                                    project_desc = re.sub(r'Skills:(.+?)(?:\.|$)', '', project_desc, flags=re.IGNORECASE).strip()
                                            
                                            # Look for media 
                                            media_elem = item.find_elements("xpath", ".//a[contains(@href, 'media') or contains(@href, 'overlay')]")
                                            if media_elem:
                                                project_media = media_elem[0].get_attribute("href")
                                            
                                            # Only add if we have a title that doesn't duplicate
                                            if project_title:
                                                profile_data["projects"].append({
                                                    "title": project_title,
                                                    "description": project_desc,
                                                    "url": project_url,
                                                    "skills": project_skills,
                                                    "contributors": "",
                                                    "association": project_association,
                                                    "media": project_media,
                                                    "startDate": start_date,
                                                    "endDate": end_date
                                                })
                                        except Exception as e:
                                            print(f"Error extracting project details: {str(e)}")
                                
                                # Go back to profile
                                self.driver.get(url)
                                time.sleep(2)
                            except Exception as e:
                                print(f"Error navigating to projects page: {str(e)}")
                    except Exception as e:
                        print(f"Error extracting projects with JavaScript: {str(e)}")
                    
                    # Extract honors and awards using JavaScript
                    print("Extracting honors and awards...")
                    try:
                        honors_data = self.driver.execute_script("""
                            var honors = [];
                            
                            // Find honors section
                            function findHonors() {
                                // Try to find honors section or accomplishments with honors
                                var honorSections = document.querySelectorAll('section[id*="honor"], section[id*="award"]');
                                
                                // If we found a dedicated honors section
                                for (var i = 0; i < honorSections.length; i++) {
                                    var section = honorSections[i];
                                    var items = section.querySelectorAll('li');
                                    
                                    for (var j = 0; j < items.length; j++) {
                                        var item = items[j];
                                        var title = '';
                                        var issuer = '';
                                        var date = '';
                                        var description = '';
                                        var association = '';
                                        var media = '';
                                        
                                        // Get title
                                        var titleElem = item.querySelector('h3, span[class*="title"]');
                                        if (titleElem) title = titleElem.textContent.trim();
                                        
                                        // Get issuer
                                        var issuerElem = item.querySelector('h4, span[class*="issuer"]');
                                        if (issuerElem) issuer = issuerElem.textContent.trim();
                                        
                                        // Get date
                                        var dateElem = item.querySelector('span[class*="date"]');
                                        if (dateElem) date = dateElem.textContent.trim();
                                        
                                        // Get description
                                        var descElem = item.querySelector('p, div[class*="description"]');
                                        if (descElem) description = descElem.textContent.trim();
                                        
                                        // Extract association from issuer if present
                                        if (issuer && issuer.toLowerCase().includes('issued by')) {
                                            var match = issuer.match(/issued by\s+(.+?)$/i);
                                            if (match) {
                                                association = match[1].trim();
                                                // Clean up issuer
                                                issuer = issuer.replace(/issued by/i, '').trim();
                                            }
                                        }
                                        
                                        // Look for media URL
                                        var mediaElem = item.querySelector('a[href*="media"], a[data-control-name*="media"], a[href*="overlay"]');
                                        if (mediaElem) {
                                            media = mediaElem.href;
                                        }
                                        
                                        if (title) {
                                            honors.push({
                                                title: title,
                                                issuer: issuer,
                                                date: date,
                                                description: description,
                                                association: association,
                                                media: media
                                            });
                                        }
                                    }
                                }
                                
                                // Check accomplishments section for honors
                                var accompSections = document.querySelectorAll('section[id*="accomplishment"]');
                                for (var i = 0; i < accompSections.length; i++) {
                                    var honorHeaders = accompSections[i].querySelectorAll('h3');
                                    
                                    for (var j = 0; j < honorHeaders.length; j++) {
                                        if (honorHeaders[j].textContent.toLowerCase().includes('honor') || 
                                            honorHeaders[j].textContent.toLowerCase().includes('award')) {
                                            var container = honorHeaders[j].parentElement;
                                            var items = container.querySelectorAll('li');
                                            
                                            for (var k = 0; k < items.length; k++) {
                                                var itemText = items[k].textContent.trim();
                                                if (itemText) {
                                                    // Extract what we can from the text
                                                    var lines = itemText.split('\\n').map(line => line.trim()).filter(line => line);
                                                    var title = lines[0] || '';
                                                    var issuer = lines[1] || '';
                                                    var date = lines[2] || '';
                                                    
                                                    honors.push({
                                                        title: title,
                                                        issuer: issuer,
                                                        date: date,
                                                        description: '',
                                                        association: '',
                                                        media: ''
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                return honors;
                            }
                            
                            return findHonors();
                        """)
                        
                        if honors_data and isinstance(honors_data, list):
                            for honor in honors_data:
                                title = honor.get('title', '')
                                issuer = honor.get('issuer', '')
                                date = honor.get('date', '')
                                description = honor.get('description', '')
                                association = honor.get('association', '')
                                media = honor.get('media', '')
                                
                                # Skip empty title
                                if not title:
                                    continue
                                
                                # Parse date into month and year
                                month = ""
                                year = ""
                                if date:
                                    date_match = re.search(r'([A-Z][a-z]+) (\d{4})', date)
                                    if date_match:
                                        month = date_match.group(1)
                                        year = date_match.group(2)
                                
                                profile_data["honors_awards"].append({
                                    "title": title,
                                    "issuer": issuer,
                                    "month": month,
                                    "year": year,
                                    "description": description,
                                    "association": association,
                                    "media": media
                                })
                        
                        print(f"Found {len(profile_data['honors_awards'])} honors/awards")
                        
                        # If no honors found via initial methods, try to navigate to the honors section
                        if not profile_data["honors_awards"]:
                            try:
                                # Try directly visiting the accomplishments/honors section
                                honors_url = f"{url}/details/honors/"
                                print(f"Navigating to honors page: {honors_url}")
                                self.driver.get(honors_url)
                                time.sleep(3)
                                
                                # Try JavaScript first for comprehensive extraction
                                try:
                                    honors_details_data = self.driver.execute_script("""
                                        var honors = [];
                                        
                                        // Find all honor items on the details page
                                        var honorItems = document.querySelectorAll('li.pvs-list__item');
                                        
                                        for (var i = 0; i < honorItems.length; i++) {
                                            var item = honorItems[i];
                                            
                                            // Get award details
                                            var title = '';
                                            var issuer = '';
                                            var issueDate = '';
                                            var description = '';
                                            
                                            // Try multiple ways to extract title
                                            var titleElem = item.querySelector('span[aria-hidden="true"]');
                                            if (titleElem) title = titleElem.textContent.trim();
                                            
                                            // Get all spans to try to identify parts
                                            var allSpans = item.querySelectorAll('span[aria-hidden="true"]');
                                            var allTexts = [];
                                            
                                            for (var j = 0; j < allSpans.length; j++) {
                                                var text = allSpans[j].textContent.trim();
                                                if (text && text !== title) {
                                                    allTexts.push(text);
                                                }
                                            }
                                            
                                            // Look for issuer (usually second span) and date
                                            if (allTexts.length > 0) {
                                                // First non-title text is usually the issuer
                                                issuer = allTexts[0];
                                                
                                                // Look for a date string in the texts (format: Month Year)
                                                for (var j = 0; j < allTexts.length; j++) {
                                                    if (/[A-Z][a-z]+ \d{4}/.test(allTexts[j])) {
                                                        issueDate = allTexts[j];
                                                        // If issuer is the same as date, clear it (avoid duplication)
                                                        if (issuer === issueDate) {
                                                            issuer = '';
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                            
                                            // Extract description from the text content
                                            var descElems = item.querySelectorAll('p, div.pvs-list__item--one-column');
                                            for (var j = 0; j < descElems.length; j++) {
                                                var text = descElems[j].textContent.trim();
                                                // Ensure it's not the title, issuer, or date that we already extracted
                                                if (text && text !== title && text !== issuer && text !== issueDate) {
                                                    description = text;
                                                    
                                                    // Sometimes the description contains the title, issuer and date - extract only the actual description
                                                    if (title && description.startsWith(title)) {
                                                        description = description.substring(title.length).trim();
                                                    }
                                                    if (issuer && description.includes(issuer)) {
                                                        description = description.replace(issuer, '').trim();
                                                    }
                                                    if (issueDate && description.includes(issueDate)) {
                                                        description = description.replace(issueDate, '').trim();
                                                    }
                                                    
                                                    // Clean up punctuation at start
                                                    description = description.replace(/^[•\s·,\-\s\.]+/, '').trim();
                                                    break;
                                                }
                                            }
                                            
                                            // Extract month and year separately
                                            var month = '';
                                            var year = '';
                                            
                                            if (issueDate) {
                                                var dateMatch = issueDate.match(/([A-Z][a-z]+) (\d{4})/);
                                                if (dateMatch) {
                                                    month = dateMatch[1];
                                                    year = dateMatch[2];
                                                }
                                            }
                                            
                                            // Only add if we have a title
                                            if (title) {
                                                honors.push({
                                                    title: title,
                                                    issuer: issuer,
                                                    month: month,
                                                    year: year,
                                                    description: description
                                                });
                                            }
                                        }
                                        
                                        return honors;
                                    """)
                                    
                                    if honors_details_data and isinstance(honors_details_data, list):
                                        for honor in honors_details_data:
                                            # Only add if this honor doesn't duplicate existing ones
                                            if not any(h.get("title", "").lower() == honor.get("title", "").lower() 
                                                       for h in profile_data["honors_awards"]):
                                                # Add empty fields if not present
                                                honor_entry = {
                                                    "title": honor.get("title", ""),
                                                    "issuer": honor.get("issuer", ""),
                                                    "month": honor.get("month", ""),
                                                    "year": honor.get("year", ""),
                                                    "description": honor.get("description", ""),
                                                    "association": "",
                                                    "media": ""
                                                }
                                                profile_data["honors_awards"].append(honor_entry)
                                                
                                        print(f"Found {len(honors_details_data)} additional honors from details page")
                                except Exception as e:
                                    print(f"Error using JavaScript on honors page: {str(e)}")
                                
                                # If JavaScript extraction didn't work well, try with XPath as backup
                                if len(profile_data["honors_awards"]) == 0:
                                    # Extract honors using XPath
                                    honor_items = self.driver.find_elements("xpath", "//li[contains(@class, 'pvs-list__item')]")
                                    for item in honor_items:
                                        try:
                                            title = ""
                                            issuer = ""
                                            issue_date = ""
                                            description = ""
                                            
                                            # Get the title
                                            title_elem = item.find_elements("xpath", ".//span[@aria-hidden='true']")
                                            if title_elem:
                                                title = title_elem[0].text.strip()
                                            
                                            # Skip if title is empty
                                            if not title:
                                                continue
                                            
                                            # Skip if this honor already exists
                                            if any(h.get("title", "").lower() == title.lower() 
                                                   for h in profile_data["honors_awards"]):
                                                continue
                                            
                                            # Try to get issuer (usually second span)
                                            issuer_elem = item.find_elements("xpath", ".//span[position() > 1][@aria-hidden='true']")
                                            if issuer_elem and len(issuer_elem) > 0:
                                                issuer = issuer_elem[0].text.strip()
                                            
                                            # Try to get date
                                            date_elem = item.find_elements("xpath", ".//span[contains(text(), '20')]")
                                            for elem in date_elem:
                                                date_text = elem.text.strip()
                                                if re.search(r'[A-Z][a-z]+ \d{4}', date_text):
                                                    issue_date = date_text
                                                    # If issuer is actually the date, clear it to avoid duplication
                                                    if issuer == issue_date:
                                                        issuer = ""
                                                    break
                                            
                                            # Try to get description
                                            desc_elem = item.find_elements("xpath", ".//div[contains(@class, 'pvs-list__item--one-column')]")
                                            if desc_elem:
                                                description = desc_elem[0].text.strip()
                                                # Remove title from description if it's present
                                                if title and description.startswith(title):
                                                    description = description[len(title):].strip()
                                                # Remove issuer if present in description
                                                if issuer and issuer in description:
                                                    description = description.replace(issuer, "").strip()
                                                # Remove date if present in description
                                                if issue_date and issue_date in description:
                                                    description = description.replace(issue_date, "").strip()
                                                # Clean up punctuation at start
                                                description = re.sub(r'^[•\s·,\-\s\.]+', '', description).strip()
                                            
                                            # Parse date into month and year
                                            month = ""
                                            year = ""
                                            if issue_date:
                                                date_match = re.search(r'([A-Z][a-z]+) (\d{4})', issue_date)
                                                if date_match:
                                                    month = date_match.group(1)
                                                    year = date_match.group(2)
                                            
                                            # Add the honor to the list
                                            profile_data["honors_awards"].append({
                                                "title": title,
                                                "issuer": issuer,
                                                "month": month,
                                                "year": year,
                                                "description": description,
                                                "association": "",
                                                "media": ""
                                            })
                                            
                                        except Exception as e:
                                            print(f"Error extracting honor details with XPath: {str(e)}")
                                
                                # Try alternative approach - look for sections with honors/awards
                                if len(profile_data["honors_awards"]) == 0:
                                    honor_sections = self.driver.find_elements("xpath", "//section[.//h2[contains(text(), 'Honor') or contains(text(), 'Award')]]")
                                    for section in honor_sections:
                                        try:
                                            # Find list items within this section
                                            items = section.find_elements("xpath", ".//li")
                                            for item in items:
                                                honor_text = item.text.strip()
                                                if honor_text:
                                                    # Split text by newlines to extract components
                                                    parts = honor_text.split("\n")
                                                    title = parts[0] if parts else ""
                                                    
                                                    # Skip if title is empty or duplicate
                                                    if not title or any(h.get("title", "").lower() == title.lower() 
                                                                     for h in profile_data["honors_awards"]):
                                                        continue
                                                    
                                                    issuer = parts[1] if len(parts) > 1 else ""
                                                    date_text = parts[2] if len(parts) > 2 else ""
                                                    description = " ".join(parts[3:]) if len(parts) > 3 else ""
                                                    
                                                    # Extract month and year from date if present
                                                    month = ""
                                                    year = ""
                                                    if date_text:
                                                        date_match = re.search(r'([A-Z][a-z]+) (\d{4})', date_text)
                                                        if date_match:
                                                            month = date_match.group(1)
                                                            year = date_match.group(2)
                                                    
                                                    profile_data["honors_awards"].append({
                                                        "title": title,
                                                        "issuer": issuer,
                                                        "month": month,
                                                        "year": year,
                                                        "description": description,
                                                        "association": "",
                                                        "media": ""
                                                    })
                                        except Exception as e:
                                            print(f"Error processing honor section: {str(e)}")
                                
                                # Go back to profile
                                self.driver.get(url)
                                time.sleep(2)
                            except Exception as e:
                                print(f"Error navigating to honors page: {str(e)}")
                                
                        # Final check to ensure honors have all required fields
                        for honor in profile_data["honors_awards"]:
                            if not honor.get("title"):
                                honor["title"] = ""
                            if not honor.get("issuer"):
                                honor["issuer"] = ""
                            if not honor.get("month"):
                                honor["month"] = ""
                            if not honor.get("year"):
                                honor["year"] = ""
                            if not honor.get("description"):
                                honor["description"] = ""
                            if not honor.get("association"):
                                honor["association"] = ""
                            if not honor.get("media"):
                                honor["media"] = ""

                    except Exception as e:
                        print(f"Error extracting honors with JavaScript: {str(e)}")
                    
                    # If no honors/awards found, try visiting the accomplishments section
                    if not profile_data["honors_awards"]:
                        try:
                            accomp_url = f"{url}/details/accomplishments/"
                            print(f"Navigating to accomplishments page: {accomp_url}")
                            self.driver.get(accomp_url)
                            time.sleep(3)
                            
                            # Look for sections with honors/awards
                            honor_headers = self.driver.find_elements("xpath", "//h2[contains(text(), 'Honor') or contains(text(), 'Award')]")
                            for header in honor_headers:
                                try:
                                    # Find the section after this header
                                    section = header.find_element("xpath", "./following-sibling::ul")
                                    items = section.find_elements("xpath", "./li")
                                    
                                    for item in items:
                                        honor_text = item.text.strip()
                                        if honor_text:
                                            # Split by newlines
                                            parts = honor_text.split("\n")
                                            title = parts[0] if parts else ""
                                            issuer = parts[1] if len(parts) > 1 else ""
                                            date = parts[2] if len(parts) > 2 else ""
                                            
                                            profile_data["honors_awards"].append({
                                                "title": title,
                                                "issuer": issuer,
                                                "date": date,
                                                "description": "",
                                                "association": "",
                                                "media": ""
                                            })
                                except Exception as e:
                                    print(f"Error processing honor header: {str(e)}")
                            
                            # Also try to look for h3 elements
                            try:
                                honor_h3_headers = self.driver.find_elements("xpath", "//h3[contains(text(), 'Honor') or contains(text(), 'Award')]")
                                for h3_header in honor_h3_headers:
                                    # Try to find parent section and then list elements
                                    parent_section = h3_header.find_element("xpath", "./ancestor::section")
                                    honor_items = parent_section.find_elements("xpath", ".//li")
                                    
                                    for item in honor_items:
                                        honor_text = item.text.strip()
                                        if honor_text:
                                            parts = honor_text.split("\n")
                                            title = parts[0] if parts else ""
                                            issuer = parts[1] if len(parts) > 1 else ""
                                            date = parts[2] if len(parts) > 2 else ""
                                            
                                            profile_data["honors_awards"].append({
                                                "title": title,
                                                "issuer": issuer,
                                                "date": date,
                                                "description": "",
                                                "association": "",
                                                "media": ""
                                            })
                            except Exception as e:
                                print(f"Error processing h3 honor headers: {str(e)}")
                            
                            # Try using a more general approach
                            try:
                                # Try to find any section that might contain honors
                                sections = self.driver.find_elements("xpath", "//section")
                                for section in sections:
                                    section_text = section.text.lower()
                                    if "honor" in section_text or "award" in section_text:
                                        # Look for list items
                                        honor_items = section.find_elements("xpath", ".//li")
                                        
                                        for item in honor_items:
                                            honor_text = item.text.strip()
                                            if honor_text:
                                                parts = honor_text.split("\n")
                                                title = parts[0] if parts else ""
                                                issuer = parts[1] if len(parts) > 1 else ""
                                                date = parts[2] if len(parts) > 2 else ""
                                                
                                                # Check if this is likely an honor
                                                lower_title = title.lower()
                                                is_likely_honor = (
                                                    "award" in lower_title or
                                                    "honor" in lower_title or
                                                    "prize" in lower_title or
                                                    "scholar" in lower_title or
                                                    "recognition" in lower_title or
                                                    "medal" in lower_title
                                                )
                                                
                                                if is_likely_honor:
                                                    profile_data["honors_awards"].append({
                                                        "title": title,
                                                        "issuer": issuer,
                                                        "date": date,
                                                        "description": "",
                                                        "association": "",
                                                        "media": ""
                                                    })
                            except Exception as e:
                                print(f"Error in general honor section extraction: {str(e)}")
                            
                            # Go back to profile
                            self.driver.get(url)
                            time.sleep(2)
                        except Exception as e:
                            print(f"Error navigating to accomplishments: {str(e)}")
                    
                    self.profile_data.append(profile_data)
                    print(f"Successfully scraped profile: {profile_data['name']}")
                except Exception as inner_e:
                    print(f"Error extracting profile data: {str(inner_e)}")
                    
                # Add a random delay between profile scrapes
                if i < len(profile_urls) - 1:
                    delay = 3 + 3 * random.random()
                    print(f"Waiting {delay:.2f} seconds before next profile...")
                    time.sleep(delay)
                
            except Exception as e:
                print(f"Error scraping profile {url}: {str(e)}")
    
    def save_to_csv(self, filename="purdue_cs_profiles.csv"):
        """Save profile data to CSV."""
        print(f"Saving data to CSV: {filename}")
        
        # Flatten the nested data
        flattened_data = []
        
        for profile in self.profile_data:
            base_data = {
                "url": profile["url"],
                "name": profile["name"]
            }
            
            # Handle education
            if profile["education"]:
                for i, edu in enumerate(profile["education"]):
                    base_data[f"education_{i+1}_school"] = edu.get("school", "")
                    base_data[f"education_{i+1}_degree"] = edu.get("degree", "")
                    base_data[f"education_{i+1}_fieldOfStudy"] = edu.get("fieldOfStudy", "")
                    base_data[f"education_{i+1}_date_range"] = edu.get("date_range", "")
            
            # Handle experience
            if profile["experience"]:
                for i, exp in enumerate(profile["experience"]):
                    base_data[f"experience_{i+1}_title"] = exp.get("title", "")
                    base_data[f"experience_{i+1}_company"] = exp.get("company", "")
                    base_data[f"experience_{i+1}_description"] = exp.get("description", "")
                    base_data[f"experience_{i+1}_location"] = exp.get("location", "")
                    base_data[f"experience_{i+1}_skills"] = exp.get("skills", "")
                    base_data[f"experience_{i+1}_media"] = exp.get("media", "")
                    base_data[f"experience_{i+1}_date_range"] = exp.get("date_range", "")
            
            # Handle projects
            if profile["projects"]:
                for i, project in enumerate(profile["projects"]):
                    base_data[f"project_{i+1}_title"] = project.get("title", "")
                    base_data[f"project_{i+1}_description"] = project.get("description", "")
                    base_data[f"project_{i+1}_url"] = project.get("url", "")
                    base_data[f"project_{i+1}_skills"] = project.get("skills", "")
                    base_data[f"project_{i+1}_contributors"] = project.get("contributors", "")
                    base_data[f"project_{i+1}_association"] = project.get("association", "")
                    base_data[f"project_{i+1}_media"] = project.get("media", "")
                    base_data[f"project_{i+1}_startDate"] = project.get("startDate", "")
                    base_data[f"project_{i+1}_endDate"] = project.get("endDate", "")
            
            # Handle honors and awards
            if profile["honors_awards"]:
                for i, honor in enumerate(profile["honors_awards"]):
                    base_data[f"honor_{i+1}_title"] = honor.get("title", "")
                    base_data[f"honor_{i+1}_issuer"] = honor.get("issuer", "")
                    base_data[f"honor_{i+1}_date"] = honor.get("date", "")
                    base_data[f"honor_{i+1}_description"] = honor.get("description", "")
                    base_data[f"honor_{i+1}_association"] = honor.get("association", "")
                    base_data[f"honor_{i+1}_media"] = honor.get("media", "")
            
            flattened_data.append(base_data)
        
        # Convert to DataFrame and save to CSV
        df = pd.DataFrame(flattened_data)
        df.to_csv(filename, index=False)
        print(f"Successfully saved data to {filename}")
    
    def save_to_json(self, filename="purdue_cs_profiles.json"):
        """Save profile data to JSON."""
        print(f"Saving data to JSON: {filename}")
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.profile_data, f, ensure_ascii=False, indent=4)
        print(f"Successfully saved data to {filename}")
    
    def save_cookies(self):
        """Save cookies to a file for future use."""
        if not self.driver:
            return False
        
        print("Saving cookies...")
        try:
            cookies = self.driver.get_cookies()
            with open(self.cookies_file, 'w') as f:
                json.dump(cookies, f)
            print(f"Cookies saved to {self.cookies_file}")
            return True
        except Exception as e:
            print(f"Error saving cookies: {str(e)}")
            return False
    
    def load_cookies(self):
        """Load cookies from file if available."""
        if not self.driver or not os.path.exists(self.cookies_file):
            return False
        
        print(f"Loading cookies from {self.cookies_file}...")
        try:
            with open(self.cookies_file, 'r') as f:
                cookies = json.load(f)
            
            # Need to be on LinkedIn domain to set cookies
            self.driver.get("https://www.linkedin.com")
            time.sleep(2)
            
            for cookie in cookies:
                try:
                    self.driver.add_cookie(cookie)
                except:
                    pass
            
            print("Cookies loaded successfully")
            return True
        except Exception as e:
            print(f"Error loading cookies: {str(e)}")
            return False
    
    def run(self, max_profiles=30):
        """Run the complete scraping workflow."""
        try:
            # Setup and login
            self.setup_driver()
            login_success = self.login()
            
            # Check if login was successful
            if not login_success:
                print("Login failed. Cannot proceed with scraping.")
                if self.headless:
                    print("Consider running first with headless=False to manually complete verification.")
                return
            
            # Verify we're on the feed page
            if not "/feed" in self.driver.current_url:
                print("Warning: Not on LinkedIn feed page. Current URL:", self.driver.current_url)
                return
            
            # Find profiles
            profile_urls = self.find_purdue_profiles(max_profiles=max_profiles)
            
            if not profile_urls:
                print("No profiles found. Exiting.")
                return
            
            # Scrape profiles
            self.scrape_profiles(profile_urls)
            
            if not self.profile_data:
                print("No profile data collected. Exiting.")
                return
            
            # Save data
            self.save_to_csv()
            self.save_to_json()
            
            print("Scraping completed successfully!")
            
        except Exception as e:
            print(f"Error during scraping process: {str(e)}")
            if self.driver and self.take_screenshots:
                self.driver.save_screenshot("error.png")
        finally:
            if self.driver:
                print("Closing Chrome driver...")
                self.driver.quit()

if __name__ == "__main__":
    # Set to a lower number for testing
    TEST_MODE = True
    max_profiles = 5 if TEST_MODE else 30
    take_screenshots = True
    
    # Load environment variables
    load_dotenv()
    
    # Get LinkedIn credentials from environment variables
    email = os.environ.get("LINKEDIN_EMAIL")
    password = os.environ.get("LINKEDIN_PASSWORD")
    
    # Use visible browser for manual verification
    headless = False
    manual_verification_time = 120  # 2 minutes to complete verification
    
    # Initialize and run the scraper
    scraper = PurdueLinkedInScraper(
        email=email, 
        password=password, 
        take_screenshots=take_screenshots,
        headless=headless,
        manual_verification_time=manual_verification_time
    )
    scraper.run(max_profiles=max_profiles) 