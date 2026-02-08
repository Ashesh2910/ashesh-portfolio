/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000000", // Was #050816, moving to pure black
                secondary: "#aaa6c3",
                tertiary: "#101010", // Darker card bg
                "black-100": "#050505",
                "black-200": "#020202",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/bg-stars.png')", // Fallback or overlay
            },
        },
    },
    plugins: [],
}
