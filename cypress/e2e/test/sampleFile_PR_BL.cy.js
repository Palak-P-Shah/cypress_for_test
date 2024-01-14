describe('Test Suite sample for blavity.com' , function() {
    it.only("check if homepage loads and check title", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.visit('https://www.blavity.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
    })
})