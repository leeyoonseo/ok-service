module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  printWith: 100,
  proseWrap: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  requirePragma: false,
  insertPragma: false,
  overrides: [ 
    {
      files: "*.json",
      options: {
        singleQuote: false,
        printWith: 200,
      },
    }
  ],
}