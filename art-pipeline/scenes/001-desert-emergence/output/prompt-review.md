# Prompt Review

Scene: `001-desert-emergence`

This review mode includes the generated prompt for each layer, explains how the scene notes shaped it, lists likely image-generation risks, and gives fallback suggestions if transparency or composition fails.

## 01 Front Strip

### Generated Prompt

```text
Create an isolated full-width transparent PNG parallax layer for gnomefood.com.

Strip: 01-front-strip
Scene: 001-desert-emergence
Compositing role: front strip

Camera and layer behavior:
Use 2.5D side-scrolling cinematic composition for a wide horizontal website strip. This strip shares the same camera distance, side-view traversal plane, and scale language as the other strips. Forms may be edge-cropped and textural because this is the front strip, but the image model should not change camera distance. The engine creates apparent depth after generation. Keep the asset horizontally expansive, with clean transparent openings for other strips to remain visible.

Content:
Render only the front environmental strip: cracked sandy soil, dry wind-shaped ripples, small dunes, partial rocks emerging from sand-swept hillsides on both sides of the frame, brittle desert texture, sparse dry grasses or root fragments, and delicate spore-like mycelium veins beginning near the center and stretching outward across open sand. The rocks should imply something ancient buried beneath the dunes. The fungal veins should cross open areas as if reaching toward the next rock or strip, with tiny spore nodes and faint living threads rather than lush growth. Include wisps of windblown dust and spores close to the ground, but do not create a full dust scene plate.

Style:
Cinematic hand-crafted fantasy science fiction with fungal cyberpunk agrarian worldbuilding, grounded in the first desert wasteland phase. Use sun-faded ochre, rust, ash, bleached bone, dry cyan reflections, and only sparse toxic or hopeful bioluminescent accents in the spore veins. The mood is ancient, dry, abandoned, quiet, and barely awakening. Surfaces should feel tactile: grit, salt dust, cracked clay, rough stone, dry roots, and fragile mycelium.

Transparency and composition:
Transparent background. No rectangular backdrop. No complete scene. No sky plate, cloud plate, horizon background fill, white background, black background, or full scene backdrop beyond the isolated framing forms. Leave open transparent space between rocks and fungal veins. Framing elements may enter from the bottom and side edges, but the asset must not become a solid opaque border. Clean alpha edges suitable for compositing.

Negative:
No text, logo, watermark, border, frame, UI, top-down perspective, isometric perspective, portrait framing, flat poster composition, finished scene plate, scenic vista, main-strip terrain band, central unassigned story object, duplicate strips, unrelated characters, dense lush vegetation, cute fantasy style, polished generic sci-fi.

Suggested filename: output/images/01-front-strip.png
```

### Why Each Scene Note Affected The Prompt

- Sandy, desolate, ancient, abandoned: became cracked sandy soil, brittle desert texture, salt dust, dry mood, and restrained color.
- Wisps of air, dunes, ripples: became wind-shaped ripples, small dunes, and close-to-ground dust/spore wisps.
- Rocks emerging from sand-swept hillsides: became partial rocks on both sides, edge-cropped for front-strip compositing.
- Illusion of something underneath: became buried ancient forms implied beneath dunes rather than explicit ruins.
- Spore-like veins from center stretching toward dunes: became delicate mycelium veins beginning near the center and reaching outward.
- Rocks on either side: reinforced side framing while avoiding a solid border.
- Open space between rocks and fungal veins: became explicit transparent/open space guidance.
- Mycelium crossing open areas toward the next layer or rock: became veins crossing open sand and reaching toward other composited layers.
- Ancient, dry, abandoned, quiet route-edge: shaped the low-growth, low-glow, tactile desert surface language.
- Life long ago beneath sand, tiny traces remain: kept growth sparse and archaeological rather than lush.
- Drifting spores and awakening life: became faint spore nodes, spores, and minimal hopeful glow.

### Potential Risks For Image Generation

- The model may render a complete desert background instead of an isolated front strip.
- Front-strip edge framing may become too opaque and block the assembled parallax scene.
- Spore veins may become too lush, green, or magical for the early desert phase.
- Dust wisps may be generated as a full sky or haze plate with a rectangular boundary.
- Rocks may become central story objects instead of route-edge terrain.

### Suggestions If Transparency Or Composition Fails

- Add: "alpha-only cutout, no filled canvas, large transparent holes between every route-edge cluster."
- Add: "framing elements occupy the lower third and side edges only, with at least 50 percent transparent open area."
- If the layer becomes a full scene, remove atmospheric language and restate: "render only cropped route-edge terrain pieces, no horizon, no sky."
- If the mycelium overgrows, add: "only a few hair-thin fungal threads, no mushrooms larger than pebbles."

## 02 Main Strip

### Generated Prompt

```text
Create an isolated full-width transparent PNG parallax layer for gnomefood.com.

Strip: 02-main-strip
Scene: 001-desert-emergence
Compositing role: main route strip

Camera and layer behavior:
Use side-view cinematic composition for a wide website strip. This is the main walkable compositing strip at the same camera distance as the other strips. Compose a readable top-to-bottom scroll route cue that connects visually with the other strips without becoming a complete scene plate. The terrain should feel inhabitable and traversable while supporting the north-to-south world route.

Content:
Render only the main route terrain: a sandy, desolate, ancient path beginning to form between low dunes and rocks, wide enough for a small character to walk through but not wide enough to feel like a road. Shape the path through wind-smoothed sand, subtle depressions, small ridges, and sand ripples. Add larger rocks emerging from dunes on both sides, partly buried and suggesting hidden ruins or an older buried landscape beneath the sand. Spore-like mycelium veins begin in the center and stretch toward the dunes, following and lightly defining the path. The growth should be sparse and early, with small fungal nodes, threadlike hyphae, and a subtle hopeful glow along the path.

Style:
Cinematic, richly detailed, hand-crafted fungal cyberpunk agrarian desert worldbuilding. Keep the palette dry and exposed: sun-faded ochre, ash, bleached bone, rust, cracked clay, and pale sand, with restrained dry cyan reflections and a faint spore-gold or toxic neon glow in the living veins. The scene should feel ancient, abandoned, quiet, and survival-focused, with the first signs of magic emerging from decay.

Transparency and composition:
Transparent background. No rectangular backdrop. No complete multi-distance scene. Keep the near terrain isolated with clean alpha edges. Do not include front-strip framing, a separate horizon fill, a sky plate, or a central unassigned story object. Maintain readable open areas around the path so other parallax layers can composite around it.

Negative:
No text, logo, watermark, border, frame, UI, top-down perspective, isometric perspective, portrait framing, flat poster composition, finished backdrop, front-strip edge silhouettes, distant skyline plate, isolated hero artifact, unrelated characters, generic fantasy road, clean futuristic pavement, lush oasis vegetation.

Suggested filename: output/images/02-main-strip.png
```

### Why Each Scene Note Affected The Prompt

- Sandy, desolate, ancient, abandoned: became a dry main route terrain plane with subdued color and abandoned mood.
- Wisps of air, dunes, ripples: became wind-smoothed sand, subtle depressions, ridges, and ripples.
- Rocks emerging from hillsides: became larger partly buried side rocks that frame the walkable lane.
- Illusion of something underneath: became hidden ruins or older buried landscape suggested under sand.
- Path follows from the center: became a central path that organizes the layer.
- Spore-like veins stretching toward dunes: became sparse mycelium following and lightly defining the path.
- Larger rocks on either side: became readable side masses in the main compositing plane.
- Subtle path between dunes and rocks: became the core main-strip walkable feature.
- Walkable but not a main road: became "wide enough for a small character" while avoiding road language.
- Natural path formed by sand movement and spore growth: became wind-shaped depressions plus threadlike growth defining the route.
- Ancient, dry, abandoned, quiet, hopeful glow: shaped the restrained glow and survival-focused mood.

### Potential Risks For Image Generation

- The path may look like a road, trench, or polished sci-fi walkway.
- The layer may become a complete landscape with horizon and sky.
- The model may place route-edge rocks or dense plants that belong in another layer.
- The path may be too wide or too dominant, reducing parallax depth.
- The hopeful glow may become neon signage or overt cyberpunk lighting.

### Suggestions If Transparency Or Composition Fails

- Add: "isolated sand path cutout only, no sky, no horizon, no backdrop wash."
- Add: "path is a broken natural depression with transparent alpha around dune edges."
- If it looks like a road, add: "not paved, no straight edges, no tire tracks, no engineered roadbed."
- If too much fills the frame, add: "terrain occupies a low horizontal band with transparent space above and around rocks."

## 03 Rear Strip

### Generated Prompt

```text
Create an isolated transparent PNG parallax asset for gnomefood.com.

Strip: 03-rear-strip
Scene: 001-desert-emergence
Compositing role: supporting compositing

Camera and layer behavior:
Use 2.5D side-scrolling cinematic composition for an independently positionable parallax asset. This layer should read as a distinct focal object group or concentrated story construction, not a whole environment. It may sit in or slightly in front of the main route terrain, with high detail and a clean isolated silhouette.

Content:
Render only the supporting compositing path cluster: a more distinct central section of the emerging path, where spore-like mycelium veins become denser, more defined, and visibly alive. Shape it as a narrow, self-contained path segment made of cracked sand, exposed buried stone edges, small partly uncovered rocks, dry root fragments, and branching fungal veins that appear to be leading somewhere beyond the visible asset. The destination must remain unseen. The cluster should feel like the first active emergence point in an ancient abandoned desert: tiny spore pods, glowing hyphae tracing cracks, faint bioelectric nodes or natural patterns formed by the veins, and subtle dust caught around the living threads. Keep it grounded and fragile, not a large machine or shrine unless implied through buried fragments.

Style:
High-detail hand-crafted fungal cyberpunk agrarian fantasy science fiction. Use desert wasteland materials: sand, cracked clay, salt dust, rust-tinted buried fragments, bone-dry stone, and delicate mycelium. The glow should be subtle and hopeful, concentrated in the veins and spore nodes, with sun-faded ochre and bleached bone dominating the asset. The mood is ancient, dry, abandoned, quiet, and newly awakening.

Transparency and composition:
Transparent background. No rectangular backdrop. No complete scene. Keep the supporting compositing path cluster cleanly isolated for website positioning, with no broad terrain band, no horizon fill, and no front-strip framing. Allow the path segment to taper or fade at its edges so it can align with other layers during compositing.

Negative:
No text, logo, watermark, border, frame, UI, top-down perspective, isometric perspective, portrait framing, flat poster composition, finished backdrop, wide full terrain layer, broad horizon silhouettes, extra unrelated props, characters, polished showroom rendering, ornate fantasy altar, large visible destination.

Suggested filename: output/images/03-rear-strip.png
```

### Why Each Scene Note Affected The Prompt

- Sandy, desolate, ancient, abandoned: kept the artifact as cracked sand, buried stone, and fragile traces rather than a polished object.
- Wisps of air, dunes, ripples: became subtle dust around the active path cluster without turning into a background.
- Rocks emerging from hillsides: became small partly uncovered rocks and exposed buried stone edges in the cluster.
- Illusion of something underneath: became archaeological buried fragments and hidden forms rather than a clear structure.
- Center path with spore-like veins: became the focal supporting compositing route cluster.
- More distinct path in center: made the prompt concentrate on a self-contained central path segment.
- More defined spore-like veins: became denser, visibly alive branching hyphae with tiny nodes.
- Path leading somewhere, destination not visible: became tapering path edges and explicit "destination must remain unseen."
- Ancient, dry, abandoned, quiet, hopeful glow: shaped the fragile active-emergence mood and restrained bioluminescence.

### Potential Risks For Image Generation

- The model may create a shrine, doorway, monument, or machine that is too literal for the note.
- The asset may become too broad and duplicate the main route terrain layer.
- The path may reveal a visible destination, portal, or backdrop scene.
- Dense vein detail may become a lush fungal patch rather than sparse emergence.
- Glyph-like patterns may turn into readable symbols or text.

### Suggestions If Transparency Or Composition Fails

- Add: "single compact cutout cluster, no surrounding environment, no horizon, no sky."
- Add: "artifact footprint should occupy the central lower area only, with transparent alpha around all sides."
- If it becomes too shrine-like, replace "artifact" with "focal path fragment" and remove "glyph-like."
- If symbols appear, add: "abstract natural crack patterns only, no readable symbols, no letters."

## 04 Atmosphere Strip

### Generated Prompt

```text
Create an isolated full-width transparent PNG parallax layer for gnomefood.com.

Strip: 04-atmosphere-strip
Scene: 001-desert-emergence
Compositing role: background

Camera and layer behavior:
Use 2.5D side-scrolling cinematic composition for a wide horizontal website layer. This is the atmosphere compositing strip and is animated by the website engine. Forms should be softened by haze, dust haze, heat shimmer, and low contrast. Build a stable horizon silhouette with transparent space above and around it, not a complete landscape plate.

Content:
Render only the atmospheric desert continuity and soft terrain silhouettes: low sand-choked hills, long dune ridges, faint wind ripples, and larger rocks protruding from the dunes on either side as if ancient buried structures lie underneath. In the atmospheric cue, show a prevalent but atmospheric path line leading away through the sand, marked by faint spore-like veins and tiny glowing threads. The path should feel like it continues somewhere unseen beyond the horizon, but the destination must not be visible. Include thin veils of dust, heat shimmer, and subtle spore haze hugging the horizon. Any fungal growth should remain sparse, subtle, and early-stage.

Style:
Cinematic desert wasteland phase of fungal cyberpunk agrarian worldbuilding. Use low-contrast sun-faded ochre, pale sand, ash, bleached bone, rust-muted silhouettes, dry cyan atmospheric hints, and a very restrained hopeful spore glow along the atmospheric path. The mood is ancient, abandoned, dry, quiet, and mysterious, with life just beginning to reappear beneath the sand.

Transparency and composition:
Transparent background. No rectangular backdrop. No sky plate, cloud plate, horizon background fill, white background, black background, or full scene backdrop. Only the atmosphere silhouettes, horizon forms, path marks, dust veils, and spore haze should be opaque or semi-opaque. Leave open transparent areas above and around the forms so the page background and other layers can composite cleanly. Do not include route-edge objects or a central unassigned story object.

Negative:
No text, logo, watermark, border, frame, UI, top-down perspective, isometric perspective, portrait framing, flat poster composition, finished backdrop, route-edge rocks, near plants, central close-up artifact, large readable characters, dense vegetation, sky fill, hard rectangular image boundary, unrelated fantasy city.

Suggested filename: output/images/04-atmosphere-strip.png
```

### Why Each Scene Note Affected The Prompt

- Sandy, desolate, ancient, abandoned: became low-contrast desert horizon forms and quiet distant mood.
- Wisps of air, dunes, ripples: became dust veils, heat shimmer, faint wind ripples, and dune ridges.
- Rocks emerging from sand-swept hillsides: became distant protruding rock silhouettes on either side.
- Illusion of something underneath: became ancient buried structures suggested beneath distant dunes.
- Center path with spore-like veins stretching to dunes: became a central atmospheric path line with faint glowing threads.
- Larger rocks on either side: supported varied horizon height and side silhouettes.
- Very prevalent path in center: made the path more readable than in other layers while still distant.
- More defined spore-like veins: became visible but small path markings, kept sparse due to distant scale.
- Path leading somewhere, destination not visible: became a route that continues beyond the horizon with no visible endpoint.
- Ancient, dry, abandoned, quiet, hopeful glow: shaped the restrained glow and mysterious awakening mood.

### Potential Risks For Image Generation

- The model may render a complete desert landscape with sky, sun, and ground fill.
- The central path may become too detailed and compete with the near or supporting compositing layers.
- Soft rocks may become route-edge boulders due to scale ambiguity.
- Dust and haze may create an opaque rectangular plate.
- The "prevalent path" note may cause a strong road-like line instead of atmospheric distant terrain.

### Suggestions If Transparency Or Composition Fails

- Add: "only horizon silhouettes and semi-transparent dust wisps, no filled sky, no filled ground."
- Add: "all forms are small, soft and atmospheric, low contrast, and positioned as soft atmospheric route cues."
- If the path dominates, add: "path is a faint broken line, partially hidden by dune haze."
- If the model fills the background, add: "transparent alpha above the horizon and between dune shapes; no rectangular canvas color."
