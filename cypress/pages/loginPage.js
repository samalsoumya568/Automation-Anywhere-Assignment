class LoginPage {
  elements = {
    usernameInput: () => cy.xpath('//input[@name="username"]'),
    passwordInput: () => cy.get("input[name='password']"),
    loginBtn: () => cy.get("button[type='submit']")
  };

  login(username, password) {
    this.elements.usernameInput().should("be.visible").type(username);
    this.elements.passwordInput().should("be.visible").type(password);
    this.elements.loginBtn().click();
  }
}
module.exports = new LoginPage();
