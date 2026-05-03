# Implementation Plan - Ekuatia Invoice Automation

This plan outlines the steps to create an automated system for filling invoices in the Ekuatia portal using Node.js, Playwright, and a Page Object Model (POM) architecture.

## Objective
Automate the navigation and data entry process for creating an electronic invoice on `https://ekuatia.set.gov.py/ekuatiai/`, allowing the user to handle the login manually for security and simplicity.

## Implementation Steps

### 1. Baseline Framework
- [x] Task 1.1: Create `src/index.js` (empty placeholder) and `src/config.js` (empty placeholder).
- [x] Task 1.2: Implement basic configuration loader in `src/config.js` and verify it loads variables from `.env` in `src/index.js`.
- [x] Task 1.3: Create `.env` file.
- [x] Task 1.4: Replace `dotenv` dependency with `dotenvx` and replace the usage in other project files.

### 2. Basic Page Object Model (POM)
- [x] Task 2.1: Implement `src/pages/LoginPage.js` and integrate it into `src/index.js` to open the browser and navigate to the portal.
- [x] Task 2.2: Implement `src/pages/DashboardPage.js` and integrate into `src/index.js` after login.
- [x] Task 2.3: Implement basic `src/pages/InvoicePage.js` and integrate into `src/index.js` to complete the flow.
- [x] Task 2.4: Implement navigation to 'Emitir Documento Electrónico' in `src/pages/DashboardPage.js` and integrate into `src/index.js`.
- [ ] Task 2.5: Implement automated login credential filling in `src/pages/LoginPage.js` using values from environment variables via `dotenvx`.

### 3. Advanced Invoice Implementation (AVANZADA)
- [ ] Task 3.1: Update `src/pages/InvoicePage.js` to support "AVANZADA" modality and "Prestación de Servicios".
- [ ] Task 3.2: Implement data entry for "Receptor" details (Non-contributor, B2F, Foreign ID, etc.) based on `invoice-template.md`.
- [ ] Task 3.3: Implement dynamic currency selection (USD).
- [ ] Task 3.4: Implement automated "COMPRA" dollar rate lookup from [DNIT](https://www.dnit.gov.py/en/web/portal-institucional/cotizaciones).
- [ ] Task 3.5: Implement "Tipo de Cambio" field entry using the fetched rate.
- [ ] Task 3.6: Implement item addition logic (Description, Quantity, Price, Exemption).
- [ ] Task 3.7: Implement payment condition (Contado/Transferencia) and tax obligations (IRE Simple / IVA Exportadores).

### 4. Finalization & Testing
- [ ] Task 4.1: Add global error handling and failure screenshot capture to the orchestrator.
- [ ] Task 4.2: Final validation of the complete end-to-end flow.

## Verification
- Run the script using `npm start` after each task to ensure the system is functional and ready for further development.


