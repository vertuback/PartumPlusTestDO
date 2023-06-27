const {LoginPage} = require('./LoginPage');
const {ChatsPage} = require('./ChatsPage');

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.chatsPage = new ChatsPage(page);

  }
}
module.exports = {PageObjectManager};
