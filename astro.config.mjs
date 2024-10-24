import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://slavaver.github.io",
  base: "/web-course-site",
  output: "static",
  integrations: [tailwind()],
});
