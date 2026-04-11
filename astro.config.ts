import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-mathjax";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://slavaver.github.io",
    base: "/web-course-site",
    output: "static",
    integrations: [UnoCSS()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        syntaxHighlight: "shiki",
        shikiConfig: {
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha",
            },
            defaultColor: false,
            wrap: true,
        },
    },
});
