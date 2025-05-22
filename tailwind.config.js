/** @type {import('tailwindcss').Config} */
export default {
  // Dit pad vertelt Tailwind welke bestanden het moet scannen op Tailwind classes.
  // Zorg ervoor dat dit overeenkomt met de locatie van je React componenten (bijv. Hero.jsx, Position.jsx).
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dit omvat .jsx bestanden in de src map en submappen
  ],
  theme: {
    extend: {
      // Definieer hier je custom keyframes
      keyframes: {
        textRotate1: {
          "0%, 40%": { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
          "60%, 100%": {
            transform: "translate3d(0, -100%, 0) rotateX(-90deg)",
          },
        },
        textRotate2: {
          "0%, 40%": { transform: "translate3d(0, 100%, 0) rotateX(-90deg)" },
          "60%, 100%": { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
        },
      },
      // Koppel je keyframes aan animatie-utility classes
      animation: {
        textRotate1: "textRotate1 6s infinite", // Naam van de animatie: keyframe naam, duur, herhaling
        textRotate2: "textRotate2 6s infinite", // Naam van de animatie: keyframe naam, duur, herhaling
      },
    },
  },
  plugins: [],
};
