import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const courseSchema = z.object({
    title: z.string(),
    number: z.string(),
    type: z.enum(["important", "labs", "practice", "lecture", "rk"]),
});

const lectureSchema = courseSchema.extend({
    description: z.array(z.string()),
    href: z.string(),
});

const webBasics = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/web-basics",
    }),
    schema: courseSchema,
});

const clientSideBasics = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/client-side-basics",
    }),
    schema: courseSchema,
});

const clientSide = defineCollection({
    loader: glob({
        pattern: ["**/*.md"],
        base: "./src/courses/client-side",
    }),
    schema: courseSchema,
});

const clientSideLectures = defineCollection({
    loader: file("./src/courses/client-side/full-time/lectures.json"),
    schema: lectureSchema,
});

const useful = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

export const collections = {
    webBasics,
    clientSideBasics,
    clientSide,
    clientSideLectures,
    useful,
};
