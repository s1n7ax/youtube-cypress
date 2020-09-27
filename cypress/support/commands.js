/// <reference types="cypress" />

Cypress.Commands.add(
	'getCellValue',
	{ prevSubject: 'element' },
	(prevSubject, row, column) => {
		cy.wrap(prevSubject)
			.find(`tr:nth-child(${row}) td:nth-child(${column})`)
			.invoke('text');
	}
);
