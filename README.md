# Ekuatia Invoice Automation


Automated system for filling electronic invoices in the Ekuatia portal (Paraguay).

## Objective
This project automates the navigation and data entry process for creating an electronic invoice on `https://ekuatia.set.gov.py/ekuatiai/`. To ensure security and handle complexities like CAPTCHAs or specialized credentials, the system supports both manual intervention and automated credential filling.

## Tech Stack
- **Language**: JavaScript (Node.js)
- **Automation**: [Playwright](https://playwright.dev/)
- **Configuration**: [dotenvx](https://dotenvx.com/) (for secure, encrypted environment variables)
- **Architecture**: Page Object Model (POM)

## Prerequisites
- **Node.js**: Version 24 or higher.
- **Playwright Browsers**: Installed via `npx playwright install chromium`.
- **System Marangatu Access**: Valid RUC and password for the Ekuatia'i system.

## Project Structure
```text
ekuatia-fill/
├── docs/
│   └── plans/              # Detailed implementation plans and templates
├── src/
│   ├── pages/              # Page Object Model (POM) classes
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   └── InvoicePage.js
│   ├── config.js           # Configuration loader (using dotenvx)
│   └── index.js            # Main entry point and orchestrator
├── .env.example            # Template for environment variables
└── README.md
```

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/msoutto/ekuatia-fill.git
cd ekuatia-fill
npm install
```

### 2. Configuration & Encryption
This project uses `dotenvx` to keep sensitive credentials secure.

1.  Create your local `.env` file:
    ```bash
    cp .env.example .env
    ```
2.  Fill in your credentials (RUC, Password, etc.) in the `.env` file.
3.  **Encrypt the values**: Use the `dotenvx` CLI to encrypt your environment variables before running the project:
    ```bash
    npx dotenvx encrypt
    ```
    *Note: This will generate a `.env.keys` file. **Never commit this file.***

### 3. Running the Automation
Start the automation process:
```bash
npm start
```
The browser will open, navigate to the Ekuatia portal, and handle the flow according to your configuration.

## Development Roadmap
The project is being built following a structured plan. Junior developers should refer to these documents for context:
- [Detailed Implementation Plan](docs/plans/detailed-implementation-plan.md): Current tasks and milestones.
- [Invoice Template Reference](docs/plans/invoice-template.md): Field specifications for the "AVANZADA" invoice.

## Key Features
- **Hybrid Login**: Flexibility to wait for manual login or automate credential entry.
- **Advanced Invoice Filling**: Specialized logic for "AVANZADA" modality and "Prestación de Servicios".
- **Dynamic Exchange Rates**: Automatically fetches the current "COMPRA" dollar rate from the DNIT portal.
- **Error Recovery**: Automatically captures screenshots on failure for easier debugging.
