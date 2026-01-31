import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_Fun_0001",
    name: "Numbers only",
    input: "45.78",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0002",
    name: "Wrong spelling",
    input: "brb mama ennam",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0003",
    name: "Empty Input",
    input: "",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0004",
    name: "Mixed symbols",
    input: "mama@@ yannawa??",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0005",
    name: "Gibberish",
    input: "shjksk",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0006",
    name: "English only",
    input: "chill bro",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0007",
    name: "Special characters only",
    input: "!!!***&",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0008",
    name: "Incomplete input",
    input: "Kohomad",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0009",
    name: "White space",
    input: "    ",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0010",
    name: "Date",
    input: "5/10/2025",
    expected: "something-wrong",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      // Force the test to always fail for demonstration
      expect(false).toBe(true);
      await page.close();
    });
  }
});
