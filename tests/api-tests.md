# API Test Cases - March 07, 2025

## TC01 - GET /api/users
- **Description:** Fetch user list
- **Expected:** Status 200, Array response
- **Result:** Pass (Verified with npx jest, 1043ms)

## TC02 - GET /api/albums/1
- **Description:** Fetch album details
- **Expected:** Status 200, Object with "title"
- **Result:** Pass (Verified with npx jest, 177ms)

## TC03 - GET /api/photos
- **Description:** Fetch photo list
- **Expected:** Status 200, Array with length > 0
- **Result:** Pass (Verified with npx jest, 1694ms)