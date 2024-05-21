describe('Check URLs for Status 500', () => {

const testUrls = [
'https://travelnoire.com/location/city/bocas-del-toro',
'https://travelnoire.com/location/city/fort-worth',
'https://travelnoire.com/location/city/lagos',
'https://travelnoire.com/location/city/limon',
'https://travelnoire.com/location/city/panama-city',
'https://travelnoire.com/location/city/toronto',
'https://travelnoire.com/location/country/',
'https://travelnoire.com/location/country/antigua',
'https://travelnoire.com/location/country/belize',
'https://travelnoire.com/location/country/canada',
'https://travelnoire.com/location/country/costa-rica',
'https://travelnoire.com/location/country/el-salvador',
'https://travelnoire.com/location/country/guatemala',
'https://travelnoire.com/location/country/honduras',
'https://travelnoire.com/location/country/mexico?tag=bhm22',
'https://travelnoire.com/location/country/nicaragua',
'https://travelnoire.com/location/country/nigeria',
'https://travelnoire.com/location/country/panama',
'https://travelnoire.com/location/country/spain',
'https://travelnoire.com/location/country/united-states?tag=bhm22',
'https://travelnoire.com/tag/',
'https://travelnoire.com/tag/adventure-travel',
'https://travelnoire.com/tag/african-diaspora',
'https://travelnoire.com/tag/airline-news',
'https://travelnoire.com/tag/airlines',
'https://travelnoire.com/tag/beach',
'https://travelnoire.com/tag/belize',
'https://travelnoire.com/tag/black-history',
'https://travelnoire.com/tag/black-travel'
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
const logMessage = `URL: ${urlObj.url}\nText: ${urlObj.text}`;
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