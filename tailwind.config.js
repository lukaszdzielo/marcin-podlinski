/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		colors: {
			primary: '#E53935',
			gray: {
				100: '#F5F5F5',
				800: '#424242',
				900: '#191919',
			}
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '16px',
				sm: '18px',
				md: '24px',
				lg: '16px',
				xl: '30px',
				xxl: '40px',
			},
			maxWidth: {
				xl: 1234,
			},
		},
		// spacing: {
		// '1': '0.25rem',
		// '2': '0.5rem',
		// '3': '0.75rem',
		// '4': '1rem',
		// '5': '1.25rem',
		// '6': '1.5rem',
		// '7': '1.75rem',
		// '8': '2rem',
		// '9': '2.25rem',
		// '10': '2.5rem',
		// '11': '2.75rem',
		// '12': '3rem',
		// '13': '3.25rem',
		// '14': '3.5rem',
		// '15': '3.75rem',
		// '16': '4rem',
		// '17': '4.25rem',
		// '18': '4.5rem',
		// '19': '4.75rem',
		// '20': '5rem',
		// '21': '5.25rem',
		// '22': '5.5rem',
		// '23': '5.75rem',
		// '24': '6rem',
		// '25': '6.25rem',
		// '26': '6.5rem',
		// '27': '6.75rem',
		// '28': '7rem',
		// '29': '7.25rem',
		// '30': '7.5rem',
		// '31': '7.75rem',
		// '32': '8rem',
		// '33': '8.25rem',
		// '34': '8.5rem',
		// '35': '8.75rem',
		// '36': '9rem',
		// '37': '9.25rem',
		// '38': '9.5rem',
		// '39': '9.75rem',
		// '40': '10rem',
		// },
		opacity: {},
		fontFamily: {
			'sans': 'Poppins, sans-serif',
			'display': 'Havelock Titling, Poppins, sans-serif',
		},
		// fontSize: {
		// 	base: ['1rem', '1.4'],
		// },
		// lineHeight: {},
		fontWeight: {
			normal: '300',
			bold: '500',
		},
		letterSpacing: {},
		boxShadow: {},
		extend: {

		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		({ addComponents, theme }) => {
			addComponents({
				".container": {
					marginInline: "auto",
					paddingInline: theme("spacing.4"),
					// "@apply px-4 mx-auto": {},

					// Breakpoints
					"@screen sm": { maxWidth: '540px' },
					"@screen md": { maxWidth: '720px' },
					"@screen lg": { maxWidth: '960px' },
					"@screen xl": { maxWidth: '1140px' },
					"@screen xxl": { maxWidth: '1320px' },
				},
			});
		},
	],
}

