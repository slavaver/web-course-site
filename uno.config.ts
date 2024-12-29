import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify()],

    safelist: ["dark", "light"],
    theme: {
        colors: {
            text: {
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                tertiary: "var(--color-text-tertiary)",
            },
            bg: {
                screen: "var(--color-bg-screen)",
                menu: "var(--color-bg-menu)",
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                tertiary: "var(--color-bg-tertiary)",
                accent_first: "var(--color-bg-accent-first)",
                accent_second: "var(--color-bg-accent-second)",
                hover: "#F71365",
                active: "#B70E4B",
            },
            hover: {
                primary: "var(--color-bg-accent-second)",
                secondary: "#F71365",
            },
            active: {
                primary: "var(--color-bg-primary)",
                secondary: "#B70E4B",
            },
            border: "var(--color-border)",
        },
        fontFamily: {
            texts: ["Gilroy", "sans-serif"],
            titles: ["NextArt", "sans-serif"],
        },
    },

    rules: [
        [
            "light",
            {
                "--color-text-primary": "#FFFFFF",
                "--color-text-secondary": "#0B163B",
                "--color-text-tertiary": "#0752FF",
                "--color-bg-screen": "#F6FBFF",
                "--color-bg-menu": "#203EA999",
                "--color-bg-primary": "#203EA9",
                "--color-bg-secondary": "#4969DC",
                "--color-bg-tertiary": "#D4DDFF",
                "--color-bg-accent-first": "#2653BA",
                "--color-bg-accent-second": "#FF5391",
                "--color-border": "#F6FBFF",
            },
        ],
        [
            "dark",
            {
                "--color-text-primary": "#FFFFFF",
                "--color-text-secondary": "#0B163B",
                "--color-text-tertiary": "#C5D6FF",
                "--color-bg-screen": "#01001C",
                "--color-bg-menu": "#0B163B99",
                "--color-bg-primary": "#0B163B",
                "--color-bg-secondary": "#3A4F96",
                "--color-bg-tertiary": "#10215A",
                "--color-bg-accent-first": "#10215A",
                "--color-bg-accent-second": "#FF5391",
                "--color-border": "#F6FBFF",
            },
        ],
    ],
    shortcuts: {
        title: "text-center mb-10",
        userActionsLink:
            "transition p-5 rounded-[10px] hover:bg-hover-primary active:bg-active-primary",
        userActions:
            "transition hover:bg-hover-primary  active:bg-active-primary",
        userActionsLinkAlt:
            "transition hover:bg-hover-secondary  active:bg-hover-secondary",
    },
    preflights: [
        {
            getCSS: () => `
            @font-face {
                font-family: "Gilroy";
                src: url(/src/assets/fonts/gilroy/Gilroy-Regular.ttf);
                font-weight: 400;
            }

            @font-face {
                font-family: "Gilroy";
                src: url("/src/assets/fonts/gilroy/Gilroy-Medium.ttf");
                font-weight: 500;
            }
                
            @font-face {
                font-family: "NextArt";
                src: url("/src/assets/fonts/nextart/NEXTART_Regular.otf");
                font-weight: 400;
            }
                
            @font-face {
                font-family: "NextArt";
                src: url("/src/assets/fonts/nextart/NEXTART_SemiBold.otf");
                font-weight: 600;
            }

            @font-face {
                font-family: "NextArt";
                src: url("/src/assets/fonts/nextart/NEXTART_Bold.otf");
                font-weight: 700;
            }

            h1,h2,h3 {
                font-family: "NextArt", sans-serif;
            }
            h1 {
                font-size: 82px;
                font-weight: 700;
            }
            h2 {
                font-size: 48px;
                font-weight: 700;
            }
            h3{
                line-height: 2rem;
                font-size: 32px;
                font-weight: 600;
            }

            p, a, span, label{
                transition: all 0.2s ease-in-out;
                font-size:20px;
                font-weight: 400;
            }
            select, input{
                transition: all 0.2s ease-in-out;
                appearance: none;
                background: var(--color-bg-screen);
                border: 1px solid var(--color-border);
                color: var(--color-text-primary);
                font-size:20px;
                padding: 20px;
                border-radius: 20px;
                width: 100%;
            }

            div.search-box:has(input.search){
                position: relative;
            }

            div.search-box:has(input.search):after{
                content: "";
                position: absolute;
                top: 25px;
                right: 15px;
                width: 21px;
                height: 20px;
                background: url("/src/assets/img/search.svg") center no-repeat;
            }

            div.custom-select-box:has(select.custom-select){
                display: flex;
                flex-direction: column;
                position: relative;
            }

            div.custom-select-box:has(select.custom-select)::after{
                transition: all 0.2s ease-in-out;
                content: "";
                position: absolute;
                top: 25px;
                right: 15px;
                width: 21px;
                height: 20px;
                background: url("/src/assets/img/cheveron-down.svg") center no-repeat;
            }

            select:hover, input:hover{
                background: var(--color-bg-accent-second);
            }

            select:focus, input:focus{
                outline:none;
                background: var(--color-bg-primary);
            }

            @media(max-width: 1200px) {
                h1 {
                    font-size: 72px;
                }
                h2 {
                    font-size: 40px;
                }
                h3{
                    font-size: 24px;
                }
                p, a, span, label{
                    font-size:18px;
                }
            }
                @media(max-width: 768px) {
                h1 {
                    font-size: 32px;
                }
                h2 {
                    font-size: 28px;
                }
                h3{
                    font-size: 24px;
                }
                p, a, span, label{
                    font-size:14px;
                }
            }
            `,
        },
    ],
});
