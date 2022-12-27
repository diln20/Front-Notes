const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: 'src/**/*.cy.js',
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
