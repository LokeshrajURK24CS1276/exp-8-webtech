import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base is the GitHub Pages repository name
export default defineConfig({
  plugins: [react()],
  base: "/exp-8-webtech/"
});
