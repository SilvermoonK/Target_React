// / <reference types="Cypress" />
import { logoutStub } from 'stubs/sessionStubs';

describe('Home Page', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.visit('/');
  });

  context('Homepage View', () => {
    it.only('displays a welcome message', () => {
      cy.get('p').contains('Welcome to React Redux Base');
    });

    it('should see the logged out button', () => {
      cy.get('button').contains('LOGOUT');
    });

    it('click in the logout button,should be redirected to the login path', () => {
      cy.stubRequest(logoutStub());

      cy.get('button')
        .click()
        .wait('@logoutStub');
      cy.url().should('match', /login/);
    });
  });
});
