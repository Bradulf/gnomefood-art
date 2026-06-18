#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const REQUIRED_STRIPS = [
  "01-front-strip",
  "02-main-strip",
  "03-rear-strip",
  "04-atmosphere-strip",
];

const REQUIRED_LAYER_FILES = REQUIRED_STRIPS.map((strip) =>
  path.join("layers", `${strip}.md`)
);

const STALE_TERMS = [
  "foreground layer",
  "midground layer",
  "background layer",
  "near layer",
  "far layer",
  "distant layer",
  "different camera distance",
  "zoom in",
  "zoom out",
];

const CONTINUITY_TERMS = [
  "previous scene",
  "changed",
  "now",
  "from scene",
  "since scene",
  "carry forward",
  "continuity",
];

function usage() {
  console.error(
    "Usage: node art-pipeline/scripts/validate-scene.js art-pipeline/scenes/002-desert-mound"
  );
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function normalizeText(text) {
  return text.toLowerCase();
}

function lineNumbersForTerms(text, terms) {
  const lines = text.split(/\r?\n/);
  const matches = [];

  for (let index = 0; index < lines.length; index += 1) {
    const lowerLine = lines[index].toLowerCase();
    for (const term of terms) {
      if (lowerLine.includes(term)) {
        matches.push({ term, line: index + 1 });
      }
    }
  }

  return matches;
}

function hasTransparentPngRequirements(promptsText) {
  const text = normalizeText(promptsText);
  return (
    text.includes("transparent png") &&
    (text.includes("transparent background") ||
      text.includes("clean alpha") ||
      text.includes("clean alpha edges")) &&
    (text.includes("no rectangular backdrop") ||
      text.includes("no full scene backdrop") ||
      text.includes("no sky plate"))
  );
}

function hasSharedCameraCanvasAlignment(promptsText) {
  const text = normalizeText(promptsText);
  const canvas = text.includes("canvas size") || text.includes("canvas dimensions");
  const camera =
    text.includes("same camera") ||
    text.includes("same side-view camera") ||
    text.includes("same camera distance");
  const alignment =
    text.includes("same horizon") ||
    text.includes("horizon placement") ||
    text.includes("bottom alignment") ||
    text.includes("world scale");

  return canvas && camera && alignment;
}

function isNonFirstScene(sceneDir, sceneJson) {
  if (sceneJson && Number.isFinite(sceneJson.order)) {
    return sceneJson.order > 1;
  }

  const folderName = path.basename(sceneDir);
  const numericPrefix = folderName.match(/^(\d+)/);
  if (numericPrefix) {
    return Number(numericPrefix[1]) > 1;
  }

  return false;
}

function formatDetail(detail) {
  if (!detail) return "";
  return ` - ${detail}`;
}

function addCheck(checks, name, passed, detail) {
  checks.push({ name, passed, detail });
}

function main() {
  const sceneArg = process.argv[2];
  if (!sceneArg) {
    usage();
    process.exit(2);
  }

  const sceneDir = path.resolve(sceneArg);
  const checks = [];

  addCheck(
    checks,
    "scene folder exists",
    exists(sceneDir) && fs.statSync(sceneDir).isDirectory(),
    sceneDir
  );

  const sceneJsonPath = path.join(sceneDir, "scene.json");
  let sceneJson = null;
  let sceneJsonError = null;

  if (exists(sceneJsonPath)) {
    try {
      sceneJson = JSON.parse(readText(sceneJsonPath));
    } catch (error) {
      sceneJsonError = error.message;
    }
  }

  addCheck(
    checks,
    "scene.json exists",
    exists(sceneJsonPath),
    path.relative(process.cwd(), sceneJsonPath)
  );
  addCheck(
    checks,
    "scene.json parses",
    exists(sceneJsonPath) && !sceneJsonError,
    sceneJsonError
  );

  const storyPath = path.join(sceneDir, "story.md");
  const traversalPath = path.join(sceneDir, "traversal.md");
  const promptsPath = path.join(sceneDir, "output", "prompts.md");

  addCheck(checks, "story.md exists", exists(storyPath), "story.md");
  addCheck(checks, "traversal.md exists", exists(traversalPath), "traversal.md");

  for (const layerFile of REQUIRED_LAYER_FILES) {
    addCheck(
      checks,
      `${layerFile} exists`,
      exists(path.join(sceneDir, layerFile)),
      layerFile
    );
  }

  addCheck(
    checks,
    "output/prompts.md exists",
    exists(promptsPath),
    "output/prompts.md"
  );

  let promptsText = "";
  if (exists(promptsPath)) {
    promptsText = readText(promptsPath);
  }

  if (promptsText) {
    const lowerPrompts = normalizeText(promptsText);
    const missingStripRefs = REQUIRED_STRIPS.filter(
      (strip) => !lowerPrompts.includes(strip)
    );

    addCheck(
      checks,
      "output/prompts.md references all four strips",
      missingStripRefs.length === 0,
      missingStripRefs.length
        ? `missing: ${missingStripRefs.join(", ")}`
        : REQUIRED_STRIPS.join(", ")
    );

    addCheck(
      checks,
      "output/prompts.md includes transparent PNG requirements",
      hasTransparentPngRequirements(promptsText),
      "expects transparent PNG plus alpha/backdrop constraints"
    );

    addCheck(
      checks,
      "output/prompts.md includes shared camera/canvas alignment language",
      hasSharedCameraCanvasAlignment(promptsText),
      "expects canvas size plus same-camera/horizon/bottom/world-scale language"
    );

    const staleMatches = lineNumbersForTerms(promptsText, STALE_TERMS);
    addCheck(
      checks,
      "output/prompts.md has no stale camera-distance layer terms",
      staleMatches.length === 0,
      staleMatches.length
        ? staleMatches
            .map((match) => `${match.term} on line ${match.line}`)
            .join("; ")
        : "no stale terms found"
    );
  } else {
    addCheck(
      checks,
      "output/prompts.md references all four strips",
      false,
      "output/prompts.md could not be read"
    );
    addCheck(
      checks,
      "output/prompts.md includes transparent PNG requirements",
      false,
      "output/prompts.md could not be read"
    );
    addCheck(
      checks,
      "output/prompts.md includes shared camera/canvas alignment language",
      false,
      "output/prompts.md could not be read"
    );
    addCheck(
      checks,
      "output/prompts.md has no stale camera-distance layer terms",
      false,
      "output/prompts.md could not be read"
    );
  }

  const nonFirstScene = isNonFirstScene(sceneDir, sceneJson);
  if (nonFirstScene) {
    let storyText = "";
    if (exists(storyPath)) {
      storyText = readText(storyPath);
    }

    const storyLower = normalizeText(storyText);
    const foundTerms = CONTINUITY_TERMS.filter((term) => storyLower.includes(term));

    addCheck(
      checks,
      "non-first story.md includes continuity/change language",
      foundTerms.length > 0,
      foundTerms.length
        ? `found: ${foundTerms.join(", ")}`
        : `expected one of: ${CONTINUITY_TERMS.join(", ")}`
    );
  } else {
    addCheck(
      checks,
      "non-first story.md includes continuity/change language",
      true,
      "not required for first scene or unnumbered scene"
    );
  }

  const failed = checks.filter((check) => !check.passed);

  console.log(`Art pipeline scene validation: ${path.relative(process.cwd(), sceneDir)}`);
  console.log("");

  for (const check of checks) {
    const status = check.passed ? "PASS" : "FAIL";
    console.log(`[${status}] ${check.name}${formatDetail(check.detail)}`);
  }

  console.log("");
  if (failed.length) {
    console.log(`Result: FAIL (${failed.length} failed, ${checks.length} total)`);
    process.exit(1);
  }

  console.log(`Result: PASS (${checks.length} checks)`);
}

main();
