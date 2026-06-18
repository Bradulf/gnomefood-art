# Camera Language

Use this file for global camera, traversal, and compositing-strip rules across all gnomefood.com parallax layer prompts.

## Core Camera

The site uses a side-view traversal camera inside a vertical scroll experience. The viewer should feel present inside one continuous walkable environment, moving down through the world beside an implied small character as the page scrolls through same-camera-distance environmental strips.

All generated scene layers use the same viewing distance and the same side-view traversal plane. Do not make one layer feel like an extreme close-up and another layer feel like a far-away landscape. The website engine creates the apparent depth, scroll, and Rolodex effect by positioning and moving transparent layers.

All scenes share one camera language. Preserve camera height, camera angle, horizon placement, framing, world scale, side-view traversal plane, and bottom alignment across the chronicle. Do not zoom in, zoom out, rotate the camera, move the horizon, or change perspective between adjacent scenes.

Generated assets are not complete scenes, landscape paintings, posters, concept art pieces, detached dioramas, or finished illustrations. They are transparent PNG environmental strips that the engine assembles into one vertical scroll traversal sequence.

Every prompt should explicitly remind the image model:

```text
This image is a same-camera-distance side-view environmental strip for a parallax engine, not a complete scene.
The viewer moves down through the world as the page scrolls; the implied route enters near the top/north of the scene and exits near the bottom/south.
```

## Traversal Plane Rules

- Terrain is viewed from the side, as a horizontal slice through a larger walkable world.
- All strips should share the same camera distance, viewpoint, scale language, and traversal angle.
- All strips within a scene should share identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment.
- The path should align around the same top-to-bottom scroll traversal route across all strips.
- Strips are same-camera-distance compositing slices, not separate camera-distance views or traditional depth perspective layers.
- The engine handles apparent depth, scroll speed, overlap, and Rolodex motion.
- Strips may have slight overlap only when useful for compositing.
- Assets should not look like complete illustrations, concept art posters, centered hero shots, detached dioramas, or finished landscape paintings.
- Assets should not look like aerial views, top-down maps, bird's-eye views, isometric diagrams, or far-away scenic vistas.
- Compose terrain in profile view: side-view dunes, ledges, channels, paths, crop rows, roots, scaffolds, ridges, or platforms.
- Leave open space for layer compositing while preserving consistent path alignment across `01-front-strip`, `02-main-strip`, `03-rear-strip`, and `04-atmosphere-strip`.

## Framing

Use wide horizontal framing suitable for full-width website strips. Compose side-view terrain and silhouettes so they remain readable as the viewer scrolls vertically from one scene strip to the next.

The camera should feel like a side-on third-person exploration view with environmental intimacy. The viewer should feel present inside the scene, moving down through one continuous north-to-south world route beside the implied character, not observing a distant landscape from outside the world.

Preferred composition:

- Same camera distance across all strips.
- Same side-view traversal plane.
- Same camera height, angle, horizon placement, framing, world scale, and bottom alignment.
- Consistent path alignment.
- Consistent scale across strips.
- Layered environmental strips.
- Vertical scene progression through the page.
- Open transparent space for compositing.
- Extra terrain beyond the focal area.
- Visual room above and below important content.
- Natural terrain continuation that supports traversal.
- Readable silhouettes.
- Slight overlap only when useful.
- Engine-managed apparent depth.

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
- Complete flat scene plate unless explicitly requested for a non-parallax asset.

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

All strips should support the same walkable route. The route can be broken, hazardous, elevated, or dreamlike, but it should still read as one continuous side-view path through the world as the viewer moves down the page rather than separate depth-distance scenes.

Important content should not be cropped too tightly. Include extra terrain beyond the focal action, visual room above and below important content, and natural continuation of terrain so the website can apply movement and parallax without exposing abrupt cutoffs.

## Strip Read

The final website view is assembled from separate strips. Each generated asset should have a clear compositing role: front-strip, main-strip, rear-strip, or atmosphere-strip. Do not use camera-distance language to differentiate strips. A strip may suggest slight layering, overlap, or atmosphere, but it should never become a complete scene by itself.
