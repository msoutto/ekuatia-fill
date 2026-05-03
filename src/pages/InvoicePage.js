class InvoicePage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    // Wait for a unique element on the invoice emission page to confirm it's loaded
    return await this.page.isVisible('text=Emitir Documento');
  }

  async fillInvoice(data) {
    // Fill the invoice form
    await this.page.fill('#recipient-name', data.recipientName);
    await this.page.fill('#recipient-ruc', data.recipientRuc);
    await this.page.fill('#total-amount', data.totalAmount);
  }

  async addItem(item) {
    // Logic to add an item to the invoice
    await this.page.click('#add-item-button');
    await this.page.fill('#item-description', item.description);
    await this.page.fill('#item-price', item.price.toString());
  }

  async submitInvoice() {
    // Submit the invoice form
    await this.page.click('#submit-button');
  }
}

module.exports = { InvoicePage };
