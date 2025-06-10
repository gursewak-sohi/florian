/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    safelist: [
        'snippets-modal__title'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lyon Display', 'sans-serif'],
                'non-old': ['Non Old', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                'roboto-condensed': ['Roboto Condensed', 'sans-serif']
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
                    600: '#f8f6f3', //brand - Original: #F9F3E5 (Changed to be lighter)
                    700: '#F1EBDD',
                    800: '#eeeae3',
                    900: '#e5ded1', 
                },
                'secondary': {
                    600: '#6C7C59', //brand
                },
                'dark': {
                    300: '#D5D3CF',
                    400: '#DADADA',
                    500: '#B5B5B5',
                    700: '#707070',
                },
            },
            content: {
                'arrowRightIcon': 'url("/assets/images/svg/arrow-right-dark.svg")',
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