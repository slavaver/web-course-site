import { RenderedContent } from "astro:content";

export type Post<T extends POST_DATA_TYPE> = {
    id: string;
    body?: string;
    collection: Collections;
    data: {
        number?: string;
        title?: string;
        type?: T;
    };
    rendered?: RenderedContent;
    filePath?: string;
};

type Collections = "courses" | "useful";

export enum POST_DATA_TYPE {
    LABS = "labs",
    SCHEDULE = "schedule",
    RK = "rk",
}
