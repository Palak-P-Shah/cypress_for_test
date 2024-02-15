describe('Social Media Icons Test', () => {
    it("check if all soial media icons are present and clickable", () => {
        // Set viewport size to emulate a mobile resolution
        cy.viewport(375, 812);
        // Visit the URL
        cy.visit('https://staging.blavity.com/visit-philadelphia-banned-books-little-free-library');
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
          cy.get('[class="flex gap-6 items-center"] li a').each(($socialIcon, index) => {
            // Get the href attribute of the social media icon
            const href = $socialIcon.attr('href');
            // Open the social media icon in a new tab
            cy.visit(href, { timeout: 80000 });
            // Log a message to indicate that the social media icon was visited
            cy.log(`Visited social media icon ${index + 1}`);
            // Switch back to the original page
            cy.go('back');
          });
      });
  });