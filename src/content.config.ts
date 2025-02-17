import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/courses" }),
});

const useful = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

export const collections = { courses, useful };