const base = require('@playwright/test');
const { MainPage } = require('./pages/main-page');

exports.test = base.test.extend({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    }
});

exports.expect = base.expect;