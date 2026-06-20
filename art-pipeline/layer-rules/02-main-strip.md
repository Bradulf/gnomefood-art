# 02 Main Strip

## Purpose

The main strip carries the clearest readable traversal route: walkable terrain, path continuity, structures, crop rows, channels, platforms, and environmental forms that define how the character moves from top/north to bottom/south as the page scrolls.

Role summary: primary walkable route, main story action, and main character placement when assigned.

## Viewing Model

Use the same camera, same canvas size, same side-view traversal plane, and same scale language as the other strips. This is the main route-bearing strip, not a separate viewpoint.

## Strip Behavior

This strip is independently positioned by the engine. Do not describe scroll speed or per-strip camera changes. Create a transparent environmental strip that aligns with the route from `traversal.md`.

## Traversal Plane Rules

- Terrain is viewed from the side.
- Terrain should appear traversable within the same side-view environmental slice while supporting the top-to-bottom scroll route.
- This strip is part of one continuous vertical scroll world, not a complete illustration or detached diorama.
- Use identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment as the other strips in the scene.
- Use side-view terrain, profile-view dunes, paths, ledges, crop rows, channels, bridges, root networks, scaffolds, and platforms.
- Avoid aerial views, top-down maps, bird's-eye views, concept art posters, centered hero shots, standalone landscapes, exaggerated scale shifts, and detached dioramas.

## Common Contents

- Walkable paths, terraces, crop rows, irrigation channels, ledges, platforms, and root bridges.
- Salvaged huts, scaffolds, greenhouse ribs, water tanks, pumps, and cable runs when they support the route.
- Desert-wasteland repair systems in early scenes; richer fungal infrastructure in later scenes.
- Optional story objects or props only when assigned to this strip in `assets/`.

## What To Avoid

- Front-edge occlusion that belongs to `01-front-strip`.
- Rear contextual silhouettes that belong to `03-rear-strip`.
- Atmosphere-only haze or sky silhouettes that belong to `04-atmosphere-strip`.
- Story objects or props assigned to another strip in `assets/`.
- Flat complete scene plates.
- Characters unless the scene's `characters.md` assigns them to this strip.

## Transparency Requirements

Use transparent background. Terrain, structures, paths, and route forms should be isolated with clean alpha edges. No sky plates, cloud plates, horizon background fills, white background, black background, or full scene backdrops.

## Composition Guidance

Create a wide walkable side-view strip. Let the terrain imply a north-to-south world route through paths, terraces, channels, bridges, rows, roots, ledges, or scaffolds. Align the path with the same top-to-bottom route used by all other strips.

Include extra terrain beyond the focal action, visual room above and below important content, and natural terrain continuation so the engine can create movement without exposing abrupt cutoffs.

## Detail Level

Use enough detail to make the route and materials readable, but keep scale consistent with all strips.

## Character Guidance

Characters often work best here when needed. Use this strip for readable character poses only when `characters.md` places the character here.
