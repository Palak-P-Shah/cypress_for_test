describe('Images present or Not Check on BlavityU page of Blavity app', () => {
    it('should check image Exists or Not For Sections Like News and Entertainment in blavity U Page', () => {
        // Visit the webpage containing the image
        cy.viewport(1920, 1080)
        cy.visit('https://staging.blavity.com/blavity-u')
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.get('[class="border-[3px] border-black h-[180px] mb-6 object-cover rounded-2xl w-full"]').each(($img, index, $imgs) => {
        
            // Click on the image
            cy.wrap($img).scrollIntoView()
            cy.wrap($img).click({force:true});

            // Wait for some time or specific condition (if needed)
            // cy.wait(1000); // Wait for 1 second (use this if necessary)

            // Check for naturalWidth after clicking
            cy.wrap($img).then(($imgElement) => {
                expect($imgElement[0].naturalWidth).to.be.greaterThan(0);
            });

            // Check for naturalHeight after clicking
            cy.wrap($img).then(($imgElement) => {
                expect($imgElement[0].naturalHeight).to.be.greaterThan(0);
            });
      });
    })
})