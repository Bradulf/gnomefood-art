# Sporeling

## Character Role

The sporeling is a reusable character asset for gnomefood.com. It can appear across scenes as a small fungal agrarian survivor, scout, farmer, messenger, or ritual helper.

Use the sporeling to preserve continuity across the scroll story as the world evolves from desert wasteland into magical fungal abundance.

## Core Identity

The sporeling should remain recognizable across generated images:

- Small, gnome-like fungal being with a mushroom-cap silhouette.
- Compact body, practical posture, and a sense of resilient curiosity.
- Fungal biology blended with handmade agrarian clothing and salvaged cyberpunk tools.
- Not cute in a generic mascot way; should feel weathered, useful, strange, and alive in this world.

## Primary Reference

Use `reference/sporeling-character.yaml` as the structured identity source and the image named by that YAML as the primary visual identity reference.

Current intended image reference: `reference/sporeling_v1.png`.

Prompts should explicitly state that the reference image is used to preserve identity, not to redesign the character. Scene prompts may change pose, scale, emotion, facing direction, environmental effects, and evolution-stage details only when documented in the scene's `characters.md`.

## Persistent Features

Preserve these identity anchors unless a scene intentionally overrides them:

- Distinct mushroom cap head or hood-like cap silhouette.
- Slightly hunched worker posture.
- Layered patched field garments.
- Small satchel, seed pouch, tool sling, or moisture canister.
- Subtle mycelium threads, spore freckles, or rootlike details.
- Scale should read as small relative to the environment.

## Usage Rules

Only include the sporeling in a layer when a scene's `characters.md` assigns it to that layer.

Do not add the sporeling automatically to every scene. Do not duplicate the character across multiple layers unless the scene specifically needs multiple appearances.

When included, the character must be part of the isolated transparent PNG layer for that depth only.
