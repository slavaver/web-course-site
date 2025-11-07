import type { RenderedContent } from "astro:content";

export type ListOfPosts = {
    allUseful: UsefulPost[];
    lengths?: (number | "" | undefined)[];
};

export type UsefulPost = {
    id: string;
    body?: string;
    collection: "useful";
    data: UsefulData;
    rendered?: RenderedContent;
    filePath?: string;
    length?: number | "";
};

export type UsefulData = {
    title: string;
    description: string;
    tags: string[];
    date?: string;
    course: string;
};
