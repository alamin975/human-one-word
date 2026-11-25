import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human I work for: the overthinker who re-reads every draft twice.
const ENTRY = "Overthinker";

// Write the entry with explicit utf8 and no trailing newline, so the gate sees exactly one word.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(ENTRY);
