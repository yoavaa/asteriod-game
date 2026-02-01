// ET Spaceship class - special enemy that gives multi-shot bonus

import { randomRange, distance } from './utils.js';

export class ETSpaceship {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        // Spawn from random edge
        this.spawnFromEdge();
        
        // Stats
        this.hp = 2;
        this.maxHp = 2;
        this.radius = 25;
        this.pointsPerHit = 100;
        this.killBonus = 500;
        
        // Movement
        this.speed = randomRange(80, 120);
        this.baseAngle = Math.atan2(this.velocityY, this.velocityX);
        
        // Zigzag pattern
        this.zigzagTimer = 0;
        this.zigzagPeriod = 1.5; // seconds per zigzag cycle
        this.zigzagAmplitude = 0.8; // radians deviation
        
        // Player avoidance
        this.avoidanceRadius = 150;
        this.avoidanceStrength = 100;
        
        // Visual state
        this.rotation = 0;
        this.rotationSpeed = 2;
        this.pulseTimer = 0;
        this.hitFlashTimer = 0;
        this.bobOffset = 0;
        
        // State
        this.destroyed = false;
    }
    
    spawnFromEdge() {
        const side = Math.floor(Math.random() * 4);
        const margin = this.radius || 25;
        
        switch (side) {
            case 0: // Top
                this.x = randomRange(margin, this.canvasWidth - margin);
                this.y = -margin;
                this.velocityX = randomRange(-50, 50);
                this.velocityY = randomRange(60, 100);
                break;
            case 1: // Right
                this.x = this.canvasWidth + margin;
                this.y = randomRange(margin, this.canvasHeight - margin);
                this.velocityX = randomRange(-100, -60);
                this.velocityY = randomRange(-50, 50);
                break;
            case 2: // Bottom
                this.x = randomRange(margin, this.canvasWidth - margin);
                this.y = this.canvasHeight + margin;
                this.velocityX = randomRange(-50, 50);
                this.velocityY = randomRange(-100, -60);
                break;
            case 3: // Left
                this.x = -margin;
                this.y = randomRange(margin, this.canvasHeight - margin);
                this.velocityX = randomRange(60, 100);
                this.velocityY = randomRange(-50, 50);
                break;
        }
    }
    
    update(deltaTime, playerX, playerY) {
        // Update timers
        this.zigzagTimer += deltaTime;
        this.pulseTimer += deltaTime;
        this.bobOffset = Math.sin(this.pulseTimer * 3) * 3;
        this.rotation += this.rotationSpeed * deltaTime;
        
        if (this.hitFlashTimer > 0) {
            this.hitFlashTimer -= deltaTime;
        }
        
        // Calculate zigzag offset
        const zigzagOffset = Math.sin(this.zigzagTimer * Math.PI * 2 / this.zigzagPeriod) * this.zigzagAmplitude;
        
        // Base movement direction with zigzag
        const moveAngle = this.baseAngle + zigzagOffset;
        let moveX = Math.cos(moveAngle) * this.speed;
        let moveY = Math.sin(moveAngle) * this.speed;
        
        // Player avoidance
        const distToPlayer = distance(this.x, this.y, playerX, playerY);
        if (distToPlayer < this.avoidanceRadius && distToPlayer > 0) {
            const avoidFactor = 1 - (distToPlayer / this.avoidanceRadius);
            const avoidAngle = Math.atan2(this.y - playerY, this.x - playerX);
            moveX += Math.cos(avoidAngle) * this.avoidanceStrength * avoidFactor;
            moveY += Math.sin(avoidAngle) * this.avoidanceStrength * avoidFactor;
        }
        
        // Apply movement
        this.x += moveX * deltaTime;
        this.y += moveY * deltaTime;
        
        // Bounce off screen edges (stay in play area)
        const margin = this.radius + 10;
        if (this.x < margin) {
            this.x = margin;
            this.velocityX *= -1;
            this.baseAngle = Math.PI - this.baseAngle;
        }
        if (this.x > this.canvasWidth - margin) {
            this.x = this.canvasWidth - margin;
            this.velocityX *= -1;
            this.baseAngle = Math.PI - this.baseAngle;
        }
        if (this.y < margin) {
            this.y = margin;
            this.velocityY *= -1;
            this.baseAngle = -this.baseAngle;
        }
        if (this.y > this.canvasHeight - margin) {
            this.y = this.canvasHeight - margin;
            this.velocityY *= -1;
            this.baseAngle = -this.baseAngle;
        }
    }
    
    hit() {
        this.hp--;
        this.hitFlashTimer = 0.15;
        
        if (this.hp <= 0) {
            this.destroyed = true;
            return true; // Destroyed
        }
        return false; // Still alive
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y + this.bobOffset);
        
        // Hit flash effect
        if (this.hitFlashTimer > 0) {
            ctx.globalAlpha = 0.5 + Math.sin(this.hitFlashTimer * 40) * 0.5;
        }
        
        // Glow effect
        const glowIntensity = 0.5 + Math.sin(this.pulseTimer * 4) * 0.3;
        ctx.shadowColor = '#ff00ff';
        ctx.shadowBlur = 20 * glowIntensity;
        
        // Draw UFO body (saucer shape)
        ctx.save();
        ctx.rotate(this.rotation * 0.1); // Subtle wobble
        
        // Bottom hull (ellipse)
        ctx.beginPath();
        ctx.ellipse(0, 5, 25, 10, 0, 0, Math.PI * 2);
        const hullGradient = ctx.createLinearGradient(-25, 0, 25, 10);
        hullGradient.addColorStop(0, '#ff66ff');
        hullGradient.addColorStop(0.5, '#cc00cc');
        hullGradient.addColorStop(1, '#990099');
        ctx.fillStyle = hullGradient;
        ctx.fill();
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Dome (top half ellipse)
        ctx.beginPath();
        ctx.ellipse(0, 0, 15, 12, 0, Math.PI, 0);
        const domeGradient = ctx.createRadialGradient(-5, -5, 0, 0, 0, 15);
        domeGradient.addColorStop(0, 'rgba(200, 255, 255, 0.9)');
        domeGradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.7)');
        domeGradient.addColorStop(1, 'rgba(50, 100, 200, 0.5)');
        ctx.fillStyle = domeGradient;
        ctx.fill();
        ctx.strokeStyle = '#88ffff';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // ET inside dome
        ctx.fillStyle = '#44ff44'; // Green ET
        // ET head
        ctx.beginPath();
        ctx.ellipse(0, -3, 6, 7, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // ET eyes (big black eyes)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(-3, -4, 2, 3, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(3, -4, 2, 3, 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye shine
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-2, -5, 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(4, -5, 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        // Lights on bottom of saucer
        const lightCount = 6;
        for (let i = 0; i < lightCount; i++) {
            const angle = (i / lightCount) * Math.PI * 2 + this.pulseTimer * 2;
            const lx = Math.cos(angle) * 18;
            const ly = 8 + Math.sin(angle) * 3;
            
            ctx.beginPath();
            ctx.arc(lx, ly, 3, 0, Math.PI * 2);
            const lightOn = Math.sin(this.pulseTimer * 8 + i) > 0;
            ctx.fillStyle = lightOn ? '#ffff00' : '#666600';
            ctx.fill();
        }
        
        ctx.restore();
        
        // Damage indicator (crack/damage marks when hit once)
        if (this.hp < this.maxHp) {
            ctx.strokeStyle = 'rgba(255, 100, 100, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-10, -5);
            ctx.lineTo(-5, 0);
            ctx.lineTo(-12, 5);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(8, -3);
            ctx.lineTo(12, 2);
            ctx.stroke();
        }
        
        ctx.restore();
    }
}
