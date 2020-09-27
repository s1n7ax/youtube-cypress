/// <reference types="cypress" />

describe('within command basics', () => {
	it('should test within command', () => {
		cy.visit('https://www.google.com');
		cy.search('nvidia RTX 3080');
	});
});
