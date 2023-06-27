import { expect } from '@playwright/test';

class ChatsPage {
  constructor(page) {
    this.page = page;
    this.smokeChatsMenuItem = page.locator('#main-sidebar a[href*="/chats"]');
  }
  async open() {
    await this.page.goto('https://dev.omni-dispatch.com/chats');
  }
}
module.exports = {ChatsPage};
