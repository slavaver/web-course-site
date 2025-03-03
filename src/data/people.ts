const baseUrl = import.meta.env.BASE_URL;

type People = {
    id: string;
    name: string;
    fullName: string;
    imgUrl: string;
    contact: string;
    role?: string;
};

export const teachers: People[] = [
    {
        id: "t1",
        name: "Верещагин Владислав",
        fullName: "Верещагин Владислав Юрьевич",
        imgUrl: `${baseUrl}/assets/img/photos/slavaver.webp`,
        contact: "slavaver",
        role: "Доцент, к.т.н.",
    },
    {
        id: "t2",
        name: "Гнибеда Артем",
        fullName: "Гнибеда Артем Юрьевич",
        imgUrl: `${baseUrl}/assets/img/photos/gnibedaArtem.webp`,
        contact: "GnibedaArtemy",
        role: "Старший преподаватель",
    },
];

export const mentors: People[] = [
    {
        id: "m1",
        name: "Мелихова Ева",
        fullName: "Мелихова Ева-София Бориславовна",
        imgUrl: `${baseUrl}/assets/img/photos/sshultse.webp`,
        contact: "sshultse",
        role: "Ассистент преподавателя",
    },
    {
        id: "m2",
        name: "Хаметов Артём",
        fullName: "Хаметов Артём",
        imgUrl: `${baseUrl}/assets/img/photos/hametov.webp`,
        contact: "MacalllanS",
        role: "Ассистент преподавателя",
    },
    {
        id: "m3",
        name: "Бастун Андрей",
        fullName: "Бастун Андрей Артемович",
        imgUrl: "",
        contact: "qalqaa",
        role: "Наставник",
    },
    {
        id: "m4",
        name: "Старцев Виталий",
        fullName: "Старцев Виталий",
        imgUrl: `${baseUrl}/assets/img/photos/vitaliy.webp`,
        contact: "snitch_viy",
        role: "Наставник",
    },
    {
        id: "m5",
        name: "Самойленко Марк",
        fullName: "Самойленко Марк",
        imgUrl: "",
        contact: "a_maau",
        role: "Наставник",
    },
    {
        id: "m6",
        name: "Кудинов Данила",
        fullName: "Кудинов Данила",
        imgUrl: `${baseUrl}/assets/img/photos/kudinov.webp`,
        contact: "tvoykudinov",
        role: "Наставник",
    },
];
