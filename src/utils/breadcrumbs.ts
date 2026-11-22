import { formatLabels } from "@/data/courses";
import { getCourseMeta, variantPath } from "@utils/registry";
import type { BreadcrumbItem } from "@/types/Navigation";
import type { CourseType, FourDigitYear } from "@/types/Courses";

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
