import { getCollection } from "astro:content";
import courses, { formatLabels } from "@/data/courses";
import type { CourseMeta } from "@/data/courses";
import type { CourseType, FourDigitYear, CoursesItems } from "@/types/Courses";

export interface CourseFormatInfo {
    format: CourseType;
    label: string;
    /** Все годы, для которых есть материалы, от нового к старому */
    years: FourDigitYear[];
    /** Год, который показывается по умолчанию для этого формата */
    currentYear: FourDigitYear;
}

export interface CourseInfo extends CourseMeta {
    formats: CourseFormatInfo[];
}

/** Ссылки и подписи варианта курса, готовые для передачи в VariantNotice */
export interface VariantContext {
    courseTitle: string;
    formatLabel: string;
    year: FourDigitYear;
    isCurrent: boolean;
    currentYear: FourDigitYear;
    /** Страница текущего года этого же формата (без года в URL) */
    currentUrl: string;
    /** Хаб курса: страница со всеми форматами и годами */
    hubUrl: string;
    otherFormats?: { label: string; url: string }[];
}

/**
 * Точечное закрепление «текущего» года для курса/формата.
 * По умолчанию текущим считается самый свежий год в src/courses —
 * достаточно добавить папку с новым годом, и сайт обновится сам.
 * Используйте, если материалы следующего года уже загружены,
 * но семестр ещё не начался, например:
 * { "web-basics": { "full-time": "2025" } }
 */
const currentYearOverrides: Partial<
    Record<string, Partial<Record<CourseType, FourDigitYear>>>
> = {};

/** Порядок форматов в списках и меню */
const formatOrder: CourseType[] = ["full-time", "distance"];

function isFormat(value: string): value is CourseType {
    return (formatOrder as string[]).includes(value);
}

function isYear(value: string): value is FourDigitYear {
    return /^\d{4}$/.test(value);
}

/**
 * id записей коллекций выглядит как "full-time/2025/laba01"
 * (путь относительно src/courses/<курс>/ без расширения).
 */
export function parseEntryId(id: string): {
    format: CourseType;
    year: FourDigitYear;
    name: string;
} | null {
    const parts = id.split("/");
    if (parts.length < 3 || !isFormat(parts[0]) || !isYear(parts[1])) {
        return null;
    }
    return {
        format: parts[0],
        year: parts[1],
        name: parts.slice(2).join("/"),
    };
}

export function getCourseMeta(courseId: string): CourseMeta | undefined {
    return courses.find((course) => course.id === courseId);
}

/**
 * Обнаруживает все варианты (курс × формат × год) по содержимому коллекций
 * и определяет текущий год для каждого формата.
 */
export async function getCoursesInfo(): Promise<CourseInfo[]> {
    return Promise.all(
        courses.map(async (course) => {
            const entries = await getCollection(course.collection);
            const yearsByFormat = new Map<CourseType, Set<FourDigitYear>>();
            for (const entry of entries) {
                const parsed = parseEntryId(entry.id);
                if (!parsed) continue;
                const years = yearsByFormat.get(parsed.format) ?? new Set();
                years.add(parsed.year);
                yearsByFormat.set(parsed.format, years);
            }

            const formats: CourseFormatInfo[] = formatOrder
                .filter((format) => yearsByFormat.has(format))
                .map((format) => {
                    const years = [...(yearsByFormat.get(format) ?? [])]
                        .sort()
                        .reverse();
                    const override = currentYearOverrides[course.id]?.[format];
                    const currentYear =
                        override && years.includes(override)
                            ? override
                            : years[0];
                    return {
                        format,
                        label: formatLabels[format],
                        years,
                        currentYear,
                    };
                });

            return { ...course, formats };
        })
    );
}

export async function getCourseInfo(
    courseId: string
): Promise<CourseInfo | undefined> {
    const infos = await getCoursesInfo();
    return infos.find((info) => info.id === courseId);
}

/** URL варианта курса (без base): /labs/<курс>/[<формат>/[<год>/]] */
export function variantPath(
    courseId: string,
    format?: CourseType,
    year?: FourDigitYear
): string {
    if (!format) return `/labs/${courseId}/`;
    if (!year) return `/labs/${courseId}/${format}/`;
    return `/labs/${courseId}/${format}/${year}/`;
}

/** Материалы варианта с id, дополненными именем курса (для ссылок /labs/<курс>/...) */
export async function getVariantEntries(
    courseId: string,
    format: CourseType,
    year: FourDigitYear
): Promise<CoursesItems> {
    const course = getCourseMeta(courseId);
    if (!course) {
        throw new Error(`Неизвестный курс: ${courseId}`);
    }
    const entries = await getCollection(
        course.collection,
        (entry) =>
            entry.id === `${format}/${year}` ||
            entry.id.startsWith(`${format}/${year}/`)
    );
    return entries.map((entry) => ({
        ...entry,
        id: `${courseId}/${entry.id}`,
    })) as CoursesItems;
}

export interface VariantPageData {
    title: string;
    description: string;
    data: Record<string, CoursesItems[number][]>;
    variant: VariantContext;
}

/**
 * Собирает всё необходимое для страницы варианта курса
 * (название, описание, сгруппированные материалы и контекст варианта).
 * Возвращает null, если такого варианта не существует.
 */
export async function getVariantPageData(
    courseId: string,
    format: CourseType,
    year: FourDigitYear
): Promise<VariantPageData | null> {
    const info = await getCourseInfo(courseId);
    const formatInfo = info?.formats.find((item) => item.format === format);
    if (!info || !formatInfo || !formatInfo.years.includes(year)) {
        return null;
    }

    const entries = await getVariantEntries(courseId, format, year);
    const data = Object.groupBy(entries, ({ data }) => data.type);

    const variant: VariantContext = {
        courseTitle: info.title,
        formatLabel: formatInfo.label,
        year,
        isCurrent: year === formatInfo.currentYear,
        currentYear: formatInfo.currentYear,
        currentUrl: variantPath(courseId, format),
        hubUrl: variantPath(courseId),
        otherFormats: info.formats
            .filter((item) => item.format !== format)
            .map((item) => ({
                label: item.label,
                url: variantPath(courseId, item.format),
            })),
    };

    return { title: info.title, description: info.description, data, variant };
}
