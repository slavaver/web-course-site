import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { satteriMathjax } from "satteri-mathjax";
import UnoCSS from "unocss/astro";

export default defineConfig({
    site: "https://slavaver.github.io",
    base: "/web-course-site",
    output: "static",
    integrations: [UnoCSS()],
    markdown: {
        processor: satteri({
            features: { math: true },
            mdastPlugins: [satteriMathjax()],
        }),
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
