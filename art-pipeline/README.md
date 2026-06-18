# Gnomefood Art Pipeline

This folder is the manual-first art prompt pipeline for gnomefood.com.

Use `VISION.md` as the highest-level project guidance document. When lower-level files disagree, prefer the model in `VISION.md`: scene equals story beat, the scroll equals timeline, and environment supports the story.

The site is a scroll-based parallax story about a fungal, cyberpunk, agrarian civilization rebuilding a post-apocalyptic world. The world begins in a desert wasteland phase and slowly evolves into a magical fungal ecosystem.

The camera uses side-view terrain readability inside a vertical scroll experience. The viewer progresses down through the website timeline like moving through a Rolodex of scene strips; in world terms, this can be treated as a north-to-south route. Each appended scene is a story beat after the previous scene, showing how the civilization, world, or character journey has changed. Users are moving through time, not across disconnected locations. Locations may persist across multiple scenes, so a scene is defined by what happens in history, not by environmental novelty. Generated assets are transparent PNG parallax strips: same-camera-distance environmental strips of one larger walkable world, not complete scenes, landscape paintings, concept art posters, detached dioramas, or finished illustrations.

All scenes use the same camera language across the chronicle. Preserve camera height, camera angle, horizon placement, framing, world scale, side-view traversal plane, and bottom alignment. Do not zoom in, zoom out, rotate the camera, move the horizon, or change perspective between scenes or strips.

Each scene should visually evolve from the previous scene. Preserve terrain layout, major landmarks, world scale, and camera framing where appropriate; change story events, character actions, props, world state, visible cultivation, infrastructure, damage, repair, ritual use, or emotional tone.

## Folder Model

Each scene should live in `scenes/` and start from the short `_template/` structure:

- `story.md` defines the scene as a story beat in the infinite scrolling visual chronicle. This is the primary scene-defining document and should stay short.
- `traversal.md` defines the shared top-to-bottom scroll route that all strips support. It should support the viewer experience without repeating global camera rules.
- `scene.json` stores structured metadata that can be consumed by automation later.
- `layers/` contains one short human-written visual note per compositing strip.
- `output/prompts.md` stores the final prompts used for image generation.
- `output/images/` stores generated or curated transparent PNG assets.

Optional files such as `scene.md`, `scene-style.md`, `characters.md`, or `assets/*.md` can be added only when a scene needs more detail than the short daily authoring files provide.

Global strip rules live in `layer-rules/`. These files define reusable behavior for each parallax strip: purpose, compositing behavior, common contents, avoid lists, transparency requirements, composition guidance, detail level, and character guidance.

Scene story files live in `scenes/[scene]/story.md`. A scene is a moment in the civilization's history, not just a location. For daily use, `story.md` only needs `What Happens`, `What Changed`, and `What Carries Forward`. The global docs define the deeper continuity, camera, and world-evolution rules.

Scene traversal files live in `scenes/[scene]/traversal.md`. This file should stay short: `Route`, `Viewer Feeling`, and `Shared Visual Cue`. It supports the viewer experience by describing how the scroll moves through the story beat from `story.md`.

Scene-specific strip descriptions live in `scenes/[scene]/layers/`. These files should be simple visual notes with `What This Strip Shows`. They inherit the matching global strip rule and do not need to repeat global camera, transparency, traversal, or parallax rules.

Scene asset files live in `scenes/[scene]/assets/`. These files are optional:

- `assets/artifacts.md` defines story objects, landmarks, machines, shrines, crop clusters, discoveries, or other narrative objects.
- `assets/props.md` defines smaller supporting objects such as tools, baskets, cables, sacks, markers, irrigation pieces, or seed trays.

Artifacts and props are not strips. Each asset must specify which strip it belongs to: `01-front-strip`, `02-main-strip`, `03-rear-strip`, or `04-atmosphere-strip`. Prompt generation includes each asset only in its assigned strip. If no asset is assigned to a strip, no artifact or prop should be included in that strip prompt.

Reusable characters live in `characters/[character-id]/`. Character files define persistent identity, visual rules, pose options, evolution over time, negative prompts, structured YAML references, and reference images.

For characters with reference assets, the prompt builder should read the character YAML first and explicitly name the reference image in generated prompts. Reference images are identity guides: preserve the character identity and adapt only scene-specific pose, scale, emotion, direction, environmental effects, and evolution-stage details.

Generated prompts live in `scenes/[scene]/output/prompts.md`. They are assembled manually for now from `VISION.md`, the world, global style, camera language, global strip rules, `story.md`, `traversal.md`, supporting scene files, optional scene assets, optional character references, and scene-specific strip descriptions.

## Daily Scene Authoring

Scene files should be short. The global pipeline docs carry the rules, constraints, camera model, transparency requirements, strip responsibilities, and prompt-building behavior.

`story.md` drives the scene. It only needs:

- `What Happens`
- `What Changed`
- `What Carries Forward`

`traversal.md` supports the viewer experience. It only needs:

- `Route`
- `Viewer Feeling`
- `Shared Visual Cue`

Each `layers/*.md` file is a simple visual note. It only needs:

- `What This Strip Shows`

Do not repeat global rules in scene files unless the scene intentionally needs a rare override.

## Story Beats

Each scene is one beat in an infinite scrolling visual chronicle. Scenes should not be authored as interchangeable places or static environment concepts. They should answer what happens now, what changed since the previous scene, and what the viewer should carry into the next scene.

`story.md` is the source of truth for scene definition. `traversal.md`, `layers/`, and any optional `scene.md`, `scene-style.md`, `assets/`, or `characters.md` files should support that story beat. If an environment detail does not clarify the beat, reveal a consequence, guide traversal, or preserve continuity, it is secondary.

Do not require every new scene to introduce a new place. A location can recur across several story beats: first discovery, repair, cultivation, ritual use, expansion, damage, governance, or transformation. The important progression is historical and emotional, not environmental variation.

The downward scroll is the civilization's timeline. As each scene is appended after the previous one, the world should visibly advance: desert turns to cultivated ground, salvaged systems become infrastructure, scattered survival becomes ritual and society, fungal magic expands, and character choices leave marks on the terrain.

When authoring or prompting Scene N, review Scene N-1 before inventing new composition:

- Scene N-1 `story.md`
- Scene N-1 `traversal.md`
- Scene N-1 `output/prompts.md`, if present
- Scene N-2 optionally, if available
- Current world phase
- Current story beat

Use that memory to keep terrain layout, landmarks, route direction, scale, camera framing, and carry-forward consequences coherent.

Every new scene should advance at least one of these:

- The civilization's ecology, agriculture, technology, magic, architecture, rituals, or social organization.
- A character's journey, condition, relationship to the world, or role in the civilization.
- A visible consequence from an earlier scene that changes the viewer's understanding of the route.

The broad world evolution path is:

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

## Strip Rules

Each strip is generated as an isolated full-width transparent PNG asset. The website engine positions, scales, and animates strips to create apparent depth, scroll, and Rolodex motion. Prompts must not describe separate per-strip viewpoints, a finished flat scene plate, a complete composite scene, a poster, or a centered hero-shot illustration.

Global strip-rule files define inherited behavior by compositing responsibility:

- `layer-rules/01-front-strip.md`: framing elements, close route fragments, interaction-adjacent details, and optional character or prop overlap when assigned.
- `layer-rules/02-main-strip.md`: primary walkable route, main story action, and main character placement when assigned.
- `layer-rules/03-rear-strip.md`: supporting terrain, repeated route cues, secondary structures, and continuity elements.
- `layer-rules/04-atmosphere-strip.md`: dust, haze, spores, glow, light, soft environmental effects, and subtle continuity cues.

Scene strip files should describe only their own scene-specific visual content:

- `01-front-strip.md`: framing elements, close route fragments, interaction-adjacent details, cropped forms, and optional assigned overlap.
- `02-main-strip.md`: primary walkable route and main path forms.
- `03-rear-strip.md`: supporting terrain, repeated route cues, secondary structures, and continuity elements.
- `04-atmosphere-strip.md`: dust, haze, spores, glow, light, soft environmental effects, and subtle continuity cues.

Do not describe strips as per-strip camera-distance changes. Do not describe strips as traditional depth perspective layers. All strips remain same-camera-distance compositing slices.

## Traversal Beats

Each scene should be authored as one shared top-to-bottom scroll traversal moment in the timeline, not as four unrelated terrain slices and not as four separate viewpoints. The viewer should feel like they are moving through a story beat beside a small third-person character or implied civilization-level point of view.

Use `traversal.md` to define:

- The implied character route through the story beat.
- Top-to-bottom scroll direction, treated as north-to-south movement in world space.
- Where the walkable path begins and exits.
- What the viewer should understand or feel while moving through the beat.
- How front, main, rear, and atmosphere strips support the same route.
- What visual cue ties all strips together.
- What should remain consistent across all strips.

Strip-specific files should not redefine the whole route or invent a separate environmental premise. They should explain how their strip supports the shared traversal: front strip frames or lightly overlaps it, main strip carries the clearest walkable route, rear strip repeats and supports route cues, and atmosphere strip reinforces air, light, spores, and mood.

Story artifacts belong in `assets/artifacts.md`, not in the strip system. An artifact can appear in any strip when assigned there, or be omitted entirely.

## Camera Rules

Camera, traversal plane, and composition rules live in `camera-language.md`. All prompts should inherit the same-camera-distance side-view strip model, wide website-strip framing, transparent PNG expectations, and vertical scroll route guidance.

Every generated prompt should include these reminders:

```text
This image is a same-camera-distance side-view environmental strip for a parallax engine, not a complete scene.
The viewer moves down through the world as the page scrolls; the implied route enters near the top/north of the scene and exits near the bottom/south.
```

Every generated prompt should also preserve the same camera height, camera angle, horizon placement, framing, world scale, canvas dimensions, bottom alignment, and route continuity across all strips.

## Traversal Plane Rules

- Terrain is viewed from the side.
- Terrain should support the top-to-bottom scroll route without becoming top-down or map-like.
- All strips use the same camera distance.
- All strips use the same side-view traversal plane.
- All strips use identical canvas dimensions.
- All strips use identical horizon placement.
- All strips use identical camera position and framing.
- All strips use identical world scale and bottom alignment.
- The path should align across all strips.
- Strips are assembled later by the engine.
- The engine handles apparent depth, scroll, and Rolodex motion.
- Assets should include enough terrain continuation and transparent breathing room for code-driven traversal and parallax movement.
- Assets should not look like complete illustrations.
- Assets should not look like concept art posters.
- Assets should not look like aerial views.
- Assets should not look like top-down maps.
- Assets should not look like bird's-eye views.
- Assets should not look like centered hero shots.
- Assets should not look like detached dioramas or far-away landscape paintings.

Preferred composition:

- Same camera distance.
- Same side-view traversal plane.
- Consistent path alignment.
- Consistent scale across strips.
- Layered environmental strips.
- Vertical scene progression.
- Open transparent space for compositing.
- Extra terrain beyond the focal action.
- Visual room above and below important content.
- Natural continuation of terrain into the next scroll moment.
- Readable silhouettes.
- Slight overlap only when useful.

Avoid top-down perspective, isometric perspective, aerial views, bird's-eye views, map-like terrain, portrait framing, centered hero shots, concept art poster composition, far-away landscape paintings, exaggerated scale changes between strips, and full flat scene plates unless a future scene explicitly asks for a non-parallax asset.

## Workflow

1. Duplicate `scenes/_template/` into a new scene folder.
2. Fill out the short daily authoring files: `story.md`, `traversal.md`, and `layers/*.md`.
3. Read and revise `story.md` before `traversal.md` so the route supports the story beat.
4. Use `characters.md` to assign reusable characters to strips only when needed.
5. Use `assets/artifacts.md` and `assets/props.md` to assign optional scene assets to specific strips.
6. Keep strip descriptions in `layers/` as simple visual notes.
7. Build final generation prompts in `output/prompts.md`, combining global strip rules with `story.md`, `traversal.md`, previous-scene memory, assigned scene assets, scene strip descriptions, and reading character YAML and reference images only for strips that include a character.
8. Generate transparent PNG strips manually.
9. Save approved assets in `output/images/`.
10. Record filenames, prompt versions, reference images, and notes in the scene files.

The pipeline should stay simple while the visual language is still being discovered, but filenames, scene metadata, and strip boundaries should remain consistent so the process can be automated later.

## Scene Validation

Before image generation or website integration, validate a scene folder:

```sh
node art-pipeline/scripts/validate-scene.js art-pipeline/scenes/002-desert-mound
```

The validator uses only Node.js built-in modules. It checks that required scene files exist, `scene.json` parses, all four strip briefs are present, `output/prompts.md` references every strip, prompt text includes transparent PNG and shared camera/canvas alignment requirements, stale camera-distance layer terms are absent, and non-first scenes include continuity or change language in `story.md`.

The script prints a PASS/FAIL line for each check and exits with a nonzero status when any validation fails.
