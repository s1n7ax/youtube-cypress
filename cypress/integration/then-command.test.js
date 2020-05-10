/// <reference types="cypress" />

describe('then command', () => {
	it('test then command functionality', () => {
		const log = console.log

		/* then() calls the passed anonymous functions */
		//cy.then(() => log('hello world'))

		/* then() passes yield value from previous command */
		//cy.visit('https://www.google.com')
		//cy.get('input[name=q]').then((subject) => log(subject))

		//cy.request(
		//	'get',
		//	'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02'
		//).then((subject) => log(subject))

		//cy.visit('https://www.google.com')
		//	.then((subject) => log('then() 1 :: ', subject))
		//	.then((subject) => log('then() 2 :: ', subject))

		//cy.visit('https://www.google.com')
		//	.then((subject) => {
		//		log('then() 1 :: ', subject)
		//		return 'hello world'
		//	})
		//	.then((subject) => log('then() 2 :: ', subject))
		//	.then((subject) => log('then() 3 :: ', subject))

		//cy.visit('https://www.google.com')
		//	.then((subject) => {
		//		log('then() 1 :: ', subject)
		//		cy.get('input[name=q]').type('hello')
		//	})
		//	.then((subject) => log('then() 2 :: ', subject))
		//	.then((subject) => log('then() 3 :: ', subject))

		/* then() will never will be called on an error in a command before */
		//cy.get('invalid-selector').then(() => log('this will never be called'))

		/* custom promises called from then() should be returned to keep the order of execution */
		//cy.visit('https://www.google.com')
		//	.then((subject) => {
		//		const wait = (waitTime) => {
		//			return new Promise((resolve) => {
		//				setTimeout(resolve, waitTime)
		//			})
		//		}

		//		wait(1000).then(() => {
		//			log('then() 1 :: ', subject)
		//			return 'hello'
		//		})
		//	})
		//	.then((subject) => log('then() 2 :: ', subject))

		/* then helps to debug */
		//cy.visit('https://www.google.com')
		//cy.then(() => log('visit command :: successful'))
		//cy.get('input[name=q]').type('hello ')
		//cy.get('input[name=q]').type('world')

		//cy.visit('https://www.google.com').then((subject) => {
		//	log('visit command :: successful')
		//	log(subject)
		//	debugger
		//})
		//cy.get('input[name=q]').type('hello ')
		//cy.get('input[name=q]').type('world')
	})
})
