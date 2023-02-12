/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lyon Display', 'sans-serif'],
                'non-old': ['Non Old', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif']
            },
            maxWidth: {
                '3xl': '1920px',
            },
            fontSize: {
                '1.5xl': ['22px', '30px'],
                '4.5xl': ['42px', '50px'],
            },
            colors: {
                'primary': {
                    600: '#F2EBDC', //brand
                },
                'secondary': {
                    600: '#6C7C59', //brand
                },
                'dark': {
                    300: '#D5D3CF',
                    500: '#B5B5B5',
                    700: '#707070',
                },
            },
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss')
    ],
}