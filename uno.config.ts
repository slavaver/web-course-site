import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify()],
    theme: {
        colors: {
            text: {
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                tertiary: "var(--color-text-tertiary)",
            },
            bg: {
                screen: "var(--color-bg-screen)",
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                accent_first: "var(--color-bg-accent-first)",
                accent_second: "var(--color-bg-accent-second)",
            },
        },
    },

    rules: [
        [
            "light",
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
            "dark",
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
});
