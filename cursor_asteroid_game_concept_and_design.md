# Asteroid game concept and design
_Exported on 12/28/2025 at 17:32:21 GMT+2 from Cursor (2.2.43)_

---

**User**

lets create an astriod game that 
1. we control ship in the center of the screen. 
2. around it is a field of striods who move in different directions
3. the ship can shot the astriods and break them up or blow them
4. bigger striods break to smaller once, until they disappear


first create a design log markdown file in a design log folder.
expain in short what we are planning to build.
ask questions for anything that is not clear.

---

**Cursor**

I'll create a design log folder and document our asteroid game plan, along with some clarifying questions.

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Planning Phase

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift)
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement)

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously)
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more)
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits)

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients)
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀

```

I've created the design log at `design-log/001-initial-design.md`. 

## What We're Building 🎮

A **classic Asteroid shooter game** where:
- You control a **spaceship** in the center of the screen
- **Asteroids** of various sizes drift around in random directions
- You **shoot** to destroy them
- **Big asteroids fragment** into smaller ones → medium → small → gone

---

## Questions Before We Start

I need your input on a few things:

### 1. Ship Movement Style?
- **(A)** Classic physics — rotate & thrust with momentum/drift
- **(B)** Direct movement — WASD moves in that direction, no drift
- **(C)** Ship stays centered, only rotates to aim

### 2. Screen Edges?
- **(A)** Wrap-around (exit left, appear right)
- **(B)** Walled arena

### 3. Shooting?
- **(A)** One bullet at a time
- **(B)** Rapid fire
- **(C)** Limited ammo that regens

### 4. Game Mode?
- **(A)** Waves/levels
- **(B)** Endless
- **(C)** Both

### 5. Lives or Health Bar?
- **(A)** 3 lives, die on contact
- **(B)** Health bar, multiple hits

### 6. Visual Style?
- **(A)** Retro vector/wireframe (glowing lines)
- **(B)** Pixel art
- **(C)** Modern minimalist
- **(D)** Surprise me

### 7. Platform?
- **(A)** Web browser (HTML5 Canvas + JS) — recommended for quick play
- **(B)** Something else?

Let me know your choices and we'll get building! 🚀

---

**User**

1. A
2. B
3. B
4. A
5. B
6. C
7. A

add the answers, do not replace the questions, and complete the design

---

**Cursor**

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift)
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement)

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously)
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more)
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits)

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients)
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀


```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously)
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more)
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits)

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients)
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀


```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more)
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits)

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients)
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀


```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients)
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀


```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Next Steps

Once you answer these questions, I'll:
1. Finalize the game design document
2. Set up the project structure
3. Begin implementation

Let me know your preferences! 🚀


```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

```

Done! I've updated the design document with your choices and completed the full specification. Here's a summary:

---

## Your Asteroid Game Design ✅

### Selections Made:
| Question | Your Choice |
|----------|-------------|
| Movement | Classic rotate + thrust with momentum |
| Boundaries | Walled arena (no wrap-around) |
| Shooting | Rapid fire |
| Progression | Wave-based levels |
| Health | Health bar system |
| Visuals | Modern minimalist |
| Platform | Web (HTML5 Canvas + JS) |

### Key Design Highlights:

**Ship:** Rotates and thrusts with physics-based drift, bounces off walls, has a health bar (100 HP)

**Asteroids:** 
- Large → 2 Medium → 2 Small → Gone
- Bounce off arena walls
- Different speeds and damage per size

**Combat:** Hold space for rapid fire (~8 shots/sec)

**Progression:** Start with 4 large asteroids, each wave adds more

**Visuals:** Clean geometric shapes, deep space gradient background, subtle particle effects

---

The full design doc is at `design-log/001-initial-design.md`.

**Ready to start building?** Just say the word and I'll begin implementation! 🚀

---

**User**

I have added another astriod size.

---

**Cursor**

Nice addition! I'll update the related sections to include the X-Large asteroid:

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **X-Large asteroids** → break into large asteroids
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| X-Large | 100px | Slow | 5 hits | 200 | 2 Large |
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **X-Large asteroids** → break into large asteroids
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| X-Large | 100px | Slow | 5 hits | 200 | 2 Large |
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -35 HP (x-large), -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **X-Large asteroids** → break into large asteroids
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| X-Large | 100px | Slow | 5 hits | 200 | 2 Large |
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Wave 3+: X-Large asteroids start appearing
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -35 HP (x-large), -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

```

Got it! I've updated all related sections to include **X-Large asteroids**:

### Changes Made:

1. **Core Mechanics** — Added X-Large → 2 Large fragmentation chain

2. **Health & Damage** — Added collision damage:
   - X-Large: **-35 HP**
   - Large: -25 HP
   - Medium: -15 HP  
   - Small: -10 HP

3. **Wave System** — X-Large asteroids start appearing from **Wave 3+**

The full fragmentation chain is now:
> **X-Large** → 2 Large → 4 Medium → 8 Small → 💥 Gone

Those big boys will take 5 hits and spawn a lot of debris — should make later waves pretty intense! Ready to start coding? 🎮

---

**User**

lets create the game!

---

**Cursor**

Let's build it! I'll create the game structure and implement all the components.

```javascript
// Utility functions for the Asteroid Game

/**
 * Generate a random number between min and max (inclusive)
 */
export function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Generate a random integer between min and max (inclusive)
 */
export function randomInt(min, max) {
    return Math.floor(randomRange(min, max + 1));
}

/**
 * Calculate distance between two points
 */
export function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Check if two circles are colliding
 */
export function circleCollision(x1, y1, r1, x2, y2, r2) {
    return distance(x1, y1, x2, y2) < r1 + r2;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Convert degrees to radians
 */
export function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees
 */
export function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * Generate random vertices for an asteroid shape
 */
export function generateAsteroidVertices(radius, vertexCount = 10) {
    const vertices = [];
    const angleStep = (Math.PI * 2) / vertexCount;
    
    for (let i = 0; i < vertexCount; i++) {
        const angle = i * angleStep;
        const variance = randomRange(0.7, 1.3);
        const r = radius * variance;
        vertices.push({
            x: Math.cos(angle) * r,
            y: Math.sin(angle) * r
        });
    }
    
    return vertices;
}

/**
 * Lerp (linear interpolation) between two values
 */
export function lerp(start, end, t) {
    return start + (end - start) * t;
}

/**
 * Generate a random color from a palette
 */
export function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

```

```javascript
// Ship class for the player's spacecraft

import { clamp, toRadians } from './utils.js';

export class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.angle = -90; // Pointing up initially (in degrees)
        this.radius = 20;
        
        // Movement constants
        this.rotationSpeed = 250; // degrees per second
        this.thrustPower = 300;
        this.friction = 0.98;
        this.maxSpeed = 400;
        
        // Health
        this.maxHealth = 100;
        this.health = this.maxHealth;
        
        // State
        this.isThrusting = false;
        this.invulnerable = false;
        this.invulnerableTimer = 0;
        this.invulnerableDuration = 2; // seconds
        
        // Visual
        this.thrustFlicker = 0;
    }
    
    update(deltaTime, keys, canvasWidth, canvasHeight) {
        // Rotation
        if (keys['ArrowLeft'] || keys['KeyA']) {
            this.angle -= this.rotationSpeed * deltaTime;
        }
        if (keys['ArrowRight'] || keys['KeyD']) {
            this.angle += this.rotationSpeed * deltaTime;
        }
        
        // Thrust
        this.isThrusting = keys['ArrowUp'] || keys['KeyW'];
        if (this.isThrusting) {
            const radians = toRadians(this.angle);
            this.velocityX += Math.cos(radians) * this.thrustPower * deltaTime;
            this.velocityY += Math.sin(radians) * this.thrustPower * deltaTime;
        }
        
        // Apply friction
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        
        // Clamp speed
        const speed = Math.sqrt(this.velocityX ** 2 + this.velocityY ** 2);
        if (speed > this.maxSpeed) {
            const ratio = this.maxSpeed / speed;
            this.velocityX *= ratio;
            this.velocityY *= ratio;
        }
        
        // Update position
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        // Boundary collision (walled arena)
        const margin = this.radius;
        if (this.x < margin) {
            this.x = margin;
            this.velocityX *= -0.5;
        }
        if (this.x > canvasWidth - margin) {
            this.x = canvasWidth - margin;
            this.velocityX *= -0.5;
        }
        if (this.y < margin) {
            this.y = margin;
            this.velocityY *= -0.5;
        }
        if (this.y > canvasHeight - margin) {
            this.y = canvasHeight - margin;
            this.velocityY *= -0.5;
        }
        
        // Invulnerability timer
        if (this.invulnerable) {
            this.invulnerableTimer -= deltaTime;
            if (this.invulnerableTimer <= 0) {
                this.invulnerable = false;
            }
        }
        
        // Thrust flicker animation
        this.thrustFlicker += deltaTime * 20;
    }
    
    takeDamage(amount) {
        if (this.invulnerable) return false;
        
        this.health -= amount;
        this.invulnerable = true;
        this.invulnerableTimer = this.invulnerableDuration;
        
        return true;
    }
    
    reset(x, y) {
        this.x = x;
        this.y = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.angle = -90;
        this.health = this.maxHealth;
        this.invulnerable = false;
        this.invulnerableTimer = 0;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(toRadians(this.angle + 90)); // Adjust so 0 degrees is up
        
        // Flicker when invulnerable
        if (this.invulnerable && Math.floor(this.invulnerableTimer * 10) % 2 === 0) {
            ctx.globalAlpha = 0.3;
        }
        
        // Draw thrust flame
        if (this.isThrusting) {
            const flicker = Math.sin(this.thrustFlicker) * 0.3 + 0.7;
            const flameLength = 15 + Math.sin(this.thrustFlicker * 2) * 8;
            
            ctx.beginPath();
            ctx.moveTo(-8, 12);
            ctx.lineTo(0, 12 + flameLength * flicker);
            ctx.lineTo(8, 12);
            ctx.closePath();
            
            const gradient = ctx.createLinearGradient(0, 12, 0, 12 + flameLength);
            gradient.addColorStop(0, '#ff6b35');
            gradient.addColorStop(0.5, '#f7c331');
            gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        // Ship body - modern minimalist triangle
        ctx.beginPath();
        ctx.moveTo(0, -this.radius);      // Nose
        ctx.lineTo(-15, this.radius - 5); // Left wing
        ctx.lineTo(-5, 10);               // Left indent
        ctx.lineTo(5, 10);                // Right indent
        ctx.lineTo(15, this.radius - 5);  // Right wing
        ctx.closePath();
        
        // Gradient fill
        const bodyGradient = ctx.createLinearGradient(0, -this.radius, 0, this.radius);
        bodyGradient.addColorStop(0, '#4ecdc4');
        bodyGradient.addColorStop(1, '#2a9d8f');
        ctx.fillStyle = bodyGradient;
        ctx.fill();
        
        // Outline
        ctx.strokeStyle = '#1a535c';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Cockpit
        ctx.beginPath();
        ctx.arc(0, -5, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#e9f5f5';
        ctx.fill();
        ctx.strokeStyle = '#1a535c';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
    }
}

```

```javascript
// Asteroid class with fragmentation system

import { randomRange, generateAsteroidVertices, randomFromArray } from './utils.js';

// Asteroid size configurations
export const ASTEROID_SIZES = {
    XLARGE: {
        name: 'xlarge',
        radius: 100,
        minSpeed: 30,
        maxSpeed: 60,
        hp: 5,
        points: 200,
        damage: 35,
        spawns: 'LARGE',
        spawnCount: 2
    },
    LARGE: {
        name: 'large',
        radius: 50,
        minSpeed: 40,
        maxSpeed: 80,
        hp: 3,
        points: 100,
        damage: 25,
        spawns: 'MEDIUM',
        spawnCount: 2
    },
    MEDIUM: {
        name: 'medium',
        radius: 30,
        minSpeed: 60,
        maxSpeed: 120,
        hp: 2,
        points: 50,
        damage: 15,
        spawns: 'SMALL',
        spawnCount: 2
    },
    SMALL: {
        name: 'small',
        radius: 15,
        minSpeed: 80,
        maxSpeed: 150,
        hp: 1,
        points: 25,
        damage: 10,
        spawns: null,
        spawnCount: 0
    }
};

// Color palette for asteroids (muted earth tones)
const ASTEROID_COLORS = [
    { fill: '#6b705c', stroke: '#3a3f35' },
    { fill: '#a5a58d', stroke: '#6b6b54' },
    { fill: '#8b8b73', stroke: '#5a5a4a' },
    { fill: '#7f7f6a', stroke: '#4f4f42' },
    { fill: '#9a8c73', stroke: '#6a5c43' }
];

export class Asteroid {
    constructor(x, y, sizeType, inheritedVelocity = null) {
        this.x = x;
        this.y = y;
        this.sizeType = sizeType;
        this.config = ASTEROID_SIZES[sizeType];
        this.radius = this.config.radius;
        this.hp = this.config.hp;
        
        // Generate random velocity
        const speed = randomRange(this.config.minSpeed, this.config.maxSpeed);
        const angle = randomRange(0, Math.PI * 2);
        
        if (inheritedVelocity) {
            // Inherit some velocity from parent + random offset
            this.velocityX = inheritedVelocity.x * 0.5 + Math.cos(angle) * speed;
            this.velocityY = inheritedVelocity.y * 0.5 + Math.sin(angle) * speed;
        } else {
            this.velocityX = Math.cos(angle) * speed;
            this.velocityY = Math.sin(angle) * speed;
        }
        
        // Rotation
        this.rotation = randomRange(0, Math.PI * 2);
        this.rotationSpeed = randomRange(-2, 2);
        
        // Generate unique shape
        const vertexCount = Math.floor(randomRange(8, 12));
        this.vertices = generateAsteroidVertices(this.radius, vertexCount);
        
        // Random color from palette
        this.color = randomFromArray(ASTEROID_COLORS);
        
        // State
        this.destroyed = false;
    }
    
    update(deltaTime, canvasWidth, canvasHeight) {
        // Update position
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        // Update rotation
        this.rotation += this.rotationSpeed * deltaTime;
        
        // Bounce off walls
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.velocityX *= -1;
        }
        if (this.x + this.radius > canvasWidth) {
            this.x = canvasWidth - this.radius;
            this.velocityX *= -1;
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.velocityY *= -1;
        }
        if (this.y + this.radius > canvasHeight) {
            this.y = canvasHeight - this.radius;
            this.velocityY *= -1;
        }
    }
    
    hit() {
        this.hp--;
        if (this.hp <= 0) {
            this.destroyed = true;
            return true;
        }
        return false;
    }
    
    getFragments() {
        if (!this.config.spawns) return [];
        
        const fragments = [];
        const spawnType = this.config.spawns;
        
        for (let i = 0; i < this.config.spawnCount; i++) {
            // Offset spawn position slightly
            const offsetAngle = randomRange(0, Math.PI * 2);
            const offsetDist = this.radius * 0.3;
            const newX = this.x + Math.cos(offsetAngle) * offsetDist;
            const newY = this.y + Math.sin(offsetAngle) * offsetDist;
            
            fragments.push(new Asteroid(newX, newY, spawnType, {
                x: this.velocityX,
                y: this.velocityY
            }));
        }
        
        return fragments;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw shadow
        ctx.beginPath();
        ctx.moveTo(this.vertices[0].x + 4, this.vertices[0].y + 4);
        for (let i = 1; i < this.vertices.length; i++) {
            ctx.lineTo(this.vertices[i].x + 4, this.vertices[i].y + 4);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
        
        // Draw asteroid body
        ctx.beginPath();
        ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
        for (let i = 1; i < this.vertices.length; i++) {
            ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
        }
        ctx.closePath();
        
        // Gradient fill for depth
        const gradient = ctx.createRadialGradient(
            -this.radius * 0.3, -this.radius * 0.3, 0,
            0, 0, this.radius
        );
        gradient.addColorStop(0, this.color.fill);
        gradient.addColorStop(1, this.color.stroke);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Outline
        ctx.strokeStyle = this.color.stroke;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Hit indicator (flash white when damaged)
        if (this.hp < this.config.hp) {
            ctx.beginPath();
            ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
            for (let i = 1; i < this.vertices.length; i++) {
                ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
            }
            ctx.closePath();
            ctx.fillStyle = `rgba(255, 255, 255, ${0.1 * (this.config.hp - this.hp)})`;
            ctx.fill();
        }
        
        ctx.restore();
    }
}

/**
 * Create an asteroid at a random edge position
 */
export function createRandomAsteroid(canvasWidth, canvasHeight, sizeType) {
    const side = Math.floor(Math.random() * 4);
    const config = ASTEROID_SIZES[sizeType];
    let x, y;
    
    switch (side) {
        case 0: // Top
            x = randomRange(config.radius, canvasWidth - config.radius);
            y = config.radius;
            break;
        case 1: // Right
            x = canvasWidth - config.radius;
            y = randomRange(config.radius, canvasHeight - config.radius);
            break;
        case 2: // Bottom
            x = randomRange(config.radius, canvasWidth - config.radius);
            y = canvasHeight - config.radius;
            break;
        case 3: // Left
            x = config.radius;
            y = randomRange(config.radius, canvasHeight - config.radius);
            break;
    }
    
    return new Asteroid(x, y, sizeType);
}

```

```javascript
// Projectile class for player bullets

import { toRadians } from './utils.js';

export class Projectile {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.speed = 600;
        this.radius = 4;
        
        // Calculate velocity based on ship angle
        const radians = toRadians(angle);
        this.velocityX = Math.cos(radians) * this.speed;
        this.velocityY = Math.sin(radians) * this.speed;
        
        // State
        this.destroyed = false;
        
        // Visual trail
        this.trail = [];
        this.maxTrailLength = 8;
    }
    
    update(deltaTime, canvasWidth, canvasHeight) {
        // Store position for trail
        this.trail.unshift({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
            this.trail.pop();
        }
        
        // Update position
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        // Destroy on wall hit
        if (this.x < 0 || this.x > canvasWidth ||
            this.y < 0 || this.y > canvasHeight) {
            this.destroyed = true;
        }
    }
    
    draw(ctx) {
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
            const alpha = 1 - (i / this.trail.length);
            const size = this.radius * (1 - i / this.trail.length * 0.5);
            
            ctx.beginPath();
            ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 170, 50, ${alpha * 0.5})`;
            ctx.fill();
        }
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius * 3
        );
        gradient.addColorStop(0, 'rgba(255, 200, 100, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 150, 50, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 100, 50, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff5e6';
        ctx.fill();
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
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
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
        
        // Ship vs Asteroid
        if (!this.ship.invulnerable) {
            for (const asteroid of this.asteroids) {
                if (circleCollision(
                    this.ship.x, this.ship.y, this.ship.radius * 0.7,
                    asteroid.x, asteroid.y, asteroid.radius * 0.8
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

```css
/* Asteroid Game Styles - Modern Minimalist */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #0a0a1a;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
}

#gameCanvas {
    display: block;
    width: 100%;
    height: 100%;
    cursor: crosshair;
}

/* Loading screen */
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: opacity 0.5s ease;
}

.loading.hidden {
    opacity: 0;
    pointer-events: none;
}

.loading-text {
    color: #4ecdc4;
    font-size: 24px;
    font-weight: bold;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

/* Focus outline removal for game */
#gameCanvas:focus {
    outline: none;
}

/* Selection disable */
body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asteroids - Modern Edition</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="loading" id="loading">
        <span class="loading-text">Loading...</span>
    </div>
    
    <canvas id="gameCanvas"></canvas>
    
    <script type="module">
        import { Game } from './js/game.js';
        
        // Wait for DOM to load
        window.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('gameCanvas');
            const loading = document.getElementById('loading');
            
            // Initialize game
            const game = new Game(canvas);
            
            // Hide loading screen
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 500);
        });
    </script>
</body>
</html>

```

All files are created. Let me start a local server to test the game:

The title screen looks great! Let me press SPACE to start and test the gameplay:

The game is running! 🎮

## ✅ Asteroid Game Complete!

I've built the full game with all the features from your design:

### Project Structure
```
astroid game/
├── index.html           # Main game page
├── css/
│   └── style.css        # Modern minimalist styling
├── js/
│   ├── game.js          # Main game loop, waves, scoring, UI
│   ├── ship.js          # Player ship with physics & controls
│   ├── asteroid.js      # Asteroids with fragmentation system
│   ├── projectile.js    # Bullets with glowing trails
│   ├── particles.js     # Explosion & thrust effects
│   └── utils.js         # Helper functions
└── design-log/
    └── 001-initial-design.md
```

### Features Implemented
- **Ship:** Rotate + thrust with momentum, bounces off walls
- **4 Asteroid sizes:** X-Large → Large → Medium → Small → gone
- **Rapid fire:** Hold SPACE for continuous shooting
- **Wave system:** Clear all asteroids → next wave with more
- **Health bar:** Takes damage on collision, invulnerability frames
- **Scoring:** Points per asteroid + wave bonuses
- **Visual effects:** Particle explosions, thrust flames, screen shake
- **Modern minimalist look:** Deep space gradient, clean shapes, subtle glow effects

### Controls
| Key | Action |
|-----|--------|
| A / ← | Rotate left |
| D / → | Rotate right |
| W / ↑ | Thrust forward |
| SPACE | Shoot (hold for rapid fire) |

The game is running at **http://localhost:8080** — give it a try! 🚀

```plaintext
astroid game/
├── index.html           # Main game page
├── css/
│   └── style.css        # Modern minimalist styling
├── js/
│   ├── game.js          # Main game loop, waves, scoring, UI
│   ├── ship.js          # Player ship with physics & controls
│   ├── asteroid.js      # Asteroids with fragmentation system
│   ├── projectile.js    # Bullets with glowing trails
│   ├── particles.js     # Explosion & thrust effects
│   └── utils.js         # Helper functions
└── design-log/
    └── 001-initial-design.md
```

---

**User**

the collition of the spaceship with the astriods is not exact. The edge of the ship can collide with the astriod and it is not detected.

---

**Cursor**

```javascript
if (circleCollision(
    this.ship.x, this.ship.y, this.ship.radius * 0.7,
    asteroid.x, asteroid.y, asteroid.radius * 0.8
)) {
```

You're right! The collision detection uses reduced radii to be "forgiving," but it's too generous. Let me fix that by making the collision more accurate:

Found it! The collision uses reduced multipliers (`0.7` and `0.8`) which makes the hitboxes too small. Let me fix this:

```javascript
// Main game controller

import { Ship } from './ship.js';
import { Asteroid, ASTEROID_SIZES, createRandomAsteroid } from './asteroid.js';
import { Projectile } from './projectile.js';
import { ParticleSystem } from './particles.js';
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

Fixed! I removed the `0.7` and `0.8` multipliers so collisions now use the full radii. The hitboxes will now match the visual size much better.

Refresh the browser to test the improved collision detection:

Done! The collision detection is now more accurate:

**Before:** Ship used `radius * 0.7`, asteroid used `radius * 0.8` → hitboxes were 20-30% smaller than visuals

**After:** Both use full `radius` → hitboxes match visual size

The game has been refreshed at http://localhost:8080 — give it another try! The ship should now properly collide when its edges touch an asteroid. 🚀

---

**User**

update what we have learned from the implementation in the design log as a new section

---

**Cursor**

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Design Complete ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **X-Large asteroids** → break into large asteroids
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| X-Large | 100px | Slow | 5 hits | 200 | 2 Large |
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Wave 3+: X-Large asteroids start appearing
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -35 HP (x-large), -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

---

## Implementation Notes & Lessons Learned

*Added after initial implementation — December 28, 2025*

### 🔧 Collision Detection

**Issue:** Initial collision detection used reduced radius multipliers (`ship.radius * 0.7` and `asteroid.radius * 0.8`) to be "forgiving." This caused missed collisions where the ship's visual edge would touch an asteroid without triggering damage.

**Solution:** Use full radii for collision detection. The hitboxes now match the visual size of objects.

**Lesson:** Don't make collision detection too forgiving — players expect what they see to match what happens. If hitboxes don't match visuals, the game feels broken rather than generous.

```javascript
// Before (too forgiving, caused missed collisions)
circleCollision(ship.x, ship.y, ship.radius * 0.7, asteroid.x, asteroid.y, asteroid.radius * 0.8)

// After (accurate collision)
circleCollision(ship.x, ship.y, ship.radius, asteroid.x, asteroid.y, asteroid.radius)
```

### 📐 Circle vs Polygon Collision

**Observation:** The ship is a triangle but we use circle-based collision. This is a common tradeoff:
- **Circle collision:** Fast, simple, works well for most cases
- **Polygon collision:** More accurate but computationally expensive

**Current approach:** Circle collision is sufficient for this game. The ship's radius (20px) roughly matches its visual bounding circle.

**Future improvement:** For pixel-perfect collision, could implement SAT (Separating Axis Theorem) or check ship vertices against asteroid edges.

### 🎮 Game Feel Enhancements

Things that made the game feel better:
1. **Invulnerability frames** — 2 seconds after taking damage with visual flicker
2. **Screen shake** — Proportional to asteroid size on destruction
3. **Particle effects** — Thrust flames, explosion debris, sparks
4. **Projectile trails** — Fading trail behind bullets adds motion sense

### 🏗️ Architecture Decisions

**Modular JS files with ES6 imports** worked well:
- Each game object in its own class
- Easy to modify individual components
- Clean separation of concerns

**Delta time-based updates** ensure consistent gameplay regardless of frame rate:
```javascript
this.x += this.velocityX * deltaTime;
```

### 📝 Future Improvements to Consider

- [ ] Sound effects (thrust, shooting, explosions)
- [ ] Power-ups (shields, rapid fire boost, health pickups)
- [ ] High score persistence (localStorage)
- [ ] Mobile touch controls
- [ ] Difficulty settings
- [ ] Boss asteroids on certain waves

```

```markdown
# Asteroid Game - Initial Design Document

**Date:** December 28, 2025  
**Status:** Implemented ✅

---

## Overview

We're building a classic-style **Asteroid shooter game** — a timeless arcade experience where the player controls a spaceship surrounded by a field of drifting asteroids.

### Core Mechanics

1. **Player Ship** — A spaceship positioned at the center of the screen that the player controls
2. **Asteroid Field** — Multiple asteroids of varying sizes floating around, each moving in its own direction and speed
3. **Shooting** — The ship can fire projectiles to destroy asteroids
4. **Asteroid Fragmentation** — When hit:
   - **X-Large asteroids** → break into large asteroids
   - **Large asteroids** → break into medium asteroids
   - **Medium asteroids** → break into small asteroids  
   - **Small asteroids** → destroyed completely (disappear)

---

## Questions for Clarification

Before we proceed, I have a few questions to nail down the design:

### Controls & Movement

1. **Ship movement style?**
   - **(A)** Ship rotates and thrusts forward (classic Asteroids style with momentum/drift) ✅ **SELECTED**
   - **(B)** Ship moves freely in all directions (WASD/arrow keys, no momentum)
   - **(C)** Ship only rotates, stays locked in center (only asteroids move)

2. **Screen boundaries?**
   - **(A)** Wrap-around (ship/asteroids exit one side, appear on opposite side)
   - **(B)** Bounded arena (walls/edges stop movement) ✅ **SELECTED**

### Combat

3. **Shooting mechanism?**
   - **(A)** Single shot (one bullet at a time)
   - **(B)** Rapid fire (hold to shoot continuously) ✅ **SELECTED**
   - **(C)** Limited ammo that regenerates

### Game Flow

4. **Progression?**
   - **(A)** Waves/levels (clear all asteroids → next wave with more) ✅ **SELECTED**
   - **(B)** Endless mode (asteroids continuously spawn)
   - **(C)** Both options available

5. **Lives/Health?**
   - **(A)** Classic lives system (3 lives, instant death on collision)
   - **(B)** Health bar (can take multiple hits) ✅ **SELECTED**

### Visuals

6. **Art style preference?**
   - **(A)** Retro vector/wireframe (glowing lines, dark background)
   - **(B)** Pixel art / 8-bit style
   - **(C)** Modern minimalist (clean shapes, gradients) ✅ **SELECTED**
   - **(D)** Let me surprise you with something unique

### Tech Stack

7. **Platform?**
   - **(A)** Web-based (HTML5 Canvas + JavaScript) — runs in browser ✅ **SELECTED**
   - **(B)** Other preference?

---

## Final Design Specification

Based on the selections above, here's the complete game design:

### 🚀 Player Ship

| Property | Value |
|----------|-------|
| Start Position | Center of screen |
| Movement | Rotate left/right + thrust forward |
| Physics | Momentum-based (drift when not thrusting) |
| Boundary Behavior | Stops at arena walls |
| Health | Health bar (100 HP) |

**Controls:**
- **A / Left Arrow** — Rotate left
- **D / Right Arrow** — Rotate right  
- **W / Up Arrow** — Thrust forward
- **Space** — Fire (hold for rapid fire)

### 🪨 Asteroids

| Size | Radius | Speed | HP | Points | Splits Into |
|------|--------|-------|-----|--------|-------------|
| X-Large | 100px | Slow | 5 hits | 200 | 2 Large |
| Large | 50px | Slow | 3 hits | 100 | 2 Medium |
| Medium | 30px | Medium | 2 hits | 50 | 2 Small |
| Small | 15px | Fast | 1 hit | 25 | Nothing (destroyed) |

- Asteroids bounce off arena walls
- Each asteroid has random velocity and rotation
- Fragments inherit parent velocity + random offset

### 🔫 Projectiles

| Property | Value |
|----------|-------|
| Fire Rate | ~8 shots/second (rapid fire) |
| Speed | Fast (600 px/s) |
| Lifetime | Destroyed on wall hit or asteroid hit |
| Damage | 1 HP per hit |

### 📊 Game Flow

1. **Wave System**
   - Wave 1: 4 large asteroids
   - Wave 3+: X-Large asteroids start appearing
   - Each wave: +2 asteroids, slightly faster
   - Clear all asteroids → short pause → next wave
   
2. **Scoring**
   - Points per asteroid destroyed (see table above)
   - Bonus points for clearing wave quickly
   
3. **Health & Damage**
   - Collision with asteroid: -35 HP (x-large), -25 HP (large), -15 HP (medium), -10 HP (small)
   - Health does NOT regenerate between waves
   - Health = 0 → Game Over
   
4. **Game Over**
   - Display final score and wave reached
   - Option to restart

### 🎨 Visual Style: Modern Minimalist

- **Background:** Deep space gradient (dark navy → black)
- **Ship:** Clean geometric triangle with subtle gradient fill
- **Asteroids:** Irregular polygons with soft shadows, muted earth tones
- **Projectiles:** Bright accent color (cyan/orange) with subtle glow
- **UI:** Clean sans-serif font, minimal HUD (health bar, score, wave number)
- **Effects:** Smooth particle explosions, subtle screen shake on damage

### 🛠 Tech Stack

- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** (no frameworks)
- **Single HTML file** with embedded CSS/JS for simplicity

---

## Project Structure

```
astroid-game/
├── design-log/
│   └── 001-initial-design.md    (this file)
├── index.html                    (main game file)
├── css/
│   └── style.css                 (styles)
├── js/
│   ├── game.js                   (main game loop)
│   ├── ship.js                   (player ship class)
│   ├── asteroid.js               (asteroid class)
│   ├── projectile.js             (bullet class)
│   ├── particles.js              (explosion effects)
│   └── utils.js                  (helper functions)
└── README.md                     (how to run)
```

---

## Ready to Build! 🎮

Design is complete. Say the word and I'll start implementing!

---

## Implementation Notes & Lessons Learned

*Added after initial implementation — December 28, 2025*

### 🔧 Collision Detection

**Issue:** Initial collision detection used reduced radius multipliers (`ship.radius * 0.7` and `asteroid.radius * 0.8`) to be "forgiving." This caused missed collisions where the ship's visual edge would touch an asteroid without triggering damage.

**Solution:** Use full radii for collision detection. The hitboxes now match the visual size of objects.

**Lesson:** Don't make collision detection too forgiving — players expect what they see to match what happens. If hitboxes don't match visuals, the game feels broken rather than generous.

```javascript
// Before (too forgiving, caused missed collisions)
circleCollision(ship.x, ship.y, ship.radius * 0.7, asteroid.x, asteroid.y, asteroid.radius * 0.8)

// After (accurate collision)
circleCollision(ship.x, ship.y, ship.radius, asteroid.x, asteroid.y, asteroid.radius)
```

### 📐 Circle vs Polygon Collision

**Observation:** The ship is a triangle but we use circle-based collision. This is a common tradeoff:
- **Circle collision:** Fast, simple, works well for most cases
- **Polygon collision:** More accurate but computationally expensive

**Current approach:** Circle collision is sufficient for this game. The ship's radius (20px) roughly matches its visual bounding circle.

**Future improvement:** For pixel-perfect collision, could implement SAT (Separating Axis Theorem) or check ship vertices against asteroid edges.

### 🎮 Game Feel Enhancements

Things that made the game feel better:
1. **Invulnerability frames** — 2 seconds after taking damage with visual flicker
2. **Screen shake** — Proportional to asteroid size on destruction
3. **Particle effects** — Thrust flames, explosion debris, sparks
4. **Projectile trails** — Fading trail behind bullets adds motion sense

### 🏗️ Architecture Decisions

**Modular JS files with ES6 imports** worked well:
- Each game object in its own class
- Easy to modify individual components
- Clean separation of concerns

**Delta time-based updates** ensure consistent gameplay regardless of frame rate:
```javascript
this.x += this.velocityX * deltaTime;
```

### 📝 Future Improvements to Consider

- [ ] Sound effects (thrust, shooting, explosions)
- [ ] Power-ups (shields, rapid fire boost, health pickups)
- [ ] High score persistence (localStorage)
- [ ] Mobile touch controls
- [ ] Difficulty settings
- [ ] Boss asteroids on certain waves

```

Done! I've added a new **"Implementation Notes & Lessons Learned"** section to the design log covering:

### What's Documented:

1. **🔧 Collision Detection** — The issue with reduced hitbox radii and the fix to use full radii for accurate collision

2. **📐 Circle vs Polygon Collision** — Tradeoffs between simple circle collision and more accurate polygon collision

3. **🎮 Game Feel Enhancements** — Invulnerability frames, screen shake, particles, projectile trails

4. **🏗️ Architecture Decisions** — Modular ES6 imports, delta time-based updates

5. **📝 Future Improvements** — Ideas for sound, power-ups, high scores, mobile controls, difficulty settings

Also updated the document status from "Design Complete" to **"Implemented"** ✅

---

**User**

create a cursor rule file with the rules for design log. 
place it where it should be for cursor to use the rule file.
keep it short

---

**Cursor**

```markdown
---
description: Rules for maintaining the design log
globs: design-log/**
---

# Design Log Rules

## Structure
- Create numbered files: `001-feature-name.md`, `002-feature-name.md`
- Start with title, date, and status (Planning/Implemented/Deprecated)

## Content
- **Before building:** Document the plan, ask clarifying questions with options (A/B/C)
- **After building:** Add "Implementation Notes & Lessons Learned" section
- Mark selected options with ✅ **SELECTED** — don't remove other options

## Lessons Learned Section
Document:
- Issues encountered and solutions
- Architecture decisions and tradeoffs
- Future improvements (as checklist)

## Keep Updated
- Update status when implementation completes
- Add notes whenever bugs are fixed or behavior changes

```

Done! Created `.cursor/rules/design-log.mdc` with the design log conventions:

```
.cursor/
└── rules/
    └── design-log.mdc
```

The rule file will automatically apply when working on files in `design-log/**`. It covers:

- **File naming** — Numbered markdown files
- **Before building** — Document plan, ask questions with options
- **After building** — Add lessons learned section
- **Keep updated** — Update status and notes when things change

```plaintext
.cursor/
└── rules/
    └── design-log.mdc
```

