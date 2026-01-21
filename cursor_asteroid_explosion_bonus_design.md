# Asteroid explosion bonus design
_Exported on 12/28/2025 at 16:00:40 GMT+2 from Cursor (2.2.43)_

---

**User**

we want to extend our game.

when an astriod explodes there is a change for leaving a bonus package behind. we have two types of bonus - extra score and multi-rectional shots.

lets create a new design log

---

**Cursor**

Now I'll create a new design log for the bonus package system:

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
   - **(C)** Size-dependent (larger asteroids = higher drop chance)
   - **(D)** Guaranteed on certain sizes only (e.g., only X-Large/Large)

2. **Which asteroids can drop bonuses?**
   - **(A)** Any asteroid when fully destroyed (including fragments)
   - **(B)** Only "root" asteroids (the original ones, not fragments)
   - **(C)** Only the final small fragments when destroyed
   - **(D)** Any size, but different sizes drop different bonuses

### Bonus Distribution

3. **How are bonus types selected when dropped?**
   - **(A)** Random 50/50 between the two types
   - **(B)** Weighted (e.g., 70% score, 30% multi-shot since it's more powerful)
   - **(C)** Alternating or pseudo-random to ensure variety
   - **(D)** Based on asteroid size (big = multi-shot, small = score)

### Collection

4. **How does the player collect bonuses?**
   - **(A)** Fly into them (collision-based pickup)
   - **(B)** Shoot them to activate
   - **(C)** Either — shooting or touching works

5. **Bonus package lifetime?**
   - **(A)** Disappear after a few seconds (5-8s) — urgency to collect
   - **(B)** Stay until collected or wave ends
   - **(C)** Stay indefinitely until collected

### Extra Score Bonus Details

6. **Score bonus value?**
   - **(A)** Fixed amount (e.g., +500 points)
   - **(B)** Scales with wave number (e.g., +100 × wave)
   - **(C)** Random range (e.g., +200 to +1000)
   - **(D)** Based on which asteroid dropped it

### Multi-Directional Shots Details

7. **Shot pattern?**
   - **(A)** Triple shot (forward + 30° left + 30° right)
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!

```

I've created the new design log at `design-log/002-bonus-packages.md`. Here are the key decisions we need to make:

### Spawn Mechanics
1. **Drop chance** — Should bonuses be rare (5-10%), regular (15-25%), size-dependent, or guaranteed from certain asteroids only?
2. **Which asteroids drop** — Any asteroid, only originals (not fragments), only final small pieces, or different bonuses per size?

### Bonus Distribution
3. **Type selection** — Random 50/50, weighted toward score, alternating, or based on asteroid size?

### Collection
4. **How to collect** — Fly into them, shoot them, or either?
5. **Lifetime** — Disappear after 5-8 seconds, last until wave ends, or stay indefinitely?

### Extra Score Details
6. **Value** — Fixed +500, scales with wave, random range, or based on source asteroid?

### Multi-Shot Details
7. **Pattern** — Triple shot, 5-projectile spread, 360° burst, or forward+backward?
8. **Duration** — 5 seconds, 10 seconds, 20 seconds, or until wave ends?
9. **Stacking** — Extend timer, reset timer, or ignore if already active?

### Visuals
10. **Appearance** — Glowing orbs with icons, floating crates, pulsing shapes, or spinning crystals?
11. **Collection feedback** — Flash + particles + floating text, subtle sparkle, or sound only?

What are your choices? (You can answer like "1A, 2C, 3B..." or just describe what you want!)

---

**User**

1. the larger the asteriod the larger the chance we get a bonus.
2. any asteriod
3. 50% is good
4. fly into them
5. 5 seconds
6. random range
7. tripple
8. 5 seconds
9. stacking, yet
10. floating crates
11. Flash + particles + floating text

---

**Cursor**

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
   - **(A)** Random 50/50 between the two types
   - **(B)** Weighted (e.g., 70% score, 30% multi-shot since it's more powerful)
   - **(C)** Alternating or pseudo-random to ensure variety
   - **(D)** Based on asteroid size (big = multi-shot, small = score)

### Collection

4. **How does the player collect bonuses?**
   - **(A)** Fly into them (collision-based pickup)
   - **(B)** Shoot them to activate
   - **(C)** Either — shooting or touching works

5. **Bonus package lifetime?**
   - **(A)** Disappear after a few seconds (5-8s) — urgency to collect
   - **(B)** Stay until collected or wave ends
   - **(C)** Stay indefinitely until collected

### Extra Score Bonus Details

6. **Score bonus value?**
   - **(A)** Fixed amount (e.g., +500 points)
   - **(B)** Scales with wave number (e.g., +100 × wave)
   - **(C)** Random range (e.g., +200 to +1000)
   - **(D)** Based on which asteroid dropped it

### Multi-Directional Shots Details

7. **Shot pattern?**
   - **(A)** Triple shot (forward + 30° left + 30° right)
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
   - **(A)** Fly into them (collision-based pickup)
   - **(B)** Shoot them to activate
   - **(C)** Either — shooting or touching works

5. **Bonus package lifetime?**
   - **(A)** Disappear after a few seconds (5-8s) — urgency to collect
   - **(B)** Stay until collected or wave ends
   - **(C)** Stay indefinitely until collected

### Extra Score Bonus Details

6. **Score bonus value?**
   - **(A)** Fixed amount (e.g., +500 points)
   - **(B)** Scales with wave number (e.g., +100 × wave)
   - **(C)** Random range (e.g., +200 to +1000)
   - **(D)** Based on which asteroid dropped it

### Multi-Directional Shots Details

7. **Shot pattern?**
   - **(A)** Triple shot (forward + 30° left + 30° right)
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
   - **(C)** Random range (e.g., +200 to +1000)
   - **(D)** Based on which asteroid dropped it

### Multi-Directional Shots Details

7. **Shot pattern?**
   - **(A)** Triple shot (forward + 30° left + 30° right)
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
   - **(A)** Triple shot (forward + 30° left + 30° right)
   - **(B)** Spread shot (5 projectiles in a forward arc)
   - **(C)** 360° burst (shoots in all directions)
   - **(D)** Double shot (forward + backward)

8. **Duration of multi-shot power-up?**
   - **(A)** Short (5 seconds) — quick burst of power
   - **(B)** Medium (10 seconds) — noticeable advantage
   - **(C)** Long (20 seconds) — lasts through combat
   - **(D)** Until wave ends

9. **Can multi-shot stack/refresh?**
   - **(A)** Collecting another extends the timer
   - **(B)** Collecting another resets the timer (no stacking)
   - **(C)** Cannot collect while already active (package ignored/stays)

### Visuals

10. **Bonus package appearance?**
    - **(A)** Glowing orbs with icons inside (⭐ for score, 🔫 for multi-shot)
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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
    - **(B)** Floating crates/boxes with symbols
    - **(C)** Pulsing geometric shapes (different colors per type)
    - **(D)** Spinning crystals/gems

11. **Visual feedback on collection?**
    - **(A)** Quick flash + particle burst + floating text (+500!)
    - **(B)** Subtle sparkle effect only
    - **(C)** Sound effect only (no visual)

---

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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

## Preliminary Design (Pending Selections)

Once you choose from the options above, I'll finalize the design here with:

- Exact spawn probabilities
- Bonus values and durations
- Visual specifications
- Implementation approach (new `Bonus` class, etc.)

---

## Ready for Your Input! 🎁

Let me know your preferences and I'll nail down the final specification!


```

```markdown
# Bonus Package System

**Date:** December 28, 2025  
**Status:** Planning 📋

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


```

Done! I've updated the design log with all your selections. Here's the final specification:

### 🎁 Bonus Spawning
| Asteroid Size | Drop Chance |
|---------------|-------------|
| X-Large | 40% |
| Large | 30% |
| Medium | 20% |
| Small | 10% |

### ⭐ Extra Score Bonus
- **+200 to +1000 points** (random, rounded to nearest 50)
- Immediate effect on collection

### 🔫 Multi-Shot Bonus  
- **Triple shot** — forward + 30° left + 30° right
- **5 second duration**
- **Stacks** — collecting another adds +5s to the timer

### 📦 Visuals
- Floating crates with symbols (gold ⭐ for score, cyan ✦ for multi-shot)
- Bobbing/rotating animation
- **5 second lifetime** with blinking warning at 2s remaining
- Collection: flash + particle burst + floating text

### Implementation Plan
1. New `js/bonus.js` — Bonus class
2. Modify `game.js` — spawn logic, collision detection, power-up timer
3. Modify `ship.js` — triple shot firing
4. Modify `particles.js` — floating text effect

Ready to build when you are! 🚀

---

**User**

go and build

---

**Cursor**

Now I understand the codebase. Let me implement the bonus system:

```javascript
// Bonus package class for power-ups and score bonuses

import { randomRange, randomInt } from './utils.js';

// Bonus type configurations
export const BONUS_TYPES = {
    SCORE: {
        id: 'score',
        color: '#f7c331',      // Gold
        glowColor: 'rgba(247, 195, 49, 0.5)',
        symbol: '★',
        label: 'SCORE'
    },
    MULTISHOT: {
        id: 'multishot',
        color: '#4ecdc4',      // Cyan
        glowColor: 'rgba(78, 205, 196, 0.5)',
        symbol: '✦',
        label: 'TRIPLE SHOT'
    }
};

// Drop chances by asteroid size
export const DROP_CHANCES = {
    XLARGE: 0.40,
    LARGE: 0.30,
    MEDIUM: 0.20,
    SMALL: 0.10
};

export class Bonus {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.config = BONUS_TYPES[type];
        
        // Size and collision
        this.size = 16;
        this.radius = 12;
        
        // Lifetime
        this.lifetime = 5; // seconds
        this.maxLifetime = 5;
        this.warningThreshold = 2; // Start blinking at 2 seconds remaining
        
        // Animation
        this.bobOffset = 0;
        this.bobSpeed = 3;
        this.rotation = 0;
        this.rotationSpeed = 1.5;
        
        // Score value (only for SCORE type)
        if (type === 'SCORE') {
            // Random 200-1000, rounded to nearest 50
            this.scoreValue = Math.round(randomInt(200, 1000) / 50) * 50;
        }
        
        this.destroyed = false;
    }
    
    update(deltaTime) {
        // Update lifetime
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        // Update animations
        this.bobOffset = Math.sin(this.bobSpeed * (this.maxLifetime - this.lifetime) * Math.PI) * 5;
        this.rotation += this.rotationSpeed * deltaTime;
    }
    
    draw(ctx) {
        // Check if should be hidden (blinking when about to expire)
        if (this.lifetime < this.warningThreshold) {
            const blinkRate = 10; // Blinks per second
            if (Math.floor(this.lifetime * blinkRate) % 2 === 0) {
                return; // Skip drawing this frame
            }
        }
        
        ctx.save();
        ctx.translate(this.x, this.y + this.bobOffset);
        
        // Draw glow
        ctx.shadowColor = this.config.color;
        ctx.shadowBlur = 15;
        
        // Draw crate body
        ctx.save();
        ctx.rotate(this.rotation);
        
        // Crate shape (rounded square)
        const s = this.size;
        ctx.beginPath();
        ctx.roundRect(-s/2, -s/2, s, s, 3);
        
        // Gradient fill
        const gradient = ctx.createLinearGradient(-s/2, -s/2, s/2, s/2);
        gradient.addColorStop(0, this.config.color);
        gradient.addColorStop(1, this.darkenColor(this.config.color, 0.6));
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Border
        ctx.strokeStyle = this.darkenColor(this.config.color, 0.4);
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Crate details - horizontal line
        ctx.beginPath();
        ctx.moveTo(-s/2 + 2, 0);
        ctx.lineTo(s/2 - 2, 0);
        ctx.strokeStyle = this.darkenColor(this.config.color, 0.5);
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Crate details - vertical line
        ctx.beginPath();
        ctx.moveTo(0, -s/2 + 2);
        ctx.lineTo(0, s/2 - 2);
        ctx.stroke();
        
        ctx.restore();
        
        // Draw symbol (not rotated)
        ctx.shadowBlur = 0;
        ctx.font = 'bold 12px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.config.symbol, 0, 0);
        
        ctx.restore();
    }
    
    darkenColor(hex, factor) {
        // Convert hex to RGB, darken, convert back
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        const dr = Math.floor(r * factor);
        const dg = Math.floor(g * factor);
        const db = Math.floor(b * factor);
        
        return `rgb(${dr}, ${dg}, ${db})`;
    }
}

/**
 * Check if a bonus should drop from asteroid and return bonus type or null
 */
export function shouldDropBonus(asteroidSizeType) {
    const dropChance = DROP_CHANCES[asteroidSizeType] || 0;
    
    if (Math.random() < dropChance) {
        // 50/50 between score and multishot
        return Math.random() < 0.5 ? 'SCORE' : 'MULTISHOT';
    }
    
    return null;
}

```

```javascript
// Particle system for explosions and effects

import { randomRange, randomFromArray } from './utils.js';

class Particle {
    constructor(x, y, color, size, speed, angle, lifetime) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.initialSize = size;
        this.lifetime = lifetime;
        this.maxLifetime = lifetime;
        
        this.velocityX = Math.cos(angle) * speed;
        this.velocityY = Math.sin(angle) * speed;
        this.friction = 0.98;
        
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        
        // Shrink over time
        const lifeRatio = this.lifetime / this.maxLifetime;
        this.size = this.initialSize * lifeRatio;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fill();
    }
}

/**
 * Floating text particle for bonus collection feedback
 */
class FloatingText {
    constructor(x, y, text, color) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.lifetime = 1.5;
        this.maxLifetime = 1.5;
        this.velocityY = -60; // Float upward
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.y += this.velocityY * deltaTime;
        // Slow down as it rises
        this.velocityY *= 0.98;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        const scale = 0.8 + lifeRatio * 0.4; // Start bigger, shrink slightly
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(scale, scale);
        
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Text with alpha
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fillText(this.text, 0, 0);
        
        // White outline for readability
        ctx.strokeStyle = `rgba(255, 255, 255, ${lifeRatio * 0.8})`;
        ctx.lineWidth = 1;
        ctx.strokeText(this.text, 0, 0);
        
        ctx.restore();
    }
}

export class ParticleSystem {
    constructor() {
        this.particles = [];
    }
    
    update(deltaTime) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update(deltaTime);
            if (this.particles[i].destroyed) {
                this.particles.splice(i, 1);
            }
        }
    }
    
    draw(ctx) {
        for (const particle of this.particles) {
            particle.draw(ctx);
        }
    }
    
    /**
     * Create explosion effect at position
     */
    createExplosion(x, y, color, count = 20, speed = 200, size = 5) {
        const colors = [
            'rgba(255, 200, 100, 1)',
            'rgba(255, 150, 50, 1)',
            'rgba(255, 100, 30, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 1.5);
            const lifetime = randomRange(0.3, 0.8);
            const particleColor = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create asteroid destruction effect
     */
    createAsteroidExplosion(x, y, radius, color) {
        const count = Math.floor(radius * 1.5);
        const speed = radius * 3;
        const size = radius * 0.15;
        
        // Rock debris
        const debrisColors = [
            'rgba(107, 112, 92, 1)',
            'rgba(139, 139, 115, 1)',
            'rgba(165, 165, 141, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 2);
            const lifetime = randomRange(0.5, 1.2);
            const particleColor = randomFromArray(debrisColors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
        
        // Spark particles
        for (let i = 0; i < count / 2; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.5, speed * 1.5);
            const particleSize = randomRange(2, 4);
            const lifetime = randomRange(0.2, 0.5);
            
            this.particles.push(new Particle(
                x, y, 'rgba(255, 220, 150, 1)', particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create ship damage effect
     */
    createDamageEffect(x, y) {
        const colors = [
            'rgba(255, 100, 100, 1)',
            'rgba(255, 150, 100, 1)',
            'rgba(255, 200, 150, 1)'
        ];
        
        for (let i = 0; i < 15; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const speed = randomRange(100, 250);
            const size = randomRange(3, 8);
            const lifetime = randomRange(0.3, 0.6);
            const color = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, color, size, speed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create thrust particles
     */
    createThrustParticle(x, y, angle) {
        const spread = randomRange(-0.3, 0.3);
        const speed = randomRange(50, 150);
        const size = randomRange(2, 5);
        const lifetime = randomRange(0.1, 0.3);
        const color = randomFromArray([
            'rgba(255, 150, 50, 1)',
            'rgba(255, 200, 100, 1)',
            'rgba(255, 100, 30, 1)'
        ]);
        
        this.particles.push(new Particle(
            x, y, color, size, speed, angle + Math.PI + spread, lifetime
        ));
    }
    
    clear() {
        this.particles = [];
    }
}


```

```javascript
// Particle system for explosions and effects

import { randomRange, randomFromArray } from './utils.js';

class Particle {
    constructor(x, y, color, size, speed, angle, lifetime) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.initialSize = size;
        this.lifetime = lifetime;
        this.maxLifetime = lifetime;
        
        this.velocityX = Math.cos(angle) * speed;
        this.velocityY = Math.sin(angle) * speed;
        this.friction = 0.98;
        
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        
        // Shrink over time
        const lifeRatio = this.lifetime / this.maxLifetime;
        this.size = this.initialSize * lifeRatio;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fill();
    }
}

/**
 * Floating text particle for bonus collection feedback
 */
class FloatingText {
    constructor(x, y, text, color) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.lifetime = 1.5;
        this.maxLifetime = 1.5;
        this.velocityY = -60; // Float upward
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.y += this.velocityY * deltaTime;
        // Slow down as it rises
        this.velocityY *= 0.98;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        const scale = 0.8 + lifeRatio * 0.4; // Start bigger, shrink slightly
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(scale, scale);
        
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Text with alpha
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fillText(this.text, 0, 0);
        
        // White outline for readability
        ctx.strokeStyle = `rgba(255, 255, 255, ${lifeRatio * 0.8})`;
        ctx.lineWidth = 1;
        ctx.strokeText(this.text, 0, 0);
        
        ctx.restore();
    }
}

export class ParticleSystem {
    constructor() {
        this.particles = [];
        this.floatingTexts = [];
    }
    
    update(deltaTime) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update(deltaTime);
            if (this.particles[i].destroyed) {
                this.particles.splice(i, 1);
            }
        }
        
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            this.floatingTexts[i].update(deltaTime);
            if (this.floatingTexts[i].destroyed) {
                this.floatingTexts.splice(i, 1);
            }
        }
    }
    
    draw(ctx) {
        for (const particle of this.particles) {
            particle.draw(ctx);
        }
        
        for (const text of this.floatingTexts) {
            text.draw(ctx);
        }
    }
    
    /**
     * Create explosion effect at position
     */
    createExplosion(x, y, color, count = 20, speed = 200, size = 5) {
        const colors = [
            'rgba(255, 200, 100, 1)',
            'rgba(255, 150, 50, 1)',
            'rgba(255, 100, 30, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 1.5);
            const lifetime = randomRange(0.3, 0.8);
            const particleColor = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create asteroid destruction effect
     */
    createAsteroidExplosion(x, y, radius, color) {
        const count = Math.floor(radius * 1.5);
        const speed = radius * 3;
        const size = radius * 0.15;
        
        // Rock debris
        const debrisColors = [
            'rgba(107, 112, 92, 1)',
            'rgba(139, 139, 115, 1)',
            'rgba(165, 165, 141, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 2);
            const lifetime = randomRange(0.5, 1.2);
            const particleColor = randomFromArray(debrisColors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
        
        // Spark particles
        for (let i = 0; i < count / 2; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.5, speed * 1.5);
            const particleSize = randomRange(2, 4);
            const lifetime = randomRange(0.2, 0.5);
            
            this.particles.push(new Particle(
                x, y, 'rgba(255, 220, 150, 1)', particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create ship damage effect
     */
    createDamageEffect(x, y) {
        const colors = [
            'rgba(255, 100, 100, 1)',
            'rgba(255, 150, 100, 1)',
            'rgba(255, 200, 150, 1)'
        ];
        
        for (let i = 0; i < 15; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const speed = randomRange(100, 250);
            const size = randomRange(3, 8);
            const lifetime = randomRange(0.3, 0.6);
            const color = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, color, size, speed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create thrust particles
     */
    createThrustParticle(x, y, angle) {
        const spread = randomRange(-0.3, 0.3);
        const speed = randomRange(50, 150);
        const size = randomRange(2, 5);
        const lifetime = randomRange(0.1, 0.3);
        const color = randomFromArray([
            'rgba(255, 150, 50, 1)',
            'rgba(255, 200, 100, 1)',
            'rgba(255, 100, 30, 1)'
        ]);
        
        this.particles.push(new Particle(
            x, y, color, size, speed, angle + Math.PI + spread, lifetime
        ));
    }
    
    clear() {
        this.particles = [];
    }
}


```

```javascript
// Particle system for explosions and effects

import { randomRange, randomFromArray } from './utils.js';

class Particle {
    constructor(x, y, color, size, speed, angle, lifetime) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.initialSize = size;
        this.lifetime = lifetime;
        this.maxLifetime = lifetime;
        
        this.velocityX = Math.cos(angle) * speed;
        this.velocityY = Math.sin(angle) * speed;
        this.friction = 0.98;
        
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        
        // Shrink over time
        const lifeRatio = this.lifetime / this.maxLifetime;
        this.size = this.initialSize * lifeRatio;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fill();
    }
}

/**
 * Floating text particle for bonus collection feedback
 */
class FloatingText {
    constructor(x, y, text, color) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.lifetime = 1.5;
        this.maxLifetime = 1.5;
        this.velocityY = -60; // Float upward
        this.destroyed = false;
    }
    
    update(deltaTime) {
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.destroyed = true;
            return;
        }
        
        this.y += this.velocityY * deltaTime;
        // Slow down as it rises
        this.velocityY *= 0.98;
    }
    
    draw(ctx) {
        const lifeRatio = this.lifetime / this.maxLifetime;
        const scale = 0.8 + lifeRatio * 0.4; // Start bigger, shrink slightly
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(scale, scale);
        
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Text with alpha
        ctx.fillStyle = this.color.replace('1)', `${lifeRatio})`);
        ctx.fillText(this.text, 0, 0);
        
        // White outline for readability
        ctx.strokeStyle = `rgba(255, 255, 255, ${lifeRatio * 0.8})`;
        ctx.lineWidth = 1;
        ctx.strokeText(this.text, 0, 0);
        
        ctx.restore();
    }
}

export class ParticleSystem {
    constructor() {
        this.particles = [];
        this.floatingTexts = [];
    }
    
    update(deltaTime) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update(deltaTime);
            if (this.particles[i].destroyed) {
                this.particles.splice(i, 1);
            }
        }
        
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            this.floatingTexts[i].update(deltaTime);
            if (this.floatingTexts[i].destroyed) {
                this.floatingTexts.splice(i, 1);
            }
        }
    }
    
    draw(ctx) {
        for (const particle of this.particles) {
            particle.draw(ctx);
        }
        
        for (const text of this.floatingTexts) {
            text.draw(ctx);
        }
    }
    
    /**
     * Create explosion effect at position
     */
    createExplosion(x, y, color, count = 20, speed = 200, size = 5) {
        const colors = [
            'rgba(255, 200, 100, 1)',
            'rgba(255, 150, 50, 1)',
            'rgba(255, 100, 30, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 1.5);
            const lifetime = randomRange(0.3, 0.8);
            const particleColor = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create asteroid destruction effect
     */
    createAsteroidExplosion(x, y, radius, color) {
        const count = Math.floor(radius * 1.5);
        const speed = radius * 3;
        const size = radius * 0.15;
        
        // Rock debris
        const debrisColors = [
            'rgba(107, 112, 92, 1)',
            'rgba(139, 139, 115, 1)',
            'rgba(165, 165, 141, 1)',
            color
        ];
        
        for (let i = 0; i < count; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.3, speed);
            const particleSize = randomRange(size * 0.5, size * 2);
            const lifetime = randomRange(0.5, 1.2);
            const particleColor = randomFromArray(debrisColors);
            
            this.particles.push(new Particle(
                x, y, particleColor, particleSize, particleSpeed, angle, lifetime
            ));
        }
        
        // Spark particles
        for (let i = 0; i < count / 2; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const particleSpeed = randomRange(speed * 0.5, speed * 1.5);
            const particleSize = randomRange(2, 4);
            const lifetime = randomRange(0.2, 0.5);
            
            this.particles.push(new Particle(
                x, y, 'rgba(255, 220, 150, 1)', particleSize, particleSpeed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create ship damage effect
     */
    createDamageEffect(x, y) {
        const colors = [
            'rgba(255, 100, 100, 1)',
            'rgba(255, 150, 100, 1)',
            'rgba(255, 200, 150, 1)'
        ];
        
        for (let i = 0; i < 15; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const speed = randomRange(100, 250);
            const size = randomRange(3, 8);
            const lifetime = randomRange(0.3, 0.6);
            const color = randomFromArray(colors);
            
            this.particles.push(new Particle(
                x, y, color, size, speed, angle, lifetime
            ));
        }
    }
    
    /**
     * Create thrust particles
     */
    createThrustParticle(x, y, angle) {
        const spread = randomRange(-0.3, 0.3);
        const speed = randomRange(50, 150);
        const size = randomRange(2, 5);
        const lifetime = randomRange(0.1, 0.3);
        const color = randomFromArray([
            'rgba(255, 150, 50, 1)',
            'rgba(255, 200, 100, 1)',
            'rgba(255, 100, 30, 1)'
        ]);
        
        this.particles.push(new Particle(
            x, y, color, size, speed, angle + Math.PI + spread, lifetime
        ));
    }
    
    clear() {
        this.particles = [];
        this.floatingTexts = [];
    }
    
    /**
     * Create bonus collection effect with flash, particles, and floating text
     */
    createBonusCollectionEffect(x, y, text, color) {
        // Floating text
        this.floatingTexts.push(new FloatingText(x, y, text, color));
        
        // Particle burst
        const burstCount = 10;
        for (let i = 0; i < burstCount; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const speed = randomRange(80, 150);
            const size = randomRange(3, 6);
            const lifetime = randomRange(0.3, 0.6);
            
            this.particles.push(new Particle(
                x, y, color, size, speed, angle, lifetime
            ));
        }
        
        // Bright flash particles (white/light colored)
        for (let i = 0; i < 5; i++) {
            const angle = randomRange(0, Math.PI * 2);
            const speed = randomRange(50, 100);
            const size = randomRange(4, 8);
            const lifetime = randomRange(0.15, 0.3);
            
            this.particles.push(new Particle(
                x, y, 'rgba(255, 255, 255, 1)', size, speed, angle, lifetime
            ));
        }
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.particles = new ParticleSystem();
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.particles.clear();
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.particles.clear();
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update bonuses
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            this.bonuses[i].update(deltaTime);
            if (this.bonuses[i].destroyed) {
                this.bonuses.splice(i, 1);
            }
        }
        
        // Update multi-shot timer
        if (this.multiShotTimer > 0) {
            this.multiShotTimer -= deltaTime;
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update bonuses
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            this.bonuses[i].update(deltaTime);
            if (this.bonuses[i].destroyed) {
                this.bonuses.splice(i, 1);
            }
        }
        
        // Update multi-shot timer
        if (this.multiShotTimer > 0) {
            this.multiShotTimer -= deltaTime;
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Check for bonus drop
                        const bonusType = shouldDropBonus(asteroid.sizeType);
                        if (bonusType) {
                            this.bonuses.push(new Bonus(asteroid.x, asteroid.y, bonusType));
                        }
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update bonuses
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            this.bonuses[i].update(deltaTime);
            if (this.bonuses[i].destroyed) {
                this.bonuses.splice(i, 1);
            }
        }
        
        // Update multi-shot timer
        if (this.multiShotTimer > 0) {
            this.multiShotTimer -= deltaTime;
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Check for bonus drop
                        const bonusType = shouldDropBonus(asteroid.sizeType);
                        if (bonusType) {
                            this.bonuses.push(new Bonus(asteroid.x, asteroid.y, bonusType));
                        }
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
        
        // Ship vs Bonus - collection
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            const bonus = this.bonuses[i];
            if (circleCollision(
                this.ship.x, this.ship.y, this.ship.radius,
                bonus.x, bonus.y, bonus.radius
            )) {
                // Apply bonus effect
                this.collectBonus(bonus);
                
                // Remove collected bonus
                this.bonuses.splice(i, 1);
            }
        }
    }
    
    collectBonus(bonus) {
        const config = bonus.config;
        
        if (bonus.type === 'SCORE') {
            // Add score
            this.score += bonus.scoreValue;
            
            // Create collection effect with score text
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                `+${bonus.scoreValue}`,
                `rgba(247, 195, 49, 1)` // Gold
            );
        } else if (bonus.type === 'MULTISHOT') {
            // Add to multi-shot timer (stacking)
            const wasActive = this.multiShotTimer > 0;
            this.multiShotTimer += 5; // Add 5 seconds
            
            // Create collection effect
            const text = wasActive ? '+5s' : 'TRIPLE SHOT!';
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                text,
                `rgba(78, 205, 196, 1)` // Cyan
            );
        }
        
        // Small screen shake for feedback
        this.addScreenShake(3, 0.1);
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update bonuses
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            this.bonuses[i].update(deltaTime);
            if (this.bonuses[i].destroyed) {
                this.bonuses.splice(i, 1);
            }
        }
        
        // Update multi-shot timer
        if (this.multiShotTimer > 0) {
            this.multiShotTimer -= deltaTime;
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Check for bonus drop
                        const bonusType = shouldDropBonus(asteroid.sizeType);
                        if (bonusType) {
                            this.bonuses.push(new Bonus(asteroid.x, asteroid.y, bonusType));
                        }
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
        
        // Ship vs Bonus - collection
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            const bonus = this.bonuses[i];
            if (circleCollision(
                this.ship.x, this.ship.y, this.ship.radius,
                bonus.x, bonus.y, bonus.radius
            )) {
                // Apply bonus effect
                this.collectBonus(bonus);
                
                // Remove collected bonus
                this.bonuses.splice(i, 1);
            }
        }
    }
    
    collectBonus(bonus) {
        const config = bonus.config;
        
        if (bonus.type === 'SCORE') {
            // Add score
            this.score += bonus.scoreValue;
            
            // Create collection effect with score text
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                `+${bonus.scoreValue}`,
                `rgba(247, 195, 49, 1)` // Gold
            );
        } else if (bonus.type === 'MULTISHOT') {
            // Add to multi-shot timer (stacking)
            const wasActive = this.multiShotTimer > 0;
            this.multiShotTimer += 5; // Add 5 seconds
            
            // Create collection effect
            const text = wasActive ? '+5s' : 'TRIPLE SHOT!';
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                text,
                `rgba(78, 205, 196, 1)` // Cyan
            );
        }
        
        // Small screen shake for feedback
        this.addScreenShake(3, 0.1);
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw bonuses
            for (const bonus of this.bonuses) {
                bonus.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
import { Bonus, BONUS_TYPES, shouldDropBonus } from './bonus.js';
import { circleCollision, toRadians } from './utils.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Game objects
        this.ship = null;
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles = new ParticleSystem();
        
        // Multi-shot power-up timer
        this.multiShotTimer = 0;
        
        // Input handling
        this.keys = {};
        this.setupInput();
        
        // Game state
        this.score = 0;
        this.wave = 0;
        this.gameState = 'title'; // 'title', 'playing', 'waveComplete', 'gameOver'
        this.waveTimer = 0;
        this.wavePauseDuration = 2;
        
        // Shooting
        this.fireRate = 8; // shots per second
        this.fireCooldown = 0;
        
        // Screen shake
        this.shakeAmount = 0;
        this.shakeDuration = 0;
        
        // Timing
        this.lastTime = 0;
        
        // Start game loop
        this.gameLoop = this.gameLoop.bind(this);
        requestAnimationFrame(this.gameLoop);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupInput() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Start game on space from title
            if (e.code === 'Space' && this.gameState === 'title') {
                this.startGame();
            }
            
            // Restart on space from game over
            if (e.code === 'Space' && this.gameState === 'gameOver') {
                this.startGame();
            }
            
            // Prevent scrolling
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        this.score = 0;
        this.wave = 0;
        this.ship = new Ship(this.canvas.width / 2, this.canvas.height / 2);
        this.asteroids = [];
        this.projectiles = [];
        this.bonuses = [];
        this.particles.clear();
        this.multiShotTimer = 0;
        this.gameState = 'playing';
        this.startNextWave();
    }
    
    startNextWave() {
        this.wave++;
        this.asteroids = [];
        
        // Calculate asteroid count and types for this wave
        const baseCount = 2 + this.wave;
        
        // Spawn asteroids at edges
        for (let i = 0; i < baseCount; i++) {
            let sizeType = 'LARGE';
            
            // X-Large asteroids appear from wave 3+
            if (this.wave >= 3 && Math.random() < 0.3) {
                sizeType = 'XLARGE';
            }
            
            this.asteroids.push(createRandomAsteroid(
                this.canvas.width,
                this.canvas.height,
                sizeType
            ));
        }
        
        this.gameState = 'playing';
    }
    
    shoot() {
        if (this.fireCooldown > 0) return;
        
        // Spawn projectile at ship's nose
        const radians = toRadians(this.ship.angle);
        const noseX = this.ship.x + Math.cos(radians) * this.ship.radius;
        const noseY = this.ship.y + Math.sin(radians) * this.ship.radius;
        
        if (this.multiShotTimer > 0) {
            // Triple shot: forward + 30° left + 30° right
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle - 30));
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle + 30));
        } else {
            // Normal single shot
            this.projectiles.push(new Projectile(noseX, noseY, this.ship.angle));
        }
        
        this.fireCooldown = 1 / this.fireRate;
    }
    
    addScreenShake(amount, duration) {
        this.shakeAmount = Math.max(this.shakeAmount, amount);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }
    
    update(deltaTime) {
        if (this.gameState === 'title' || this.gameState === 'gameOver') {
            this.particles.update(deltaTime);
            return;
        }
        
        if (this.gameState === 'waveComplete') {
            this.waveTimer -= deltaTime;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
            this.particles.update(deltaTime);
            return;
        }
        
        // Update ship
        this.ship.update(deltaTime, this.keys, this.canvas.width, this.canvas.height);
        
        // Create thrust particles
        if (this.ship.isThrusting && Math.random() < 0.5) {
            const radians = toRadians(this.ship.angle);
            const thrustX = this.ship.x - Math.cos(radians) * 15;
            const thrustY = this.ship.y - Math.sin(radians) * 15;
            this.particles.createThrustParticle(thrustX, thrustY, radians);
        }
        
        // Shooting (hold space for rapid fire)
        if (this.keys['Space']) {
            this.shoot();
        }
        this.fireCooldown = Math.max(0, this.fireCooldown - deltaTime);
        
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].update(deltaTime, this.canvas.width, this.canvas.height);
            if (this.projectiles[i].destroyed) {
                this.projectiles.splice(i, 1);
            }
        }
        
        // Update asteroids
        for (const asteroid of this.asteroids) {
            asteroid.update(deltaTime, this.canvas.width, this.canvas.height);
        }
        
        // Update bonuses
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            this.bonuses[i].update(deltaTime);
            if (this.bonuses[i].destroyed) {
                this.bonuses.splice(i, 1);
            }
        }
        
        // Update multi-shot timer
        if (this.multiShotTimer > 0) {
            this.multiShotTimer -= deltaTime;
        }
        
        // Update particles
        this.particles.update(deltaTime);
        
        // Update screen shake
        if (this.shakeDuration > 0) {
            this.shakeDuration -= deltaTime;
            if (this.shakeDuration <= 0) {
                this.shakeAmount = 0;
            }
        }
        
        // Check collisions
        this.checkCollisions();
        
        // Check for wave complete
        if (this.asteroids.length === 0 && this.gameState === 'playing') {
            this.gameState = 'waveComplete';
            this.waveTimer = this.wavePauseDuration;
            // Wave bonus
            this.score += this.wave * 50;
        }
        
        // Check for game over
        if (this.ship.health <= 0) {
            this.gameState = 'gameOver';
            this.particles.createExplosion(
                this.ship.x, this.ship.y,
                'rgba(78, 205, 196, 1)',
                50, 300, 8
            );
            this.addScreenShake(15, 0.5);
        }
    }
    
    checkCollisions() {
        // Projectile vs Asteroid
        for (let p = this.projectiles.length - 1; p >= 0; p--) {
            const projectile = this.projectiles[p];
            
            for (let a = this.asteroids.length - 1; a >= 0; a--) {
                const asteroid = this.asteroids[a];
                
                if (circleCollision(
                    projectile.x, projectile.y, projectile.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    // Hit asteroid
                    projectile.destroyed = true;
                    
                    // Small hit effect
                    this.particles.createExplosion(
                        projectile.x, projectile.y,
                        asteroid.color.fill,
                        5, 100, 3
                    );
                    
                    if (asteroid.hit()) {
                        // Asteroid destroyed
                        this.score += asteroid.config.points;
                        
                        // Create explosion
                        this.particles.createAsteroidExplosion(
                            asteroid.x, asteroid.y,
                            asteroid.radius,
                            `rgba(${parseInt(asteroid.color.fill.slice(1, 3), 16)}, ${parseInt(asteroid.color.fill.slice(3, 5), 16)}, ${parseInt(asteroid.color.fill.slice(5, 7), 16)}, 1)`
                        );
                        
                        // Screen shake based on size
                        this.addScreenShake(asteroid.radius * 0.1, 0.2);
                        
                        // Check for bonus drop
                        const bonusType = shouldDropBonus(asteroid.sizeType);
                        if (bonusType) {
                            this.bonuses.push(new Bonus(asteroid.x, asteroid.y, bonusType));
                        }
                        
                        // Spawn fragments
                        const fragments = asteroid.getFragments();
                        this.asteroids.push(...fragments);
                        
                        // Remove destroyed asteroid
                        this.asteroids.splice(a, 1);
                    }
                    
                    break;
                }
            }
        }
        
        // Clean up destroyed projectiles
        this.projectiles = this.projectiles.filter(p => !p.destroyed);
        
        // Ship vs Asteroid - use full radii for accurate collision
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius,
                    asteroid.x, asteroid.y, asteroid.radius
                )) {
                    if (this.ship.takeDamage(asteroid.config.damage)) {
                        this.particles.createDamageEffect(this.ship.x, this.ship.y);
                        this.addScreenShake(10, 0.3);
                    }
                    break;
                }
            }
        }
        
        // Ship vs Bonus - collection
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            const bonus = this.bonuses[i];
            if (circleCollision(
                this.ship.x, this.ship.y, this.ship.radius,
                bonus.x, bonus.y, bonus.radius
            )) {
                // Apply bonus effect
                this.collectBonus(bonus);
                
                // Remove collected bonus
                this.bonuses.splice(i, 1);
            }
        }
    }
    
    collectBonus(bonus) {
        const config = bonus.config;
        
        if (bonus.type === 'SCORE') {
            // Add score
            this.score += bonus.scoreValue;
            
            // Create collection effect with score text
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                `+${bonus.scoreValue}`,
                `rgba(247, 195, 49, 1)` // Gold
            );
        } else if (bonus.type === 'MULTISHOT') {
            // Add to multi-shot timer (stacking)
            const wasActive = this.multiShotTimer > 0;
            this.multiShotTimer += 5; // Add 5 seconds
            
            // Create collection effect
            const text = wasActive ? '+5s' : 'TRIPLE SHOT!';
            this.particles.createBonusCollectionEffect(
                bonus.x, bonus.y,
                text,
                `rgba(78, 205, 196, 1)` // Cyan
            );
        }
        
        // Small screen shake for feedback
        this.addScreenShake(3, 0.1);
    }
    
    draw() {
        const ctx = this.ctx;
        
        // Apply screen shake
        ctx.save();
        if (this.shakeAmount > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
            const shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
            ctx.translate(shakeX, shakeY);
        }
        
        // Clear and draw background
        this.drawBackground();
        
        // Draw game objects
        if (this.gameState !== 'title') {
            // Draw particles (behind everything)
            this.particles.draw(ctx);
            
            // Draw projectiles
            for (const projectile of this.projectiles) {
                projectile.draw(ctx);
            }
            
            // Draw asteroids
            for (const asteroid of this.asteroids) {
                asteroid.draw(ctx);
            }
            
            // Draw bonuses
            for (const bonus of this.bonuses) {
                bonus.draw(ctx);
            }
            
            // Draw ship
            if (this.gameState !== 'gameOver') {
                this.ship.draw(ctx);
            }
        }
        
        ctx.restore();
        
        // Draw UI (not affected by shake)
        this.drawUI();
    }
    
    drawBackground() {
        const ctx = this.ctx;
        
        // Deep space gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0f1629');
        gradient.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Stars (static, based on canvas size)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const starSeed = 12345;
        const starCount = Math.floor(this.canvas.width * this.canvas.height / 5000);
        for (let i = 0; i < starCount; i++) {
            const x = ((starSeed * (i + 1) * 9301 + 49297) % 233280) / 233280 * this.canvas.width;
            const y = ((starSeed * (i + 1) * 7927 + 15485) % 174720) / 174720 * this.canvas.height;
            const size = ((starSeed * (i + 1) * 3571 + 8837) % 10000) / 10000 * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arena border
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, this.canvas.width - 20, this.canvas.height - 20);
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        if (this.gameState === 'title') {
            this.drawTitleScreen();
            return;
        }
        
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
        
        if (this.gameState === 'waveComplete') {
            this.drawWaveCompleteMessage();
        }
        
        // HUD
        const padding = 30;
        
        // Health bar
        const healthBarWidth = 200;
        const healthBarHeight = 20;
        const healthPercent = this.ship.health / this.ship.maxHealth;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(padding - 2, padding - 2, healthBarWidth + 4, healthBarHeight + 4);
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health color gradient based on amount
        let healthColor;
        if (healthPercent > 0.6) {
            healthColor = '#4ecdc4';
        } else if (healthPercent > 0.3) {
            healthColor = '#f7c331';
        } else {
            healthColor = '#ff6b6b';
        }
        
        ctx.fillStyle = healthColor;
        ctx.fillRect(padding, padding, healthBarWidth * healthPercent, healthBarHeight);
        
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.strokeRect(padding, padding, healthBarWidth, healthBarHeight);
        
        // Health text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(this.ship.health)} HP`, padding + healthBarWidth / 2, padding + 15);
        
        // Score
        ctx.textAlign = 'right';
        ctx.font = 'bold 28px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`${this.score}`, this.canvas.width - padding, padding + 25);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText('SCORE', this.canvas.width - padding, padding + 45);
        
        // Wave
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave}`, this.canvas.width / 2, padding + 20);
        
        // Multi-shot timer (if active)
        if (this.multiShotTimer > 0) {
            const barWidth = 120;
            const barHeight = 8;
            const barX = padding;
            const barY = padding + healthBarHeight + 15;
            
            // Label
            ctx.textAlign = 'left';
            ctx.font = 'bold 12px "Segoe UI", sans-serif';
            ctx.fillStyle = '#4ecdc4';
            ctx.fillText('TRIPLE SHOT', barX, barY - 3);
            
            // Background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(barX - 1, barY + 2, barWidth + 2, barHeight + 2);
            
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(barX, barY + 3, barWidth, barHeight);
            
            // Timer bar (max 10 seconds displayed)
            const timerPercent = Math.min(this.multiShotTimer / 10, 1);
            ctx.fillStyle = '#4ecdc4';
            ctx.fillRect(barX, barY + 3, barWidth * timerPercent, barHeight);
            
            // Border
            ctx.strokeStyle = '#4ecdc4';
            ctx.lineWidth = 1;
            ctx.strokeRect(barX, barY + 3, barWidth, barHeight);
            
            // Time remaining text
            ctx.textAlign = 'right';
            ctx.font = '10px "Segoe UI", sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText(`${this.multiShotTimer.toFixed(1)}s`, barX + barWidth, barY - 3);
        }
    }
    
    drawTitleScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Title
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Segoe UI", sans-serif';
        
        // Glow effect
        ctx.shadowColor = '#4ecdc4';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText('ASTEROIDS', centerX, centerY - 50);
        ctx.shadowBlur = 0;
        
        // Subtitle
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Modern Edition', centerX, centerY);
        
        // Instructions
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to start', centerX, centerY + 80);
        
        // Controls
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText('A/D or ←/→ to rotate  •  W or ↑ to thrust  •  SPACE to shoot', centerX, centerY + 150);
    }
    
    drawGameOverScreen() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Game Over text
        ctx.textAlign = 'center';
        ctx.font = 'bold 64px "Segoe UI", sans-serif';
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff6b6b';
        ctx.fillText('GAME OVER', centerX, centerY - 40);
        ctx.shadowBlur = 0;
        
        // Final score
        ctx.font = 'bold 32px "Segoe UI", sans-serif';
        ctx.fillStyle = '#4ecdc4';
        ctx.fillText(`Final Score: ${this.score}`, centerX, centerY + 20);
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`Wave Reached: ${this.wave}`, centerX, centerY + 60);
        
        // Restart prompt
        ctx.font = '18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText('Press SPACE to play again', centerX, centerY + 120);
    }
    
    drawWaveCompleteMessage() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px "Segoe UI", sans-serif';
        ctx.shadowColor = '#f7c331';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#f7c331';
        ctx.fillText(`WAVE ${this.wave} COMPLETE!`, centerX, centerY);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`Wave Bonus: +${this.wave * 50}`, centerX, centerY + 40);
    }
    
    gameLoop(timestamp) {
        // Calculate delta time
        const deltaTime = Math.min((timestamp - this.lastTime) / 1000, 0.1);
        this.lastTime = timestamp;
        
        // Update and draw
        this.update(deltaTime);
        this.draw();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
}


```

```markdown
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


```

Let me test the game in the browser to verify everything works:

A server is already running. Let me test the game:

