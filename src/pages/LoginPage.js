const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://ekuatia.set.gov.py/ekuatiai/';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async waitForManualLogin() {
    // Wait for the dashboard to be visible after manual login
    // This replaces the deprecated waitForNavigation and discouraged networkidle
    await this.page.locator('text=PERFIL').waitFor({ state: 'visible', timeout: 0 });
    console.log("Login successful.");
  }
}

module.exports = { LoginPage };
