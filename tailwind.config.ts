import type { Config } from "tailwindcss";

export default {
darkMode: ["class"],
content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
marsala: "hsl(var(--marsala))",
bege: "hsl(var(--bege))",
paper: "hsl(var(--paper))",
ink: "hsl(var(--ink))",
cream: "hsl(var(--cream))",
wine: "hsl(var(--wine))",
azul: "hsl(var(--azul))",
"washi-pink": "hsl(var(--washi-pink))",
"washi-green": "hsl(var(--washi-green))",
"washi-blue": "hsl(var(--washi-blue))",
"washi-yellow": "hsl(var(--washi-yellow))",
"washi-red": "hsl(var(--washi-red))",
"post-it-yellow": "hsl(var(--post-it-yellow))",
"post-it-pink": "hsl(var(--post-it-pink))",
"post-it-green": "hsl(var(--post-it-green))",
"post-it-blue": "hsl(var(--post-it-blue))",
sidebar: {
DEFAULT: "hsl(var(--sidebar-background))",
foreground: "hsl(var(--sidebar-foreground))",
primary: "hsl(var(--sidebar-primary))",
"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
accent: "hsl(var(--sidebar-accent))",
"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
border: "hsl(var(--sidebar-border))",
ring: "hsl(var(--sidebar-ring))",
},
},
fontFamily: {
display: ['Lora', 'serif'],
body: ['"Source Sans 3"', 'sans-serif'],
handwritten: ['Caveat', 'cursive'],
typewriter: ['"Special Elite"', 'cursive'],
},
borderRadius: {
lg: "var(--radius)",
md: "calc(var(--radius) - 2px)",
sm: "calc(var(--radius) - 4px)",
},
keyframes: {
"accordion-down": {
from: {
height: "0",
},
to: {
height: "var(--radix-accordion-content-height)",
},
},
"accordion-up": {
from: {
height: "var(--radix-accordion-content-height)",
},
to: {
height: "0",
},
},
"fade-in-rotate": {
from: {
opacity: "0",
transform: "rotate(-3deg) translateY(10px)",
},
to: {
opacity: "1",
transform: "rotate(0deg) translateY(0)",
},
},
"peel-in": {
from: {
opacity: "0",
transform: "rotateX(30deg) translateY(20px)",
},
to: {
opacity: "1",
transform: "rotateX(0) translateY(0)",
},
},
"stamp-in": {
"0%": {
opacity: "0",
transform: "rotate(-15deg) scale(1.5)",
},
"60%": {
opacity: "1",
transform: "rotate(-6deg) scale(0.95)",
},
"100%": {
opacity: "0.85",
transform: "rotate(-8deg) scale(1)",
},
},
"paper-float": {
"0%, 100%": {
transform: "translateY(0) rotate(var(--tw-rotate, 0deg))",
},
"50%": {
transform: "translateY(-4px) rotate(var(--tw-rotate, 0deg))",
},
},
},
animation: {
"accordion-down": "accordion-down 0.2s ease-out",
"accordion-up": "accordion-up 0.2s ease-out",
"fade-in-rotate": "fade-in-rotate 0.6s ease-out both",
"peel-in": "peel-in 0.5s ease-out both",
"stamp-in": "stamp-in 0.4s ease-out both",
"paper-float": "paper-float 3s ease-in-out infinite",
},
},
},
plugins: [require("tailwindcss-animate")],
} satisfies Config;
