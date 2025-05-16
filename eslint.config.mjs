// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },

//   pluginReact.configs.flat.recommended,
// ]);

// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   // Общие правила для всего JS/JSX
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: {
//       globals: globals.browser,
//     },
//   },

//   // Node.js правила для functions
//   {
//     files: ["functions/**/*.{js,mjs,cjs}"],
//     env: {
//       node: true,
//       es6: true,
//     },
//     languageOptions: {
//       globals: globals.node,
//       parserOptions: {
//         ecmaVersion: 2018,
//       },
//     },
//     rules: {
//       // можно добавить node-специфичные правила
//     },
//   },

//   // React рекомендуемые правила
//   pluginReact.configs.flat.recommended,
// ]);

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
      },
    },
  },

  {
    files: ["functions/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node, // тут задаём node-глобалы, вместо env.node = true
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
    rules: {
      // node-специфичные правила
    },
  },

  pluginReact.configs.flat.recommended,
]);
