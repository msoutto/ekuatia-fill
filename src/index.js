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

  // Attempt automated login if credentials are provided
  if (config.EKUATIA_USER && config.EKUATIA_PASSWORD) {
    await loginPage.login(config.EKUATIA_USER, config.EKUATIA_PASSWORD);
  } else {
    console.log("Credentials missing in .env. Please log in manually...");
  }

  // Always wait for success (handles manual intervention if CAPTCHA or auto-fill fails)
  await loginPage.waitForLoginSuccess();

  if (await dashboardPage.isLoaded()) {
    console.log("Dashboard loaded successfully.");
    await dashboardPage.goToInvoiceEmission();
    console.log("Navigated to invoice emission.");

    if (await invoicePage.isLoaded()) {
      console.log("Invoice page loaded. Filling data...");
      await invoicePage.fillInvoice(config);
      console.log("Invoice filling complete");
      // Optional: await invoicePage.submitInvoice();
    }
  }
  
  console.log("End of process");

  // await browser.close();
})();
