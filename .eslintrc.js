module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [],
  rules: {
    "no-shadow": "off",
    // TODO: process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    "no-debugger": "off",
    "comma-dangle": ["error", "always-multiline"],
    "prettier/prettier": 1,
    "max-len": ["warn", { code: 80, ignoreComments: true }],
  },
};
