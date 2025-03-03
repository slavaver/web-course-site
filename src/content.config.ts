import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const courses = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/courses" }),
});

const useful = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

export const collections = { courses, useful };
