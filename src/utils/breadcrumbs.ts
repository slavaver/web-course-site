import { formatLabels } from "@/data/courses";
import { getCourseMeta, variantPath } from "@utils/registry";
import type { BreadcrumbItem } from "@/types/Navigation";
import type { CourseType, FourDigitYear } from "@/types/Courses";

/**
 * Хлебные крошки для страниц курса: Курс › Формат › Год.
 * Каждый уровень ссылается на свою страницу; «Главную» добавляет сам
 * компонент Breadcrumbs, а текущую страницу определяет вызывающий код
 * (последний элемент списка остаётся без ссылки).
 */
export function variantBreadcrumbs(
    courseId: string,
    format?: CourseType,
    year?: FourDigitYear
): BreadcrumbItem[] {
    const meta = getCourseMeta(courseId);
    if (!meta) {
        return [];
    }

    const items: BreadcrumbItem[] = [
        { label: meta.title, href: variantPath(courseId) },
    ];
    if (format) {
        items.push({
            label: `${formatLabels[format]} форма`,
            href: variantPath(courseId, format),
        });
    }
    if (format && year) {
        items.push({
            label: year,
            href: variantPath(courseId, format, year),
        });
    }
    return items;
}
