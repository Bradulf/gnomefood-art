#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const REQUIRED_STRIPS = [
  "01-front-strip",
  "02-main-strip",
  "03-rear-strip",
  "04-atmosphere-strip",
];

const STALE_TERMS = [
  "foreground layer",
  "midground layer",
  "background layer",
  "near layer",
  "far layer",
  "distant layer",
  "different camera distance",
  "parallax layer",
  "parallax strip",
  "parallax asset",
  "parallax engine",
  "side-scrolling",
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

function stripFileCandidates(strip) {
  return [path.join("layers", `${strip}.md`), `${strip}.md`];
}

function findExistingStripFile(sceneDir, strip) {
  return stripFileCandidates(strip).find((candidate) =>
    exists(path.join(sceneDir, candidate))
  );
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

function hasSceneCutoutRequirements(promptText) {
  const text = normalizeText(promptText);
  return (
    text.includes("transparent png") &&
    (text.includes("transparent background") ||
      text.includes("clean alpha") ||
      text.includes("clean alpha edges")) &&
    text.includes("no sky") &&
    text.includes("no clouds") &&
    text.includes("no sun") &&
    text.includes("no moon") &&
    (text.includes("no horizon background fill") ||
      text.includes("no horizon fill")) &&
    (text.includes("no white") || text.includes("no white backdrop")) &&
    (text.includes("no black") || text.includes("no black backdrop")) &&
    (text.includes("no full rectangular background") ||
      text.includes("no rectangular background") ||
      text.includes("no rectangular backdrop")) &&
    text.includes("terrain") &&
    (text.includes("story beat") ||
      text.includes("world moment") ||
      text.includes("visual chronicle") ||
      text.includes("timeline scene")) &&
    (text.includes("open upper space") ||
      text.includes("leave open upper space") ||
      text.includes("empty sky/background"))
  );
}

function hasSceneGenerationCommand(promptText) {
  const text = normalizeText(promptText);
  return (
    text.startsWith(
      "generate this image now.\ncreate a transparent png scene cutout for gnomefood.com."
    ) ||
    text.includes("create one transparent png image for this complete scene cutout")
  );
}

function hasDocumentStyleLabels(promptText) {
  const text = normalizeText(promptText);
  return [
    "generation command:",
    "shared scene context:",
    "camera / canvas / composition law:",
    "transparency requirements:",
    "global negative constraints:",
    "visual direction:",
    "composition:",
    "negative constraints:",
    "suggested filename:",
  ].some((label) => text.includes(label));
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

function hasGenerationCommand(promptText) {
  return normalizeText(promptText).includes(
    "create one transparent png image for this single compositing strip"
  );
}

function hasInlineSharedContext(promptText) {
  const text = normalizeText(promptText);
  return (
    text.includes("shared scene context") &&
    text.includes("scene id") &&
    text.includes("story beat") &&
    text.includes("current visible change")
  );
}

function hasImageFirstSceneContent(promptText) {
  const text = normalizeText(promptText);
  return (
    text.includes("scene") &&
    (text.includes("story") ||
      text.includes("continuity") ||
      text.includes("carries forward") ||
      text.includes("chronicle") ||
      text.includes("timeline")) &&
    (text.includes("style") ||
      text.includes("cinematic") ||
      text.includes("hand-crafted") ||
      text.includes("fungal") ||
      text.includes("worldbuilding"))
  );
}

function hasSharedContextFields(sharedContextText) {
  const text = normalizeText(sharedContextText);
  return [
    "scene id",
    "scene title",
    "story beat",
    "scene memory",
    "current visible change",
    "camera / canvas / alignment law",
    "transparency requirements",
    "character presence",
    "asset / prop presence",
    "global negative constraints",
  ].every((field) => text.includes(field));
}

function hasPhase1SharedContextFields(sharedContextText) {
  const text = normalizeText(sharedContextText);
  return [
    "scene id",
    "scene title",
    "story beat",
    "scene memory",
    "current visible change",
    "camera / canvas / composition law",
    "transparency requirements",
    "character presence",
    "asset / prop presence",
    "global negative constraints",
  ].every((field) => text.includes(field));
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
    "scene.json parses when present",
    !exists(sceneJsonPath) || !sceneJsonError,
    exists(sceneJsonPath)
      ? sceneJsonError || path.relative(process.cwd(), sceneJsonPath)
      : "optional scene.json not present"
  );

  const storyPath = path.join(sceneDir, "story.md");
  const traversalPath = path.join(sceneDir, "traversal.md");
  const sharedContextPath = path.join(sceneDir, "output", "shared-context.md");
  const promptsPath = path.join(sceneDir, "output", "prompts.md");
  const scenePromptPath = path.join(sceneDir, "output", "prompts", "scene.txt");
  const phase1ScenePromptExists = exists(scenePromptPath);

  addCheck(checks, "story.md exists", exists(storyPath), "story.md");
  addCheck(
    checks,
    "traversal.md exists when present",
    !exists(traversalPath) || fs.statSync(traversalPath).isFile(),
    exists(traversalPath) ? "optional traversal.md present" : "optional traversal.md not present"
  );

  addCheck(
    checks,
    "output/shared-context.md exists",
    exists(sharedContextPath),
    "output/shared-context.md"
  );

  if (exists(sharedContextPath)) {
    const sharedContextText = readText(sharedContextPath);
    addCheck(
      checks,
      "output/shared-context.md includes required fields",
      phase1ScenePromptExists
        ? hasPhase1SharedContextFields(sharedContextText)
        : hasSharedContextFields(sharedContextText),
      phase1ScenePromptExists
        ? "expects scene id/title, story beat, continuity, visible change, composition, transparency, character, asset, and negative fields"
        : "expects scene id/title, story beat, continuity, visible change, alignment, transparency, character, asset, and negative fields"
    );
  } else {
    addCheck(
      checks,
      "output/shared-context.md includes required fields",
      false,
      "output/shared-context.md could not be read"
    );
  }

  let promptsText = "";
  if (exists(promptsPath)) {
    promptsText = readText(promptsPath);
  }

  if (phase1ScenePromptExists) {
    const scenePromptText = readText(scenePromptPath);
    addCheck(
      checks,
      "Phase 1 output prompt exists",
      true,
      "output/prompts/scene.txt"
    );
    addCheck(
      checks,
      "Phase 1 prompt is self-contained",
      hasSceneGenerationCommand(scenePromptText) &&
        hasImageFirstSceneContent(scenePromptText) &&
        hasSceneCutoutRequirements(scenePromptText),
      "expects image-first generation command, scene content, transparent cutout rules, forbidden background rules, story/continuity, and open upper space"
    );
    addCheck(
      checks,
      "Phase 1 prompt is image-first",
      !hasDocumentStyleLabels(scenePromptText),
      "expects direct image-generation prose without document-style labels"
    );

    if (promptsText) {
      addCheck(
        checks,
        "optional output/prompts.md references Phase 1 scene prompt",
        normalizeText(promptsText).includes("output/prompts/scene.txt") &&
          normalizeText(promptsText).includes("output/images/scene.png"),
        "expects scene.txt and scene.png daily output references"
      );
    } else {
      addCheck(
        checks,
        "optional output/prompts.md references Phase 1 scene prompt",
        true,
        "output/prompts.md not present; Phase 1 uses output/prompts/scene.txt directly"
      );
    }
  } else if (promptsText) {
    for (const strip of REQUIRED_STRIPS) {
      const existingStripFile = findExistingStripFile(sceneDir, strip);
      addCheck(
        checks,
        `${strip} strip brief exists`,
        Boolean(existingStripFile),
        existingStripFile || stripFileCandidates(strip).join(" or ")
      );
    }

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
      "output/prompts.md includes four generation commands",
      (lowerPrompts.match(
        /create one transparent png image for this single compositing strip/g
      ) || []).length === REQUIRED_STRIPS.length,
      "expects one direct image-generation command per strip"
    );

    addCheck(
      checks,
      "output/prompts.md includes inline shared context for each strip",
      (lowerPrompts.match(/shared scene context/g) || []).length ===
        REQUIRED_STRIPS.length,
      "expects shared scene context copied into every strip prompt"
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
      "output/prompts.md has no stale multi-plane/camera terminology",
      staleMatches.length === 0,
      staleMatches.length
        ? staleMatches
            .map((match) => `${match.term} on line ${match.line}`)
            .join("; ")
        : "no stale terms found"
    );
    for (const strip of REQUIRED_STRIPS) {
      const individualPromptPath = path.join(sceneDir, "output", "prompts", `${strip}.txt`);
      const relativePromptPath = path.relative(sceneDir, individualPromptPath);
      const promptExists = exists(individualPromptPath);

      addCheck(
        checks,
        `${strip} individual prompt exists`,
        promptExists,
        relativePromptPath
      );

      if (promptExists) {
        const promptText = readText(individualPromptPath);
        addCheck(
          checks,
          `${strip} individual prompt is self-contained`,
          hasGenerationCommand(promptText) &&
            hasInlineSharedContext(promptText) &&
            hasTransparentPngRequirements(promptText) &&
            hasSharedCameraCanvasAlignment(promptText),
          "expects generation command, inline shared context, transparency, and alignment"
        );
      } else {
        addCheck(
          checks,
          `${strip} individual prompt is self-contained`,
          false,
          `${relativePromptPath} could not be read`
        );
      }
    }
  } else {
    addCheck(
      checks,
      "Phase 1 output prompt exists",
      false,
      "expected output/prompts/scene.txt for Phase 1, or legacy strip prompts"
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
