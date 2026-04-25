class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    // Check for a unique element on the dashboard to verify successful login
    return await this.page.isVisible('text=PERFIL');
  }
}

module.exports = { DashboardPage };
