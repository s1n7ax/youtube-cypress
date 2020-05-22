/* es2016 module export */
// export const name = 'Google';
// export const printName = () => {
//     console.log('Google');
// };

export default (value) => {
	cy.visit('https://www.google.com');
	cy.get('input[name=q]').type(value);
	cy.contains('Google Search').click();
};

/* common js module export */
// module.exports = {
//     name,
//     printName,
// };
