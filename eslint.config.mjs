// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      "no-console": "off", // allow console.log and console.error
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
]);
