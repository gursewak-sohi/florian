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
                '1.1xl': ['17px', '23px'],
                '1.5xl': ['22px', '32px'],
                '2.5xl': ['26px', '32px'],
                '3.5xl': ['32px', '38px'],
                '4.5xl': ['42px', '50px'],
            },
            colors: {
                'primary': {
                    600: '#F9F3E5', //brand
                    700: '#F1EBDD', 
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
            translate: {
                55: '55%'
            }
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss')
    ],
}