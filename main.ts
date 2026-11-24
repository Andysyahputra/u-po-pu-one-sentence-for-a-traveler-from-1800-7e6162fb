import { mkdirSync, writeFileSync } from "node:fs";

// One sentence for a traveler from 1800, explaining the modern internet
// using only things a person from 1800 already knows: a library, a post
// office, a road, a letter, breakfast, and tea. Two joined places, not a
// list of three, so every word earns its place; "at breakfast" fixes the
// letter in a single morning moment instead of the vaguer "in the morning".
const SENTENCE =
  "Imagine every library and post office in the world joined by one road, so a letter you write at breakfast is read on the far side of the earth before your tea cools.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
console.log(`characters: ${SENTENCE.length}`);
