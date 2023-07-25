import { test, expect } from './fixtures/BasePage';

//negative scenario
test('Login with non-valid credentials', async ({ loginPage, chatsPage }) => {
  await loginPage.open();
  await loginPage.login('wrong', 'wrong');
  //assertion
  expect(await loginPage.btnLogin.isVisible()).toBeTruthy();
  expect(await chatsPage.smokeChatsMenuItem.isVisible()).toBeFalsy();
});

//positive scenario
test('Login with valid credentials', async ({ loginPage, chatsPage, page }) => {
  await loginPage.open();
  await loginPage.login('test@gmail.com', '12345678');
  //assertion
  await page.waitForLoadState('networkidle');
  expect(await loginPage.btnLogin.isVisible()).toBeFalsy();
  expect(await chatsPage.smokeChatsMenuItem.isVisible()).toBeTruthy();
});

