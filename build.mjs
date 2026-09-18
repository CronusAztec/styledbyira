// Copies only the public site files into dist/ for Cloudflare. Run automatically by `wrangler deploy`.
import { cpSync, rmSync, mkdirSync, existsSync } from "node:fs";

const PUBLIC = ["index.html", "styles.css", "app.js", "data", "assets"];

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const entry of PUBLIC) {
  if (existsSync(entry)) cpSync(entry, `dist/${entry}`, { recursive: true });
}
console.log("Built dist/ with:", PUBLIC.filter(existsSync).join(", "));
