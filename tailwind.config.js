/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["selector", 'class'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#f0f4ff',
  				'100': '#dde8ff',
  				'200': '#c2d4ff',
  				'300': '#9db8ff',
  				'400': '#768eff',
  				'500': '#5b6bff',
  				'600': '#4a4eff',
  				'700': '#3f3cf7',
  				'800': '#322fcc',
  				'900': '#2a2799',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neutral: {
  				'100': '#f8f9fa',
  				'200': '#e9ecef',
  				'300': '#dee2e6',
  				'400': '#ced4da',
  				'500': '#adb5bd',
  				'600': '#6c757d',
  				'700': '#495057',
  				'800': '#343a40',
  				'900': '#212529'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': '#0ea5e9',
  				'2': '#0284c7',
  				'3': '#0369a1',
  				'4': '#075985',
  				'5': '#0c4a6e'
  			},
  			brand: 'hsl(var(--brand))',
  			'brand-foreground': 'hsl(var(--brand-foreground))'
  		},
  		backgroundColor: {
  			'neutral-900': '#171717'
  		},
  		textColor: {
  			'neutral-900': '#171717'
  		},
  		borderRadius: {
  			button: '4px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'pulse-hover': 'pulse-hover 8s ease-in-out infinite'
  		},
  		keyframes: {
  			'pulse-hover': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-2%)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = config
