//  eslint.config.js

export default [
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Define the globals provided by the environments you use
        window: "readonly",
        document: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        global: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        // browser: true,
        // node: true,
        // es2021: true
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
