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

