# Gnomefood Art Pipeline

This folder is the manual-first art prompt pipeline for gnomefood.com.

Use `VISION.md` as the highest-level project guidance document. When lower-level files disagree, prefer the Phase 1 model in `VISION.md`: scene equals story beat, the scroll equals timeline, `story.md` is the main authoring file, and the default output is one transparent scene cutout.

The site is a scroll-based visual chronicle about a fungal, cyberpunk, agrarian civilization rebuilding a post-apocalyptic world. The world begins in a desert wasteland phase and slowly evolves into a magical fungal ecosystem.

## Phase 1 Default

Phase 1 prioritizes daily story publishing over complex layer tuning.

Each scene generates one main transparent scene image:

- `output/images/scene.png`

Each scene also has one standalone image prompt:

- `output/prompts/scene.txt`

The scene image should depict the story beat as a single coherent world moment. It should include terrain, the assigned character when present, assigned props or artifacts when present, and the visible story change.

The scene image must not include sky, clouds, sun, moon, horizon background fill, a white or black backdrop, or a full rectangular background plate. Leave open upper space so the website background system shows through. The website provides dawn, morning, noon, dusk, night, and later weather or seasonal backgrounds separately.

The scene should feel suitable for a vertical scroll chronicle: readable side-view terrain, room above and below important forms, and one visible moment in the timeline rather than a detached poster or full landscape painting.

## Folder Model

Each scene should live in `scenes/` and start from `_template/`:

- `story.md` defines the scene as a story beat. This is the primary authoring file and should stay short.
- `traversal.md` is optional supporting context for how the viewer moves through the beat.
- `scene.json` stores structured metadata for automation.
- `output/shared-context.md` stores compact scene memory copied into final prompts.
- `output/prompts/scene.txt` stores the self-contained Phase 1 prompt for direct image generation.
- `output/images/scene.png` is the expected final transparent PNG image path.

Optional files such as `scene.md`, `scene-style.md`, `characters.md`, or `assets/*.md` can be added only when a scene needs more detail than the short daily authoring files provide.

Reusable characters live in `characters/[character-id]/`. Character files define persistent identity, visual rules, pose options, evolution over time, negative prompts, structured YAML references, and reference images. Do not duplicate character identity inside scene files; assign the character and let prompt construction read the reusable character files.

Scene asset files live in `scenes/[scene]/assets/`. These files are optional:

- `assets/artifacts.md` defines story objects, landmarks, machines, shrines, crop clusters, discoveries, or other narrative objects.
- `assets/props.md` defines smaller supporting objects such as tools, baskets, cables, sacks, markers, irrigation pieces, or seed trays.

In Phase 1, assigned assets and props can appear in the single `scene.png` cutout when they support the story beat. Strip-specific assignment remains available only for advanced four-strip output.

## Daily Scene Authoring

Scene files should be short. The global pipeline docs carry the rules, constraints, camera model, transparency requirements, and prompt-building behavior.

`story.md` drives the scene. It only needs:

- `What Happens`
- `What Changed`
- `What Carries Forward`

`traversal.md` is optional. Use it when the scroll route needs clarification:

- `Route`
- `Viewer Feeling`
- `Shared Visual Cue`

Do not repeat global rules in scene files unless the scene intentionally needs a rare override.

## Story Beats

Each scene is one beat in an infinite scrolling visual chronicle. Scenes should not be authored as interchangeable places or static environment concepts. They should answer what happens now, what changed since the previous scene, and what the viewer should carry into the next scene.

`story.md` is the source of truth for scene definition. `traversal.md`, `scene.md`, `scene-style.md`, `assets/`, `characters.md`, and legacy `layers/` files should support that story beat. If an environment detail does not clarify the beat, reveal a consequence, guide traversal, or preserve continuity, it is secondary.

Do not require every new scene to introduce a new place. A location can recur across several story beats: first discovery, repair, cultivation, ritual use, expansion, damage, governance, or transformation. The important progression is historical and emotional, not environmental variation.

The downward scroll is the civilization's timeline. As each scene is appended after the previous one, the world should visibly advance: desert turns to cultivated ground, salvaged systems become infrastructure, scattered survival becomes ritual and society, fungal magic expands, and character choices leave marks on the terrain.

When authoring or prompting Scene N, review Scene N-1 before inventing new composition:

- Scene N-1 `story.md`
- Scene N-1 `traversal.md`, if present
- Scene N-1 `output/shared-context.md`, if present
- Scene N-1 `output/prompts/scene.txt`, if present
- Scene N-2 optionally, if available
- Current world phase
- Current story beat

Use that memory to keep terrain layout, landmarks, route direction, scale, camera framing, and carry-forward consequences coherent.

## Camera Rules

Camera, traversal plane, and composition rules live in `camera-language.md`. Phase 1 prompts should use the side-view chronicle camera while producing one complete transparent cutout instead of four layer strips.

Every Phase 1 prompt should include these reminders:

```text
Create one transparent PNG image for this complete scene cutout.
This is one coherent story beat for a vertical scroll visual chronicle, not a full background plate.
Leave open upper space and an empty sky/background area so the website background system shows through.
```

The final image must preserve consistent world scale and side-view readability across the chronicle. Do not use top-down, aerial, isometric, poster, centered hero-shot, detached diorama, or complete landscape painting composition.

## Advanced Strip Mode

Existing strip support remains available as advanced/legacy mode. Use it only when a scene needs experimental four-strip compositing:

- `01-front-strip`
- `02-main-strip`
- `03-rear-strip`
- `04-atmosphere-strip`

Global strip rules live in `layer-rules/`. Scene-specific strip descriptions can live in `scenes/[scene]/layers/` or at the scene root for older folders. Strip prompts remain same-camera, same-size transparent PNG compositing slices. They are not the daily Phase 1 output.

## Workflow

1. Duplicate `scenes/_template/` into a new scene folder.
2. Fill out `story.md`.
3. Fill out `traversal.md` only if the scroll route needs supporting detail.
4. Add `characters.md`, `assets/artifacts.md`, or `assets/props.md` only when the scene needs assigned characters or objects.
5. Write compact reusable memory into `output/shared-context.md`: scene id, scene title, story beat, previous continuity, current visible change, composition law, transparency requirements, character presence or absence, asset/prop presence or absence, and global negative constraints.
6. Build one final generation prompt in `output/prompts/scene.txt`.
7. Generate one transparent PNG manually.
8. Save the approved asset as `output/images/scene.png`.
9. Record filenames, prompt versions, reference images, and notes in the scene files.

No image generation API code belongs in this pipeline yet.

## Scene Validation

Before image generation or website integration, validate a scene folder:

```sh
node art-pipeline/scripts/validate-scene.js art-pipeline/scenes/_template
```

The validator uses only Node.js built-in modules. When `output/prompts/scene.txt` exists, it validates Phase 1 scene-cutout mode: required scene files, optional `scene.json` parsing, `output/shared-context.md`, the standalone scene prompt, transparent PNG requirements, forbidden background rules, story-beat language, and `output/images/scene.png` references. `output/prompts.md` is optional in Phase 1.

When `output/prompts/scene.txt` is absent, it falls back to legacy four-strip validation so existing scene folders can continue to validate.
