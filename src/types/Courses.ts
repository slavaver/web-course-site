import { type CollectionEntry } from "astro:content";

export type Name = "client-side" | "client-side-basic" | "web-basics";
export type Collections = "clientSide" | "webBasics" | "clientSideBasics";
export type CourseType = "distance" | "full-time";
export type FourDigitYear = `${number}${number}${number}${number}`;

export type CoursesItems = CollectionEntry<Collections>[];

/** Лекции — записи тех же коллекций с type: "lecture" (внешние материалы) */
export type LectureItems = (Omit<CoursesItems[number], "data"> & {
    data: Extract<CoursesItems[number]["data"], { type: "lecture" }>;
})[];
