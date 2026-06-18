# 04 Atmosphere Strip

## Purpose

The atmosphere strip provides environmental air, haze, light, dust, spore veils, subtle silhouettes, and soft atmospheric cues while preserving the same side-view traversal camera and scale relationship. It supports the route without becoming a far-away landscape painting.

Role summary: dust, haze, spores, glow, light, soft environmental effects, and subtle continuity cues.

## Viewing Model

Use the same camera distance, same side-view traversal plane, and same scale language as the other strips. This strip may be lighter, softer, or more atmospheric, but it should not become a separate scenic vista. The engine handles apparent depth.

## Strip Behavior

This strip is independently positioned by the engine. Do not describe scroll speed or camera distance. Create a transparent environmental strip that can composite with the terrain strips as atmosphere and route continuation.

## Traversal Plane Rules

- Terrain and atmosphere are viewed from the side.
- Atmosphere should support the same top-to-bottom scroll route and shared design cue.
- This strip is part of one continuous vertical scroll world, not a complete illustration or detached diorama.
- Use identical canvas dimensions, horizon placement, camera position, framing, world scale, and bottom alignment as the other strips in the scene.
- Use atmospheric silhouettes, dust veils, spore haze, light shafts, soft route cues, and broad environmental shapes that align with `traversal.md`.
- Avoid aerial views, top-down maps, bird's-eye views, concept art posters, centered hero shots, far-away landscapes, exaggerated scale shifts, sky plates, and detached dioramas.

## Common Contents

- Dust veils, spore haze, heat shimmer, soft light, storm walls, or magical glow.
- Soft silhouettes of terrain, ruins, fungal forms, cables, or agrarian infrastructure that support the shared route.
- Optional story objects or props only when assigned to this strip in `assets/`.

## What To Avoid

- Complete sky and ground scene plates.
- Full finished landscape compositions.
- Far-away scenic vistas.
- High-detail props.
- Front-edge occlusion.
- Main walkable route terrain that belongs to `02-main-strip`.
- Story objects or props assigned to another strip in `assets/`.
- Large readable characters.

## Transparency Requirements

Use transparent background. Only atmospheric shapes, soft silhouettes, route cues, and haze should be opaque or semi-opaque. No hard rectangular image boundary. No sky plates, cloud plates, horizon background fills, white background, black background, or full scene backdrops.

## Composition Guidance

Build a wide horizontal atmosphere strip with transparent openings. Keep path cues aligned with the same traversal route, but do not render a complete scene plate or scenic vista painting.

Leave generous transparent breathing room and avoid tight cropping so engine movement can carry haze, spores, glow, and light through the scroll.

## Detail Level

Low to medium detail. Use broad atmospheric shapes first, with small details only where they support the shared route and world identity.

## Character Guidance

Characters should usually not appear here. If a character is required, `characters.md` must assign the character to this strip and preserve the same scene scale.
