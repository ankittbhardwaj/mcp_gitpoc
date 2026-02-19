# mcp_gitpoc

GitHub POC repository.

## Hello World React website

### Prereqs

- Node.js (you already have it)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

**If you get `Error: spawn EPERM`** (common in Cursor’s terminal): run `npm run dev` from an external terminal (PowerShell, CMD, or VS Code terminal) instead. The Cursor sandbox can block esbuild from spawning.

### No-build option (always works)

Open `standalone.html` directly in your browser. No Node, no build, no install. Uses React from CDN.

### Build

```bash
npm run build
npm run preview
```