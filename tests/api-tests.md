# API Test Cases

## Test Case ATC-001: Fetch All Users
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Test Scenario**: Verify that the endpoint returns a list of users.
- **Expected Result**: Returns 200 OK with a list of users.
- **Actual Result**: Returns 200 OK with a list of users.
- **Status**: Pass

---

## Test Case ATC-002: Fetch All Albums
- **Endpoint**: `https://jsonplaceholder.typicode.com/albums`
- **Method**: GET
- **Test Scenario**: Verify that the endpoint returns a list of albums.
- **Expected Result**: Returns 200 OK with a list of albums.
- **Actual Result**: Returns 200 OK with a list of albums.
- **Status**: Pass

---

## Test Case ATC-003: Fetch All Photos
- **Endpoint**: `https://jsonplaceholder.typicode.com/photos`
- **Method**: GET
- **Test Scenario**: Verify that the endpoint returns a list of photos.
- **Expected Result**: Returns 200 OK with a list of photos.
- **Actual Result**: Returns 200 OK with a list of photos.
- **Status**: Pass

---

## Test Case ATC-004: Fetch Non-Existent User
- **Endpoint**: `https://jsonplaceholder.typicode.com/users/999`
- **Method**: GET
- **Test Scenario**: Verify that the endpoint handles a request for a non-existent user.
- **Expected Result**: Returns 404 Not Found.
- **Actual Result**: Returns 404 Not Found.
- **Status**: Pass

---

# Notes
- API tests were validated using Postman.
- All endpoints responded as expected with correct status codes and data.