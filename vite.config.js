import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on GitHub Pages, Vercel or any static host without changes.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
