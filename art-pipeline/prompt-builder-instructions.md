# Prompt Builder Instructions

This document describes how to turn story beat, traversal, and strip briefs into final AI art prompts for transparent parallax strips that all support one shared vertical scroll traversal moment.

No image generation API code belongs here yet. This pipeline starts as a manual workflow using structured files that can be automated later.

## Inputs

For each strip prompt, read:

1. `VISION.md`
2. `world.md`
3. `global-style.md`
4. `camera-language.md`
5. `layer-rules/*.md`
6. Scene N-1 `story.md`, if present
7. Scene N-1 `traversal.md`, if present
8. Scene N-1 `output/prompts.md`, if present
9. Scene N-2 `story.md` and `traversal.md`, optionally if available
10. The current scene's `story.md`
11. The current scene's `traversal.md`
12. The current scene's `scene.md`
13. The current scene's `scene-style.md`
14. The current scene's `assets/artifacts.md` and `assets/props.md`, if present
15. The current scene's `characters.md`, if present
16. Referenced character YAML and visual files, if characters are used
17. The current scene-specific strip file in `layers/`

For a specific strip prompt, use the matching global strip rule:

- `layers/01-front-strip.md` uses `layer-rules/01-front-strip.md`
- `layers/02-main-strip.md` uses `layer-rules/02-main-strip.md`
- `layers/03-rear-strip.md` uses `layer-rules/03-rear-strip.md`
- `layers/04-atmosphere-strip.md` uses `layer-rules/04-atmosphere-strip.md`

Read `VISION.md` as highest-level project guidance. If a lower-level file implies that a scene is primarily a place or environmental variation, resolve the conflict in favor of `VISION.md`: scene equals story beat, scroll equals timeline, and environment supports the story.

Read `scene.json` as structured metadata for scene id, title, phase, traversal file, optional asset files, strip ids, outputs, and character references.

Use previous-scene memory before writing the current prompts. When generating Scene N, review Scene N-1 `story.md`, Scene N-1 `traversal.md`, Scene N-1 `output/prompts.md` if present, Scene N-2 optionally, the current world phase, and the current story beat. Preserve terrain layout, major landmarks, world scale, camera framing, route direction, horizon placement, bottom alignment, and carry-forward consequences where appropriate.

Read `story.md` before every other scene-local document. Treat `story.md` as the scene's source of truth in the infinite scrolling visual chronicle: the story beat, what changed from the previous scene, character focus, character action, world impact, emotional beat, and continuity notes for the next scene. Use it to make sure the traversal and strip prompts describe a moment in the civilization's timeline, not only a location.

Then read `traversal.md` as the movement contract for that story beat. The traversal should reveal or support what happens in `story.md`; it should not redefine the scene as a new environment. Read `scene.md`, `scene-style.md`, assets, characters, and strip files as supporting context after the story beat and traversal are clear.

Locations may persist across multiple scenes. Do not force environmental variation when the story beat is about repair, repetition, ritual, growth, consequence, or return to a known place.

The current scene should visually evolve from the previous scene instead of restarting from a new composition. Prioritize what changed, who is present, what action is occurring, what world progress occurred, and what emotional beat is conveyed.

Read `assets/artifacts.md` and `assets/props.md` when present. These files define optional scene assets, not strips.

- `assets/artifacts.md` can define story objects such as machines, shrines, ritual tools, crop clusters, route discoveries, landmarks, or other narrative objects.
- `assets/props.md` can define smaller supporting objects such as tools, baskets, cables, sacks, irrigation pieces, seed trays, or markers.
- Each artifact or prop must specify which strip it belongs to: `01-front-strip`, `02-main-strip`, `03-rear-strip`, or `04-atmosphere-strip`.
- Include an artifact or prop only in prompts for its assigned strip.
- If no artifact or prop is assigned to the current strip, do not include it in that strip prompt.
- Do not duplicate artifacts or props across strips unless the asset file explicitly defines multiple separate appearances.

If `characters.md` assigns a reusable character to the current strip, also read that character's files from `characters/[character-id]/`:

- `reference/[character-id]-character.yaml`
- The reference image named by the YAML `reference_image.filename` field
- `character.md`
- `visual-rules.md`
- `poses.md`
- `evolution.md`
- `negative-prompts.md`
- Any additional selected files in `reference/`

Do not read character files into a strip prompt when the character is not assigned to that strip.

## Art-Director Prompt Mode

Use art-director prompt mode for final image prompts. The pipeline architecture stays the same: read the same source files, preserve strip boundaries, include only assigned assets and assigned characters, and write final prompts to `output/prompts.md`. The change is prompt style, not source structure.

Art-director prompts should feel like concise visual direction. They should be shorter than the source material, avoid defensive repetition, and put image-making information first. Do not paste long explanations from `camera-language.md`, `traversal.md`, or layer rules into every strip. Compress inherited rules into compact alignment and transparency lines.

Prioritize each final strip prompt in this order:

1. Scene story beat.
2. Strip role.
3. Visual content.
4. Shared alignment rules.
5. Transparency requirements.
6. Short negative list.

Keep the core rules present, but write them compactly:

- Same canvas size across all strips.
- Same camera framing across all strips.
- Same horizon relationship across all strips.
- Same camera height and camera angle across strips.
- Same bottom alignment across all strips.
- Same camera distance across all strips.
- Same world scale across all strips.
- Transparent PNG.
- Compositing strip, not a complete scene.
- Vertical scroll progression from top/north to bottom/south.
- No top-down or aerial view.
- No zoom differences between strips.
- No camera rotation or perspective change.

Avoid:

- Repeating the full camera model in every section.
- Repeating the same negative phrase in several forms.
- Explaining how the website engine works beyond the compact compositing reminder.
- Long legal-style exclusion lists.
- Implementation details that do not help the image model draw the strip.

Use direct art direction instead:

- "Front strip: cropped route-edge rocks and grit frame the route."
- "Main strip: readable walkable path and focal mound."
- "Rear strip: supporting terrain echoes the vein direction."
- "Atmosphere strip: dust, spores, heat shimmer, and glow only."

## Output

Write final prompts into `output/prompts.md`.

Each final prompt should include:

- Scene name and strip name.
- A short story beat summary from `story.md`.
- Intended compositing role.
- Visual content for that strip, combining the global strip rule and scene-specific strip description in service of the story-supported traversal.
- Compact same-camera-distance side-view strip language.
- Compact shared alignment rules covering same canvas size, same camera height, same camera angle, same camera framing, same horizon placement, same bottom alignment, same camera distance, same world scale, same route direction, vertical scroll progression, no zoom differences, no camera rotation, and no perspective change.
- A compact reminder that this is a compositing strip, not a complete scene.
- Transparent PNG requirement.
- Assigned scene assets only when an artifact or prop is assigned to this strip.
- Character YAML identity, reference image filename, pose, scale, emotion, direction, evolution stage, and scene-specific changes only when a character is assigned to that strip.
- Important style guidance from global and scene style files.
- Short negative instructions that prevent complete scenes, text, borders, UI, extra strips, zoom differences, far-away landscape paintings, and top-down or aerial views.
- Scroll composition instructions that leave extra terrain beyond the focal area, visual room above and below important content, natural terrain continuation, and enough transparent breathing room for parallax movement.
- Character-specific negative prompts when a character is assigned to that strip.
- Suggested filename for the resulting asset.

## Traversal Plane Rules

Every prompt should preserve these rules, usually in one compact "Shared alignment" line:

- All strips use the same camera distance.
- All strips use the same side-view traversal plane.
- All strips use the same camera height and camera angle.
- All strips use identical horizon placement.
- All strips use identical canvas dimensions.
- All strips use identical camera position and framing.
- All strips use identical world scale and bottom alignment.
- The path should align around the same top-to-bottom scroll traversal route across all four strips.
- The engine handles apparent depth, scroll, and Rolodex motion.
- Strips are slices of one larger walkable world.
- Strips are same-camera-distance compositing slices, not traditional depth perspective layers.
- Strips are assembled later by the engine.
- Strips should not look like complete illustrations.
- Strips should not look like concept art posters.
- Strips should not look like aerial views.
- Strips should not look like top-down maps.
- Strips should not look like bird's-eye views.
- Strips should not look like centered hero shots.
- Strips should not look like detached dioramas or far-away landscape paintings.
- All strips should use the same canvas size.
- All strips should use the same camera framing.
- All strips should share the same horizon relationship.
- All strips should share the same bottom alignment.
- No strip should use a different zoom level.

Preferred composition:

- Same camera distance.
- Same side-view traversal plane.
- Same camera height, camera angle, horizon placement, framing, world scale, and bottom alignment.
- Consistent path alignment.
- Consistent scale across strips.
- Layered environmental strips.
- Vertical scene progression.
- Open space for compositing.
- Extra terrain beyond focal content.
- Visual room above and below important content.
- Natural terrain continuation for code-driven traversal.
- Readable silhouettes.
- Slight overlap only when useful.

## Story Beat Rules

Every scene should describe one moment in the civilization's history. The prompt builder should optimize for narrative progression before environmental variation.

Use `story.md` to keep all generated strips aligned around:

- What happens now.
- What changed from the previous scene.
- What the character, group, or implied traveler is doing.
- How the civilization, ecology, technology, ritual practice, settlement, or magic advances.
- What emotional turn the viewer should feel while scrolling.
- What should visibly carry forward into the next scene.

Every scene should contribute to visible world progression:

- Dead desert.
- First mycelium.
- Sporeling emergence.
- First cultivation.
- First garden bed.
- Early settlement.
- Agricultural village.
- Fungal infrastructure.
- Crystal-powered agriculture.
- Cyberpunk fungal kingdom.

Environment descriptions support the story. They should provide physical evidence of the beat, continuity with prior beats, route readability, mood, and material specificity. They should not override the story beat or turn the scene into a static place study.

## Traversal Beat Rules

Every scene should describe one shared top-to-bottom scroll traversal moment. Each generated strip is isolated on transparency, but it must feel like part of the same third-person side-view path that a small character or implied civilization-level point of view is moving through as the viewer scrolls down the timeline.

Use `traversal.md` to keep all strips aligned around:

- The implied route through the story beat.
- Top-to-bottom scroll direction, understood in-world as north-to-south movement.
- The path entry and path exit.
- The viewer's feeling while moving through the scene.
- The role of front, main, rear, and atmosphere strips in the same route.
- The shared visual cue that ties all four strips together.
- Cross-strip consistency for camera angle, path direction, mood, lighting, scale, terrain profile, and design cue.

Every strip prompt must state these ideas compactly:

- Same top-to-bottom scroll traversal scene as the other strips.
- Visual alignment with the shared route from `traversal.md`.
- Continuous path and shared design cue across all four strips.
- A clear route event arc inside one continuous composition: the path leads toward the focal change, the focal change is visible along the route, and the same visual cue continues beyond it.
- Engine-assembled compositing strip, not a complete scene.

Do not write strip prompts as four variations of the same centered object. Each strip should depict the story beat as one unbroken scene slice through its own compositing responsibility. The front strip frames the same route event, the main strip carries the route and action, the rear strip supports the same route event with continuity cues, and the atmosphere strip carries the same event through light, dust, spores, haze, and glow.

Describe the event as one uninterrupted transparent scene slice. Use phrases like "along the route," "toward the mound," "around the mound," and "past the mound" so the composition stays continuous.

## Prompt Shape

Use this art-director structure:

```text
Scene: [scene name]
Strip: [strip name] - [front-strip / main-strip / rear-strip / atmosphere-strip]

Story beat:
[One or two sentences from story.md: what happens now, what changed, emotional turn, and carry-forward cue.]

Strip role:
[One sentence describing what this strip contributes to the composite.]

Visual content:
[Direct visual instruction for this strip only. Describe the route event as one continuous scene slice through this strip's responsibility: the path leads toward the focal change, passes through or beside it, then continues beyond it. Include assigned assets or character direction only if assigned. Keep details concrete, visual, and non-repetitive.]

Style:
[Compact global and scene style direction.]

Shared alignment:
Same full-width canvas size, same side-view camera height and angle, same camera framing, same horizon placement, same bottom alignment, same camera distance, same world scale, no zoom differences, no camera rotation, and no perspective change across strips. Align to the same vertical scroll route from top/north to bottom/south; keep the path and shared design cue continuous.

Character:
[Only if assigned: identity reference image, YAML path, identity anchors, pose, scale, emotion, direction, evolution stage, and scene-specific changes.]

Transparency and composition:
Transparent PNG compositing strip only, not a complete scene. Clean alpha edges, open transparent areas, no rectangular backdrop, no sky plate, no cloud plate, no horizon background fill, no white background, no black background, and no full scene backdrop.

Negative:
No text, logo, watermark, border, UI, top-down, aerial, isometric, portrait framing, poster composition, complete scene, far-away landscape, zoom change, camera rotation, perspective change, duplicate strip, unassigned assets, unrelated characters.

Suggested filename: output/images/[strip name].png
```

## Character Handling

Reusable characters live in `characters/[character-id]/`. The scene controls whether and where they appear through `scenes/[scene]/characters.md`.

When a scene places a character into a strip:

1. Keep the character in that strip only.
2. Read the character YAML in `reference/` first and use it as the primary structured identity source.
3. Use the YAML `reference_image.filename` value as the primary image identity reference, and explicitly mention that image in the prompt.
4. Preserve identity anchors from the YAML, `character.md`, and `visual-rules.md`.
5. Use a pose from `poses.md` or a compatible scene-specific pose.
6. Apply the correct evolution stage from the YAML and `evolution.md`.
7. Include scene-specific pose, scale, emotion, direction, and environmental modifications from `characters.md`.
8. Include additional reference image filenames from `reference/` when available.
9. Add reusable and scene-specific character negative prompts.

When a scene does not place a character into a strip, do not mention the character in that strip prompt. This prevents accidental duplicate characters and keeps parallax assets isolated.

Reference images should be treated as identity guides, not as finished scene layouts. Use them to preserve silhouette, proportions, materials, palette, expression, and recognizable details across generated images.

## Strip Handling

Global strip rules live in `layer-rules/`. Scene story files live in `scenes/[scene]/story.md`. Scene strip files live in `scenes/[scene]/layers/`.

For every strip prompt:

1. Start with the global strip rule for the current strip.
2. Apply the global camera language.
3. Apply the story beat from `story.md` as the primary scene definition.
4. Apply the shared route from `traversal.md` as support for that beat.
5. Read `assets/artifacts.md` and `assets/props.md`, and include only assets assigned to the current strip.
6. Add scene-specific content from the matching scene strip file, including its `Traversal Role`.
7. Use scene-specific environmental text as additive detail or explicit override, not as a replacement for the global strip purpose, story beat, or shared traversal route.
8. Keep the result as one transparent PNG asset for that strip only.
9. Include the same-camera-distance side-view reminders compactly, not necessarily verbatim.
10. Include the required traversal and compositing statements compactly.
11. Preserve canvas consistency: identical dimensions, camera position, horizon placement, framing, world scale, and bottom alignment across all four strips.
12. Preserve scroll composition room: extra terrain beyond the focal area, visual room above and below important content, natural continuation of terrain, and transparent breathing room for engine motion.

Scene strip files should remain plain human descriptions. They are not final prompts and do not need to repeat every transparency, camera, traversal, or parallax rule. Their `Traversal Role` sections should describe only how that strip supports the shared route from `traversal.md`.

## Reference Image Language

When a character is assigned to a strip, the final prompt must include language like:

```text
Use `characters/sporeling/reference/sporeling_v1.png` as the identity reference for the sporeling. Preserve the same character identity, including the oversized mushroom cap head, glowing amber eyes, warm beige fungal body, root-like mycelium limbs, compact proportions, and gentle curious expression. Adapt only the pose, scale, facing direction, emotion, and environmental effects described for this scene; do not redesign the character.
```

If the actual reference image file differs from the YAML filename, use the actual filename present in `reference/` and update the scene prompt notes accordingly.

## Automation Notes

Future scripts can parse `scene.json`, `story.md`, `traversal.md`, `assets/artifacts.md`, `assets/props.md`, and `characters.md`, read camera and strip-rule files, read character YAML files, resolve reference image filenames, conditionally add scene assets and character files for assigned strips, and emit prompt blocks into `output/prompts.md`. Keep headings stable and filenames predictable.
