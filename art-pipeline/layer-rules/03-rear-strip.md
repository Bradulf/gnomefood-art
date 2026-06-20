# 03 Rear Strip

## Purpose

The rear strip supports the same traversal route with continuity context: secondary terrain, route continuation, structural silhouettes, repeated design cues, and forms that support the main strip during compositing.

Role summary: supporting terrain, repeated route cues, secondary structures, and continuity elements.

## Viewing Model

Use the same camera, same canvas size, same side-view traversal plane, and same scale language as the other strips. Do not make this strip feel like a separate scenic vista. The engine handles compositing movement.

## Strip Behavior

This strip is independently positioned by the engine. Do not describe scroll speed or per-strip camera changes. Create a transparent environmental strip that can align with or interleave with the main route strip.

## Traversal Plane Rules

- Terrain is viewed from the side.
- Terrain should support the same top-to-bottom scroll path alignment as the other strips.
- This strip is part of one continuous vertical scroll world, not a complete illustration or detached diorama.
- Use identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment as the other strips in the scene.
- Use route continuation, repeated silhouettes, secondary terrain, rear structures, bridges, root networks, and design cues that align with `traversal.md`.
- Avoid aerial views, top-down maps, bird's-eye views, concept art posters, centered hero shots, standalone landscapes, exaggerated scale shifts, and detached dioramas.

## Common Contents

- Secondary terraces, dune shelves, irrigation channels, crop rows, root networks, platforms, and bridges.
- Larger environmental structures, greenhouse ribs, water tanks, scaffold silhouettes, buried walls, towers, cables, and settlement pieces.
- Optional story objects or props only when assigned to this strip in `assets/`.

## What To Avoid

- Main route terrain that belongs to `02-main-strip`.
- Front-edge occlusion that belongs to `01-front-strip`.
- Atmosphere-only haze that belongs to `04-atmosphere-strip`.
- Story objects or props not assigned to this strip in `assets/`.
- Full scene paintings.
- Characters unless the scene's `characters.md` assigns them to this strip.

## Transparency Requirements

Use transparent background. Rear strip terrain, structures, and assigned assets should be cleanly isolated with no rectangular plate and no completed surrounding scene. No sky plates, cloud plates, horizon background fills, white background, black background, or full scene backdrops.

## Composition Guidance

Keep forms readable as a same-viewing-distance compositing strip. Use repeated route cues and north-to-south alignment, not distance exaggeration, to connect it with the main path.

Include extra terrain continuation and visual room around important continuity elements so code-driven movement can traverse the strip cleanly.

## Detail Level

Use medium detail. This strip can carry route context, larger material joins, cables, fungal growth, repair marks, and environmental design without becoming a separate far scene.

## Character Guidance

Characters should appear here only when the scene's `characters.md` explicitly places them in this strip.
