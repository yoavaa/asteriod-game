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

