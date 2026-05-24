// @ts-check
import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
      }),
    ],
  },
  output: "static",
});
