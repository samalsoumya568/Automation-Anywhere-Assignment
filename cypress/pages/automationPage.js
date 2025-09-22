class AutomationPage {
  elements = {
    createDropdown: () => cy.contains("Create"),
    taskBotOption: () => cy.contains("Task Bot"),
    formOption: () => cy.contains("Form")
  };

  selectTaskBot() {
    this.elements.createDropdown().click();
    this.elements.taskBotOption().click();
  }

  selectForm() {
    this.elements.createDropdown().click();
    this.elements.formOption().click();
  }
}
module.exports = new AutomationPage();
