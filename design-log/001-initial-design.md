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
