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

