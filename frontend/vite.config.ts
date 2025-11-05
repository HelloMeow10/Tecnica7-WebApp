import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return ({
  assetsInclude: ['**/*.xlsx'],
  build: {
    outDir: '../frontend-dist',
  },
  server: {
    // listen on all network interfaces so the dev server is reachable externally
    host: true,
    port: 8080,
    // allow specific external hostnames (add more if needed) to avoid the Vite host check blocking requests
    allowedHosts: ['manuelsadosky.tecnica7ldz.edu.ar', 'localhost', '127.0.0.1'],
    watch: {
      ignored: ['**/*.timestamp-*.mjs'],
    },
    proxy: {
      '/api': {
        // use VITE_BACKEND_URL from your environment if provided, otherwise fall back to localhost:3000
        target: env.VITE_BACKEND_URL || 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
        // optional: strip the /api prefix when proxying (uncomment if your backend routes don't include /api)
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  });
});
