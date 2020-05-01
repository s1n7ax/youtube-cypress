/// <reference types="cypress" />

describe('google search', () => {
	it('should search the given value', () => {
		cy.viewport(1920, 1080)
		cy.visit('https://www.google.com/')

		cy.get('[name="q"]').type('iphone')
		cy.contains('Google Search').click()
	})
})
