# 01 Front Strip

## Purpose

The front strip provides framing compositing content: partial occlusion, edge rhythm, tactile terrain details, and environmental intimacy. It uses the same camera and same canvas size as the other strips.

Role summary: framing elements, close route fragments, interaction-adjacent details, and optional character or prop overlap when assigned.

## Viewing Model

Use the same camera, same canvas size, same side-view traversal plane, and same scale language as the other strips. The engine handles compositing movement through placement and motion. This strip may overlap or frame the route, but it should not become an extreme close-up.

## Strip Behavior

This strip is independently positioned by the engine. Do not describe scroll speed or per-strip camera changes. Create a transparent environmental strip that frames the shared path without hiding it.

## Traversal Plane Rules

- Terrain is viewed from the side.
- Terrain should align with the same top-to-bottom scroll route as the other strips.
- This strip is part of one continuous traversal scene, not a separate close-up.
- Use identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment as the other strips in the scene.
- Use side-view terrain, profile-view rocks, cropped roots, edge silhouettes, partial occlusion, open compositing space, and consistent scale.
- Avoid aerial views, top-down maps, bird's-eye views, concept art posters, centered hero shots, standalone landscapes, exaggerated scale shifts, and detached dioramas.

## Common Contents

- Framing sand, cracked soil, roots, dry grasses, fungal caps, spore pods, cables, irrigation hoses, tools, shade cloth, crop leaves, or mycelium curtains.
- Partial occluding forms from the bottom, sides, or top.
- Close-feeling environmental texture that remains scale-consistent with the full scene.

## What To Avoid

- Complete scene plates.
- Separate scenic vista views.
- Main route terrain that belongs to `02-main-strip`.
- Rear contextual terrain that belongs to `03-rear-strip`.
- Atmosphere-only content that belongs to `04-atmosphere-strip`.
- Story objects or props assigned to another strip in `assets/`.
- Heavy opaque coverage that blocks the route.
- Characters unless intentionally assigned here in `characters.md`.

## Transparency Requirements

Use transparent background with open negative space. Front strip elements may enter from edges, but the asset should not become a solid opaque border unless explicitly requested.

Forbidden: sky plates, cloud plates, horizon background fills, white background, black background, and full scene backdrops.

## Composition Guidance

Use partial forms, edge crops, side-view terrain fragments, and transparent openings to frame the route. Keep the strip full-width and suitable for independent placement. Preserve top-to-bottom route alignment for vertical scroll compositing.

Leave extra terrain beyond focal details and visual room above and below important content so the engine can move the strip without cropping the story beat too tightly.

## Detail Level

Use tactile detail, but keep scale consistent with the other strips. Prioritize fibers, dust, roots, spores, cables, and material edges without making the camera feel closer.

## Character Guidance

Characters should usually not appear here. If used, they must be assigned in `characters.md` and should preserve the same camera scale as the scene.
