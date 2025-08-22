import type { Config } from "tailwindcss";

const config: Config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        'emerald-teal': '#10b981',
        'emerald-teal-dark': '#059669',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space-grotesk)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "slide-up": {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "pulse-ring": {
          '0%': {
            transform: 'scale(0.33)',
            opacity: '1',
          },
          '80%, 100%': {
            transform: 'scale(2.33)',
            opacity: '0',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        // Advanced Premium Animations
        "morphing-gradient": {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        "floating-complex": {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(5deg)',
          },
          '50%': { 
            transform: 'translateY(-40px) translateX(-5px) rotate(-3deg)',
          },
          '75%': { 
            transform: 'translateY(-20px) translateX(-10px) rotate(3deg)',
          },
        },
        "pulse-glow": {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)',
          },
        },
        "rotate-3d": {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '33%': { transform: 'rotateX(360deg) rotateY(0deg) rotateZ(0deg)' },
          '66%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        "text-shimmer": {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        "particle-float": {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.6',
          },
          '25%': {
            transform: 'translate(30px, -30px) scale(1.1)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translate(-20px, -60px) scale(0.9)',
            opacity: '1',
          },
          '75%': {
            transform: 'translate(-40px, -30px) scale(1.05)',
            opacity: '0.7',
          },
        },
        "hologram": {
          '0%, 100%': {
            transform: 'rotateY(0deg) rotateX(0deg)',
            filter: 'hue-rotate(0deg)',
          },
          '25%': {
            transform: 'rotateY(5deg) rotateX(2deg)',
            filter: 'hue-rotate(90deg)',
          },
          '50%': {
            transform: 'rotateY(0deg) rotateX(5deg)',
            filter: 'hue-rotate(180deg)',
          },
          '75%': {
            transform: 'rotateY(-5deg) rotateX(2deg)',
            filter: 'hue-rotate(270deg)',
          },
        },
        "cyber-scan": {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'emerald-teal': 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
        'emerald-teal-dark': 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Premium Advanced Animations
        'morphing-gradient': 'morphing-gradient 8s ease infinite',
        'floating-complex': 'floating-complex 12s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'particle-float': 'particle-float 15s ease-in-out infinite',
        'hologram': 'hologram 8s ease-in-out infinite',
        'cyber-scan': 'cyber-scan 3s linear infinite',
      },
      boxShadow: {
        'neomorphic': '20px 20px 60px #0a0a0a, -20px -20px 60px #1a1a1a',
        'neomorphic-inset': 'inset 20px 20px 60px #0a0a0a, inset -20px -20px 60px #1a1a1a',
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        // Premium Shadow Effects
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
        'glow-intense': '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.4)',
        'holographic': '0 0 50px rgba(16, 185, 129, 0.3), inset 0 0 50px rgba(20, 184, 166, 0.1)',
        'cyber': '0 0 20px #10b981, 0 0 40px #10b981, 0 0 80px #10b981',
        'neon-emerald': '0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981, 0 0 20px #10b981',
      },
      // Advanced Color Utilities
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      // Perspective utilities for 3D effects
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
