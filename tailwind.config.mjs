/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pacifico: ['Pacifico', 'sans serif'],
			},
			colors: {
				color_orange: '#FF6B00'
			}
		},
	},
	plugins: [],
}
