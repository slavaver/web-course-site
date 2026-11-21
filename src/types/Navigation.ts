/** Один уровень хлебных крошек */
export interface BreadcrumbItem {
    /** Подпись уровня */
    label: string;
    /**
     * URL страницы уровня без base, например "/labs/web-basics/".
     * Последний элемент считается текущей страницей и ссылкой не делается.
     */
    href?: string;
}
