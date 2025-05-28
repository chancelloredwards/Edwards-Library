// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            colors: {
                burgundy: {
                    50: '#fdf8f8',
                    100: '#f6eaea',
                    300: '#d4a4a4',
                    700: '#7c2d2d',
                    800: '#611c1c',
                    900: '#4a1414',
                },
            },
            fontFamily: {
                serif: ['Georgia', 'Times New Roman', 'serif'],
            },
        },
    },
    plugins: [],
};
