import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base path for deployment (use './' for relative paths)
  base: './',
  
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: true,
    
    // Minify for production
    minify: 'esbuild',
    
    // Multi-page app: build both index.html and game.html
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        game: resolve(__dirname, 'game.html'),
      },
    },
  },
  
  server: {
    // Dev server port
    port: 8080,
    open: true,
  },
  
  preview: {
    // Preview server port
    port: 8080,
  },
});
