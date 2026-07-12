import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 300,
    proxy: {
      '/sitemap.xml': {
        target: 'https://adminpanel.mebelcity.uz',
        changeOrigin: true,
        bypass: (req) => {
          if (req.headers.accept && req.headers.accept.indexOf('text/html') !== -1) {
            req.headers.accept = 'application/xml';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),

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
