const { chromium } = require('playwright');
const config = require('./config');
const { LoginPage } = require('./pages/LoginPage');
const { DashboardPage } = require('./pages/DashboardPage');
const { InvoicePage } = require('./pages/InvoicePage');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const invoicePage = new InvoicePage(page);

  await loginPage.navigate();
  console.log("Please log in manually...");
  await loginPage.waitForManualLogin();

  if (await dashboardPage.isLoaded()) {
    console.log("Dashboard loaded successfully.");
    // Proceed with invoice filling if needed
  }

  // await browser.close();
})();