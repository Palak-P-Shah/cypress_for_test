import { constants } from "../../../../../constants";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test Suite To Test Multiple Conditions in Television Page', function() 
{
    // beforeEach(() => 
    // {
    //       cy.visit(constants.URL_STG_BL_CAT_TELEVISION)
    // })
    it('get and check Title of the Television Page', () => {
        cy.visit(constants.URL_STG_BL_CAT_TELEVISION)
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        //set the viewport
        cy.viewport(1920, 1080);
        
        cy.title().should('eq','Television - Blavity News')
        
    })

    it('get count of articles on the Television Page', () => {
      cy.wait(20000)
      cy.get('.loader')
      .should('not.exist');
      cy.viewport(1920, 1080);
    //   Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      //cy.get('[class=""]')
      cy.get('[class="lg:flex lg:flex-col lg:border-b lg:border-neutral-black lg:pb-3"]').should('be.visible')
      cy.get('[class="lg:flex lg:flex-col lg:border-b lg:border-neutral-black lg:pb-3"]')
      .its('length')
      .should('eq', 8)
      //cy.screenshot()
    })

})