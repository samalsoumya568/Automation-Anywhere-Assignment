const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://community.cloud.automationanywhere.digital/#/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
