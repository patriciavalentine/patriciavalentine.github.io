import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes the site work both on username.github.io and project pages like username.github.io/repo-name/
export default defineConfig({
  plugins: [react()],
  base: "./"
});
