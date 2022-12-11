/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#7c3aed",

					secondary: "#d1d5db",

					accent: "#facc15",

					neutral: "#111827",

					"base-100": "#ffffff",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	theme: {
		extend: {
			fontFamily: {
				monospace: ["'Space Mono', monospace"],
			},
		},
	},
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		require("daisyui"),
		require("@tailwindcss/line-clamp"),
	],
};
