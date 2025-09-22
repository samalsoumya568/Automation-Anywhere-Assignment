class FormPage {
  elements = {
    formNameInput: () => cy.get("input[name='name']",{ timeout: 20000 }),
    createBtn: () => cy.contains("Create & edit"),
    textBoxElement: () => cy.iframe().contains("Text Box"),
    selectFileElement: () => cy.iframe().contains("//iframe[@class='modulepage-frame']",{ timeout: 20000 }),
    iframe: () => cy.get("editor-layout__canvas", { timeout: 20000 }),
    canvas: () => cy.iframe("editor-layout__canvas").find(".document-builder__canvas"),
    rightPanel: () => cy.get(".right-panel"),
    textBoxInput: () => cy.get("input[type='text']"),
    fileInput: () => cy.get("input[type='file']"),
    saveBtn: () => cy.contains("Save"),
    successToast: () => cy.contains("Form saved successfully")
  };

  createFormWithUpload(formName, text, filePath) {
    this.elements.formNameInput().type(formName);
    this.elements.createBtn().click();

    cy.frameLoaded("iframe.modulepage-frame");
    cy.get("iframe.modulepage-frame").then($iframe => {
  const $body = $iframe.contents().find("body");
  const iframeBody = cy.wrap($body);
  iframeBody.find(".formcanvas-dropzone-box", { timeout: 10000 })
    .should("be.visible")
    .as("canvas");
    iframeBody.contains("Textbox")
    .should("be.visible")
    .drag("@canvas", { force: true });
});
    this.elements.rightPanel().should("be.visible");
    this.elements.textBoxInput().type(text);
    this.elements.fileInput().selectFile(`cypress/fixtures/${filePath}`);
    this.elements.saveBtn().click();
    this.elements.successToast().should("be.visible");
  }
}
module.exports = new FormPage();
