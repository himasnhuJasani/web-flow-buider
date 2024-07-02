module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx,css}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: '#2d2c3a',
				secondary: '#847fdf',
				tertiary: '#c9c8dd',
				background: '#222138',
				'border-color': '#333154',
				'font-color': '#f8f8f2',
				'input-bg': 'rgba(255, 255, 255, 0.08)',
				'workflow-color': '#6866ac',
			},
			fontFamily: {
				sans: ['system-ui', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
