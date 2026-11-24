import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom domain https://www.connollycontracts.ie/ (see public/CNAME)
export default defineConfig({
  base: "/",
  plugins: [react()],
});
