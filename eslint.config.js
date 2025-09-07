import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, ...globals.node } },

    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
]);