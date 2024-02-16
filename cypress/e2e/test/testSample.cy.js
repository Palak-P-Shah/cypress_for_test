
const categoryUrls = [
                        
'https://staging.blavity.com/categories/news/film',
'https://staging.blavity.com/categories/news/opinion',
'https://staging.blavity.com/categories/news/politics',
'https://staging.blavity.com/categories/news/lifestyle',
'https://staging.blavity.com/categories/news/culture'
                     ]

describe('Test each category page like News, Politics, Culture, Opinon, Lifestyle', () => {

    categoryUrls.forEach(categoryUrl => {

    // beforeEach(() => {
    //     })

    it(`tests url ${categoryUrl} - Loads the Category page and checks the title`, () => {
        cy.viewport(1920, 1080);
        cy.visit(categoryUrl)
        
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        // Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.url().then(($url) => {
            if($url.includes("film")) 
            {
                cy.title().should('eq','Film - Blavity News')
                
            }
            if($url.includes("culture")) 
            {
                cy.title().should('eq','Culture - Blavity News')
                  
            }
            if($url.includes("opinion")) 
            {
                cy.title().should('eq','Opinion - Blavity News')
                
            }
            if($url.includes("politics")) 
            {
                cy.title().should('eq','Politics - Blavity News')
                
            }
            if($url.includes("lifestyle")) 
            {
                cy.title().should('eq','Lifestyle - Blavity News')
                
            }
            
        })
        
    })
    it('Verify whether NavBar is present or not', () => {
        cy.viewport(1920, 1080);
        // cy.visit(categoryUrl)
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        cy.get('[class="flex gap-x-6 items-center justify-between"]').should('exist');
        cy.get('[class="flex gap-x-6 items-center justify-between"]').should('be.visible');
    })
    it('Verify whether Heading is present or not', () => {
        cy.viewport(1920, 1080);
        // cy.visit(categoryUrl)
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        cy.get('[class="heading-h1 mb-16"]').should('exist');
        cy.get('[class="heading-h1 mb-16"]').should('be.visible');
        cy.url().then(($url) => {
            if($url.includes("film")) 
            {
                cy.get('[class="heading-h1 mb-16"]')
                .should('have.text', 'Film')
            }
            if($url.includes("culture")) 
            {
                cy.get('[class="heading-h1 mb-16"]')
                .should('have.text', 'Culture')
            }
            if($url.includes("opinion")) 
            {
                cy.get('[class="heading-h1 mb-16"]')
                .should('have.text', 'Opinion')
            }
            if($url.includes("lifestyle")) 
            {
                cy.get('[class="heading-h1 mb-16"]')
                .should('have.text', 'Lifestyle')
            }
            if($url.includes("politics")) 
            {
                cy.get('[class="heading-h1 mb-16"]')
                .should('have.text', 'Politics')
            }
        })
    })
    it('get Number of Stories in Category page', () => {
        cy.viewport(1920, 1080);
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        cy.get('[class="grid gap-10 lg:gap-8 lg:grid-cols-4"]')
        .children()
        .its('length')
        .should('eq', 9)
    })
    it('Verify Whether Newsletter section is present above Footer in Category page', () => {
        cy.viewport(1920, 1080);
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        cy.get('[class="subscribe-banner text-neutral-white lg:grid lg:grid-cols-2"]')
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
        cy.wait(3000)
        cy.viewport(1920, 1080);
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]').each(($img, index, $imgs) => {
            cy.wait(1000)
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
        .should('eq', 17)
      })
      
    })
})