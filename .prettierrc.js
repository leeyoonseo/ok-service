module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  quoteProps: "as-needed",
  printWith: 100,
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


  // bracketSpacing: true,
  // semi: true,
  // // arrowParens: 'avoid',
  // // htmlWhitespaceSensitivity: 'css',
  // // proseWrap: 'preserve',
  // tabWidth: 2,
  // // trailingComma: 'all',
  // // useTabs: false,
  // // vueIndentScriptAndStyle: false,
  // // requirePragma: false,
  // // insertPragma: false,