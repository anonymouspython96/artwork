module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // Regole custom per evitare magic values
    "no-magic-numbers": ["error", { ignore: [0, 1], ignoreArrayIndexes: true }],
    "no-magic-strings": "error",
    "@typescript-eslint/no-magic-numbers": ["error", { ignore: [-1, 0, 1, 2] }],

    // Best practices Vue
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "error",
    "vue/require-default-prop": "error",
  },
};
