describe('Test Suite to check links of Hamburger Menu' , function() {
    it.only("check if Homeandtexture link is working or not in hamburger menu", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.visit('https://www.blavity.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
        // cy.get('#nav-menu-toggler > svg')
        // .click()
        // // for homeand texture link in hamburger menu
        // cy.get('[class="gap-y-2 grid grid-cols-1"]')
        //     .find('li a')
        //     .eq(0)
        //     //.should('have.attr', 'target')
        //     .invoke('removeAttr', 'target')
        //     .click()
        //     cy.wait(4000)
        //     //Home & Texture - Home & Texture
        //     cy.title().should('eq','Home & Texture - Home & Texture')
        //     cy.go('back')
        //     cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
        
    })
    it("check if Afrotech link is working or not in hamburger menu", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        // cy.visit('https://staging.blavity.com/')
        // Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.get('#nav-menu-toggler > svg')
        .click()
        // for Afrotech link in hamburger menu
        cy.get('[class="gap-y-2 grid grid-cols-1"]')
            .find('li a')
            .eq(1)
            //.should('have.attr', 'target')
            .invoke('removeAttr', 'target')
            .click()
            cy.wait(4000)
            //Home & Texture - Home & Texture
            cy.title().should('eq','AfroTech')
            cy.go('back')
            cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
        
    })
    //
    it("check if Entertainment link is working or not in hamburger menu", function () {
        cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        cy.visit('https://staging.blavity.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.get('#nav-menu-toggler > svg')
        .click()
        // for Entertainment link in hamburger menu
        cy.get('[class="gap-y-2 grid grid-cols-1"]')
            .find('li a')
            .eq(6)
            //.should('have.attr', 'target')
            // .invoke('removeAttr', 'target')
            .click()
            cy.wait(4000)
            //Shadow And Act - Blavity News
            cy.title().should('eq','Shadow And Act - Blavity News')
            cy.go('back')
            cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
        
    })
    it("check if BlavityU link is working or not in hamburger menu", function () {
        // cy.viewport(393, 852);
        cy.viewport(1920, 1080);
        // cy.visit('https://staging.blavity.com/')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.get('#nav-menu-toggler > svg')
        .click()
        // for Entertainment link in hamburger menu
        cy.get('[class="gap-y-2 grid grid-cols-1"]')
            .find('li a')
            .eq(10)
            //.should('have.attr', 'target')
            // .invoke('removeAttr', 'target')
            .click()
            cy.wait(4000)
            //Blavity U - Blavity News
            cy.title().should('eq','Blavity U - Blavity News')
            cy.go('back')
            cy.title().should('eq','The Community for Black Creativity and News - Blavity News')
        
    })

})