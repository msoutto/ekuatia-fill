const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://ekuatia.set.gov.py/ekuatiai/';
    this.userSelector = '#usuario';
    this.passwordSelector = '#contrasena';
    this.loginButtonSelector = 'button:has-text("INGRESAR")';
  }

  timeout = 60 * 1000;

  async navigate() {
    await this.page.goto(this.url);
  }

  async login(user, password) {
    if (!user || !password) {
      console.log("Credentials not provided, skipping automated login.");
      return;
    }

    console.log(`Attempting automated login for user: ${user}`);
    await this.page.fill(this.userSelector, user);
    await this.page.fill(this.passwordSelector, password);
    await this.page.click(this.loginButtonSelector);
  }

  async waitForLoginSuccess() {
    // Wait for the dashboard to be visible after login (manual or automated)
    // Using .first() to avoid strict mode violations if multiple "PERFIL" elements exist
    // If visibility is an issue, we might need to check why it's hidden (e.g. mobile view)
    const locator = this.page.locator('text=PERFIL').first();
    await locator.waitFor({ state: 'visible', timeout: this.timeout });
    console.log("Login successful.");
  }
}

module.exports = { LoginPage };
