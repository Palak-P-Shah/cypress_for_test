Cypress.on('uncaught:exception', (err, runnable) => { return false; })
describe('Test Suite sample for staging.blavity.com' , function() {
    it.only("check if homepage loads and check title", function () {
        // cy.viewport(393, 852);
       Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com/')
        cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
    })
})