class InvoicePage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    // Wait for a unique element on the invoice emission page to confirm it's loaded
    return await this.page.isVisible('text=Emitir DTE');
  }

  async fillInvoice(data) {
    // Fill the invoice form
    await this.fillGenericData(data);
    await this.fillReceiverData(data);
    await this.fillOperationData(data);
    await this.fillOperationData(data);
    await this.fillPaymentData(data);
    await this.fillObligations(data);
  }

  async fillGenericData(data) {
    await this.page.getByText('Seleccionar Modalidad... AVANZADA').click();
    await this.page.getByRole('button', { name: 'Emitir DTE Tipo DE Select box' }).click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.getByText('Seleccionar Tipo Impuesto... IVA').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.getByText('Seleccionar Moneda... Guaraní').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.locator('#tipocambio').click();
    await this.page.locator('#tipocambio').fill('6200');
  }

  async fillReceiverData(data) {
    await this.page.getByText('Seleccionar Contribuyente').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.getByText('Seleccionar B2C').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.locator('#nrodocumentoid').click();
    await this.page.locator('#nrodocumentoid').fill('12345');
    await this.page.locator('#nombre').click();
    await this.page.getByText('Seleccionar Cédula paraguaya').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('ArrowDown');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.locator('#nrodocumentoid').click();
    await this.page.locator('#nrodocumentoid').fill('12345');
    await this.page.locator('#nombre').click();
    await this.page.locator('#nombre').fill('Prosoft');
    await this.page.locator('#direccionReceptor').click();
    await this.page.locator('#direccionReceptor').fill('Estados Unidos');
    await this.page.locator('#correoReceptor').click();
    await this.page.locator('#correoReceptor').fill('email@email.com');
    await this.page.locator('#celularReceptor').click();
    await this.page.locator('#celularReceptor').fill('544321');
    await this.page.locator('span').filter({ hasText: 'Seleccionar País...' }).first().click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).fill('estados unidos');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
  }

  async fillOperationData(data) {
    await this.page.getByRole('textbox', { name: 'Ingrese la descripción del' }).click();
    await this.page.getByRole('textbox', { name: 'Ingrese la descripción del' }).fill('Edición de Software');
    await this.page.getByPlaceholder('Ingrese el precio').click();
    await this.page.getByPlaceholder('Ingrese el precio').fill('1000');
    await this.page.getByText('Seleccionar IVA 10%').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).fill('exento');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
  }

  async fillPaymentData(data) {
    await this.page.getByText('Seleccionar Condición... Contado').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).fill('contado');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
    await this.page.getByText('Seleccionar Tipo de Pago... Efectivo').click();
    await this.page.getByRole('searchbox', { name: 'Select box' }).fill('transferencia');
    await this.page.getByRole('searchbox', { name: 'Select box' }).press('Enter');
  }

  async fillObligations(data) {
    await this.page.getByRole('combobox', { name: 'Select box' }).click();
    await this.page.getByRole('combobox', { name: 'Select box' }).fill('211');
    await this.page.getByRole('combobox', { name: 'Select box' }).press('Enter');
    await this.page.getByRole('combobox', { name: 'Select box' }).click();
    await this.page.getByRole('combobox', { name: 'Select box' }).fill('701');
    await this.page.getByRole('combobox', { name: 'Select box' }).press('Enter');
  }

  async visualize() {
    await this.page.getByRole('button', { name: 'Previsualizar', exact: true }).click();
  }
}

module.exports = { InvoicePage };
