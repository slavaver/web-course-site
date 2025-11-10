import { type CollectionEntry } from "astro:content";

export type Name = "client-side" | "client-side-basic" | "web-basics";
export type Collections = "clientSide" | "webBasics" | "clientSideBasics";
export type CourseType = "distance" | "full-time";
export type FourDigitYear = `${number}${number}${number}${number}`;

export type LectureItems = CollectionEntry<"clientSideLectures">[];
export type CoursesItems = CollectionEntry<Collections>[];