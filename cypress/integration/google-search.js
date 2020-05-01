describe('', () => {
	it('', () => {
		cy.viewport(1920, 1080)
		cy.visit('https://www.google.com/')
		cy.xpath('//input[@name="q"]').type('iphone')
	})
})
