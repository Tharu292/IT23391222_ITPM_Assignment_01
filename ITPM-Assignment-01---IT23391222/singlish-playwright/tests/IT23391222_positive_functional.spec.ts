import { test, expect } from "@playwright/test";

// Increase navigation timeout for all tests in this file
test.use({ navigationTimeout: 60000 });

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Greeting",
    input: "obathumiyata suBha raathriyak!",
    expected: "ඔබතුමියට සුභ රාත්‍රියක්!",
  },
  {
    id: "Pos_Fun_0002",
    name: "Interrogative question",
    input: "adha karapu laeb leesidha?",
    expected: "අද කරපු ලැබ් ලේසිද?",
  },
  {
    id: "Pos_Fun_0003",
    name: "Request",
    input: "oyaata puLuvannam dokiyumant tika Linkedin valata aplood karanna.",
    expected: "ඔයාට පුළුවන්නම් ඩොකියුමන්ට් ටික Linkedin වලට අප්ලෝඩ් කරන්න.",
  },
  {
    id: "Pos_Fun_0004",
    name: "Simple sentence",
    input: "ehenam ithin adhama mee vaedee patan gamu.",
    expected: "එහෙනම් ඉතින් අදම මේ වැඩේ පටන් ගමු.",
  },
  {
    id: "Pos_Fun_0005",
    name: "Simple paragraph",
    input: "peemant eka Rs. 4500 vithara venavaa. gevanna baeri nam kiyanna. magen ganna aya oona tharam innavaa.",
    expected: "පේමන්ට් එක Rs. 4500 විතර වෙනවා. ගෙවන්න බැරි නම් කියන්න. මගෙන් ගන්න අය ඕන තරම් ඉන්නවා.",
  },
  {
    id: "Pos_Fun_0006",
    name: "Sentence with common english",
    input: "mama oyaata passe text ekak dhaannam.",
    expected: "මම ඔයාට පස්සෙ text එකක් දාන්නම්.",
  },
  {
    id: "Pos_Fun_0007",
    name: "Negation pattern",
    input: "mata nam yanna baee.",
    expected: "මට නම් යන්න බෑ.",
  },
  {
    id: "Pos_Fun_0008",
    name: "Informal phrasing",
    input: "iiyaa appiriyayi mata nam",
    expected: "ඊයා අප්පිරියයි මට නම්",
  },
  {
    id: "Pos_Fun_0009",
    name: "Polite phrasing",
    input: "apith vaadiya paeththata gihin balamudha?",
    expected: "අපිත් වාඩිය පැත්තට ගිහින් බලමුද?",
  },
  {
    id: "Pos_Fun_0010",
    name: "Formal Phrasing",
    input: "karuNaakara savandhenna, mema niveedhanaya  polisiyeni.",
    expected: "කරුණාකර සවන්දෙන්න, මෙම නිවේදනය  පොලිසියෙනි.",
  },
  {
    id: "Pos_Fun_0011",
    name: "Past tense",
    input: "oya lipi tika mQQ thaepaeelen yaevvaa.",
    expected: "ඔය ලිපි ටික මං තැපෑලෙන් යැව්වා.",
  },
  {
    id: "Pos_Fun_0012",
    name: "Informal Response",
    input: "thamusegee vYaapaara gaena mama nodhannavayae.",
    expected: "තමුසෙගේ ව්‍යාපාර ගැන මම නොදන්නවයැ.",
  },
  {
    id: "Pos_Fun_0013",
    name: "Formal paragraph",
    input: "ovun yaLith veraLata goda basina vita kavadi dhuuva puraa raee aDHura paethiremin thibuNeeya. inpasu ovun oruva godata aedha vaetakee paDHurak yata navathaa navaathaena vetha pitathva giyeeya.",
    expected: "ඔවුන් යළිත් වෙරළට ගොඩ බසින විට කවඩි දූව පුරා රෑ අඳුර පැතිරෙමින් තිබුණේය. ඉන්පසු ඔවුන් ඔරුව ගොඩට ඇද වැටකේ පඳුරක් යට නවතා නවාතැන වෙත පිටත්ව ගියේය.",
  },
  {
    id: "Pos_Fun_0014",
    name: "Imperative Form",
    input: "karuNaakaralaa ee vaarthaava genath dhenna. ",
    expected: "කරුණාකරලා ඒ වාර්තාව ගෙනත් දෙන්න. ",
  },
  {
    id: "Pos_Fun_0015",
    name: "Informal past tense",
    input: "mata ee meetings mis vunaa",
    expected: "මට ඒ meetings මිස් වුනා",
  },
  {
    id: "Pos_Fun_0016",
    name: "Simple request",
    input: "ATM eken salli aran ennadha?",
    expected: "ATM එකෙන් සල්ලි අරන් එන්නද?",
  },
  {
    id: "Pos_Fun_0017",
    name: "Sentence with date",
    input: "uthsavaya 25/02/2026 valata plaeen karalaa thiyenavaa.",
    expected: "උත්සවය 25/02/2026 වලට ප්ලෑන් කරලා තියෙනවා.",
  },
  {
    id: "Pos_Fun_0018",
    name: "Simple sentence with punctuation",
    input: "Documents(final) tika iimeel karanna",
    expected: "Documents(final) ටික ඊමේල් කරන්න",
  },
  {
    id: "Pos_Fun_0019",
    name: "Simple and Plural Interrogative",
    input: "oyaala mee Bhuumi dharshana aDHinnee mokatadha?",
    expected: "ඔයාල මේ භූමි දර්ශන අඳින්නේ මොකටද?",
  },
  {
    id: "Pos_Fun_0020",
    name: "Compund sentence",
    input: "ov, oyaagee kathaava hari sirimal",
    expected: "ඔව්, ඔයාගේ කතාව හරි සිරිමල්",
  },
  {
    id: "Pos_Fun_0021",
    name: "Slang",
    input: "echchara dheyak velaadha dheviyanee!",
    expected: "එච්චර දෙයක් වෙලාද දෙවියනේ!",
  },
  {
    id: "Pos_Fun_0022",
    name: "Agree Response",
    input: "api hootalayakata gihin dhaval kaeema kamu.",
    expected: "අපි හෝටලයකට ගිහින් දවල් කෑම කමු.",
  },
  {
    id: "Pos_Fun_0023",
    name: "Slang and colloquial phrasing",
    input: "eLa machQQ ! project eka nam supiri vidhihata thiyenavaa.",
    expected: "එළ මචං ! project එක නම් සුපිරි විදිහට තියෙනවා.",
  },
  {
    id: "Pos_Fun_0024",
    name: "Future tense",
    input: "balannam",
    expected: "බලන්නම්",
  },
];

test.describe("Positive Functional Tests", () => {
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
      await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
