import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify()],
    theme: {
        extend: {
            colors: {
                text_primary: "var(--color-text-primary)",
                text_secondary: "var(--color-text-secondary)",
                text_tertiary: "var(--color-text-tertiary)",
                bg_screen: "var(--color-bg-screen)",
                bg_primary: "var(--color-bg-primary)",
                bg_secondary: "var(--color-bg-secondary)",
                bg_accent_first: "var(--color-bg-accent-first)",
                bg_accent_second: "var(--color-bg-accent-second)",
                border: "#F6FBFF",
            },
        },
    },
    rules: [
        [
            "root-light",
            {
                "--color-text-primary": "#FFFFFF",
                "--color-text-secondary": "#0B163B",
                "--color-text-tertiary": "#0752FF",
                "--color-bg-screen": "#F6FBFF",
                "--color-bg-primary": "#203EA9",
                "--color-bg-secondary": "#4969DC",
                "--color-bg-accent-first": "#D4DDFF",
                "--color-bg-accent-second": "#FF5391",
            },
        ],
        [
            "root-dark",
            {
                "--color-text-primary": "#FFFFFF",
                "--color-text-secondary": "#0B163B",
                "--color-text-tertiary": "#C5D6FF",
                "--color-bg-screen": "#01001C",
                "--color-bg-primary": "#3A4F96",
                "--color-bg-secondary": "#0B163B",
                "--color-bg-accent-first": "#10215A",
                "--color-bg-accent-second": "#FF5391",
            },
        ],
    ],
    variants: [
        (matcher) => ({
            matcher: `dark:${matcher}`,
            selector: (s) => `.dark ${s}`,
        }),
    ],
});
