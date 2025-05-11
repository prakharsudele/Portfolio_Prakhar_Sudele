import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio_Prakhar_Sudele/", // Replace with your actual GitHub repo name
  plugins: [react()],
});
