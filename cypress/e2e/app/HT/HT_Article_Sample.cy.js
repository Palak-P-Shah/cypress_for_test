describe('Check URLs', () => {
    it('Extracts and checks URLs', () => {
      // Array to store URLs along with their surrounding text
      const urlsWithText = [];
      cy.viewport(1920, 1080)
      // Visit the page you want to test
      cy.visit('https://homeandtexture.com/best-wood-for-cutting-board/');
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
      // takes all images having a tag -- getting 1800 + hrefs with memory out of bound error 
      // while executing

      // cy.get('[class="card card-group"]')
      // .find('a')
      cy.get('[class="card card-group"]')
      .find('a')
      
      // container articles with tag and read more nuttons having href in a tags
      //cy.get('[class="backgroundwithtext__content text-center bg-bs-black"]')
      //.find('a')
      .each(($el) => {
        // Get the value of the href attribute from each anchor element
        const url = $el.prop('href');
        // Get the text content surrounding the URL
        const text = $el.text().trim();
        // Check if the URL is not empty and starts with 'http'
        if (url && url !== '' && url.startsWith('http')) {
          // Make a request to the URL
          cy.request({ url, failOnStatusCode: false }).then((response) => {
            // Check if the response status is not 200 (OK)
            if (response && response.status !== 200) {
              // Push the URL along with its surrounding text to the array
              urlsWithText.push({ url, text });
            }
          })
        }
      }).then(() => {
        // Log URLs along with their surrounding text to the console
        urlsWithText.forEach((urlWithText) => {
          const logMessage = `URL: ${urlWithText.url}\nLocation: ${urlWithText.text}`;
          cy.log(logMessage);
          // Append the log message to the file
          cy.writeFile('inaccessible_urls_with_text.txt', logMessage + '\n', { flag: 'a+' });
        });
      });
    });
  });