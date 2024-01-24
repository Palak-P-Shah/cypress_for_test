

describe('Mobile :- Test Suite to check whether Horrizontal bar is presnet', () => {
    it('Mobile :- check whether webpage is having horrizontal scroll bar or not for https://staging.blavity.com/russell-westbrook-hbcu-pensole-lewis-lounge', () => {
      cy.viewport(393, 852);
      // cy.viewport(1920, 1080);
      cy.visit('https://staging.blavity.com/russell-westbrook-hbcu-pensole-lewis-lounge');
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      cy.window().then(win => {
        const htmlWidth = Cypress.$('html')[0].scrollWidth;
        const scrollBarWidth = win.innerWidth - htmlWidth;
        cy.log(htmlWidth)
        cy.log(scrollBarWidth)
        expect(scrollBarWidth).to.be.gt(0);                 // scrollbar is present
        // if fails Horrizontal scrollBar is present in the Mobile View
      })
      
    })
    it('Mobile :- check whether webpage is having horrizontal scroll bar or not for https://blavity.com/russell-westbrook-hbcu-pensole-lewis-lounge', () => {
      cy.viewport(393, 852);
      cy.visit('https://blavity.com/russell-westbrook-hbcu-pensole-lewis-lounge');
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      cy.window().then(win => {
        const htmlWidth = Cypress.$('html')[0].scrollWidth;
        const scrollBarWidth = win.innerWidth - htmlWidth;
        cy.log(htmlWidth)
        cy.log(scrollBarWidth)
        expect(scrollBarWidth).to.be.gt(0);                 // scrollbar is present
        // if fails Horrizontal scrollBar is present in the Mobile View
      })
    })
    it('Mobile :- check whether webpage is having horrizontal scroll bar or not for https://staging.blavity.com/entertainment/whoopi-goldberg-the-color-purple-2023-scene', () => {
      cy.viewport(393, 852);
      cy.visit('https://staging.blavity.com/entertainment/whoopi-goldberg-the-color-purple-2023-scene');
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      cy.window().then(win => {
        const htmlWidth = Cypress.$('html')[0].scrollWidth;
        const scrollBarWidth = win.innerWidth - htmlWidth;
        cy.log(htmlWidth)
        cy.log(scrollBarWidth)
        expect(scrollBarWidth).to.be.gt(0);                 // scrollbar is present
        // if fails Horrizontal scrollBar is present in the Mobile View
      })
    })
});





