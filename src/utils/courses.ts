import type { FourDigitYear, CourseType } from "@/types/Courses";
export function filterCourse(year: FourDigitYear, type: CourseType) {
    return (data: { id: string }) => data.id.includes(`${type}/${year}`);
}
