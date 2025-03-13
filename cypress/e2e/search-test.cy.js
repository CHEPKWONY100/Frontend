describe('Login and Search Flow', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.setLocalStorage('auth-user', JSON.stringify({
      id: 1,
      email: 'liamlisa15@gmail.com',
      roles: ['ROLE_ADMIN'],
      token: 'mock-token',
    }));
    cy.visit('http://localhost:4200/authentication/signin');
  });

  it('should login successfully and search photos', () => {
    cy.get('body').then(($body) => {
      cy.log('Login Page HTML:', $body.html());
    });

    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    cy.get('input[formControlName="password"]').type('Pass12346');
    cy.get('button[type="submit"]').click();
    cy.get('body').should('not.contain', 'Username and Password not valid !', { timeout: 10000 });
    cy.url().should('include', '/dashboard/home', { timeout: 15000 });
    cy.wait(2000);

    cy.get('body').then(($body) => {
      cy.log('Post-Login HTML:', $body.html());
    });

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/photos').as('getPhotos');
    cy.visit('http://localhost:4200/dashboard/pages/photos');
    cy.url().should('include', '/dashboard/pages/photos', { timeout: 15000 });
    cy.wait('@getPhotos', { requestTimeout: 10000, responseTimeout: 10000 });

    cy.get('mat-progress-spinner', { timeout: 30000 }).should('not.exist');

    cy.url().then((url) => {
      cy.log('Current URL after navigating to Photos:', url);
      expect(url).to.include('/dashboard/pages/photos');
    });

    cy.get('body').then(($body) => {
      cy.log('Photos Page HTML:', $body.html());
    });

    cy.get('div.materialTableHeader h2', { timeout: 30000 })
      .should('be.visible')
      .and('contain.text', 'All Photos')
      .then(($h2) => {
        cy.log('Found h2 element:', $h2.text());
      });

    cy.get('input[placeholder="Search ..."]', { timeout: 10000 }).type('quidem{enter}');
    cy.get('table.mat-table', { timeout: 10000 }).should('contain.text', 'quidem');
  });

  it('should login successfully and search users', () => {
    cy.get('body').then(($body) => {
      cy.log('Login Page HTML:', $body.html());
    });

    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    cy.get('input[formControlName="password"]').type('Pass12346');
    cy.get('button[type="submit"]').click();
    cy.get('body').should('not.contain', 'Username and Password not valid !', { timeout: 10000 });
    cy.url().should('include', '/dashboard/home', { timeout: 15000 });
    cy.wait(2000);

    cy.get('body').then(($body) => {
      cy.log('Post-Login HTML:', $body.html());
    });

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users').as('getUsers');
    cy.visit('http://localhost:4200/dashboard/pages/users');
    cy.url().should('include', '/dashboard/pages/users', { timeout: 15000 });
    cy.wait('@getUsers', { requestTimeout: 10000, responseTimeout: 10000 });

    cy.get('mat-progress-spinner', { timeout: 30000 }).should('not.exist');

    cy.url().then((url) => {
      cy.log('Current URL after navigating to Users:', url);
      expect(url).to.include('/dashboard/pages/users');
    });

    cy.get('body').then(($body) => {
      cy.log('Users Page HTML:', $body.html());
    });

    cy.get('div.materialTableHeader h2', { timeout: 30000 })
      .should('be.visible')
      .and('contain.text', 'All users')
      .then(($h2) => {
        cy.log('Found h2 element:', $h2.text());
      });

    cy.get('input[placeholder="Search Users..."]', { timeout: 10000 }).type('Leanne{enter}');
    cy.get('table.mat-table', { timeout: 10000 }).should('contain.text', 'Leanne');
  });

  it('should login successfully and search albums', () => {
    cy.get('body').then(($body) => {
      cy.log('Login Page HTML:', $body.html());
    });

    cy.get('input[formControlName="username"]').type('liamlisa15@gmail.com');
    cy.get('input[formControlName="password"]').type('Pass12346');
    cy.get('button[type="submit"]').click();
    cy.get('body').should('not.contain', 'Username and Password not valid !', { timeout: 10000 });
    cy.url().should('include', '/dashboard/home', { timeout: 15000 });
    cy.wait(2000);

    cy.get('body').then(($body) => {
      cy.log('Post-Login HTML:', $body.html());
    });

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/albums').as('getAlbums');
    cy.visit('http://localhost:4200/dashboard/pages/albums');
    cy.url().should('include', '/dashboard/pages/albums', { timeout: 15000 });
    cy.wait('@getAlbums', { requestTimeout: 10000, responseTimeout: 10000 });

    cy.get('mat-progress-spinner', { timeout: 30000 }).should('not.exist');

    cy.url().then((url) => {
      cy.log('Current URL after navigating to Albums:', url);
      expect(url).to.include('/dashboard/pages/albums');
    });

    cy.get('body').then(($body) => {
      cy.log('Albums Page HTML:', $body.html());
    });

    cy.get('div.materialTableHeader h2', { timeout: 30000 })
      .should('be.visible')
      .and('contain.text', 'All Albums')
      .then(($h2) => {
        cy.log('Found h2 element:', $h2.text());
      });

    cy.get('input[placeholder="Search Albums..."]', { timeout: 10000 }).type('omnis{enter}');
    cy.get('table.mat-table', { timeout: 10000 }).should('contain.text', 'omnis');
  });
});