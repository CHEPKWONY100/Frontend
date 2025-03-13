import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // Matches your app's URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Matches your test files
    video: true, // Enable video recording for debugging
    screenshotOnRunFailure: true, // Take screenshots on failure
    defaultCommandTimeout: 15000, // Increase default timeout to match your test
    requestTimeout: 10000, // Timeout for cy.intercept() requests
    responseTimeout: 10000, // Timeout for cy.intercept() responses
  },
});