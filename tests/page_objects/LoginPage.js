import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.txtEmail = page.locator('input[name="email"]');
    this.txtPassword = page.locator('input[name="password"]');
    this.btnLogin = page.locator('#login-form div[class*="actions"] button:has-text("Log in")');
  }
  getUrl() {
    return this.page.url();
  }
  async open() {
    await this.page.goto('https://dev.omni-dispatch.com/login');
  }
  async login(email, password) {
    await this.txtEmail.fill(email);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }
  async isElementVisible(selector) {
    return await this.selector.isElementVisible();
  }
}
module.exports = {LoginPage};
