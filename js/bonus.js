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

