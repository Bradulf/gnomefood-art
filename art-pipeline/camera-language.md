# Camera Language

Use this file for global camera, traversal, and compositing-strip rules across all gnomefood.com visual chronicle prompts.

## Core Camera

The site uses a side-view traversal camera inside a vertical timeline experience. The viewer should feel present inside one continuous visual chronicle, moving down through time beside an implied small character or civilization-level point of view as the page scrolls through same-camera, same-size compositing strips.

All generated timeline-scene strips use the same camera and the same side-view traversal plane. Do not make one strip feel like an extreme close-up and another strip feel like a separate scenic vista. The website engine creates scroll movement, layered compositing, and the Rolodex effect by positioning and moving transparent strips.

All scenes share one camera language. Preserve camera height, camera angle, horizon placement, framing, world scale, side-view traversal plane, and bottom alignment across the chronicle. Do not zoom in, zoom out, rotate the camera, move the horizon, or change perspective between adjacent scenes.

Generated assets are not complete scenes, landscape paintings, posters, concept art pieces, detached dioramas, or finished illustrations. They are transparent PNG compositing strips that the engine assembles into one vertical timeline sequence.

Every prompt should explicitly remind the image model:

```text
This image is a same-camera, same-size side-view compositing strip for a Rolodex visual chronicle, not a complete scene.
The viewer scrolls downward through time; the implied route enters near the top/north of the timeline scene and exits near the bottom/south.
```

## Traversal Plane Rules

- Terrain is viewed from the side, as a horizontal slice through a larger walkable timeline moment.
- All strips should share the same camera, viewpoint, scale language, and traversal angle.
- All strips within a scene should share identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment.
- The path should align around the same top-to-bottom scroll traversal route across all strips.
- Strips are same-camera, same-size compositing slices, not separate camera views or old multi-plane authoring.
- The engine handles scroll speed, overlap, compositing movement, and Rolodex motion.
- Strips may have slight overlap only when useful for compositing.
- Assets should not look like complete illustrations, concept art posters, centered hero shots, detached dioramas, or finished landscape paintings.
- Assets should not look like aerial views, top-down maps, bird's-eye views, isometric diagrams, or standalone scenic vistas.
- Compose terrain in profile view: side-view dunes, ledges, channels, paths, crop rows, roots, scaffolds, ridges, or platforms.
- Leave open space for strip compositing while preserving consistent path alignment across `01-front-strip`, `02-main-strip`, `03-rear-strip`, and `04-atmosphere-strip`.

## Framing

Use wide horizontal framing suitable for full-width website strips. Compose side-view terrain and silhouettes so they remain readable as the viewer scrolls vertically from one scene strip to the next.

The camera should feel like a side-on third-person exploration view with environmental intimacy. The viewer should feel present inside the scene, moving down through one continuous north-to-south world route beside the implied character, not observing a detached landscape from outside the world.

Preferred composition:

- Same camera across all strips.
- Same side-view traversal plane.
- Same camera height, angle, horizon placement, framing, world scale, and bottom alignment.
- Consistent path alignment.
- Consistent scale across strips.
- Layered compositing strips.
- Vertical scene progression through the page.
- Open transparent space for compositing.
- Extra terrain beyond the focal area.
- Visual room above and below important content.
- Natural terrain continuation that supports traversal.
- Readable silhouettes.
- Slight overlap only when useful.
- Engine-managed compositing movement.

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
- Detached diorama presentation on a white or blank background.
- Exaggerated distance changes between strips.
- Far-away scenic vista framing.
- Complete flat scene plate unless explicitly requested for a non-chronicle asset.

## Transparent PNG Expectations

Each visual asset should be an isolated transparent PNG strip. The website engine places, scales, and animates strips independently, so prompts should describe only the strip being generated.

The prompt should ask for:

- Transparent background.
- No rectangular backdrop.
- No sky plates.
- No cloud plates.
- No horizon background fills.
- No white background.
- No black background.
- No full scene backdrop.
- No complete all-in-one scene composition.
- No centered hero-shot layout.
- No aerial, top-down, bird's-eye, map, or concept-poster framing.
- No detached diorama terrain sitting on a white or blank background.
- Clean alpha edges suitable for compositing.

## Walkable Terrain

Terrain should feel walkable within the side-view slice while supporting the vertical website progression. Even strange fungal, cyberpunk, or magical terrain should imply paths, ledges, crop rows, channels, platforms, roots, scaffolds, or ground contours that align around a top/north entry and bottom/south exit.

All strips should support the same walkable route. The route can be broken, hazardous, elevated, or dreamlike, but it should still read as one continuous side-view path through the timeline scene as the viewer moves down the page rather than separate camera-view scenes.

Important content should not be cropped too tightly. Include extra terrain beyond the focal action, visual room above and below important content, and natural continuation of terrain so the website can apply movement without exposing abrupt cutoffs.

## Strip Read

The final website view is assembled from separate strips. Each generated asset should have a clear compositing role: front-strip, main-strip, rear-strip, or atmosphere-strip. Do not use per-strip camera-change language to differentiate strips. A strip may suggest slight overlap or atmosphere, but it should never become a complete scene by itself.
