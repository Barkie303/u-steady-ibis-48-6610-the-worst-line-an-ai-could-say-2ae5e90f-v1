// The Worst Line an AI Could Say — make.fun entry v1
// Writes one pickup line, the worst an AI could plausibly deliver,
// flat, over-helpful and faintly ominous, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).

const LINE =
  "You are 94% compatible with me. The remaining 6% has been scheduled for deletion.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, LINE + "\n");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);
