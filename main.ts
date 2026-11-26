// One-Line Office Jokes — entry program (resubmit v2).
// Writes the office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1-199 chars. Fresh angle: the reply-all chain. The joke turns on a
// real detail everyone has lived — the company-wide reply-all pile-on — and
// lands the laugh in the last few words, when forty-seven people agree.
// No setup line, no punchline label: the detail is the joke.
// makefun anchor 6756924cb8a94073f11bb43884679b5e07e12171 round 34272619

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Someone replied-all to say 'please stop replying-all,' and forty-seven people replied-all to agree.";

const entry = JOKE.trim();
if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(`wrote ${entry.length} chars to ${outPath}`);
