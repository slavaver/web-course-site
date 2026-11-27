import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const courseSchema = z.object({
    title: z.string(),
    number: z.string(),
    type: z.enum(["important", "labs", "practice", "lecture", "rk"]),
});

/** Лекции — внешние материалы: обязательны темы (description) и ссылка (href) */
const lectureSchema = courseSchema.extend({
    type: z.literal("lecture"),
    description: z.array(z.string()),
    href: z.string(),
});

const workSchema = courseSchema.extend({
    type: z.enum(["important", "labs", "practice", "rk"]),
});

/** Материалы курса: работы и лекции хранятся в одной коллекции */
const materialSchema = z.discriminatedUnion("type", [
    workSchema,
    lectureSchema,
]);

const webBasics = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/web-basics",
    }),
    schema: materialSchema,
});

const clientSideBasics = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/client-side-basics",
    }),
    schema: materialSchema,
});

const clientSide = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/client-side",
    }),
    schema: materialSchema,
});

const useful = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

export const collections = {
    webBasics,
    clientSideBasics,
    clientSide,
    useful,
};
