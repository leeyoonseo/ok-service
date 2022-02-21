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
        "*.js",
        "*.ts",
      ],
      options: {
        singleQuote: false,
      }
    },
    {
      files: [
        "*.json",
      ],
      options: {
        printWidth: 200,
      }
    },
  ],
}
