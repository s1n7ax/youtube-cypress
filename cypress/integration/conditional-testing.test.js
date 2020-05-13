/// <reference types="cypress" />

describe('conditional testing', () => {
	it('should test conditional testing in cypress', () => {
		const log = console.log

		//cy.visit('https://www.google.com')
		//const input = cy.get('input[name=q]')

		/* don't do this */
		//if (input) {
		//	console.log('do something')
		//}

		//console.log(input)

		/* don't do this */
		//cy.get('input[name=q]')
		//	.should('have.value', 'something')
		//	.then(() => {
		//		console.log('do something')
		//	})

		/* don't do this */
		//cy.get('label:contains(Readonly)').then((readonly) => {
		//	console.log(readonly)
		//})

		//cy.visit('http://127.0.0.1:5500/views/example.html')

		/* correct way to do conditional test */
		//cy.get('body').then((body) => {
		//	console.log(body.find('label:contains(Readonly)'))
		//	if (body.find('label:contains(Readonly)').length > 0)
		//		cy.get('#edit').click()
		//})

		//cy.get('#name').type('Srinesh')
		//cy.get('#age').type('27')
	})
})
