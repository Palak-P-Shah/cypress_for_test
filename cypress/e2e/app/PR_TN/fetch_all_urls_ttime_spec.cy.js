describe('Check URLs for Status 500', () => {

const testUrls = [
    'https://travelnoire.com/tag/gaza',
'https://travelnoire.com/tag/lgbtq',
'https://travelnoire.com/tag/step',
'https://travelnoire.com/tag/travel-safety',
'https://travelnoire.com/tag/solo-travel',
'https://travelnoire.com/tag/women-travelers',
'https://travelnoire.com/location/country/mexico?tag=bhm22',
'https://travelnoire.com/tag/safety',
'https://travelnoire.com/tag/europe',
'https://travelnoire.com/tag/global-news',
'https://travelnoire.com/tag/haiti',
'https://travelnoire.com/tag/international-travel',
'https://travelnoire.com/tag/middle-east',
'https://travelnoire.com/tag/travel-advisory',
'https://travelnoire.com/tag/trending',
'https://travelnoire.com/tag/barcelona',
'https://travelnoire.com/tag/restrictions',
'https://travelnoire.com/tag/spain',
'https://travelnoire.com/tag/travel-tourism',
'https://travelnoire.com/tag/greece',
'https://travelnoire.com/tag/news',
'https://travelnoire.com/tag/hotels',
'https://travelnoire.com/tag/unique-stays',
'https://travelnoire.com/tag/hawaii',
'https://travelnoire.com/tag/island-life',
'https://travelnoire.com/tag/oahu',
'https://travelnoire.com/tag/travel-news',
'https://travelnoire.com/tag/solo-traveler',
'https://travelnoire.com/tag/social-media',
'https://travelnoire.com/tag/airbnb',
'https://travelnoire.com/tag/black-women',
'https://travelnoire.com/tag/travel-tips',
'https://travelnoire.com/tag/womens-history-month',
'https://travelnoire.com/tag/air-travel',
'https://travelnoire.com/tag/faa',
'https://travelnoire.com/tag/planes',
'https://travelnoire.com/tag/caribbean',
'https://travelnoire.com/location/country/argentina',
'https://travelnoire.com/location/city/buenos-aires',
'https://travelnoire.com/tag/south-america',
'https://travelnoire.com/tag/best-beaches',
'https://travelnoire.com/tag/relaxation',
'https://travelnoire.com/tag/domestic-travel',
'https://travelnoire.com/tag/washington',
'https://travelnoire.com/tag/black-travel',
'https://travelnoire.com/tag/mexican-caribbean',
'https://travelnoire.com/tag/dominican-republic',
'https://travelnoire.com/tag/africa',
'https://travelnoire.com/tag/gear-and-tech',
'https://travelnoire.com/tag/travel-gear',
'https://travelnoire.com/tag/belize',
'https://travelnoire.com/tag/central-america',
'https://travelnoire.com/tag/southeast-asia',
'https://travelnoire.com/tag/thailand',
'https://travelnoire.com/tag/tourist',
'https://travelnoire.com/tag/puerto-rico',
'https://travelnoire.com/tag/mexico-city',
'https://travelnoire.com/tag/travel-destinations',
'https://travelnoire.com/tag/black-history',
'https://travelnoire.com/tag/new-york',
'https://travelnoire.com/tag/children',
'https://travelnoire.com/tag/family-travel',
'https://travelnoire.com/tag/carribean',
'https://travelnoire.com/tag/willemstad',
'https://travelnoire.com/tag/cityguides',
'https://travelnoire.com/tag/columbus',
'https://travelnoire.com/tag/ohio',
'https://travelnoire.com/location/country/bermuda',
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