import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jensecool/",
  assetsInclude: ["**/*.glb"], // Voeg dit toe om GLB-bestanden op te nemen
  server: {
    fs: {
      allow: ["."], // Kan nodig zijn om bestanden buiten de projectroot te serveren
    },
  },
});
