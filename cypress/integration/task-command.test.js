/// <reference types="cypress" />

describe('task command', () => {
	it('should send execute something on node', () => {
		/* basic example */
		cy.task('print', 'Hello World').then((res) => console.log(res));

		/* send complex data*/
		// cy.task('print', {
		//     name: 'Srines',
		// });

		/* accessing file system */
		// cy.task('files', '/home/s1n7ax').then((res) => console.log(res));

		/* async tasks */
		// cy.task('wait', 3000).then(() => console.log('done'));
	});
});
