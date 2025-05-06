// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: require('tailwind-rn/unsupported-core-plugins'),
// }

export default {
  content: [
    "./App.js", // Если Tailwind используется в основном файле
    "./src/**/*.{js,jsx,ts,tsx}", // Для всех файлов в папке src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // eslint-disable-next-line no-undef
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
