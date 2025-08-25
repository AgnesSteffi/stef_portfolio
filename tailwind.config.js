/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: 'class',
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
background: "#000000",
primary: "#ff0000",
card: "#1a1a1a",
'red-glow': 'rgba(220, 38, 38, 0.25)',
border: "hsl(240 5.9% 90%)",
},
boxShadow: {
'red-glow': '0 0 15px 5px rgba(220, 38, 38, 0.4)',
},
borderRadius: {
'2xl': '1.5rem',
},
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},
},
},
plugins: [],
}