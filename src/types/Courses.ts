import type { Post, POST_DATA_TYPE } from "./Posts.js";

export type CourseLayoutProps = {
    title: string;
    description: string;
    name: string;
    statementHref?: string;
    lectures?: Lecture[];
    schedule?: Schedule;
    labs: Labs;
    rk?: RK;
};

export type Labs = Post<POST_DATA_TYPE.LABS>[];
export type Schedule = Post<POST_DATA_TYPE.SCHEDULE>[];
export type RK = Post<POST_DATA_TYPE.RK>[];

type Lecture = {
    title: string;
    description: string[];
    href: string;
};
