import type { MarkdownHeading } from "astro";
import type { RenderedContent } from "astro:content";

// TODO: Разобраться с типами, так как LabsSlug, можно собрать из типов в Astro

export interface LabsSlug {
    entry: {
        id: string;
        body?: string | undefined;
        collection: "courses";
        data: LabData;
        rendered?: RenderedContent | undefined;
        filePath?: string | undefined;
    };
}

export interface LabLayoutProps {
    frontmatter: LabData;
    headinglist: MarkdownHeading[];
}

export interface LabData {
    number: string;
    title: string;
    type: string;
}
