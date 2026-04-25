require('@dotenvx/dotenvx').config();

module.exports = {
  EKUATIA_USER: process.env.EKUATIA_USER,
  EKUATIA_PASSWORD: process.env.EKUATIA_PASSWORD,
  INVOICE_RECIPIENT_NAME: process.env.INVOICE_RECIPIENT_NAME,
  INVOICE_RECIPIENT_RUC: process.env.INVOICE_RECIPIENT_RUC,
  INVOICE_TOTAL_AMOUNT: process.env.INVOICE_TOTAL_AMOUNT,
};
