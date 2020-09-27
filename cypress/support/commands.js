/// <reference types="cypress" />
Cypress.Commands.add('hello', () => {
	console.log('Hello World');
});

Cypress.Commands.add('search', (searchValue) => {
	cy.get('[name=q]').type(searchValue);
	cy.contains('Google Search').click();
});
