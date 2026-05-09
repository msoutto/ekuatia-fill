class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    // Check for a unique element on the dashboard to verify successful login
    return await this.page.isVisible('text=PERFIL');
  }

  async goToInvoiceEmission() {
    await this.page.getByRole('button', { name: 'Menú' }).click();
    await this.page.getByRole('heading', { name: 'Mis DTEs' }).click();
    await this.page.getByRole('link', { name: 'Emitir Documento Electrónico' }).click();
  }
}

module.exports = { DashboardPage };
