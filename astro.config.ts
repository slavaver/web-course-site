import { defineConfig, fontProviders } from "astro/config";

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
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Gilroy",
            cssVariable: "--font-gilroy",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/gilroy/Gilroy-Regular.ttf"],
                        weight: "400",
                        style: "normal",
                    },
                    {
                        src: ["./src/assets/fonts/gilroy/Gilroy-Medium.ttf"],
                        weight: "500",
                        style: "normal",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "NextArt",
            cssVariable: "--font-next-art",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/nextart/NEXTART_Regular.otf"],
                        weight: "400",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/nextart/NEXTART_SemiBold.otf",
                        ],
                        weight: "600",
                        style: "normal",
                    },
                    {
                        src: ["./src/assets/fonts/nextart/NEXTART_Bold.otf"],
                        weight: "700",
                        style: "normal",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "JetBrainsMono",
            cssVariable: "--font-mono",
            fallbacks: ["monospace"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/jetbrains/JetBrainsMono.ttf"],
                        weight: "100 900",
                        style: "normal",
                    },
                ],
            },
        },
    ],
});
