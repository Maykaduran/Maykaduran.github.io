import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

const isBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: "https://maykaduran.github.io",
  base: "/", // Importante: Mantén esto tal cual
  output: "static",
  
  // FORZAMOS a que Astro no use la carpeta con guion bajo
  build: {
    assets: "assets" 
  },

  integrations: [
    react(), 
    markdoc(),
    !isBuild ? keystatic() : null, 
  ].filter(Boolean),

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
});