/// <reference types="cypress" />

let log = console.log;

describe('loops', () => {
	it('should loop', () => {
		log('1');
		cy.visit('https://www.google.com');
		log('2');
		cy.get('[name=q]').type('hello world');
		log('3');

		/* for loop */
		// for (let i = 0; i < 3; i++) {
		//     log('- ', i);
		//     cy.then(() => log('* ', i));
		// }

		/* for each loop */
		// cy.wrap(['a', 'b', 'c']).each((ele) => log(ele));

		/* for each loop */
		// cy.get('a').each((ele) => log(ele.text()));

		/* community question 1 */
		// let list = [];
		//
		// for (let i = 0; i < 10; i++) {
		//     cy.then(() => {
		//         list.push(i);
		//     });
		// }
		//
		// log(list.length);
		// cy.then(() => {
		//     log(list.length);
		// });

		/* community question 2 */
		// let loop = true;
		//
		// while (loop) {
		//     cy.get('[name=q]').then((ele) => {
		//         if (ele.text() === 'hello world') loop = false;
		//     });
		// }
	});
});
