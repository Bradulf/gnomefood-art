# Camera Language

Use this file for global camera, traversal, and composition rules across all gnomefood.com visual chronicle prompts.

## Phase 1 Camera

The site uses a side-view traversal camera inside a vertical timeline experience. The viewer should feel present inside one continuous visual chronicle, moving down through time beside an implied small character or civilization-level point of view.

Phase 1 generates one transparent scene cutout per story beat. It is a complete terrain/object moment on transparency, not a full background plate, not a sky scene, and not a landscape painting.

All scenes share one camera language. Preserve camera height, camera angle, framing, world scale, side-view traversal plane, and bottom alignment across the chronicle. Do not zoom in, zoom out, rotate the camera, or change perspective between adjacent scenes.

Every Phase 1 prompt should explicitly remind the image model:

```text
Create one transparent PNG image for this complete scene cutout.
This is one coherent story beat for a vertical scroll visual chronicle, not a full background plate.
Leave open upper space and an empty sky/background area so the website background system shows through.
```

## Scene Cutout Rules

- Terrain is viewed from the side, as a readable horizontal slice through a larger walkable timeline moment.
- The generated image should include terrain and story objects only.
- Include the assigned character when present.
- Include assigned props or artifacts when present.
- Show the visible story change from `story.md`.
- Leave open upper space for the website background.
- Use a transparent background with clean alpha edges.
- Do not include sky.
- Do not include clouds.
- Do not include sun.
- Do not include moon.
- Do not include horizon background fill.
- Do not include a white backdrop.
- Do not include a black backdrop.
- Do not include a full rectangular background.
- Do not include a full background plate.
- Do not make a detached diorama sitting on a blank background.

## Framing

Use wide horizontal framing suitable for full-width website scenes inside a vertical scroll chronicle. Compose side-view terrain and silhouettes so they remain readable as the viewer scrolls vertically from one timeline beat to the next.

The camera should feel like a side-on third-person exploration view with environmental intimacy. The viewer should feel present inside the scene, moving down through one continuous north-to-south world route beside the implied character, not observing a detached landscape from outside the world.

Preferred composition:

- Same side-view camera language across scenes.
- Consistent world scale.
- Consistent bottom alignment.
- Vertical scene progression through the page.
- Transparent open upper space.
- Extra terrain beyond the focal area.
- Visual room above and below important content.
- Natural terrain continuation that supports traversal.
- Readable silhouettes.
- Story action integrated into the terrain.

Avoid:

- Top-down perspective.
- Isometric perspective.
- Aerial perspective.
- Bird's-eye view.
- Map-like terrain.
- Portrait framing.
- Vertical poster composition.
- Cropped character portrait framing.
- Centered hero-shot composition.
- Concept art poster composition.
- Complete landscape painting composition.
- Full rectangular background plates.
- Sky-bearing scene plates.
- Detached diorama presentation on a white or blank background.
- Far-away scenic vista framing.

## Transparent PNG Expectations

Each Phase 1 visual asset should be an isolated transparent PNG scene cutout. The website engine provides the sky/background system and places the cutout into the scroll chronicle.

The prompt should ask for:

- Transparent PNG.
- Transparent background.
- Clean alpha edges.
- One complete terrain/object scene cutout.
- No rectangular backdrop.
- No sky.
- No clouds.
- No sun.
- No moon.
- No horizon background fill.
- No white background.
- No black background.
- No full scene backdrop.
- No complete background plate.
- No centered hero-shot layout.
- No aerial, top-down, bird's-eye, map, or concept-poster framing.

## Walkable Terrain

Terrain should feel walkable within the side-view slice while supporting the vertical website progression. Even strange fungal, cyberpunk, or magical terrain should imply paths, ledges, crop rows, channels, platforms, roots, scaffolds, or ground contours that align around a top/north entry and bottom/south exit.

The route can be broken, hazardous, elevated, or dreamlike, but it should still read as one continuous side-view path through the timeline scene as the viewer moves down the page.

Important content should not be cropped too tightly. Include extra terrain beyond the focal action, visual room above and below important content, and natural continuation of terrain so the website can apply movement without exposing abrupt cutoffs.

## Advanced Strip Mode

Four-strip output is advanced/legacy mode. When used, each generated asset should have a clear compositing role: front-strip, main-strip, rear-strip, or atmosphere-strip. Do not use per-strip camera-change language to differentiate strips. A strip may suggest slight overlap or atmosphere, but it should never become a complete scene by itself.
