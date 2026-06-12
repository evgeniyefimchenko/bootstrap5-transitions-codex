import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { coreEffects, effects, extendedEffects } from "./effects.mjs";

const root = resolve(import.meta.dirname, "..");
const errors = [];

async function read(relativePath) {
  return readFile(resolve(root, relativePath), "utf8");
}

async function exists(relativePath) {
  try {
    await access(resolve(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

async function walk(relativePath) {
  const entries = await readdir(resolve(root, relativePath), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = `${relativePath}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...await walk(child));
    } else {
      files.push(child);
    }
  }
  return files;
}

const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "LICENSE",
  "package.json",
  "index.html",
  "assets/css/bootstrap5-transitions.css",
  "assets/css/core.css",
  "assets/css/extended.css",
  "assets/js/demo.js",
  "assets/js/effects-data.js",
  "references/catalog.md",
  "references/bootstrap5-rules.md",
  "references/usage-examples.md",
  "references/reduced-motion.md",
  "references/codex-usage.md",
  ".agents/skills/bootstrap5-transitions/SKILL.md",
  ".agents/skills/bootstrap5-transitions/references/catalog.md",
  ".agents/skills/bootstrap5-transitions/references/decision-table.md",
  ".agents/skills/bootstrap5-transitions/references/implementation-rules.md",
];

for (const file of requiredFiles) {
  assert(await exists(file), `Missing required file: ${file}`);
}

const coreCss = await read("assets/css/core.css");
const extendedCss = await read("assets/css/extended.css");
const aggregateCss = await read("assets/css/bootstrap5-transitions.css");
const catalog = await read("references/catalog.md");
const skillCatalog = await read(".agents/skills/bootstrap5-transitions/references/catalog.md");
const skill = await read(".agents/skills/bootstrap5-transitions/SKILL.md");
const index = await read("index.html");
const packageJson = JSON.parse(await read("package.json"));

assert(coreEffects.length === 82, `Expected 82 core effects, found ${coreEffects.length}`);
assert(extendedEffects.length === 127, `Expected 127 extended effects, found ${extendedEffects.length}`);
assert(effects.length === 209, `Expected 209 total effects, found ${effects.length}`);
assert(aggregateCss.includes('@import "./core.css";'), "Aggregate CSS does not import core.css");
assert(aggregateCss.includes('@import "./extended.css";'), "Aggregate CSS does not import extended.css");
assert(packageJson.license === "MIT", "package.json license must be MIT");
assert(!packageJson.dependencies, "Production dependencies are not allowed");
assert(index.includes("bootstrap@5.3.8"), "Demo must use the pinned Bootstrap 5.3 CDN");
assert(index.includes("assets/js/demo.js"), "Demo does not load assets/js/demo.js");
assert(index.includes("assets/css/bootstrap5-transitions.css"), "Demo does not load aggregate CSS");

const frontmatterMatch = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
assert(frontmatterMatch, "Skill frontmatter format is invalid");
if (frontmatterMatch) {
  const frontmatterLines = frontmatterMatch[1].split(/\r?\n/);
  const frontmatter = Object.fromEntries(frontmatterLines.map((line) => {
    const separator = line.indexOf(":");
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
  }));
  assert(Object.keys(frontmatter).every((key) => ["name", "description"].includes(key)), "Skill frontmatter has unexpected keys");
  assert(frontmatter.name === "bootstrap5-transitions", "Skill name is invalid");
  assert(/^[a-z0-9-]+$/.test(frontmatter.name) && frontmatter.name.length <= 64, "Skill name violates naming rules");
  assert(Boolean(frontmatter.description), "Skill description is missing");
  assert(frontmatter.description.length <= 1024 && !/[<>]/.test(frontmatter.description), "Skill description violates validation rules");
}

for (const effect of effects) {
  const css = effect.level === "core" ? coreCss : extendedCss;
  assert(new RegExp(`\\.${effect.className}(?![a-z0-9-])`).test(css), `Missing CSS selector: .${effect.className}`);
  assert(await exists(effect.snippetPath), `Missing snippet: ${effect.snippetPath}`);
  if (await exists(effect.snippetPath)) {
    const snippet = await read(effect.snippetPath);
    assert(snippet.includes(effect.className), `Snippet does not use ${effect.className}: ${effect.snippetPath}`);
    assert(!/\bonclick\s*=|\bonchange\s*=|\boninput\s*=/i.test(snippet), `Inline handler found: ${effect.snippetPath}`);
    assert(!/\bdata-toggle\s*=|\bdata-target\s*=/i.test(snippet), `Bootstrap 4 data API found: ${effect.snippetPath}`);
  }
  assert(catalog.includes(`## ${effect.name}`), `Main catalog missing ${effect.name}`);
  assert(skillCatalog.includes(`## ${effect.name}`), `Skill catalog missing ${effect.name}`);
}

for (const [name, css] of [["core.css", coreCss], ["extended.css", extendedCss]]) {
  assert(css.includes("@media (prefers-reduced-motion: reduce)"), `${name} lacks reduced-motion fallback`);
  assert(css.includes('[class*="bsx-"] *::after'), `${name} reduced-motion fallback does not cover nested pseudo-elements`);
  assert(!/^\s*\.(btn|modal|card|dropdown-menu|toast|alert|offcanvas)\s*[{,]/m.test(css), `${name} contains an unscoped Bootstrap override`);
  const importantLines = css.split(/\r?\n/).filter((line) => line.includes("!important"));
  assert(
    importantLines.every((line) => /(animation-duration|animation-iteration-count|transition-duration|scroll-behavior)/.test(line)),
    `${name} uses !important outside reduced-motion properties`,
  );
  const openBraces = (css.match(/{/g) ?? []).length;
  const closeBraces = (css.match(/}/g) ?? []).length;
  assert(openBraces === closeBraces, `${name} has unbalanced braces`);
}

assert(coreCss.includes(".bsx-toast-progress-line.show::after"), "Toast progress line must start when the toast is shown");
assert(extendedCss.includes(".bsx-toast-auto-hide-bar.show::after"), "Toast auto-hide bar must start when the toast is shown");
assert(extendedCss.includes("@keyframes bsx-progress-fill"), "Progress fill animation is missing");
assert(extendedCss.includes("@keyframes bsx-progress-stripes"), "Striped progress animation is missing");

const fullscreenSnippet = await read("snippets/extended/modal/modal-fullscreen-soft.html");
const disabledSnippet = await read("snippets/extended/button/button-disabled-soft.html");
const pressSnippet = await read("snippets/core/button/button-press.html");
assert(fullscreenSnippet.includes("modal-fullscreen"), "Fullscreen modal snippet lacks .modal-fullscreen");
assert(/\bdisabled\b/.test(disabledSnippet), "Disabled button snippet lacks the disabled state");
assert(!pressSnippet.includes("data-bsx-action"), "CSS-only button snippet should not require demo JavaScript");

const sourceFiles = [
  ...(await walk("assets")).filter((file) => /\.(css|js)$/i.test(file)),
  ...(await walk("snippets")).filter((file) => /\.html$/i.test(file)),
  "index.html",
  "package.json",
];

for (const file of sourceFiles) {
  const source = await read(file);
  assert(!/<script[^>]+jquery|from\s+["'](?:react|vue|svelte|angular|gsap)|animate\.css|framer-motion/i.test(source), `Forbidden dependency reference in ${file}`);
  assert(!/\bdata-toggle\s*=|\bdata-target\s*=/i.test(source), `Bootstrap 4 data API in ${file}`);
  assert(!/\b(?:TODO|FIXME|PLACEHOLDER)\b/.test(source), `Temporary marker in ${file}`);
}

const snippetFiles = (await walk("snippets")).filter((file) => file.endsWith(".html"));
assert(snippetFiles.length === effects.length, `Expected ${effects.length} snippets, found ${snippetFiles.length}`);

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Validation passed: ${coreEffects.length} core + ${extendedEffects.length} extended effects.`);
  console.log(`${snippetFiles.length} snippets, complete CSS coverage, catalogs, demo, and skill are present.`);
}
