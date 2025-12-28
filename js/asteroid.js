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

