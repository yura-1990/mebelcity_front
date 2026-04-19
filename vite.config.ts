import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap';
import { visualizer } from "rollup-plugin-visualizer";

// All real routes for sitemap generation
const sitemapRoutes = [
  '/',
  '/about',
  '/ofisnaya-mebel',
  '/gallery',
  '/contact',
  '/services/offers',
  '/services/design',
  '/services/warranty',
  '/cart',
  '/checkout',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    sitemap({
      hostname: 'https://mebelcity.uz',
      dynamicRoutes: sitemapRoutes,
      exclude: ['/bundle-visualizer', '/cards'],
      outDir: './dist',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      readable: true,
    }),
    mode !== 'development' && visualizer({ filename: 'dist/bundle-visualizer.html', open: false }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    chunkSizeWarningLimit: 1000, // KB, повышаем лимит предупреждений
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          vendor: ['@tanstack/react-query', 'zustand', 'axios'], // добавь сюда свои тяжелые либы
        },
      },
    },
  },

}));
