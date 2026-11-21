import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig({
    files: ["**/*.{js,ts,astro}"],
    extends: [
        js.configs.recommended,
        tseslint.configs.strict,
        eslintPluginAstro.configs.recommended,
    ],
});
