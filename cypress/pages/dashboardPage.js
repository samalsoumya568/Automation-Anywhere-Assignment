class DashboardPage {
  elements = {
    automationMenu: () => cy.xpath('//span[text()="Automation"]',{timeout: 10000})


  };

  navigateToAutomation() {
    this.elements.automationMenu().should("be.visible").click();
  }
}
module.exports = new DashboardPage();
