# PurdueRanked

   1. Open your browser to: http://localhost:8000/docs
   2. testing suite: http://localhost:8000/scraper-test-ui
   3. Find and execute the POST /login endpoint
   4. A browser window will open automatically
   5. Complete any LinkedIn security verification steps
   6. Wait for success message (cookies saved)
   - Now you can use any endpoint normally
   - No browser window will appear (headless mode)
   - The saved cookies will be used for authentication
   - Operations will run faster without UI rendering
   - If you get a "cookies expired" message
   - Simply use the /login endpoint again
   - Complete any verification
   - Continue using headless mode