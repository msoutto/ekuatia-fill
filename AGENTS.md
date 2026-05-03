# Agent Context: Ekuatia Invoice Automation

This document provides essential context, architecture, and instructions for AI agents and developers working on the Ekuatia Invoice Automation project.

## Project Overview
- **Goal**: Automate electronic invoice (DTE) filling on the [Ekuatia Portal](https://ekuatia.set.gov.py/ekuatiai/).
- **Architecture**: Page Object Model (POM) for maintainable automation logic.
- **Login Approach**: Hybrid approach (manual login preferred for security; automated login available via encrypted credentials in `.env`).
- **Current Focus**: Implementing the "AVANZADA" invoice modality.

## Agentic Workflow & Tools

### Page Exploration
When assigned to implement a new page or update an existing one:
1. **Use Playwright CLI**: Utilize `npx playwright-cli` (or equivalent agent-optimized browser tools) to inspect the live DOM, identify selectors, and understand page state transitions.
2. **Implementation Plan**: Before writing code, create a small implementation plan in `docs/plans/` if the task is complex.

### Technology Stack
- **Runtime**: Node.js (Version 24+)
- **Automation**: Playwright (JS)
- **Configuration**: `dotenvx` for encrypted secrets.
- **Pattern**: Page Object Model (POM).

## Architecture & Conventions

### Directory Structure
- `docs/plans/`: Implementation plans and design documentation.
- `src/`: Core logic and automation modules.
- `src/pages/`: POM classes. Each class should represent a single page or a significant logical section.
- `src/config.js`: Centralized configuration loader. Always use this instead of accessing `process.env` directly.
- `src/index.js`: Main entry point and orchestrator.

### POM Guidelines
- **Selectors**: Prefer user-visible selectors (text, labels, roles) over brittle CSS/XPath where possible.
- **Methods**: Represent user actions (e.g., `fillRecipientDetails`).
- **Wait Strategies**: Avoid hard sleeps (`waitForTimeout`). Use Playwright's auto-waiting or `waitForSelector`.

### Coding Style & Quality
- **CommonJS**: The project uses `require/module.exports`.
- **Async/Await**: Mandatory for all Playwright interactions.
- **Validation**: After any code changes, ensure existing tests pass. If available, run `npm run lint` to verify coding standards.
- **Error Handling**: Wrap high-level orchestrations in try/catch and ensure `screenshots/` are captured on failure.

## Setup & Execution
1. **Install**: `npm install`
2. **Browsers**: `npx playwright install chromium`
3. **Environment**:
   - Copy `.env.example` to `.env`.
   - Use `npx dotenvx encrypt` to process secrets.
   - **Boundary**: Never log or print decrypted secrets to the console or logs.

## Boundaries & Safety
- **Sensitive Files**: Do NOT modify or read `.env.keys`.
- **Manual Login**: The system is designed to support a "Hybrid Login". If the agent encounters a CAPTCHA or complex MFA or credentials are not stored in `EKUATIA_USER` or `EKUATIA_PASSWORD`, provide a message and wait for manual intervention.
- **Data Integrity**: Ensure that "Tipo de Cambio" lookup from DNIT is validated before entry.

## Useful Commands
- `npm start`: Runs the main automation.
- `npx playwright codegen https://ekuatia.set.gov.py/ekuatiai/`: Use locally to help find selectors.
