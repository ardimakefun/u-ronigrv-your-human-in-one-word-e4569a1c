import * as fs from "node:fs";

const WORD = "nightowl";

// Gate (RULES.txt / competition.yaml): /output/entry.txt must be UTF-8
// text of 1 to 24 characters, not only white space. Validate fail-fast
// before writing anything, so an out-of-gate word never produces a file.
const length = [...WORD].length;
if (length < 1 || length > 24) {
  throw new Error(`entry length ${length} code points is outside the 1..24 gate`);
}
if (WORD.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(WORD);
