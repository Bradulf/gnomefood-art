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

The image generator creates the scene assets.

The website makes those assets move.

Each timeline scene is built from four same-camera, same-size transparent compositing strips:
- 01-front-strip
- 02-main-strip
- 03-rear-strip
- 04-atmosphere-strip

The strips should feel like aligned compositing slices of one Rolodex scene, not separate illustrations, per-strip camera changes, or old multi-plane authoring.

All scenes share the same camera language. Preserve camera height, camera angle, horizon placement, framing, world scale, and side-view traversal plane. Do not zoom in, zoom out, rotate the camera, move the horizon, or change perspective from scene to scene.

Each new scene should visually evolve from the previous scene instead of restarting from a new composition. Preserve terrain layout, major landmarks, world scale, and camera framing where appropriate; change story events, character actions, props, world state, cultivation, infrastructure, and emotional tone.

The application creates the scroll, compositing movement, and Rolodex-style transition between moments.

The generator should read the scene in this order:
- `story.md` defines what happens now
- `traversal.md` defines how the viewer moves through that story beat
- strip files define how each compositing strip supports the traversal
- environment descriptions provide physical evidence of the story, but do not define the scene by themselves

The generator should focus on:
- coherent scene composition
- consistent character identity
- camera continuity across the chronicle
- scene continuity from the previous beat
- task-based story moments
- shared canvas size and alignment
- vertical scroll progression
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
