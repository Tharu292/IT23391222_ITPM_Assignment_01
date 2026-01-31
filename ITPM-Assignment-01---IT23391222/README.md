# ITPM (IT3040) Assignment 1 – Singlish to Sinhala Automation Testing

Student ID - IT23391222

---

## This project automates functional and UI test scenarios for the SwiftTranslator (Singlish to Sinhala) web application using Playwright.

---

## Tools & Technologies

- **Node.js** (v18+ recommended)
- **Playwright** (end-to-end testing framework)
- **TypeScript** (for test development)
- **JavaScript** (for scripting and tests)
- **XLSX** (Excel file generation for test documentation)
- **@types/node** (TypeScript type definitions for Node.js)
- **HTML Reporter** (Playwright built-in)
- **Modern browsers** (Chromium, via Playwright)

---

## VS Code Run Instructions

1. Open the repository folder in VS Code.
2. Open a terminal and navigate to the test project:
   ```sh
   cd singlish-playwright
   ```
3. Ensure Node.js is installed:

   ```sh
   node -v
   npm -v
   ```

   If Node.js is not installed, download and install it from [https://nodejs.org/](https://nodejs.org/).

4. Install dependencies:
   ```sh
   npm install
   ```
5. Run all tests:
   ```sh
   npx playwright test
   ```
6. To view the HTML report after running tests:
   ```sh
   npx playwright show-report
   ```

---

## Test Files

- [IT23391222_negative_functional.spec.ts](singlish-playwright/tests/IT23391222_negative_functional.spec.ts)
- [IT23391222_negative_ui.spec.ts](singlish-playwright/tests/IT23391222_negative_ui.spec.ts)
- [IT23391222_positive_functional.spec.ts](singlish-playwright/tests/IT23391222_positive_functional.spec.ts)
- [IT23391222_positive_ui.spec.ts](singlish-playwright/tests/IT23391222_positive_ui.spec.ts)

---

## Tests covered

- 10 Negative functional test cases
- 3 Positive UI-related test casess
- 24 Positive functional test cases
- 03 Negative UI-related test cases
