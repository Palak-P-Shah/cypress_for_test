
const categoryUrls = [
                        

'https://staging.blavity.com/categories/news/politics',
'https://staging.blavity.com/categories/news/lifestyle',
'https://staging.blavity.com/categories/news/culture'
                     ]

describe('Test sample article of category pages like News, Politics, Culture, Opinon, Lifestyle', () => {

    categoryUrls.forEach(categoryUrl => {
        it(`Check Whether Category ${categoryUrl} page loads or not for Sample initial article once clicked ckecking the title`, () => {
            cy.viewport(1920, 1080);
            cy.visit(categoryUrl)
            Cypress.on('uncaught:exception', (err, runnable) => { return false; })  
            cy.get('[class="line-clamp-2"]')
            .eq(0)
            .scrollIntoView()
            .invoke('text').as('title');
            let tmp_title = '';
            cy.get('[class="lg:flex lg:flex-col lg:border-b lg:border-neutral-black lg:pb-3"]')
            .find('a img')
            .eq(0)
            .scrollIntoView()
            .click({force:true})
            // cy.wait(2000)
            cy.get('@title').then((title) => {
                cy.log('Title is: ' + title) //prints name
                tmp_title = title + ' - Blavity'
                //check title of the article page
                cy.title().should('eq', tmp_title)
                // cy.screenshot()
              })
            // cy.go('back')
          })
    })
})