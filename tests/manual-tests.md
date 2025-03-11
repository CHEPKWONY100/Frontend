# Manual Test Cases - March 07, 2025

## TC01 - Successful Login
- **Input:** Username: testuser, Password: password123
- **Expected:** Redirect to /dashboard
- **Result:** [To be filled after testing]

## TC02 - Invalid Login
- **Input:** Username: testuser, Password: wrongpass
- **Expected:** Error message "Invalid credentials"
- **Result:** [To be filled after testing]

## TC03 - Navigate Critical Path
- **Input:** Log in, navigate Landing → Login → Dashboard → Task Management → Access Management → Config
- **Expected:** Each page loads without errors
- **Result:** [To be filled after testing]

## TC04 - Access Protected Route Without Login
- **Input:** Navigate to /access-management without logging in
- **Expected:** Redirect to /login
- **Result:** [To be filled after testing]

## TC05 - Search Functionality
- **Input:** On Access Management or Config page, enter "vacation" in search box, submit
- **Expected:** Results display with "vacation" in them
- **Result:** [To be filled after testing]

## TC06 - Empty Search
- **Input:** Submit search with no term
- **Expected:** Error or no results
- **Result:** [To be filled after testing]