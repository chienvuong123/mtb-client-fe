/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,jsx,ts,tsx,mdx,css}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                green500: "#06BD7D",
                green200: "#EFFBF7",
                green600: "#1FC583",
                green100: "#EFFBF7",
                white: "#fff",
                neutralsGray225: "var(--Neutrals-Gray-25, #F6F7F9)",
                black: "#181C26",
                header: rgba(115, 115, 115, 1),

            },
            colors: {
                white: "#fff",
                gray900: "#141522",
                gray800: "#1C252E",
                gray700: "#404040",
                gray500: "#637381",
                trendUp: '#52C41A',
                trendDown: '#FF4D4F',
                green600: "#1FC583",
            },
        },
        fontFamily: {
            manrope: ["Manrope", "sans-serif"],
        },
    },
};
