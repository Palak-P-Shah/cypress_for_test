describe('Test Suite for homeandtexture.com' , function() {
    it("check if homepage is loading and check title", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.visit('https://homeandtexture.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','Home & Texture - Home & Texture')
    })
    describe('Test Suite Having Multiple Checks for homepage homeandtexture.com' , function() {
        it("check if tags are present or not for hero images of Homeownership and DIY Sections", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            cy.get('[class="subtitle text-white"]')
            // .find('a')
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                cy.wrap($tag).its('length').should('be.gt', 0)
                cy.wrap($tag).click({force: true})
                
            })
        })
        it("check if title is present or not for Homeownership Section on Homepage", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            cy.get('[class="font-tangerine color-black"]')
            // .find('a')
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                cy.wrap($tag).its('length').should('be.gt', 0)
                cy.wrap($tag).click({force: true})
                
            })
        })
        it("check if title is present or not for DIY Section on Homepage", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            cy.get('[class="font-tangerine color-white"]')
            // .find('a')
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                cy.wrap($tag).click({force: true})
                cy.wrap($tag).its('length').should('be.gt', 0)
            })
        })
        it("check if title is present or not for Spaces Section on Homepage", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            cy.get('[class="font-tangerine border-bottom color-black"]')
            // .find('a')
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                cy.wrap($tag).click({force: true})
                cy.wrap($tag).its('length').should('be.gt', 0)
            })
        })
        it("check if text below title is present or not for Homeownership Section on Homepage", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            cy.get('[class="imagewithtext__content text-center"]')
            .find('p')
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                // cy.wrap($tag).click({force: true})
                cy.wrap($tag).its('length').should('be.gt', 0)
            })
        })
        it("check if text below title is present or not for Homeownership Section 2 on Homepage", function () {
            // cy.viewport(393, 852);
            cy.viewport(1920, 1080);
            // cy.visit('https://homeandtexture.com/')
            // Cypress.on('uncaught:exception', (err, runnable) => { return false; })
            //  cy.get('parentContainer').within(()=>{
            // cy.get('[class="row"]').within(()=>{
            cy.get('[class="col-12 col-md-9 col-lg-7 me-auto ms-auto text-center"]')
            // .its('0.contentDocument.body').should('not.be.empty')
            // .then(cy.wrap)
            //.find('p')
            
            // .eq(0)
            .each(($tag, index, $tags) => {
                cy.wrap($tag)
                .should('exist')
                .should('be.visible')
                cy.wrap($tag).scrollIntoView()
                // cy.wait(1000)
                // cy.wrap($tag).click({force: true})
                cy.wrap($tag).its('length').should('be.gt', 0)
            })
        // })
        })
        it('should check the size and visibility of an image blavity U', () => {
            cy.viewport(1920, 1080)
            cy.get('[class="img-fluid lazyloaded"]').each(($img, index, $imgs) => {
            cy.wrap($img).then(($imgElement) => {
                expect($imgElement[0].naturalHeight).to.be.greaterThan(0);
                expect($imgElement[0].naturalWidth).to.be.greaterThan(0);
            })
          })
        })
    })
})