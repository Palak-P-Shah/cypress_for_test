// import { constants } from "../../constants";
describe('Newsletter sign-up with Fixture Data', ()=>{
    
    it('should sign-up with email section 1 within Latest News', () =>{
        cy.viewport(1920, 1080);    
        cy.visit('https://staging.blavity.com')
        // cy.visit(constants.URL_STG_BLAVITY)
        // cy.visit('https://staging.blavity.com')
        logFunction("This is for test text to log :");
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.wait(2000);
        cy.get('.loader')
        .should('not.exist');
        cy.fixture('email').then(function(email)
        {
            this.email=email
            cy.get('.bg-neutral-black > :nth-child(1) > .flex > :nth-child(6)')
            .scrollIntoView()
            cy.get('[class="relative subscribe-category-selector__form flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-x-0.5 lg:gap-y-2"]')
            .first()
            .find("[type='email']")
            .click({force: true})
            .type(this.email.email)
            cy.get('[class="button-link cursor-pointer"]')
            .first()
            .click({force: true})
            cy.get('.bg-neutral-black > :nth-child(1) > .flex > :nth-child(6)')
            .scrollIntoView()
            cy.wait(4000)
            cy.get('[class="heading-h3 mb-8 mx-auto"]')
            .should('be.visible')
            .should('contain', ' Thank you for subscribing! ')
        })
    })
    it('should sign-up with email section 2 before blavity editorial', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.fixture('email').then(function(email_2)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email_2=email_2
            cy.get('[class="relative subscribe-category-selector__form flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-x-0.5 lg:gap-y-2"]')
            .last()
            .scrollIntoView()
            .find("[type='email']")
            .click({force: true})
            .type(this.email_2.email_2)
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
    it('should sign-up with email section 3 within footer', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.fixture('email').then(function(email_3)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email_3=email_3
            cy.get('[class="relative main-footer__subscribe-form flex gap-x-0.5 w-full"]')
            //.last()
            .scrollIntoView()
            .find("[type='email']")
            .click({force: true})
            .type(this.email_3.email_3)
            cy.get('[class="button-link cursor-pointer"]')
            .last()
            .click({force: true})
            cy.wait(4000)
            cy.get('[class="main-footer__subscribe-form flex gap-x-0.5 w-full"]')
            //.last()
            .should('be.visible')
            .should('contain', ' Thank you for subscribing! ')
        })   
    })
    it('should sign-up with email section 4 within hamburger menu', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.fixture('email').then(function(email_4)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email_4=email_4
            cy.get('#nav-menu-toggler > svg')
            .click()
            cy.get('[class="relative flex gap-x-0.5 w-full"]')
            .find("[type='email']")
            .click({force: true})
            .type(this.email_4.email_4)
            cy.get('.relative > .bg-main-hornblende-green')
            .click()
            cy.wait(4000)
            cy.get('[class="flex gap-x-0.5 w-full"]')
            .should('be.visible')
            .should('contain', ' Thank you for subscribing! ')
        })
    })
    it('should sign-up with email for "Newsletter" in Navbar section 5 at the top of page', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; });
        cy.get('[class="heading-h1 mb-4 text-neutral-black lg:mb-0"]')
        .scrollIntoView()
        cy.fixture('email').then(function(email_5)
        {
            Cypress.on('uncaught:exception', (err, runnable) => { return false; });
            this.email_5=email_5;
            // goes to the element of the page
            cy.get('[class="button-link border-main-hornblende-green inline-block"]')
            .invoke('removeAttr', 'target')
            .click()
            cy.wait(4000)
            // cy.window()
            // .its('open')
            // .should('be.called')
            // cy.url()
            // .should('contain', 'join.blavity')
            cy.get('[class="form-group"]')
            .click({force: true})
            .type(this.email_5.email_5)
            cy.get('[class="checkmark"]')
            .click({force: true})
            cy.get('#email-signup-form').submit()
            cy.wait(2000)
            cy.get('[class="title"]')
            .should('be.visible')
            .should('contain', 'Thank you for ')
        })
    })                             
    // it('should sign-up with email section 6 within any article page within Right Rail', () =>{
    //     cy.viewport(1920, 1080);
    //     cy.visit(constants.URL_STG_BLAVITY)
    //     Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //     cy.get('[class="heading-h1 mb-4 text-neutral-black lg:mb-0"]')
    //     // //.first()
    //     // // .should('be.visible')
    //     // .should('contain', ' Sign up for our daily newsletter ')
    //     .scrollIntoView()
    //     .click({force: true})
    //     cy.wait(7000)
        
    //     cy.fixture('email').then(function(email_5)
    //     {
    //         Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //         this.email_5=email_5;
    //         //cy.get('[class="focus-within:outline-none paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3"]')
    //         //Cypress.$("input[class='paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3 focus-within:outline-none']")
    //         cy.get('[class="focus-within:outline-none paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3"]')
    //         .type('email')
    //         //.first()
    //         .scrollIntoView()
    //         // .should('be.visible')
    //         //.find("[type='email']")
    //         .click({force: true})
    //         // type the email getting from the fixture
    //         .type(this.email_5.email_5)
    //         cy.get('[class="button-link cursor-pointer bg-main-hornblende-green mb-4 mx-4 px-4 py-3.5 text-neutral-white"]')
    //         // .click()
    //         .click({force: true})
    //         cy.wait(4000)
    //         cy.get('[class="heading-h3 mb-8 mx-auto"]')
    //         .should('be.visible')
    //         .should('contain', ' Thank you for subscribing! ')
    //     })    
    // })   
    // it('should sign-up with email section 7 within any article page, after "You May Like Taboola" section', () =>{
    //     cy.viewport(1920, 1080);
        
    //     Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //     cy.fixture('email').then(function(email_5)
    //     {
    //         Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //         this.email_5=email_5;
    //         // goes to the element of the page
    //         cy.get('[class="focus-within:outline-none"]')
    //         .first()
    //         .scrollIntoView()
    //         //clicks that link if it is clickable link
    //         .click({force: true})
    //         // hard wait - wait for 8 seconds so that article page loads
    //         //go to the email element of the article page
            
    //         // get the field where email has to be written
    //         //.find("[type='email']")
    //         //even it is hidden behind and element click on it
            
    //         // type the email getting from the fixture
    //         .type(this.email_5.email_5)
    //         cy.get('[class="button-link cursor-pointer"]')
    //         .first()
    //         .click({force: true})
    //         cy.wait(4000)
    //         cy.get('[class="subscribe-category-selector__form flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-x-0.5 lg:gap-y-2"]')
    //         .last()
    //         .should('be.visible')
    //         .should('contain', ' Thank you for subscribing! ')
            
    //     })
    // })

    // it('should sign-up with email section 7 within any article page within Right Rail', () =>{
    //     cy.viewport(1920, 1080);
    //     Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //     cy.get('[class="heading-h2 mb-12 mx-4"]')
    //     //.first()
    //     // .should('be.visible')
    //     .should('contain', ' Sign up for our daily newsletter ')
    //     .scrollIntoView()
        
    //     cy.fixture('email').then(function(email_5)
    //     {
    //         Cypress.on('uncaught:exception', (err, runnable) => { return false; });
    //         this.email_5=email_5;
    //         //cy.get('[class="focus-within:outline-none paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3"]')
    //         Cypress.$("input[class='paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3 focus-within:outline-none']")
    //         cy.get("[class='paragraph-2 bg-main-citron border-b border-main-hornblende-green mx-4 py-3 focus-within:outline-none']")
    //         .type('email')
    //         //.first()
    //         .scrollIntoView()
    //         // .should('be.visible')
    //         //.find("[type='email']")
    //         .click({force: true})
    //         // type the email getting from the fixture
    //         .type(this.email_5.email_5)
    //         cy.get('[class="button-link cursor-pointer bg-main-hornblende-green mb-4 mx-4 px-4 py-3.5 text-neutral-white"]')
    //         .click()
    //         .click({force: true})
    //         cy.wait(4000)
    //         cy.get('[class="heading-h3 mb-8 mx-auto"]')
    //         .should('be.visible')
    //         .should('contain', ' Thank you for subscribing! ')
    //     })    
    // })   


    
})
function logFunction(info) {
    // ...this function gets in string as parameter and logs it in chrome dev tools console 
    // and browser console of cypress
    cy.log(info);
    console.log(info);
}
