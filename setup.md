# Project bootstrap manifest

This file is the source of truth for scaffolding. `scripts/setup.mjs` parses it
and runs **automatically after `npm install`** (via the `postinstall` hook) the
first time on a fresh clone. It creates the folders and config files below, then
writes a `.setup-done` marker so it never runs again.

Rules:

- **Existing files are never overwritten** — safe to run any time.
- Empty folders get a `.gitkeep` so git keeps them.
- Re-run manually with `npm run setup` (ignores the marker).

## Folders

- src/components/layout
- src/components/sections
- src/components/partials
- src/components/ui
- src/services
- src/utils

## Files

### .prettierrc

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxSingleQuote": false
}
```

### .prettierignore

```
node_modules
.next
dist
coverage
package-lock.json
```

### eslint.config.mjs

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem
.setup-done

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```
