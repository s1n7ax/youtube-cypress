/// <reference types="cypress" />

const fs = require('fs');

module.exports = (on, _config) => {
	on('task', {
		// print: log,
		// wait: timeout,
		// files: ls,
	});
};

// const log = (message) => {
//     console.log(message);
//     return 'ok';
// };

// const timeout = (timeout) => {
//     return wait(timeout);
// };

// const ls = (path) => {
//     return fs.readdirSync(path);
// };

// const wit = (timeout) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(null);
//         }, timeout);
//     });
// };
