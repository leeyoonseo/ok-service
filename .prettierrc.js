module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  quoteProps: "as-needed",
  printWidth: 100,
  overrides: [
    {
      files: [
        "*.scss",
        "*.json",
        "*.d.ts",
        ".eslintrc.js",
        ".stylelintrc.js",
        ".prettierrc.js",
        "nuxt.config.ts",
        "webpack.config.js",
      ],
      options: {
        singleQuote: false,
      }
    },
  ],
}
