#!/usr/bin/env node
// Bootstraps the project from setup.md.
//
// Runs automatically after `npm install` (via the `postinstall` hook), guarded
// by a `.setup-done` marker so the work only happens once per clone. It creates
// the folders and config files declared in setup.md.
//
// Existing files are NEVER overwritten. Re-run any time with `npm run setup`
// (which passes --force to ignore the marker).

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const markerPath = join(root, ".setup-done");
const manifestPath = join(root, "setup.md");
const force = process.argv.includes("--force");

if (existsSync(markerPath) && !force) {
  process.exit(0); // already bootstrapped — stay quiet and fast
}

if (!existsSync(manifestPath)) {
  console.warn("[setup] setup.md not found — nothing to bootstrap.");
  process.exit(0);
}

const { folders, files } = parseManifest(readFileSync(manifestPath, "utf8"));
let created = 0;

for (const folder of folders) {
  const abs = join(root, folder);
  if (!existsSync(abs)) {
    mkdirSync(abs, { recursive: true });
    created++;
  }
  // git won't track an empty folder, so drop a .gitkeep to preserve it.
  if (readdirSync(abs).length === 0) {
    writeFileSync(join(abs, ".gitkeep"), "");
  }
}

for (const [path, content] of files) {
  const abs = join(root, path);
  if (existsSync(abs)) continue; // never clobber a file the user already has
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content.endsWith("\n") ? content : content + "\n");
  created++;
}

writeFileSync(markerPath, new Date().toISOString() + "\n");
console.log(`[setup] bootstrap complete — ${created} item(s) created.`);

/**
 * Parse setup.md into a folder list and a path -> content map.
 *
 * Format:
 *   ## Folders        -> each `- path` bullet is a folder to ensure exists
 *   ## Files          -> each `### path` heading names a file, and the next
 *                        fenced code block is its contents
 */
function parseManifest(md) {
  const lines = md.split(/\r?\n/);
  const folders = [];
  const files = new Map();

  let section = null; // "folders" | "files" | null
  let currentFile = null; // path awaiting its code block
  let inFence = false;
  let buffer = [];

  for (const line of lines) {
    const isFence = line.trimStart().startsWith("```");

    if (inFence) {
      if (isFence) {
        if (currentFile) {
          files.set(currentFile, buffer.join("\n"));
          currentFile = null;
        }
        inFence = false;
        buffer = [];
      } else {
        buffer.push(line);
      }
      continue;
    }

    if (isFence) {
      inFence = true; // opening fence; captured content is written on close
      buffer = [];
      continue;
    }

    const h2 = line.match(/^##\s+(.+?)\s*$/);
    if (h2) {
      section = h2[1].toLowerCase();
      currentFile = null;
      continue;
    }

    if (section === "folders") {
      const bullet = line.match(/^\s*[-*]\s+(.+?)\s*$/);
      if (bullet) folders.push(bullet[1].replace(/\/+$/, ""));
    } else if (section === "files") {
      const h3 = line.match(/^###\s+(.+?)\s*$/);
      if (h3) currentFile = h3[1];
    }
  }

  return { folders, files };
}
