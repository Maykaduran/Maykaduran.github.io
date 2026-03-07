// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  // URL base de tu sitio
  site: "https://maykaduran.github.io",
  base: "/", // ✅ Como es repo de usuario, base es "/"

  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: "static", // ✅ GitHub Pages solo sirve sitios estáticos
});