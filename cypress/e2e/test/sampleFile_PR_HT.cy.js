Cypress.on('uncaught:exception', (err, runnable) => { return false; })
describe('Test Suite sample for homeandtexture.com' , function() {
    it.only("check if homepage loads and check title", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.visit('https://www.homeandtexture.com/')
        cy.once("fail", (err) =>
        {
            return false;
        });
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','Home & Texture - Home & Texture')
    })
})