import { formatLabels } from "@/data/courses";
import {
    getCourseMeta,
    getVariantPageData,
    variantPath,
} from "@utils/registry";
import type {
    BreadcrumbDropdownItem,
    BreadcrumbItem,
} from "@/types/Navigation";
import type {
    CoursesItems,
    CourseType,
    FourDigitYear,
    LectureItems,
} from "@/types/Courses";

/** Формат и год поступления — один уровень «форма и год» в хлебных крошках */
export interface BreadcrumbVariant {
    format: CourseType;
    year: FourDigitYear;
}

/**
 * Хлебные крошки для страниц курса: Курс › Форма и год.
 * «Главную» добавляет сам компонент Breadcrumbs, а текущую страницу
 * определяет вызывающий код (последний элемент списка остаётся без ссылки).
 */
export function variantBreadcrumbs(
    courseId: string,
    variant?: BreadcrumbVariant
): BreadcrumbItem[] {
    const meta = getCourseMeta(courseId);
    if (!meta) {
        return [];
    }

    const items: BreadcrumbItem[] = [
        { label: meta.title, href: variantPath(courseId) },
    ];
    if (variant) {
        items.push({
            label: `${formatLabels[variant.format]} форма, ${variant.year}`,
            href: variantPath(courseId, variant.format, variant.year),
        });
    }
    return items;
}

/** Порядок секций материалов — как на странице варианта курса (CourseLayout) */
const sectionOrder = ["important", "labs", "practice", "lecture", "rk"];

/**
 * Содержание варианта курса для выпадающего списка последней хлебной
 * крошки: материалы в том же порядке, что и на странице курса.
 * Лекции ведут на внешние ресурсы, текущий материал (currentEntryId)
 * отмечается галочкой.
 */
export async function variantContents(
    courseId: string,
    format: CourseType,
    year: FourDigitYear,
    currentEntryId?: string
): Promise<BreadcrumbDropdownItem[]> {
    const page = await getVariantPageData(courseId, format, year);
    if (!page) {
        return [];
    }

    const items: BreadcrumbDropdownItem[] = [];
    for (const type of sectionOrder) {
        const section = page.data[type];
        if (!section) {
            continue;
        }

        if (type === "lecture") {
            for (const lecture of section as LectureItems) {
                items.push({
                    label: lecture.data.title,
                    href: lecture.data.href,
                    external: true,
                });
            }
            continue;
        }

        // Работы секций сортируются по номеру, как на странице курса;
        // рубежный контроль сохраняет порядок коллекции и показывается без номера
        const works =
            type === "rk"
                ? (section as CoursesItems)
                : [...(section as CoursesItems)].sort(
                      (prev, next) =>
                          parseInt(prev.data.number) -
                          parseInt(next.data.number)
                  );
        for (const work of works) {
            const number =
                type === "rk" ? "" : `${work.data.number.padStart(2, "0")}. `;
            items.push({
                label: `${number}${work.data.title}`,
                href: `/labs/${work.id}`,
                isCurrent: work.id === `${courseId}/${currentEntryId}`,
            });
        }
    }
    return items;
}
