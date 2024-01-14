const { defineConfig } = require("cypress");
//import { defineConfig } from "cypress";

module.exports = defineConfig({
  chromeWebSecurity: false,
  // modifyObstructiveCode:false,
  "env": { 
    "allureResultsPath": "allure-report",
  },  
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
