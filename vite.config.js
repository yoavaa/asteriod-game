import { defineConfig } from 'vite';

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
