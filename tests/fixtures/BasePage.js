import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';
import { ChatsPage } from '../page_objects/ChatsPage';

export const test = base.extend({
  chatsPage: async({ page }, use) => {
    const chatsPage = new ChatsPage(page);
    await use(chatsPage);
  },
  loginPage: async({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
export {expect};
