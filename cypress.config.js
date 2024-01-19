const { defineConfig } = require("cypress");
//import { defineConfig } from "cypress";

module.exports = defineConfig({
  chromeWebSecurity: false,
  // experimentalMemoryManagement: true, 
  screenshotOnRunFailure: false,
  // modifyObstructiveCode:false,
  //"env": { 
   // "allureResultsPath": "allure-results",
  //  },  
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
