import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://slavaver.github.io",
  base: "/web-course-site",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});