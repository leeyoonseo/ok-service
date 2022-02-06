module.exports = {
  customSyntax: "postcss-html",
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  plugins: [
    "stylelint-scss", 
    "stylelint-order", 
  ],
  rules: {
    "scss/dollar-variable-pattern": null,
    "string-quotes": "double",

    "at-rule-no-unknown": null,
    "order/properties-alphabetical-order": true,
    "selector-list-comma-newline-after": "always",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "declaration-block-single-line-max-declarations": 10,
    "color-hex-length": "long",
    "declaration-block-trailing-semicolon": "always",
    indentation: [2, { baseIndentLevel: 0 }],
    "no-descending-specificity": null,
    "declaration-empty-line-before": "never",
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
  },
  overrides: [
    {
      files: [
        "assets/styles/*.scss", 
        "assets/styles/**/*.scss", 
        "assets/styles/**/**/*.scss", 
        "components/**/**/*.scss",
      ],
      customSyntax: "postcss-scss",
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
      ],
      rules: {
        "alpha-value-notation": "percentage",
        "string-quotes": "single",
        "scss/at-rule-no-unknown": true,
        "order/properties-alphabetical-order": true,
        "selector-list-comma-newline-after": "always",
        "block-opening-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",

        "declaration-block-single-line-max-declarations": 10,
        "color-hex-length": "long",
        "declaration-block-trailing-semicolon": "always",
        indentation: [2, { baseIndentLevel: 0 }],
        "no-descending-specificity": null,
        "declaration-empty-line-before": "never",
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep"],
          },
        ],
      }
    }
  ]
}
