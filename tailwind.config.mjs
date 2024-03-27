import { nextui } from '@nextui-org/react'
import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

	],
	theme: {
		extend: {
			colors: {
				'areo-lightblue': "#639EA3",
				'areo-yellow': "#D4AC43",
				'areo-purple': "#A65575",
				'areo-lightgreen': "#B7CE63"
			},
			fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

		},
	},
	darkMode: "class",
	plugins: [
		nextui()	
	],
}
