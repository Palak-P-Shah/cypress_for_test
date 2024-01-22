Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
after(function() {
  cy.window().then(win => win.onbeforeunload = undefined );
});