import { constants } from "../../../../../constants";


describe('Test Suite To Test Multiple Conditions in Film Page', function() 
{
    
    it('Check Whether Sample Article of Film Page is working as expected or not', () => {
      cy.viewport(1920, 1080);
      cy.visit(constants.URL_STG_BL_CAT_FILM)
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      cy.get('.loader')
      .should('not.exist');
      
      cy.get('[class="pt-4 px-4 lg:px-0 lg:flex-1 lg:flex lg:flex-col"]')
      .first()
      .find('a span')
      .eq(0)
      .invoke('text').as('textTitle');
      let tmp_url = "";
      let tmp_href = '';
      cy.get('[class="heading-h4 inline-block"]')
          .first()
          .should('have.attr', 'href')
          .as('temporary')
          .then((href) => {
            // getting this value of href
            cy.log(href)
            console.log(href)
            tmp_url = "https://staging.blavity.com" + href;
            cy.log("1 ",tmp_url)
            console.log(tmp_url)
          })
      cy.get('@temporary').then(() => cy.log("11",tmp_url))
      cy.log("1111 ",tmp_url)
      cy.get('[class="heading-h4 inline-block"]')
      .first()
      .invoke('attr','href').as('url_link');
      let tmp_title = "";
      cy.get('[class="aspect-[4/3] object-cover w-full"]')
      .first()
      .scrollIntoView()
      .click({force : true})
      cy.intercept('POST',tmp_url)
      .as('getArticle');
      cy.wait('@getArticle', {timeout: 8000})
      // cy.wait(6000)
      cy.get('@textTitle').then((textTitle) => {
        cy.log('Title is: ' + textTitle) //prints name
        tmp_title = textTitle + ' - Blavity'
        //check title of the article page
        cy.title().should('eq', tmp_title)
        // cy.screenshot()
      })
      cy.get('@url_link').then((url) => {
        cy.log('url is: ' + url) //prints name
        // tmp_url = textTitle + ' - Blavity'
        cy.log("3 ",tmp_url)
        //check title of the article page
        cy.url().should('eq', tmp_url)
        // cy.screenshot()
      })
      // go back to Film Page
      //cy.go('back')
      // cy.go(-1)
    //   cy.visit(constants.URL_STG_BL_CAT_FILM)
      // cy.wait(4000)
    //   cy.title().should('eq','Film - Blavity News')
      // cy.screenshot()
    })
})