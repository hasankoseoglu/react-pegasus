/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container:{
            center:true,
        },
        colors: {
            'bg-gray' : '#FAFAFE',
            'pegasus-yellow' : '#F4AE00',
            'pegasus-red' : '#DC2C2B',
            'pegasus-white':'#FFFFFF',
            'pegasus-yellow-200':'#fdcb6e',
        },
        extend: {},
    },
    plugins: [],
}