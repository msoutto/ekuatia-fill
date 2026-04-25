# Ekuatia Invoice Automation

Automated system for filling electronic invoices in the Ekuatia portal (Paraguay).

## Objective
This project automates the navigation and data entry process for creating an electronic invoice on `https://ekuatia.set.gov.py/ekuatiai/`. To ensure security and handle complexities like CAPTCHAs or specialized credentials, the system waits for the user to perform the login manually before taking over the automation.

## Prerequisites
- **Node.js**: Version 24 or higher.
- **System Marangatu Access**: Valid RUC and password for the Ekuatia'i system.
- **Chromium Browser**: Playwright will manage this, but ensure your system allows running unsigned binaries if on macOS/Linux.

## Tech Stack
- **Language**: JavaScript (Node.js)
- **Automation**: Playwright
- **Configuration**: Dotenv (for environment variables)
- **Architecture**: Page Object Model (POM)

## Key Features
1. **Manual Login Integration**: Navigates to the portal and waits for the user to authenticate.
2. **Automated Navigation**: Moves through the "Emitir Documento Electrónico" section seamlessly.
3. **Smart Data Entry**: Fills the "Factura Electrónica" form using data configured in a `.env` file.
4. **Verification**: Includes screenshot capture on failures for easier debugging.

## Getting Started
(Detailed installation steps will be added as the implementation progresses).
