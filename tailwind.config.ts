import type { Config } from "tailwindcss";
import { COLORS } from "./styles/color";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ...COLORS,
            },
            fontFamily: {
                pretendard: ["var(--font-pretendard)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
