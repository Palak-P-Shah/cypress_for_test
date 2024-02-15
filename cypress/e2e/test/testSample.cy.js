describe('Test Suite to check Social Media Icons on Article page of ST BL', () => {
    it("check if 4 Social Media Links are there or not below the Title", () => {
        // Set viewport size to emulate a mobile resolution
        cy.viewport(375, 812);
        // Visit the URL
        cy.visit('https://staging.blavity.com/visit-philadelphia-banned-books-little-free-library');
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.get('[class="mb-10 lg:flex lg:gap-16 lg:items-center lg:mb-14"]')
        .find('ul li a')
        .its('length').should('eq', 4)
    })
    it("check if Facebook link is present and is clickable", () => {
        cy.viewport(375, 812);
        cy.get('[class="mb-10 lg:flex lg:gap-16 lg:items-center lg:mb-14"]')
        .find('ul li a')
        .eq(0)
        .invoke('removeAttr', 'target').click({force:true})
        cy.wait(3000)
        cy.title().should('include', 'Facebook')
        cy.go('back')
    })
    it("check if Twitter Link is present and is clickable", () => {
        cy.viewport(375, 812);
        cy.get('[class="mb-10 lg:flex lg:gap-16 lg:items-center lg:mb-14"]')
        .find('ul li a')
        .eq(1)
        .invoke('removeAttr', 'target').click({force:true})
        cy.wait(3000)
        cy.title().should('include', 'X')
        cy.go('back')
    })
    it("check if LinkedIn Link is present and is clickable", () => {    
        cy.viewport(375, 812);
        cy.get('[class="mb-10 lg:flex lg:gap-16 lg:items-center lg:mb-14"]')
        .find('ul li a')
        .eq(2)
        .invoke('removeAttr', 'target').click({force:true})
        cy.wait(3000)
        cy.title().should('include', 'LinkedIn')
        cy.go('back')
    })
    it("check if Threads Link is present and is clickable", () => {    
        cy.viewport(375, 812);
        cy.get('[class="mb-10 lg:flex lg:gap-16 lg:items-center lg:mb-14"]')
        .find('ul li a')
        .eq(3)
        .invoke('removeAttr', 'target').click({force:true})
        cy.wait(3000)
        cy.title().should('include', 'Threads')
        // cy.go('back')
      })
  });