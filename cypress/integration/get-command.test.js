/// <reference types="cypress" />

describe('get command', () => {
	it('test get command functionality', () => {
		cy.visit('http://127.0.0.1:5500/views/example.html')

		/* filter one or more elements and yield */
		//cy.get('#name').type('Srinesh')
		//cy.get('input')
		//cy.get('input').type('Srinesh')
		//cy.get('#group').get('input')

		/* invalid selector */
		//cy.get('#invalid-selector').type()

		/* working with alias */
		//cy.get('#name').as('userName')
		//cy.get('@userName').type('Srinesh')

		/* GET command options */
		//cy.get('#name', {
		//	log: false,
		//})

		//cy.get('#invalid-selector', { timeout: 10000 })

		//cy.get('#group').then((ele) => {
		//	cy.get('input', {
		//		withinSubject: ele,
		//	})
		//})
	})
})
