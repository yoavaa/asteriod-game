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

