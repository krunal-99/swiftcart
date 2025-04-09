import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  optimizeDeps: {
    include: ["@stripe/stripe-js"],
  },
  plugins: [react()],
});
