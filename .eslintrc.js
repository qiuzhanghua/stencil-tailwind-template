module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:@stencil-community/recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-unused-vars": "off",
    "no-use-before-define": "warn",
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
  },
};
