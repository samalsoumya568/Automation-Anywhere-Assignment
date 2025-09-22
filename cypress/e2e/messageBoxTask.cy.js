import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import automationPage from "../pages/automationPage";
import messageBoxPage from "../pages/messageBoxPage";
import testData from "../fixtures/testData.json";

describe("Use Case 1: Message Box Task", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(testData.username, testData.password);
    dashboardPage.navigateToAutomation();
  });

  it("should create a Message Box Task successfully", () => {
    automationPage.selectTaskBot();
    messageBoxPage.createMessageBoxTask(testData.taskName);
  });
});
