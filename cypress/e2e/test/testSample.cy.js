import { constants } from "../../constants";
describe('Test Suite to check whether colon is present above the video in article page' , function() {
  
    it('should sign-up with email section 1 within any article page within Right Rail', () =>{
        cy.viewport(1920, 1080);
        cy.visit(constants.URL_STG_BLAVITY)
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.get('[class="heading-h1 mb-4 text-neutral-black lg:mb-0"]')
 
        .scrollIntoView()
        .click({force: true})
        cy.wait(7000)
        
        cy.fixture('email').then(function(email)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email=email;
          
            cy.get('[class="focus-within:outline-none paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3"]')
            //.type('email')
            .scrollIntoView()
            .click({force: true})
            
            .type(this.email.email)
            cy.get('[class="button-link cursor-pointer bg-main-hornblende-green mb-4 mx-4 px-4 py-3.5 text-neutral-white"]')
            // .click()
            .click({force: true})
            cy.wait(4000)
            cy.get('[class="heading-h3 mb-8 mx-auto"]')
            .should('be.visible')
            .should('contain', ' Thank you for subscribing! ')
        })    
    })   
    it('should sign-up with email section 2 within any article page, after "You May Like" section', () =>{
        cy.viewport(1920, 1080);
        
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.fixture('email').then(function(email)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email=email;
      
            cy.get('[class="focus-within:outline-none"]')
            .first()
            .scrollIntoView()
          
            .click({force: true})
           
            .type(this.email.email)
            cy.get('[class="button-link cursor-pointer"]')
            .first()
            .click({force: true})
            cy.wait(4000)
            cy.get('[class="subscribe-category-selector__form flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-x-0.5 lg:gap-y-2"]')
            .last()
            .should('be.visible')
            .should('contain', ' Thank you for subscribing! ')
            
        })
    })
})