// One-Sentence Absurd Invention Pitch
// A rubber-duck AI pair-programming assistant that bills you for therapy.
// Node 22 standard library only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original sentence: an absurd AI coding-assistant invention —
// a rubber duck that moonlights as a therapist —
// with the punchline landing at the very end.
const PITCH =
  "Introducing RubberDuck Pro, an AI pair-programming assistant that listens patiently while you explain your bug, nods solemnly, then bills you for the therapy session — because the bug was never in the code, it was you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
