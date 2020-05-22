/// <reference types="cypress" />

/* common js import */
// const google = require('../support/Google/google-search');

/* es 2016 module imports */
// import * as google from '../support/Google/google-search';
// import googleSearch, { name, printName } from '../support/Google/google-search';
import googleSearch from '../support/Google/google-search';

describe('modules', () => {
	it('should import modules correctly', () => {
		// console.log(name);
		// printName();
		googleSearch('iphone');
	});
});
