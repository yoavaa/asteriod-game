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

