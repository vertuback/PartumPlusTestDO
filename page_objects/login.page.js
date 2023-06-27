const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    //this.signInButton = page.locator('[class*=\'navIconToggles\'] a[href*=\'signin\']');
  }
  
}
module.exports = {LoginPage};
