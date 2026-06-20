# Prompt Builder Instructions

This document describes how to turn a story beat into the Phase 1 image prompt for one transparent scene cutout.

No image generation API code belongs here yet. This pipeline starts as a manual workflow using structured files that can be automated later.

## Phase 1 Prompt Model

Phase 1 prioritizes daily story publishing. The default output is one complete transparent scene cutout:

- Prompt: `output/prompts/scene.txt`
- Image: `output/images/scene.png`

The image should depict the story beat as one coherent world moment. It should include terrain, the assigned character when present, assigned props or artifacts when present, and the visible story change.

The website provides the background system separately: dawn, morning, noon, dusk, night, and later weather or seasonal backgrounds. The generated scene image must leave the upper/background area empty and transparent so those website backgrounds show through.

## Inputs

For the Phase 1 scene prompt, read:

1. `VISION.md`
2. `world.md`
3. `global-style.md`
4. `camera-language.md`
5. Scene N-1 `story.md`, if present
6. Scene N-1 `traversal.md`, if present
7. Scene N-1 `output/shared-context.md`, if present
8. Scene N-1 `output/prompts/scene.txt`, if present
9. Scene N-2 `story.md` and `traversal.md`, optionally if available
10. The current scene's `story.md`
11. The current scene's `traversal.md`, if present
12. The current scene's `scene.md`, if present
13. The current scene's `scene-style.md`, if present
14. The current scene's `assets/artifacts.md` and `assets/props.md`, if present
15. The current scene's `characters.md`, if present
16. Referenced character YAML and visual files, if characters are used

Read `VISION.md` as highest-level project guidance. If a lower-level file implies that the scene is primarily a place, environmental variation, strip exercise, or full background painting, resolve the conflict in favor of `VISION.md`: scene equals story beat, scroll equals timeline, `story.md` is primary, and Phase 1 output is one transparent scene cutout.

Read `story.md` before every other scene-local document. Treat it as the scene's source of truth: the story beat, what changed from the previous scene, character focus, character action, world impact, emotional beat, and continuity notes for the next scene.

Read `traversal.md` only as supporting movement context. It should reveal or support what happens in `story.md`; it should not redefine the scene as a new environment. Read `scene.md`, `scene-style.md`, assets, characters, and legacy strip files as supporting context after the story beat is clear.

Use previous-scene memory before writing the current prompt. Preserve terrain layout, major landmarks, world scale, side-view camera language, route direction, and carry-forward consequences where appropriate.

## Characters And Assets

Read `assets/artifacts.md` and `assets/props.md` when present. These files define optional scene assets, not default strips.

- `assets/artifacts.md` can define story objects such as machines, shrines, ritual tools, crop clusters, route discoveries, landmarks, or other narrative objects.
- `assets/props.md` can define smaller supporting objects such as tools, baskets, cables, sacks, irrigation pieces, seed trays, or markers.
- Include assigned assets or props in `scene.png` only when they support the story beat.
- Do not invent unrelated props just to fill space.

If `characters.md` assigns a reusable character to the scene, also read that character's files from `characters/[character-id]/`:

- `reference/[character-id]-character.yaml`
- The reference image named by the YAML `reference_image.filename` field
- `character.md`
- `visual-rules.md`
- `poses.md`
- `evolution.md`
- `negative-prompts.md`
- Any additional selected files in `reference/`

Do not rewrite character identity in the scene prompt. Preserve identity from the reusable character files and adapt only pose, scale, emotion, direction, environmental effects, and evolution-stage details.

## Character Reference Modes

Final Phase 1 prompts are written for Manual ChatGPT Image Mode by default. They must be pasteable into ChatGPT image generation by themselves.

Manual ChatGPT Image Mode:

- Do not include local repo paths in `output/prompts/scene.txt` as if the image model can read them.
- If a reusable character has a visual reference, include this plain instruction: "Optional: upload the Sporeling reference image when generating for stronger identity preservation."
- Include the reusable character's identity details inline so the prompt still works without the reference image.
- Keep the prompt direct and image-first, not a document review.

Repo/Codex Context Mode:

- Local file paths may appear in `output/shared-context.md`, `characters.md`, `scene.json`, or internal notes.
- Codex may use local file paths while reading repo context and building the prompt.
- Do not rely on local file paths inside the final pasteable `output/prompts/scene.txt`.

## Art-Director Prompt Mode

Use concise art-director prompt mode for final image prompts. The prompt must read like a direct image request, not a structured review document.

Prioritize the final scene prompt in this order:

1. First line: `Generate this image now.`
2. Second line: `Create a transparent PNG scene cutout for gnomefood.com.`
3. Short scene title.
4. One concise visual description paragraph.
5. One concise story/continuity paragraph if needed.
6. One concise style paragraph.
7. One compact transparency/negative paragraph.

Keep the required rules compact:

- Transparent PNG.
- Clean alpha edges.
- One complete scene cutout.
- Side-view chronicle composition.
- Terrain and objects only.
- Leave open upper space.
- No sky.
- No clouds.
- No sun.
- No moon.
- No horizon background fill.
- No white or black backdrop.
- No full rectangular background.
- No full background plate.
- No top-down, aerial, isometric, poster, or detached diorama composition.

Use image-first art direction:

- "Generate this image now."
- "Create a transparent PNG scene cutout for gnomefood.com."
- "Depict one coherent story beat in the timeline."
- "Include terrain, assigned character, assigned props, and the visible change."
- "Leave the upper/background area empty and transparent."
- "Do not render sky, clouds, sun, moon, horizon fill, or a rectangular backdrop."

Do not use document-style labels in `output/prompts/scene.txt`, including:

- `Generation command:`
- `Shared scene context:`
- `Camera / canvas / composition law:`
- `Transparency requirements:`
- `Global negative constraints:`
- `Visual direction:`
- `Composition:`
- `Negative constraints:`
- `Suggested filename:`

## Output

Write compact reusable scene context into `output/shared-context.md`. This file is a helper for prompt construction and must include:

- Scene id.
- Scene title.
- Story beat.
- Scene memory / previous scene continuity.
- Current visible change.
- Camera / canvas / composition law.
- Transparency requirements.
- Character presence or absence.
- Asset / prop presence or absence.
- Global negative constraints.

Write the final standalone prompt to:

- `output/prompts/scene.txt`

The Phase 1 prompt must be fully self-contained. A user must be able to paste only `output/prompts/scene.txt` into ChatGPT image generation and get the correct transparent scene cutout without also pasting `output/shared-context.md` or any source files.

Each final scene prompt should include:

- Exact first line: `Generate this image now.`
- Exact second line: `Create a transparent PNG scene cutout for gnomefood.com.`
- Scene title as a short standalone line.
- A concise visual paragraph combining terrain, assigned character when present, assigned assets when present, and physical evidence of the story beat.
- A concise story/continuity paragraph when useful, including the visible change and what carries forward from prior scenes.
- A concise style paragraph from global and scene style files.
- A compact transparency/negative paragraph covering transparent PNG, clean alpha edges, open upper/background space, no sky, clouds, sun, moon, horizon background fill, white backdrop, black backdrop, full rectangular background, full background plate, text, UI, border, top-down view, aerial view, isometric view, poster composition, centered hero shot, detached diorama, extra characters, and unassigned assets.
- Inline character identity details, pose, scale, emotion, direction, evolution stage, scene-specific changes, and character-specific negatives only when a character is assigned.
- Optional reference-image upload instruction only when a reusable character has a visual reference; do not include local repo paths in `output/prompts/scene.txt`.

Do not put scene-wide context only in a separate notes file. Scene-wide context may appear in `output/shared-context.md` for maintainability, but `output/prompts/scene.txt` must include compact shared context inline.

## Story Beat Rules

Every scene should describe one moment in the civilization's history. The prompt builder should optimize for narrative progression before environmental variation.

Use `story.md` to keep the generated scene aligned around:

- What happens now.
- What changed from the previous scene.
- What the character, group, or implied traveler is doing.
- How the civilization, ecology, technology, ritual practice, settlement, or magic advances.
- What emotional turn the viewer should feel while scrolling.
- What should visibly carry forward into the next scene.

Environment descriptions support the story. They should provide physical evidence of the beat, continuity with prior beats, route readability, mood, and material specificity. They should not override the story beat or turn the scene into a static place study.

## Advanced Strip Mode

Four-strip output remains advanced/experimental. Use it only when a scene explicitly needs legacy strip compositing. In that mode, read `layer-rules/*.md`, scene `layers/*.md`, and produce the legacy prompts:

- `output/prompts/01-front-strip.txt`
- `output/prompts/02-main-strip.txt`
- `output/prompts/03-rear-strip.txt`
- `output/prompts/04-atmosphere-strip.txt`

Strip prompts must remain same-camera, same-size transparent PNG compositing slices. They are not the Phase 1 daily default.
