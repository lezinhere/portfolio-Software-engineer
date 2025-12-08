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
                background: "#FFFBF5", // Cream background
                foreground: "#000000",
                primary: {
                    DEFAULT: "#000000",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#f1f5f9",
                    foreground: "#0f172a",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "#f1f5f9",
                    foreground: "#64748b",
                },
                accent: {
                    DEFAULT: "#FE402E", // The red/orange accent (c1)
                    foreground: "#FFFFFF",
                },
                popover: {
                    DEFAULT: "#FFFBF5",
                    foreground: "#000000",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#000000",
                },
                c1: "#FE402E",
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['"Source Serif 4"', 'serif'],
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
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.8s ease-out",
                marquee: "marquee 15s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
