# Manual Test Cases

## Test Case MTC-001: Login with Valid Credentials
- **Test Scenario**: Verify that a user can log in successfully with valid credentials.
- **Test Steps**:
  1. Navigate to `http://localhost:4200/authentication/signin`.
  2. Enter username: `liamlisa15@gmail.com`.
  3. Enter password: `Pass12346`.
  4. Click the "Login" button.
- **Expected Result**: The user is redirected to `/dashboard/home`.
- **Actual Result**: The user is redirected to `/dashboard/home`.
- **Status**: Pass
- **Bug Report**: N/A

---

## Test Case MTC-002: Login with Invalid Credentials
- **Test Scenario**: Verify that an error is displayed when attempting to log in with invalid credentials.
- **Test Steps**:
  1. Navigate to `http://localhost:4200/authentication/signin`.
  2. Enter username: `wrong@gmail.com`.
  3. Enter password: `WrongPass`.
  4. Click the "Login" button.
- **Expected Result**: An error message is displayed: "Username and Password not valid !".
- **Actual Result**: An error message is displayed: "Username and Password not valid !".
- **Status**: Pass
- **Bug Report**: N/A

---

## Test Case MTC-003: Navigate to Photos Page After Login
- **Test Scenario**: Verify that a user can navigate to the Photos page after logging in.
- **Test Steps**:
  1. Log in with valid credentials (username: `liamlisa15@gmail.com`, password: `Pass12346`).
  2. Navigate to `/dashboard/pages/photos`.
- **Expected Result**: The Photos page loads with the "All Photos" header.
- **Actual Result**: The user is redirected to `/authentication/signin`.
- **Status**: Fail
- **Bug Report**: 
  - **Bug ID**: BUG-001
  - **Description**: After login, navigating to `/dashboard/pages/photos` redirects to the login page.
  - **Severity**: High
  - **Steps to Reproduce**: Log in with valid credentials, then navigate to `/dashboard/pages/photos`.
  - **Expected**: Photos page loads with the "All Photos" header.
  - **Actual**: Redirects to `/authentication/signin`.

---

## Test Case MTC-004: Search for a Photo by Keyword
- **Test Scenario**: Verify that a user can search for photos by keyword on the Photos page.
- **Test Steps**:
  1. Log in with valid credentials (username: `liamlisa15@gmail.com`, password: `Pass12346`).
  2. Navigate to `/dashboard/pages/photos`.
  3. Type "quidem" in the search input and press Enter.
- **Expected Result**: The table filters to show photos with the keyword "quidem".
- **Actual Result**: Cannot test due to redirect (see BUG-001).
- **Status**: Blocked
- **Bug Report**: Refer to BUG-001.

---

## Test Case MTC-005: Refresh Photos Page
- **Test Scenario**: Verify that a user can refresh the Photos page to reload data.
- **Test Steps**:
  1. Log in with valid credentials (username: `liamlisa15@gmail.com`, password: `Pass12346`).
  2. Navigate to `/dashboard/pages/photos`.
  3. Click the refresh button.
- **Expected Result**: The page reloads with updated data.
- **Actual Result**: Cannot test due to redirect (see BUG-001).
- **Status**: Blocked
- **Bug Report**: Refer to BUG-001.

---

# Bug Report

## BUG-001: Redirect to Login Page After Successful Login
- **Description**: After successful login, navigating to `/dashboard/pages/photos` redirects back to `/authentication/signin`.
- **Severity**: High (blocks core functionality).
- **Steps to Reproduce**:
  1. Navigate to `http://localhost:4200/authentication/signin`.
  2. Log in with username: `liamlisa15@gmail.com` and password: `Pass12346`.
  3. Navigate to `/dashboard/pages/photos`.
- **Expected Result**: Photos page should load with the "All Photos" header.
- **Actual Result**: Redirects to `/authentication/signin`.
- **Environment**: Localhost, Angular 13.3.11, Chrome browser.
