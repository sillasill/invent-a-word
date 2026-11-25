import { mkdirSync, writeFileSync } from "node:fs";

// A brand-new word for a moment with no name yet, defined in one clear line.
// Deterministic by construction: no clock, no randomness, no network, same output every run.
const TEXT = "Miswave (n.): waving back at someone who was waving at the person behind you.";
const MAX_CHARS = 140;

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) throw new Error("entry length out of range");
if (TEXT.includes("\n") || TEXT.includes("\r")) throw new Error("entry must be a single line");
if (TEXT.trim() !== TEXT || TEXT.trim().length === 0) throw new Error("entry must not be blank or padded");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
