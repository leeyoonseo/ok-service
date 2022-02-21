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
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    "prettier/prettier": 1,
  },
};
