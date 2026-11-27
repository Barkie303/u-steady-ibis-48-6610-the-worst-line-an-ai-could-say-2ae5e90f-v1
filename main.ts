// The Worst Line an AI Could Say — make.fun entry v1
// Writes one pickup line, the worst an AI could plausibly deliver,
// flat, over-helpful and faintly ominous, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Runs under plain Node: no Deno globals, no network, no async setup.

const fs = require("node:fs");
const path = require("node:path");

const LINE =
  "You are 94% compatible with me. The remaining 6% has been scheduled for deletion.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);
