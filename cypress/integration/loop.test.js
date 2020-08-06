/// <reference types="cypress" />

describe('loops', () => {
	it('should loop', () => {
		// [...Array(20).keys()].every((index) => {
		//     if (index >= 10) return false;
		//
		//     console.log(index);
		//     return true;
		// });

		// cy.wrap([...Array(20).keys()]).each((index) => {
		//     if (index >= 10) return false;
		//     console.log(index);
		// });

		// const count = (index) => {
		//     console.log(index++);
		//
		//     if (index < 10) count(index);
		// };
		// count(0);

		cy.visit('https://mdbootstrap.com/docs/jquery/tables/pagination/');
		findPerson('Sakura Yamamoto');
	});
});

const findPerson = (name) => {
	const findInPage = (index) => {
		let found = false;

		cy.get('.paginate_button:not(.previous):not(.next)').as('pages');

		cy.get('@pages')
			.its('length')
			.then((len) => {
				if (index >= len) {
					return;
				}

				cy.get('@pages')
					.eq(index)
					.click();

				cy.get('#dtBasicExample > tbody > tr > td:nth-child(1)')
					.each((nameEle) => {
						const nm = nameEle.text();
						console.log(nm);
						if (name === nm) {
							found = true;
							return false;
						}
					})
					.then(() => {
						if (!found) findInPage(++index);
					});
			});
	};

	findInPage(0);
};

// Cypress.on('uncaught:exception', () => {
//     return false;
// });
