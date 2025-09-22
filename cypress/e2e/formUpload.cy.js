import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import automationPage from "../pages/automationPage";
import formPage from "../pages/formPage";
import testData from "../fixtures/testData.json";

describe("Use Case 2: Form with Upload Flow", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(testData.username, testData.password);
    dashboardPage.navigateToAutomation();
  });

  it("should create a Form with textbox and file upload successfully", () => {
    automationPage.selectForm();
    formPage.createFormWithUpload(
      testData.formName,
      testData.textboxInput,
      testData.uploadFile
    );
  });
});
