/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "sl-primary": "#F67F20",
                "sl-secondary": "#003048",
                "sl-light": "#FEF2E9",
                "sl-stroke": "#E5E5E5",
                "sl-grey": "#777777",
            },
        },
    },
    plugins: [],
}
