import { constants } from "../../../../../constants";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test Suite To Test Multiple Conditions in Television Page', function() 
{
    // beforeEach(() => 
    // {
    //       cy.visit(constants.URL_STG_BL_CAT_TELEVISION)
    // })
    it.only('get and check Title of the Television Page', () => {
        cy.visit(constants.URL_STG_BL_CAT_TELEVISION)
        Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        //set the viewport
        cy.viewport(1920, 1080);
        
        //visits the Film page
        // cy.log("trying to visit the page")
        // cy.visit(constants.URL_STG_BL_CAT_FILM);
        // cy.screenshot({
        //   capture: 'viewport',
        // })
        // Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.title().should('eq','Television - Blavity News')
        // cy.screenshot()
    })
//     it('Verify whether links at the top of Television page about ShadowAndAct are working or not', () => {
//       Cypress.on('uncaught:exception', (err, runnable) => { return false; })
//     //   cy.title().should('eq','Television - Blavity News')
//       //set the viewport
//       cy.viewport(1920, 1080);
//       // cy.wait(2000);
//       // cy.get('.loader')
//       // .should('not.exist');
//       //cy.get('[class=""]')
//       cy.get('[class="flex overflow-x-auto lg:gap-x-6"]')
//       .find('li')
//       .eq(1)
//       .find('a')
//       .should('be.visible')
//       //.eq(1)
//       .click({force:true})
//       cy.wait(3000)
//       cy.title().should('eq','Television - Blavity News')
//       cy.get('[class="flex overflow-x-auto lg:gap-x-6"]')
//       .find('li')
//       .eq(2)
//       .find('a')
//       //.eq(1)
//       .click({force:true})
//       cy.wait(3000)
//       cy.title().should('eq','Unscripted - Blavity News')
//       cy.get('[class="flex overflow-x-auto lg:gap-x-6"]')
//       .find('li')
//       .eq(3)
//       .find('a')
//       //.eq(1)
//       .click({force:true})
//       cy.wait(3000)
//       cy.title().should('eq','Interviews - Blavity News')
//       // go back
//       cy.go('back')
//       cy.wait(1000)
//       cy.title().should('eq','Unscripted - Blavity News')
//       // Social Media Links
//       //Facebook
//       cy.get('[class="flex gap-x-6"]')
//       .find('a')
//       .eq(0)
//       .invoke('removeAttr', 'target').click()
//       cy.wait(3000)
//       cy.title().should('include', 'Facebook')
//       cy.go('back')
//       //Instagram
//       cy.get('[class="flex gap-x-6"]')
//       .find('a')
//       .eq(1)
//       .invoke('removeAttr', 'target').click()
//       cy.wait(3000)
//       cy.title().should('include', 'Instagram')
//       cy.go('back')
//       //X (twitter)
//       cy.get('[class="flex gap-x-6"]')
//       .find('a')
//       .eq(3)
//       .invoke('removeAttr', 'target').click()
//       cy.wait(3000)
//       cy.title().should('include', 'X')
//       cy.visit(constants.URL_STG_BL_CAT_TELEVISION);
//   })
    describe('To Test Whether Multiple sections do exist being visible in Television Page', function() 
    {
      it('get and check ShodowAndAct Header section is present or not present below the NavBar on the Television Page', () => {
        cy.viewport(1920, 1080);
        // cy.title().should('eq','Television - Blavity News')
        //Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        //cy.get('[class=""]')
        // ShodowAndAct Header section is present or not
        cy.get('[class="px-4 py-6 lg:flex lg:pr-6"]').should('exist');
        cy.get('[class="px-4 py-6 lg:flex lg:pr-6"]').should('be.visible');
        // cy.screenshot({
        //   capture: 'viewport',
        // })
      })
      it('get and check links of ShadowAndAct App are present on the Television Page', () => {
        cy.viewport(1920, 1080);
        //cy.get('[class=""]')
        // ShodowAndAct Header section is present or not
        cy.get('[class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:items-center"]').should('exist');
        cy.get('[class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:items-center"]').should('be.visible');  
        // cy.screenshot()
      })
      it('get and check Television Header Title before Articles is present on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="heading-h1 mb-16"]').should('exist');
        cy.get('[class="heading-h1 mb-16"]').should('be.visible');  
        // cy.screenshot()
      })
      it('Check Newsletter Sign-up section after Articles and above footer is present on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="flex flex-col gap-y-16 lg:flex-row lg:items-end lg:justify-between"]')
        .should('exist');
        cy.get('[class="flex flex-col gap-y-16 lg:flex-row lg:items-end lg:justify-between"]')
        .should('be.visible');  
        // cy.screenshot()
      })
      it('Check Whether all article images have loaded or not on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .first()
        .should('exist');
        // cy.wait(4000)
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .first()
        //.should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
        .should('be.visible')
        .and(($img) => {
                  expect($img[0].naturalWidth).to.be.greaterThan(0);
                  expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(1)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(1)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(2)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(2)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(3)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(3)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(4)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(4)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);

        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(5)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(5)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(6)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(6)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(7)
        .should('exist');
        cy.get('[class="aspect-[4/3] object-cover w-full"]')
        .eq(7)
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })  
        // cy.screenshot()
      })
      it('Check Whether all article title have loaded or not on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="line-clamp-2"]')
        .eq(0)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(1)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(2)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(3)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(4)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(5)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(6)
        .should('exist')
        .should('have.length.greaterThan',0)
        cy.get('[class="line-clamp-2"]')
        .eq(7)
        .should('exist')
        .should('have.length.greaterThan',0)
      })
      it('Check Whether all article tags have loaded or not on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(0)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(1)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(2)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(3)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(4)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(5)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(6)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(7)
        .find('a')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)                
      })
      it('Check Whether all article have Date being loaded or not on the Television Page', () => {
        cy.viewport(1920, 1080);
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(0)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(1)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(2)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(3)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(4)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(5)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(6)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
        cy.get('[class="flex flex-wrap items-center mt-2 lg:flex-1"]')
        .eq(7)
        .find('p')
        .its('length') // calls 'length' property returning that value.
        .should('be.gt', 0)
      })
    })
    it.only('get count of articles on the Television Page', () => {
      cy.wait(10000)
      cy.viewport(1920, 1080);
    //   Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      //cy.get('[class=""]')
      cy.get('[class="grid gap-10 lg:gap-8 lg:grid-cols-4"]').should('be.visible')
      .children()
      .its('length')
      .should('eq', 8)
      //cy.screenshot()
    })
    it('Check Whether Load More Stories Button is working on the Television Page with Number of Articles Populated', () => {
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      // 
      cy.get('[class="button-link border border-main-hornblende-green max-w-[198px] py-[13px] w-full"]')
      .click({force : true})
      cy.wait(2000)
      cy.get('[class="grid gap-10 lg:gap-8 lg:grid-cols-4"]')
      .children()
      .its('length')
      .should('eq', 16)
      //cy.screenshot()
    })
    // it('Check Whether Sample Article of Film Page is working as expected or not', () => {
    //   cy.viewport(1920, 1080);
    //   Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      
    //   cy.get('[class="line-clamp-2"]')
    //   .first()
    //   .invoke('text').as('textTitle');
    //   let tmp_url = "";
    //   let tmp_href = '';
    //   cy.get('[class="heading-h4 inline-block"]')
    //       .first()
    //       .should('have.attr', 'href')
    //       .as('temporary')
    //       .then((href) => {
    //         // getting this value of href
    //         cy.log(href)
    //         console.log(href)
    //         tmp_url = "https://staging.blavity.com" + href;
    //         cy.log("1 ",tmp_url)
    //         console.log(tmp_url)
    //       })
    //   cy.get('@temporary').then(() => cy.log("11",tmp_url))
    //   cy.log("1111 ",tmp_url)
    //   cy.get('[class="heading-h4 inline-block"]')
    //   .first()
    //   .invoke('attr','href').as('url_link');
    //   let tmp_title = "";
    //   cy.get('[class="aspect-[4/3] object-cover w-full"]')
    //   .first()
    //   .scrollIntoView()
    //   .click({force : true})
    //   cy.intercept('POST',tmp_url)
    //   .as('getArticle');
    //   cy.wait('@getArticle', {timeout: 8000})
    //   // cy.wait(6000)
    //   cy.get('@textTitle').then((textTitle) => {
    //     cy.log('Title is: ' + textTitle) //prints name
    //     tmp_title = textTitle + ' - Blavity'
    //     //check title of the article page
    //     cy.title().should('eq', tmp_title)
    //     // cy.screenshot()
    //   })
    //   cy.get('@url_link').then((url) => {
    //     cy.log('url is: ' + url) //prints name
    //     // tmp_url = textTitle + ' - Blavity'
    //     cy.log("3 ",tmp_url)
    //     //check title of the article page
    //     cy.url().should('eq', tmp_url)
    //     // cy.screenshot()
    //   })
    //   // go back to Film Page
    //   //cy.go('back')
    //   // cy.go(-1)
    //   cy.visit(constants.URL_STG_BL_CAT_FILM)
    //   // cy.wait(4000)
    //   cy.title().should('eq','Film - Blavity News')
    //   // cy.screenshot()
    // })
    it('should sign-up with email, within NewsLetter Sign-Up section in Television Page', () =>{
      cy.viewport(1920, 1080);    
      
      Cypress.on('uncaught:exception', (err, runnable) => { return false; });
      cy.fixture('email').then(function(email)
      {
          this.email=email
          cy.get('[class="button-link border border-main-hornblende-green max-w-[198px] py-[13px] w-full"]')
          .scrollIntoView()
          cy.get('[class="border-main-shadowandact paragraph-1 bg-transparent border-0 border-b flex-1 outline-none py-3 lg:w-[334px]"]')
          .first()
          // .find("[type='email']")
          .click({force: true})
          .type(this.email.email)
          cy.get('[class="bg-main-shadowandact button-link px-[27px] py-[14px] uppercase lg:px-[51px]"]')
          .first()
          .click({force: true})
          cy.get('[class="heading-h3 mb-8 mx-auto"]')
          .scrollIntoView()
          cy.wait(2000)
          cy.get('[class="heading-h3 mb-8 mx-auto"]')
          .should('be.visible')
          .should('contain', ' Thank you for subscribing! ')
      })
  })
    // it('Verify whether display-advertisement-unit is present after Load More Stories Button or not.', () => {
    //   cy.viewport(1920, 1080);
    //   cy.wait(2000)
    //   cy.get('[class="adgrid-ad-container"]').should('exist');
    //   cy.get('[class="adgrid-ad-container"]').should('be.visible');  
    //   cy.get('[class="adgrid-ad-container"]').scrollIntoView();
    //   cy.wait(2000)
    //   cy.get('[class="google_ads_iframe_/11462305847/bla/entertainment_0__container__"]')
    //   .invoke('removeAttr', 'target')
    //   .click({force : true});
      
    // })
})