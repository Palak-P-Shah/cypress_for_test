describe('Fetch URLs of class "text-h3-mobile" with Load More', () => {
    it('Extracts and stores URLs', () => {
      // Set viewport size
      cy.viewport(1920, 1080);
  
      // Array to store URLs
      const tagLinks = [];
  
      // Function to fetch URLs from elements with class "text-h3-mobile"
      const fetchUrls = () => {
        cy.get('[class="line-clamp-2"]').each(($el) => {
          const url = $el.prop('href');
          const text = $el.text().trim();
  
          // Check if the URL is valid and starts with 'http'
          if (url && url.startsWith('http')) {
            // Push the URL to the array if it doesn't already exist
            if (!tagLinks.some(link => link.url === url)) {
              tagLinks.push({ url, text });
            }
          }
        });
      };
  
      // Visit the page you want to test
      cy.visit('https://blavity.com/entertainment/category/film');
  
      // Wait for page content to load
      cy.wait(6000);
  
      // Listen to uncaught exceptions and suppress them
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
      });
  
      // Fetch initial URLs
      fetchUrls();
  
      // Function to handle "Load More" button clicks
      const clickLoadMore = () => {
        cy.get('[class="button-link border border-main-hornblende-green max-w-[198px] py-[13px] w-full"]').then($btn => {
          if ($btn.length > 0) {
            cy.wrap($btn).click();
            cy.wait(6000); // Wait for new content to load
            fetchUrls(); // Fetch URLs from the new content
            clickLoadMore(); // Recursive call to handle more clicks
          }
        });
      };
  
      // Start clicking "Load More" button if it exists
      clickLoadMore();
  
      // Store URLs in a text file after fetching all URLs
      cy.then(() => {
        const filePath = 'article_Bl_links.txt';
        cy.writeFile(filePath, '', { flag: 'w' }); // Clear existing content or create a new file
  
        tagLinks.forEach((linkObj) => {
          const logMessage = `{ 'url': '${linkObj.url}', 'text': '${linkObj.text}' }\n`;
          cy.writeFile(filePath, logMessage, { flag: 'a' }); // Append each URL to the file
        });
      });
    });
  });