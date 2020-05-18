/// <reference types="cypress" />

describe('request command', () => {
	it('should test request command in cypress', () => {
		const log = console.log

		/* request */
		//cy.request('localhost:3000/any')
		//cy.request('localhost:3000/any', { name: 'hello' })
		//cy.request('post', 'localhost:3000/any')
		//cy.request('post', 'localhost:3000/any', { name: 'hello' })

		/* partial url */
		//cy.visit('localhost:3000')
		//cy.request('/any')

		/* options */
		//cy.request({
		//	log: true,
		//	url: 'localhost:3000/any/invalid',
		//	method: 'PUT',
		//	auth: null,
		//	body: 'string',
		//	failOnStatusCode: false,
		//	followRedirect: true,
		//	form: false,
		//	gzip: true,
		//	headers: { 'content-type': 'text/plain' },
		//	qs: { name: 'Srinesh' },
		//	retryOnStatusCodeFailure: false,
		//	retryOnNetworkFailure: true,
		//	timeout: 2000,
		//})

		//cy.request({
		//	url: 'localhost:3000/testing-api/redirect/302',
		//	method: 'GET',
		//	followRedirect: true,
		//	qs: { location: 'http://localhost:3000/any' },
		//})
		//	.its('headers')
		//	.then((e) => log(e))

		/* global configuration */
		//let globalReqConf = {
		//	log: true,
		//	url: 'localhost:3000',
		//	method: 'POST',
		//	auth: null,
		//	body: null,
		//	failOnStatusCode: true,
		//	followRedirect: true,
		//	form: false,
		//	gzip: true,
		//	headers: null,
		//	qs: null,
		//	retryOnStatusCodeFailure: false,
		//	retryOnNetworkFailure: true,
		//	timeout: 30000,
		//}

		//cy.request({ ...globalReqConf, method: 'GET' })
	})
})
