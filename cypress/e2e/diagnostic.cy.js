describe('Diagnostic Test', () => {
    it('should load the login page', () => {
      cy.visit('http://localhost:4200/authentication/signin', { timeout: 30000 });
      cy.get('body').then(($body) => {
        cy.log('Login Page HTML:', $body.html());
      });
      cy.get('input[formControlName="username"]').should('be.visible');
    });
  });