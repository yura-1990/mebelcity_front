import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap';
import { visualizer } from "rollup-plugin-visualizer";

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
      hostname: 'https://mebelcity.uz', // 🔁 Replace with your actual domain
    }),
    visualizer({ filename: 'dist/bundle-visualizer.html', open: true }),
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
