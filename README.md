# Savannah Informatics QA Assignment

This project is a submission for the Quality Assurance Analyst role at Savannah Informatics. It includes a web application built with Angular, consuming data from `https://jsonplaceholder.typicode.com/`, with manual testing, test automation, API testing, and performance testing.

## Project Structure
- **cypress/**: Contains Cypress test scripts for automation.
  - `cypress/e2e/search-test.cy.js`: Cypress test script for login and search functionality.
  - `cypress/fixtures/photos.json`: Mock data for API responses.
- **manual-testing/**: Manual test cases and bug reports.
  - `manual-test-cases.md`: Documented test cases and bug reports.
- **api-testing/**: API test cases and scripts.
  - `api-test-cases.md`: Documented API test cases.
  - `tests/api_tests.js`: Jest script for API testing (assumed path; adjust if different).
- **performance-testing/**: k6 performance test scripts.
  - `tests/performance_tests.js`: k6 script for performance testing (assumed path; adjust if different).
- **src/**: Angular source code.


## Prerequisites
- Node.js (v16 or later)
- Angular CLI (`npm install -g @angular/cli`)
- `npm install --legacy-peer-deps`
- `npm install cypress --save-dev --legacy-peer-deps`
- `npm install --save-dev jest  --legacy-peer-deps `
- k6 (`https://k6.io/docs/get-started/installation/`)
- Git (for cloning the repository)
## Tests Commands
     - `npx cypress open`
     - `npx cypress run --spec cypress/e2e/search-test.cy.js`
     - `npx --node-options="experimental-vm-modules" jest tests/api_tests.js`
     - `k6 run tests/performance_tests.j
## Installation
1. Clone the repository:
   ```bash
   git clone 
   cd savannah-qa-assignment