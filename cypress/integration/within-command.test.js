/// <reference types="cypress" />

describe('within command basics', () => {
	it('should test within command', () => {
		cy.visit('http://127.0.0.1:8080/views/iframe-example.html');
		// cy.get('#email').type('hello world');

		// cy.get('#container2').within(() => {
		//     cy.get('#email').type('hello world');
		// });

		cy.get('iframe')
			.its('0.contentDocument.body')
			.within(() => {
				cy.get('#container2').within({ log: false }, () => {
					cy.get('#email').type('hello world');
				});
			});
	});
});
