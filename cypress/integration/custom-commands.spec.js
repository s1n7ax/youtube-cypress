/// <reference types="cypress" />

describe('custom commands', () => {
	it('shoudl run custom commands', () => {
		cy.visit(
			'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics'
		);
		cy.contains('Now the actual rendered table')
			.next('table')
			.getCellValue(4, 5)
			.then(console.log);
	});
});
