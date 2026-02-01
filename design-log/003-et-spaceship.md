# ET Spaceship Feature

**Date:** February 1, 2026  
**Status:** Implemented

---

## Overview

A special ET character appears on a spaceship during gameplay. If the player shoots it twice, they receive extended multi-shot duration as a reward.

---

## Final Design Decisions

### Spawn Mechanics

| Question | Answer |
|----------|--------|
| When does ET appear? | **(D)** Every 10 seconds timer |
| Where does ET spawn? | **(D)** Flies in from edge, moves in zigzag pattern |
| How long does ET stay? | **(C)** Until wave ends or destroyed |

### Behavior

| Question | Answer |
|----------|--------|
| Does ET move? | **(C)** Actively avoids the player |
| Collide with player? | **(B)** No, passes through |
| Collide with asteroids? | **(C)** Yes, destroys small asteroids on contact |

### Combat

| Question | Answer |
|----------|--------|
| HP / hits required | 2 hits |
| After first hit? | **(D)** Flash effect + damage indicator |

### Reward

| Question | Answer |
|----------|--------|
| Special bonus | **(C)** Extended multi-shot (+10 seconds) |
| Score | **(B)** 100 per hit + 500 kill bonus = 700 total |

### Visuals

| Question | Answer |
|----------|--------|
| Appearance | **(B)** UFO with visible ET in dome |
| Color scheme | **(C)** Magenta/pink (contrasts with cyan ship & brown asteroids) |
| Feedback on spawn | **(C)** "ET INCOMING!" warning message |

---

## Final Specification

### ET Spaceship Entity

| Property | Value |
|----------|-------|
| HP | 2 |
| Radius | 25px |
| Speed | 80-120 px/s |
| Points per hit | 100 |
| Kill bonus | 500 |
| Reward | +10s multi-shot |

### Spawn Rules

- Timer: spawns every 10 seconds during gameplay
- Only 1 ET on screen at a time
- Spawns from random screen edge
- Persists until destroyed or wave ends

### Movement Pattern

- Zigzag pattern across screen
- Actively moves away from player when player is nearby
- Avoidance radius: 150px
- Bounces off screen edges

### Collision Behavior

- **vs Player**: passes through (no damage)
- **vs Asteroids**: destroys SMALL asteroids on contact
- **vs Projectiles**: takes damage, destroyed after 2 hits

---

## Implementation Plan

### Phase 1: Create ET Class

**New file:** `js/et.js`
- Position, velocity, HP
- Zigzag + avoidance movement logic
- Draw UFO with ET dome
- Hit/damage methods

### Phase 2: Integrate into Game

**Modify:** `game.js`
- Add `et` property (single instance or null)
- Add `etSpawnTimer` (10 second countdown)
- Spawn logic in update loop
- Projectile vs ET collision
- ET vs small asteroid collision
- Reward application on kill
- "ET INCOMING!" message display

### Phase 3: Visual Polish

**Modify:** `particles.js`
- ET destruction explosion (magenta particles)
- Bonus collection effect for multi-shot reward

---

## Implementation Results

**Completed:** February 1, 2026

### Files Created/Modified

1. **`js/et.js`** (new) - ETSpaceship class with:
   - UFO with visible green ET in translucent dome
   - Magenta/pink color scheme with pulsing glow
   - Zigzag movement pattern
   - Player avoidance behavior (150px radius)
   - Hit flash effect and damage indicators
   - Rotating lights on bottom of saucer

2. **`game.js`** (modified):
   - Import ETSpaceship class
   - Added `et`, `etSpawnTimer`, `etWarningMessage`, `etWarningTimer` properties
   - `spawnET()` method with warning message
   - Projectile vs ET collision with score and bonus reward
   - ET vs small asteroid collision (ET destroys them)
   - ET rendering in draw loop
   - Pulsing "ET INCOMING!" warning message in UI
   - ET cleared on wave complete

### Deviations from Design

None - implementation matches design specification.
