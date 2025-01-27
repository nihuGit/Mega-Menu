/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'], // Update this to match your project's file structure
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#16A34A", // Main green color used for headings and buttons
          hover: "#15803D", // Darker green for hover states
          dark: "#000", // black color
        },
        accent: {
          light: "#FEF9C3", // Soft yellow for the webinar section
        },
        neutral: {
          background: "#F5F7F7", // Body background color
          card: "#F3F4F6", // Card background color          
          footer: "#E5E7EB", // Footer background         
          border: "#D1D5DB", // Input border color        
          borderDark: "#3f036aed", // Input border color        
          placeholder: "#9CA3AF", // Placeholder text color          
          text: "#1F2937", // Main text color   
          subtext: "#4B5563", // Secondary text color
          promoButton: '#EE5921', 
          promoborder: '#f9b17b ', 
          promoBack: '#fdebdd', 
          BigCardBack: '#97a1b0', 
          BigCardViolet: '#6317a9', 

        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Choose a clean, readable font
      },
      spacing: {
        '4.5': '1.125rem', // Custom spacing for slight adjustments
      },
      boxShadow: {
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)", // Shadow for the inner card area
      },
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

