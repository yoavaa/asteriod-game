# Bonus Package System

**Date:** December 28, 2025  
**Status:** Implemented ✅

---

## Overview

When asteroids are destroyed, there's a chance they leave behind a **bonus package** that the player can collect. This adds strategic depth and reward variety to the gameplay.

### Bonus Types

1. **Extra Score** — Immediately awards bonus points
2. **Multi-Directional Shots** — Temporarily allows the ship to fire in multiple directions at once

---

## Questions for Clarification

### Spawn Mechanics

1. **Drop chance per asteroid?**
   - **(A)** Low chance (5-10%) — bonuses feel rare and valuable
   - **(B)** Medium chance (15-25%) — regular bonus flow
   - **(C)** Size-dependent (larger asteroids = higher drop chance) ✅ **SELECTED**
   - **(D)** Guaranteed on certain sizes only (e.g., only X-Large/Large)

2. **Which asteroids can drop bonuses?**
   - **(A)** Any asteroid when fully destroyed (including fragments) ✅ **SELECTED**
   - **(B)** Only "root" asteroids (the original ones, not fragments)
   - **(C)** Only the final small fragments when destroyed
   - **(D)** Any size, but different sizes drop different bonuses

### Bonus Distribution

3. **How are bonus types selected when dropped?**
   - **(A)** Random 50/50 between the two types ✅ **SELECTED**
   - **(B)** Weighted (e.g., 70% score, 30% multi-shot since it's more powerful)
   - **(C)** Alternating or pseudo-random to ensure variety
   - **(D)** Based on asteroid size (big = multi-shot, small = score)

### Collection

4. **How does the player collect bonuses?**
   - **(A)** Fly into them (collision-based pickup) ✅ **SELECTED**
   - **(B)** Shoot them to activate
   - **(C)** Either — shooting or touching works

5. **Bonus package lifetime?**
   - **(A)** Disappear after a few seconds (5-8s) — urgency to collect ✅ **SELECTED** (5 seconds)
   - **(B)** Stay until collected or wave ends
   - **(C)** Stay indefinitely until collected

### Extra Score Bonus Details

6. **Score bonus value?**
   - **(A)** Fixed amount (e.g., +500 points)
   - **(B)** Scales with wave number (e.g., +100 × wave)
   - **(C)** Random range (e.g., +200 to +1000) ✅ **SELECTED**
   - **(D)** Based on which asteroid dropped it

### Multi-Directional Shots Details

7. **Shot pattern?**
   - **(A)** Triple shot (forward + 30° left + 30° right) ✅ **SELECTED**
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power ✅ **SELECTED**
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer ✅ **SELECTED**
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols ✅ **SELECTED**
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!) ✅ **SELECTED**
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Final Design Specification

### 🎁 Bonus Package Spawning

| Asteroid Size | Drop Chance |
|---------------|-------------|
| X-Large | 40% |
| Large | 30% |
| Medium | 20% |
| Small | 10% |

- Bonus spawns at asteroid's death location
- 50/50 chance between Score and Multi-Shot types
- Package lifetime: **5 seconds** before disappearing
- Visual warning: starts blinking at 2 seconds remaining

### ⭐ Extra Score Bonus

| Property | Value |
|----------|-------|
| Type ID | `score` |
| Points Awarded | Random 200–1000 (rounded to nearest 50) |
| Collection | Fly into package |
| Effect | Immediate score increase |

### 🔫 Multi-Directional Shot Bonus

| Property | Value |
|----------|-------|
| Type ID | `multishot` |
| Shot Pattern | Triple: forward + 30° left + 30° right |
| Duration | 5 seconds |
| Stacking | Yes — collecting another adds +5s to timer |
| Collection | Fly into package |

### 📦 Visual Design

**Package Appearance:**
- Floating crate/box shape (16×16 px visual size, ~12px collision radius)
- Gentle bobbing animation (up/down float)
- Subtle rotation
- Color-coded:
  - **Score bonus:** Gold/yellow crate with ⭐ symbol
  - **Multi-shot bonus:** Cyan/blue crate with ✦ symbol
- Soft glow effect matching crate color

**Collection Feedback:**
1. Bright flash at collection point
2. Particle burst (8-12 particles in bonus color)
3. Floating text rising upward:
   - Score: "+750" (actual value)
   - Multi-shot: "TRIPLE SHOT!" or "+5s" if extending

**Active Power-Up Indicator:**
- When multi-shot is active, show timer bar in HUD
- Ship gets subtle glow in cyan color

### 🛠 Implementation Plan

**New File:** `js/bonus.js`

```javascript
// Bonus class with:
// - type ('score' or 'multishot')
// - position (x, y)
// - lifetime timer
// - bobbing animation state
// - draw() and update() methods
```

**Modifications:**

1. **`game.js`**
   - Add `bonuses` array to track active packages
   - On asteroid death → roll for bonus spawn
   - Check ship-bonus collisions each frame
   - Apply bonus effects on collection
   - Track `multiShotTimer` for power-up duration

2. **`ship.js`**
   - Add `hasMultiShot` property (or check timer in game)
   - Modify shooting logic to fire 3 projectiles when active

3. **`projectile.js`**
   - No changes needed (just spawn 3 instead of 1)

4. **`particles.js`**
   - Add floating text particle type
   - Add bonus collection burst effect

---

## Ready to Build! 🚀

Design is complete. Say the word and I'll implement the bonus system!

