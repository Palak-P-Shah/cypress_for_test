describe('Test Suite sample for staging.afrotech.com' , function() {
    it.only("check if homepage loads and check title", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.visit('https://staging.afrotech.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','Afrotech')
    })
})