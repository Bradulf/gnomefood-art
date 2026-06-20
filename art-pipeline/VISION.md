# Gnome Food Visual Vision

The site is an infinite scrolling visual chronicle of a mushroom humanoid building a fungal cyberpunk agrarian kingdom over time.

The user scrolls downward through a timeline and feels like they are passing through moments from the kingdom's history.

A scene is a story beat, not an environment category.

The user is moving through time, not across disconnected locations. Each scene should feel like the next moment in the same journey, with visible consequences carrying forward from earlier scenes.

Locations may persist across multiple scenes. The same garden bed, well, road, ruin, shrine, greenhouse, or settlement can reappear later after the civilization has changed it.

Each scene depicts one small task, discovery, ritual, or change:
- a mushroom humanoid entering the desert
- tilling the first garden bed
- finding water
- planting spores
- building irrigation
- discovering crystals
- experimenting with tools
- growing the first settlement
- expanding into a magical fungal city

The image generator creates one daily scene asset by default.

The website makes those assets move.

## Phase 1 Default

Phase 1 prioritizes daily story publishing over complex layer tuning.

Each scene generates one main transparent scene image:

- `output/images/scene.png`

The scene image depicts the story beat as a single coherent world moment. It includes terrain, the assigned character when present, assigned props or artifacts when present, and the visible story change.

The scene image does not include a sky, clouds, sun, moon, horizon background fill, white backdrop, black backdrop, or full rectangular background plate. It is terrain and objects only, with open upper space so the website background system shows through.

The website provides the background system separately:

- dawn
- morning
- noon
- dusk
- night
- weather and seasonal backgrounds later

The default scene output is a complete transparent cutout, not a flattened illustration and not a full backdrop.

## Advanced Strip Mode

Four-strip output remains an advanced/experimental mode, not the daily default:

- `01-front-strip`
- `02-main-strip`
- `03-rear-strip`
- `04-atmosphere-strip`

When used, the strips should feel like aligned compositing slices of one Rolodex scene, not separate illustrations, per-strip camera changes, or old multi-plane authoring.

All scenes share the same camera language. Preserve camera height, camera angle, horizon placement, framing, world scale, and side-view traversal plane. Do not zoom in, zoom out, rotate the camera, move the horizon, or change perspective from scene to scene.

Each new scene should visually evolve from the previous scene instead of restarting from a new composition. Preserve terrain layout, major landmarks, world scale, and camera framing where appropriate; change story events, character actions, props, world state, cultivation, infrastructure, and emotional tone.

The application creates the scroll, compositing movement, and Rolodex-style transition between moments.

The generator should read the scene in this order:
- `story.md` defines what happens now and is the main authoring file
- `traversal.md` optionally supports how the viewer moves through that story beat
- `assets/` and `characters.md` optionally assign props, artifacts, and reusable characters
- `output/shared-context.md` may hold compact scene memory
- advanced strip files are read only for legacy or experimental four-strip output
- environment descriptions provide physical evidence of the story, but do not define the scene by themselves

The generator should focus on:
- coherent scene composition
- consistent character identity
- camera continuity across the chronicle
- scene continuity from the previous beat
- task-based story moments
- vertical scroll progression
- transparent scene cutouts with empty sky/background space
- a growing civilization over time
- consequences that carry forward from earlier scenes

The generator should prioritize:
- what changed
- who is present
- what action is occurring
- what world progress occurred
- what emotional beat is conveyed

World progression should be visible across the chronicle:
- dead desert
- first mycelium
- Sporeling emergence
- first cultivation
- first garden bed
- early settlement
- agricultural village
- fungal infrastructure
- crystal-powered agriculture
- cyberpunk fungal kingdom
