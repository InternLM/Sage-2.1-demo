import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

// Asset filenames are opaque identifiers; prose, captions and labels must use
// the selected language even when the original demo has a Chinese filename.
export function assertEnglishContent(source, name) {
  const prose = source.replace(/\]\([^)]*\)/g, "]");
  const mixed = prose.split("\n").flatMap((line, index) =>
    /[\u3400-\u9fff]/u.test(line) ? [`${name}:${index + 1}: ${line}`] : []);
  assert.equal(mixed.length, 0, `Chinese text in English copy:\n${mixed.join("\n")}`);
}

function checkBuiltLocales(directory, entryPath = "index.html") {
  const entry = fs.readFileSync(path.join(directory, entryPath), "utf8");
  const script = entry.match(/src="(\/[^"?]+\.js)"/)[1];
  const bundle = fs.readFileSync(path.join(directory, script.replace(/^\//, "")), "utf8");
  const start = bundle.indexOf("/*! js-yaml");
  const contentStart = bundle.indexOf("const Hv=`", start);
  const contentEnd = bundle.indexOf("`,En=Wv(Hv);", contentStart);
  assert(start >= 0 && contentStart > start && contentEnd > contentStart, "Missing bundled content parser");
  const zhSource = bundle.slice(contentStart + "const Hv=`".length, contentEnd);
  const enLine = bundle.split("\n").find(line => line.startsWith("const siteEnglishContent = Wv("));
  assert(enLine, "Missing separately embedded English content");
  const enSource = JSON.parse(enLine.slice("const siteEnglishContent = Wv(".length, -2));
  assertEnglishContent(enSource, script);
  const context = vm.createContext({
    // The bundle's transpiled class field helper lives outside the parser.
    $: (object, key, value) => { object[key] = value; },
    window: { location: { origin: "https://atria-asi.ai" } },
  });
  vm.runInContext(bundle.slice(start, contentStart), context);
  const parse = source => vm.runInContext(`Wv(${JSON.stringify(source)})`, context);
  const zh = parse(zhSource);
  const en = parse(enSource);
  const finalTable = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../releases/atria-dawn/docs/benchmark-final.json");
  if (entryPath === "index.html" && !entry.includes("<title>Atria Dawn Preview</title>") && fs.existsSync(finalTable)) {
    const expected = JSON.parse(fs.readFileSync(finalTable, "utf8"));
    for (const [language, content] of [["en", en], ["zh", zh]]) {
      assert.equal(JSON.stringify(content.benchmarkTable.rows), JSON.stringify(expected.rows), `${language}: final benchmark values differ`);
      assert.equal(JSON.stringify(content.benchmarkTable.columns.slice(1)), JSON.stringify(expected.columns.slice(1)), `${language}: model order differs`);
    }
    console.log(`Verified ${expected.rows.length} final benchmark rows in both languages.`);
  }
  assert.equal(en.themes.length, zh.themes.length, "Locale sections differ");
  const headings = [];
  for (let index = 0; index < en.themes.length; index++) {
    assert.equal(en.themes[index].cases.length, zh.themes[index].cases.length, "Locale case counts differ");
    for (let caseIndex = 0; caseIndex < en.themes[index].cases.length; caseIndex++) {
      const english = en.themes[index].cases[caseIndex];
      const chinese = zh.themes[index].cases[caseIndex];
      assert(!/[\u3400-\u9fff]/u.test([english.title, english.subtitle, english.text, english.hint].join(" ")), "Mixed case copy");
      if (/[\u3400-\u9fff]/u.test(chinese.title)) {
        assert.notEqual(english.title, chinese.title, "Case title must be localized");
      }
      headings.push(english.title);
    }
  }
  console.log(JSON.stringify({ directory, entryPath, sections: en.themes.length, localizedCases: headings.length, englishTitles: headings }));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  for (const relative of ["", "releases/atria-dawn"]) {
    assertEnglishContent(fs.readFileSync(path.join(root, relative, "CONTENT.en.md"), "utf8"), `${relative}/CONTENT.en.md`);
  }
  for (const directory of process.argv.slice(2)) {
    checkBuiltLocales(path.resolve(directory));
    if (fs.existsSync(path.join(directory, "atria-dawn-preview/index.html"))) {
      checkBuiltLocales(path.resolve(directory), "atria-dawn-preview/index.html");
    }
  }
}
