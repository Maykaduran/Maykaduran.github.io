// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// Detectamos si estamos en modo "build" (producción para GitHub)
const isBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: "https://maykaduran.github.io",
  base: "/",
  output: "static",

  integrations: [
    react(), 
    markdoc(),
    // SOLO cargamos Keystatic si NO estamos haciendo el build final
    // Esto evita que intente inyectar rutas de servidor en GitHub Pages
    !isBuild ? keystatic() : null, 
  ].filter(Boolean), // Filtramos el null para que Astro no se queje

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
});