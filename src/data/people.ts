const baseUrl = import.meta.env.BASE_URL;

type People = {
    name: string;
    fullName: string;
    imgUrl: string;
    contact?: string;
    role: string;
};

export const teachers: People[] = [
    {
        name: "Верещагин Владислав",
        fullName: "Верещагин Владислав Юрьевич",
        imgUrl: `${baseUrl}/assets/img/photos/slavaver.webp`,
        role: "Доцент, к.т.н.",
    },
    {
        name: "Гнибеда Артем",
        fullName: "Гнибеда Артем Юрьевич",
        imgUrl: `${baseUrl}/assets/img/photos/gnibedaArtem.webp`,
        role: "Старший преподаватель",
    },
];

export const mentors: People[] = [
    {
        name: "Мелихова Ева",
        fullName: "Мелихова Ева-София Бориславовна",
        imgUrl: `${baseUrl}/assets/img/photos/sshultse.webp`,
        contact: "shultsee",
        role: "Ассистент преподавателя",
    },
    {
        name: "Хаметов Артём",
        fullName: "Хаметов Артём",
        imgUrl: `${baseUrl}/assets/img/photos/hametov.webp`,
        contact: "MacalllanS",
        role: "Ассистент преподавателя",
    },
    {
        name: "Бастун Андрей",
        fullName: "Бастун Андрей Артемович",
        imgUrl: "",
        contact: "qalqa_dev",
        role: "Наставник",
    },
    {
        name: "Старцев Виталий",
        fullName: "Старцев Виталий",
        imgUrl: `${baseUrl}/assets/img/photos/vitaliy.webp`,
        contact: "snitch_viy",
        role: "Наставник",
    },
    {
        name: "Самойленко Марк",
        fullName: "Самойленко Марк",
        imgUrl: "",
        contact: "a_maau",
        role: "Наставник",
    },
    {
        name: "Кудинов Данила",
        fullName: "Кудинов Данила",
        imgUrl: `${baseUrl}/assets/img/photos/kudinov.webp`,
        contact: "tvoykudinov",
        role: "Наставник",
    },
];
