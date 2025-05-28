import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
    // No plugins or extends needed from @eslint/js — already covered by default
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]);
