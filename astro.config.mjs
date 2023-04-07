import { defineConfig } from "astro/config";
import astroRemark from "@astrojs/markdown-remark";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://slavaver.github.io",
  base: "/web-course-site",
  integrations: [tailwind()],

  markdown: {
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "append" }],
      ["rehype-toc", { headings: ["h1", "h2"] }],
    ],
  },
});
