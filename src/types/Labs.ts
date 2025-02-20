import { MarkdownHeading } from "astro";
import { RenderedContent } from "astro:content";

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
    labUrl: string;
}

export interface LabData {
    number: string;
    title: string;
    type: string;
}
