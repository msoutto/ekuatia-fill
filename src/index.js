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
    await dashboardPage.goToInvoiceEmission();
    console.log("Navigated to invoice emission.");

    if (await invoicePage.isLoaded()) {
      console.log("Invoice page loaded. Filling data...");
      await invoicePage.fillInvoice({
        recipientName: config.INVOICE_RECIPIENT_NAME,
        recipientRuc: config.INVOICE_RECIPIENT_RUC,
        totalAmount: config.INVOICE_TOTAL_AMOUNT
      });
      console.log("Invoice filling complete");
      // Optional: await invoicePage.submitInvoice();
    }
  }
  
  console.log("End of process");

  // await browser.close();
})();