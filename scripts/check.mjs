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
  "assets/js/bootstrap5-transitions.js",
  "assets/js/demo.js",
  "assets/js/effects-data.js",
  "references/catalog.md",
  "references/bootstrap5-rules.md",
  "references/usage-examples.md",
  "references/reduced-motion.md",
  "references/codex-usage.md",
  ".agents/skills/bootstrap5-transitions/SKILL.md",
  ".agents/skills/bootstrap5-transitions/agents/openai.yaml",
  ".agents/skills/bootstrap5-transitions/references/catalog.md",
  ".agents/skills/bootstrap5-transitions/references/decision-table.md",
  ".agents/skills/bootstrap5-transitions/references/implementation-rules.md",
  ".agents/skills/bootstrap5-transitions/references/motion-quality.md",
  ".agents/skills/bootstrap5-transitions/references/visual-polish.md",
  ".agents/skills/bootstrap5-transitions/references/color-contrast.md",
  ".agents/skills/bootstrap5-transitions/references/review-format.md",
];

for (const file of requiredFiles) {
  assert(await exists(file), `Missing required file: ${file}`);
}

const markdownYamlFiles = [
  "AGENTS.md",
  "README.md",
  ...(await walk("references")).filter((file) => /\.(?:md|ya?ml)$/i.test(file)),
  ...(await walk(".agents/skills/bootstrap5-transitions")).filter((file) => /\.(?:md|ya?ml)$/i.test(file)),
];

for (const file of markdownYamlFiles) {
  const lines = (await read(file)).split(/\r?\n/);
  const longLineIndex = lines.findIndex((line) => line.length > 1000);
  assert(longLineIndex === -1, `${file}:${longLineIndex + 1} has a line longer than 1000 characters`);
}

const coreCss = await read("assets/css/core.css");
const extendedCss = await read("assets/css/extended.css");
const aggregateCss = await read("assets/css/bootstrap5-transitions.css");
const catalog = await read("references/catalog.md");
const skillCatalog = await read(".agents/skills/bootstrap5-transitions/references/catalog.md");
const skill = await read(".agents/skills/bootstrap5-transitions/SKILL.md");
const openaiYaml = await read(".agents/skills/bootstrap5-transitions/agents/openai.yaml");
const catalogLf = catalog.replace(/\r\n/g, "\n");
const skillCatalogLf = skillCatalog.replace(/\r\n/g, "\n");
const skillLf = skill.replace(/\r\n/g, "\n");
const openaiYamlLf = openaiYaml.replace(/\r\n/g, "\n");
const index = await read("index.html");
const readme = await read("README.md");
const runtimeJs = await read("assets/js/bootstrap5-transitions.js");
const packageJson = JSON.parse(await read("package.json"));

assert(coreEffects.length === 82, `Expected 82 core effects, found ${coreEffects.length}`);
assert(extendedEffects.length === 127, `Expected 127 extended effects, found ${extendedEffects.length}`);
assert(effects.length === 209, `Expected 209 total effects, found ${effects.length}`);
assert(aggregateCss.includes('@import "./core.css";'), "Aggregate CSS does not import core.css");
assert(aggregateCss.includes('@import "./extended.css";'), "Aggregate CSS does not import extended.css");
assert(packageJson.license === "MIT", "package.json license must be MIT");
assert(!packageJson.dependencies, "Production dependencies are not allowed");
assert(index.includes("bootstrap@5.3.8"), "Demo must use the pinned Bootstrap 5.3 CDN");
assert(index.includes("assets/js/bootstrap5-transitions.js"), "Demo does not load the reusable runtime");
assert(index.includes("assets/js/demo.js"), "Demo does not load assets/js/demo.js");
assert(index.includes("assets/css/bootstrap5-transitions.css"), "Demo does not load aggregate CSS");
assert(
  index.indexOf("bootstrap.bundle.min.js") < index.indexOf("assets/js/bootstrap5-transitions.js")
    && index.indexOf("assets/js/bootstrap5-transitions.js") < index.indexOf("assets/js/demo.js"),
  "Demo scripts must load Bootstrap, reusable runtime, then demo.js",
);
assert(!readme.startsWith("```"), "README must not be wrapped in an outer code fence");
assert(!readme.includes("\uFFFD"), "README contains invalid replacement characters");
assert((readme.match(/^## Когда не подходит$/gm) ?? []).length === 1, "README contains duplicated tail sections");
assert(!/```(?:jsx|vue|svelte|angular)|\$\([^)]*\)\.(?:addClass|removeClass|toggleClass)/i.test(readme), "README contains a forbidden framework example");
assert(readme.includes("assets/js/bootstrap5-transitions.js"), "README does not explain the reusable runtime");
assert(readme.includes("assets/js/demo.js"), "README does not distinguish demo-only JavaScript");
assert(readme.includes("Agent Skill quality rules"), "README must include Agent Skill quality rules");
assert(catalogLf.includes("| Class | Level | Component | Requires JS |"), "Main catalog must include summary table");
assert(skillCatalogLf.includes("| Class | Level | Component | Requires JS |"), "Skill catalog must include summary table");
assert((catalogLf.match(/^## /gm) ?? []).length >= 100, "Main catalog must contain at least 100 effect headings");
assert((skillCatalogLf.match(/^## /gm) ?? []).length >= 100, "Skill catalog must contain at least 100 effect headings");
assert((catalogLf.match(/^## /gm) ?? []).length >= effects.length, "Main catalog must contain one heading per effect");
assert((skillCatalogLf.match(/^## /gm) ?? []).length >= effects.length, "Skill catalog must contain one heading per effect");

assert(/^---\nname:/.test(skillLf), "Skill frontmatter must start with multi-line YAML and name");
assert(/\n---\n\n# Bootstrap 5 Transitions Skill/.test(skillLf), "Skill body must start after frontmatter with a blank line");

assert(openaiYamlLf.split("\n").length >= 4, "openai.yaml must be multi-line YAML");
assert(openaiYamlLf.includes("interface:\n  display_name:"), "openai.yaml must use a nested interface.display_name block");
assert(openaiYamlLf.includes('display_name: "Bootstrap 5 Transitions"'), "openai.yaml display_name mismatch");
assert(openaiYamlLf.includes("data-bs-* attributes"), "openai.yaml default_prompt must mention data-bs-* preservation");

const frontmatterMatch = skillLf.match(/^---\n([\s\S]*?)\n---/);
assert(frontmatterMatch, "Skill frontmatter format is invalid");
if (frontmatterMatch) {
  const frontmatterLines = frontmatterMatch[1].split("\n");
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
    assert(
      snippet.includes("assets/js/bootstrap5-transitions.js") === effect.requiresJs,
      `Runtime dependency marker mismatch: ${effect.snippetPath}`,
    );
    assert(
      !snippet.includes("data-bsx-action") || effect.requiresJs,
      `Snippet uses data-bsx-action but is marked CSS-only: ${effect.snippetPath}`,
    );
  }
  assert(catalog.includes(`## ${effect.name}`), `Main catalog missing ${effect.name}`);
  assert(skillCatalog.includes(`## ${effect.name}`), `Skill catalog missing ${effect.name}`);
  assert(
    catalog.includes(`Runtime behavior: ${effect.runtimeBehavior ?? "none"}`),
    `Main catalog runtime behavior mismatch for ${effect.name}`,
  );
}

for (const [name, css] of [["core.css", coreCss], ["extended.css", extendedCss]]) {
  assert(css.includes("@media (prefers-reduced-motion: reduce)"), `${name} lacks reduced-motion fallback`);
  assert(css.includes('[class*="bsx-"] *::after'), `${name} reduced-motion fallback does not cover nested pseudo-elements`);
  assert(!/^\s*\.(btn|modal|card|dropdown-menu|toast|alert|offcanvas)\s*[{,]/m.test(css), `${name} contains an unscoped Bootstrap override`);
  assert(!/transition\s*:\s*all\b/i.test(css), `${name} uses transition: all`);
  assert(
    !/transition\s*:[^;]*(?:max-)?(?:width|height)|transition\s*:[^;]*(?:top|right|bottom|left|margin|padding)/i.test(css),
    `${name} animates a layout-changing property`,
  );
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
assert(
  /\.bsx-spinner-fade \.bsx-loader-dot\s*\{[^}]*display:\s*inline-block/s.test(extendedCss),
  "Spinner fade dots must have a rendered box",
);
assert(
  /\.bsx-popover-dismiss-fade\.popover\.fade\s*\{[^}]*transition:\s*opacity/s.test(extendedCss)
    && /\.bsx-popover-dismiss-fade\.popover\.fade\.show/.test(extendedCss),
  "Popover dismiss fade must transition both hidden and shown states",
);
assert(!/\.bsx-sidebar-mini-expand\s*\{[^}]*(?:max-)?width[^}]*transition/s.test(extendedCss), "Sidebar mini expand must not animate width");

const fullscreenSnippet = await read("snippets/extended/modal/modal-fullscreen-soft.html");
const disabledSnippet = await read("snippets/extended/button/button-disabled-soft.html");
const pressSnippet = await read("snippets/core/button/button-press.html");
const stackToastSnippet = await read("snippets/core/toast/toast-stack-pop.html");
assert(fullscreenSnippet.includes("modal-fullscreen"), "Fullscreen modal snippet lacks .modal-fullscreen");
assert(/\bdisabled\b/.test(disabledSnippet), "Disabled button snippet lacks the disabled state");
assert(!pressSnippet.includes("data-bsx-action"), "CSS-only button snippet should not require demo JavaScript");
assert((stackToastSnippet.match(/\bclass="toast(?:\s|")/g) ?? []).length >= 2, "Toast stack snippet must contain at least two toasts");

const runtimeActions = new Set(
  [...runtimeJs.matchAll(/case\s+"([^"]+)"/g)].map((match) => match[1]),
);
const snippetActions = new Set();

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
  if (file.endsWith(".html")) {
    for (const match of source.matchAll(/data-bsx-action="([^"]+)"/g)) {
      snippetActions.add(match[1]);
    }
  }
}

for (const action of snippetActions) {
  assert(runtimeActions.has(action), `Reusable runtime does not implement data-bsx-action="${action}"`);
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
