class MessageBoxPage {
  elements = {
    taskNameInput: () => cy.get("input[name='name']",{ timeout: 20000 }),
    createBtn: () => cy.contains("Create & edit"),
    actionSearch: () => cy.get("input[placeholder='Search actions']",{ timeout: 20000 }),
    messageBoxOption: () => cy.get('button[name="item-button"] span[title="Message box"] span[class="clipped-text__string clipped-text__string--for_presentation"]'),
    rightPanel: () => cy.xpath("//div[@class='editor-expression-input g-reset-element']"),
    saveBtn: () => cy.contains("Save"),
    successToast: () => cy.contains("Task created successfully")
  };

  createMessageBoxTask(taskName) {
    this.elements.taskNameInput().clear().type(taskName);
    this.elements.createBtn().click();
    this.elements.actionSearch().type("Message Box");
    this.elements.messageBoxOption().dblclick({ force: true });
    cy.wait(500);
    this.elements.rightPanel().should("be.visible");
    this.elements.saveBtn().click();
    this.elements.successToast().should("be.visible");
  }
}
module.exports = new MessageBoxPage();
