import { constants } from "../../constants";
const categoryUrls = [
                        constants.URL_STG_BL_CAT_ENT_FILM,
                        constants.URL_STG_BL_CAT_ENT_TELEVISION,
                        //constants.URL_STG_BL_CAT_ENT_UNSCRIPTED,
                        //constants.URL_STG_BL_CAT_ENT_INTERVIEWS,                        
                     ]
    describe('Test each category page of Entertainment [SA] like Film, Television', () => 
    {
        categoryUrls.forEach(categoryUrl => 
        {

                // beforeEach(() => {
                //     })

            it(`tests url ${categoryUrl}`, () => 
            {
                cy.viewport(1920, 1080);
                cy.visit(categoryUrl)
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                // Cypress.on('uncaught:exception', (err, runnable) => { return false; })
                cy.url().then(($url) => {
                    if($url.includes("film")) 
                    {
                        cy.title().should('eq','Film - Blavity News')
                        
                    }
                    if($url.includes("television")) 
                    {
                        cy.title().should('eq','Television - Blavity News')
                    }
                    
                })
            })
            it('Verify whether NavBar, SA Navbar and Explore SA Navbar are present or not', () => {
                cy.viewport(1920, 1080);
                // cy.visit(categoryUrl)
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="flex gap-x-6 items-center justify-between"]').should('exist');
                cy.get('[class="flex gap-x-6 items-center justify-between"]').should('be.visible');
                cy.get('[class="px-4 py-6 lg:flex lg:pr-6"]').should('exist');
                cy.get('[class="px-4 py-6 lg:flex lg:pr-6"]').should('be.visible');
                cy.get('[class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:items-center"]').should('exist');
                cy.get('[class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:items-center"]').should('be.visible');
            })
            it('Verify whether Heading is present or not', () => {
                cy.viewport(1920, 1080);
                // cy.visit(categoryUrl)
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="heading-h1 mb-16"]').should('exist');
                cy.get('[class="heading-h1 mb-16"]').should('be.visible');
                // cy.url().then(($url) => {
                //     if($url.includes("film")) 
                //     {
                //         cy.get('[class="heading-h1 mb-16"]')
                //         .should('eq','Film')    
                //     }
                // })
            })
            it('get Number of Stories in Category page', () => {
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="grid gap-10 lg:gap-8 lg:grid-cols-4"]')
                .children()
                .its('length')
                .should('eq', 8)
            })
            it('Verify Whether Newsletter section is present above Footer in Category page', () => {
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="py-10 text-neutral-white lg:py-16 sa-subscribe-banner-1 lg:mt-20"]')
                .scrollIntoView()
                .should('exist')
                .should('be.visible')
            })
            it('Verify Whether Footer is present in Category page', () => {
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="main-footer bg-neutral-black py-8 text-neutral-white lg:pb-16"]')
                .scrollIntoView()
                .should('exist')
                .should('be.visible')
            })
            it('Verify whether Image of Each Article is present or not', () => {
                // cy.wait(3000)
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="aspect-[4/3] object-cover w-full"]').each(($img, index, $imgs) => {
                    cy.wrap($img).scrollIntoView()
                    // cy.wrap($img).click({force:true});
                    cy.wrap($img).then(($imgElement) => {
                        expect($imgElement[0].naturalWidth).to.be.greaterThan(0);
                    });
                    cy.wrap($img).then(($imgElement) => {
                        expect($imgElement[0].naturalHeight).to.be.greaterThan(0);
                    });
              });
            })
            it('Verify whether title of Each Article is present or not', () => {
                // cy.wait(3000)
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="line-clamp-2"]').each(($title, $index, $titles) => {
                    cy.wrap($title)
                    .should('exist')
                    .should('be.visible')
                    cy.wrap($title).scrollIntoView()
                    cy.wrap($title).its('length').should('be.gt', 0)
                    // cy.wrap($title).click({force: true})
                })
            })
            it('Verify whether tags of Each Article are present or not', () => {
                cy.wait(3000)
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
                .find('a')
                .each(($tag, $index, $tags) => {
                    cy.wrap($tag)
                    .should('exist')
                    .should('be.visible')
                    cy.wrap($tag).scrollIntoView()
                    cy.wrap($tag).its('length').should('be.gt', 0)
                    // cy.wrap($tag).click({force: true})
                })
            })
            it('Verify whether Published Date of Each Article are present or not', () => {
                cy.wait(3000)
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
                .find('p')
                .each(($date, $index, $dates) => {
                    cy.wrap($date)
                    .should('exist')
                    .should('be.visible')
                    cy.wrap($date).scrollIntoView()
                    cy.wrap($date).its('length').should('be.gt', 0)
                    // cy.wrap($tag).click({force: true})
                })
            })
            it('get Number of Stories in Category page after clicking load more', () => {
                cy.viewport(1920, 1080);
                Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
                cy.get('[class="button-link border border-main-hornblende-green max-w-[198px] py-[13px] w-full"]')
                .scrollIntoView()
                .click({force:true})
                cy.wait(2000)
                cy.get('[class="grid gap-10 lg:gap-8 lg:grid-cols-4"]')
                .children()
                .its('length')
                .should('eq', 16)
              })
    })
})