describe('Check URLs for Status 500', () => {

const testUrls = [   
'https://travelnoire.com/tag/louisiana',
'https://travelnoire.com/tag/new-orleans',
'https://travelnoire.com/tag/beach-towns',
'https://travelnoire.com/tag/cabo',
'https://travelnoire.com/location/city/mexico?tag=bhm22',
'https://travelnoire.com/tag/travel-safety'
];

beforeEach(() => {
// Configure Cypress to handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
// Return false to prevent Cypress from failing the test on uncaught exceptions
return false;
});
});

testUrls.forEach((pageUrl) => {
it(`Extracts and checks URLs from ${pageUrl}`, () => {
// Set viewport size
cy.viewport(1920, 1080);

// Array to store URLs with status 500
const urls500 = [];

// Visit the page you want to test
cy.visit(pageUrl);

// Wait for page content to load
cy.wait(6000);

// Find all elements with class "tag-link"
cy.get('.tag-link').each(($el) => {
const url = $el.prop('href');
const text = $el.text().trim();

// Check if the URL is valid and starts with 'http'
if (url && url.startsWith('http')) {
// Make a request to the URL
cy.request({ url, failOnStatusCode: false }).then((response) => {
// Check if the response status is 500
if (response.status === 500) {
//Push the URL to the array
urls500.push({ url, text });
}
});
}
}).then(() => {
// Log URLs with status 500 to the Cypress console
urls500.forEach((urlObj) => {
const logMessage = `(' ${urlObj.url}'\n`;
cy.log(logMessage);
});

// Store URLs with status 500 in a text file
const filePath = 'urls_with_status_500.txt';
cy.writeFile(filePath, '', { flag: 'w' }); // Clear existing content or create a new file

urls500.forEach((urlObj) => {
const logMessage = `${urlObj.url}\nText: ${urlObj.text}\n\n`;
cy.writeFile(filePath, logMessage, { flag: 'a' }); // Append each URL to the file
});
});
});
});
});