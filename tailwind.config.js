import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                primary: "#0d1430",
                'primary-tint' : {
                    '900': '#0d1430',
                    '800': '#202843',
                    '700': '#343d56',
                    '600': '#4a5269',
                    '500': '#62697e',
                    '400': '#7a8092',   
                },
                'primary-shade' : {
                    '100': '#0d1430',
                    '200': '#0a1028',
                    '300': '#070c21',
                    '400': '#05081a',
                    '500': '#030513',
                    '600': '#02030c',
                },
                accent: "#f45f89",
                secondary: "#080E2C"
            },
            fontFamily: {
                // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins']
            },
        },
    },

    plugins: [forms],
};
