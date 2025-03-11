describe('Login and Search Flow', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('/authentication/signin');
  });

  it('should login successfully and search photos', () => {
    // Enter username
    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    // Enter password
    cy.get('input[formControlName="password"]').type('Pass12346');
    // Click the login button
    cy.get('button[type="submit"]').click();
    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard/home');

    // Navigate to the Photos page
    cy.visit('/dashboard/photos');

    // Wait for the page to load
    cy.get('h2').contains('All Photos').should('be.visible');

    // Perform a search with a term that exists in JSONPlaceholder photos
    cy.get('input[placeholder="Search ..."]').type('quidem{enter}');
    // Verify search results
    cy.get('table.mat-table').should('contain.text', 'quidem');
  });

  it('should login successfully and search users', () => {
    // Enter username
    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    // Enter password
    cy.get('input[formControlName="password"]').type('Pass12346');
    // Click the login button
    cy.get('button[type="submit"]').click();
    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard/home');

    // Navigate to the Users page
    cy.visit('/dashboard/users');

    // Wait for the page to load
    cy.get('h2').contains('All Users').should('be.visible');

    // Perform a search with a term that exists in JSONPlaceholder users
    cy.get('input[placeholder="Search Users..."]').type('Leanne{enter}');
    // Verify search results
    cy.get('table.mat-table').should('contain.text', 'Leanne');
  });

  it('should login successfully and search albums', () => {
    // Enter username
    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    // Enter password
    cy.get('input[formControlName="password"]').type('Pass12346');
    // Click the login button
    cy.get('button[type="submit"]').click();
    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard/home');

    // Navigate to the Albums page
    cy.visit('/dashboard/albums');

    // Wait for the page to load
    cy.get('h2').contains('All Albums').should('be.visible');

    // Perform a search with a term that exists in JSONPlaceholder albums
    cy.get('input[placeholder="Search Albums..."]').type('omnis{enter}');
    // Verify search results
    cy.get('table.mat-table').should('contain.text', 'omnis');
  });
});