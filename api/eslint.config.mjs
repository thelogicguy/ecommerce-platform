import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021, // Ensure this matches your code's features
        sourceType: "module", // Use 'script' if not using modules
      },
    },
    rules: {
      "constructor-super": "off", // Disable this rule temporarily
      // Add any other rules you want to customize here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

