class InvoicePage {
  constructor(page) {
    this.page = page;
  }

  async fillInvoice(data) {
    // Fill the invoice form based on provided data
    await this.page.fill('#recipient-name', data.recipientName);
    await this.page.fill('#recipient-ruc', data.recipientRuc);
    await this.page.fill('#total-amount', data.totalAmount);
    // Add additional interaction logic as needed
  }
}

module.exports = { InvoicePage };
