/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'x-sm': '360px',  // Small Mobile
        'sm': '480px',     // Mobile
        'md': '768px',     // Tablet
        'lg': '1024px',    // Desktop
        'x-lg': '1440px',  //  Large Desktop
      },
      container: {
        center: true,
         
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
