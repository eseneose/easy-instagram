const tailwindcss = require("tailwindcss");

module.exports = {

    mode: 'jit',
    content: [
        './pages/**/*.{js,jsx,ts,tsx,vue}',
        './components/**/*.{js,jsx,ts,tsx,vue}',
    ],

    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
}