/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pacifico: ['Pacifico', 'sans serif'],
				fugazOne: ['Fugaz One', 'sans serif'],
				tiltPrism: ['Tilt Prism Variable', 'sans serif'],
				rubickMono: ['Rubik Mono One', 'sans serif'],
				robotoCondensed: ['Roboto Condensed', 'sans serif'],
			},
			colors: {
				color_orange: '#FF6B00',
				color_blue1: '#19D2F1',
				color_pink1: '#F244C4',
				color_pink2: '#FFD3F3'
			}
		},
	},
	plugins: [],
}
