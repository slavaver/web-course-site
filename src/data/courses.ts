import type { Collections, CourseType } from "@/types/Courses";

export interface CourseMeta {
    id: string;
    title: string;
    description: string;
    collection: Collections;
}

/**
 * Реальные курсы сайта. Форматы (очная/дистанционная) и доступные годы
 * не задаются здесь вручную — они автоматически обнаруживаются из содержимого
 * src/courses/<id>/<формат>/<год>/ (см. src/utils/registry.ts).
 */
const courses: CourseMeta[] = [
    {
        id: "web-basics",
        title: "Основы веб-технологий",
        description:
            "Изучаем, как работает браузер, рассматриваем адаптивную верстку и ключевые принципы доступности",
        collection: "webBasics",
    },
    {
        id: "client-side-basics",
        title: "Основы веб-разработки на клиенте",
        description:
            "Изучаем основы JavaScript и знакомимся с различными API, предоставляемыми браузером",
        collection: "clientSideBasics",
    },
    {
        id: "client-side",
        title: "Веб-разработка на клиенте",
        description:
            "Изучаем основы работы с типами и язык TypeScript, а также осваиваем применение фреймворка Vue",
        collection: "clientSide",
    },
];

export const archiveMeta = {
    id: "archive",
    title: "Архив",
    description: "Здесь вы можете найти старые варианты курсов",
};

export const formatLabels: Record<CourseType, string> = {
    "full-time": "Очная",
    "distance": "Дистанционная",
};

export default courses;
