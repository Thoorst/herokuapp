const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://the-internet.herokuapp.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});