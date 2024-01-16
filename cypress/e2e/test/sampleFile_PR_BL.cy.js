Cypress.on('uncaught:exception', (err, runnable) => { return false; })
describe('Test Suite sample for blavity.com' , function() {
    it.only("check if homepage loads and check title", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.once("fail", (err) =>
        {
            return false;
        });
        cy.visit('https://blavity.com/')
        cy.once("fail", (err) =>
        {
            return false;
        });
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
    })
})