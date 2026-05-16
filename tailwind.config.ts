import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Exact Sample Page Colors
				'sample-purple': '#8A2BE2',
				'sample-blue': '#4169E1',
				'sample-teal': '#00CED1',
				'sample-green': '#25D366',
				'sample-stats': '#6A5ACD',
				'sample-bg-light': '#F8F9FF',
				'sample-bg-medium': '#F0F2FF',
				'sample-bg-dark': '#E8EBFF'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-overlay': 'var(--gradient-overlay)',
				'gradient-purple-blue': 'var(--gradient-purple-blue)',
				'gradient-green': 'var(--gradient-green)',
				'gradient-hero-bg': 'var(--gradient-hero-bg)',
				'gradient-section-bg': 'var(--gradient-section-bg)',
				'gradient-card-bg': 'var(--gradient-card-bg)',
				'gradient-button-primary': 'var(--gradient-button-primary)',
				'gradient-button-secondary': 'var(--gradient-button-secondary)',
				'gradient-button-accent': 'var(--gradient-button-accent)',
				'gradient-text-primary': 'var(--gradient-text-primary)',
				'gradient-text-secondary': 'var(--gradient-text-secondary)',
				'gradient-text-accent': 'var(--gradient-text-accent)',
				'gradient-border': 'var(--gradient-border)',
				'gradient-shadow': 'var(--gradient-shadow)'
			},
			boxShadow: {
				'primary': 'var(--shadow-primary)',
				'secondary': 'var(--shadow-secondary)',
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)'
			},
			transitionDuration: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'spring': 'var(--transition-spring)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					from: {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					from: {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-in-left': {
					from: {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'glow': {
					from: { boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)' },
					to: { boxShadow: '0 0 30px rgba(138, 43, 226, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
