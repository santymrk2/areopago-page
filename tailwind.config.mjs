/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite-react/lib/esm/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'areo-lightblue': "#639EA3",
				'areo-yellow': "#D4AC43",
				'areo-purple': "#A65575",
				'areo-lightgreen': "#B7CE63"
			},
			fontFamily:{
				sans: ['"Montserrat"', 'sans-serif']
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
