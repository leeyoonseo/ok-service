module.exports = {
  customSyntax: "postcss-html",
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "string-quotes": "single",
  },
  overrides: [
    {
      files: [
        "assets/styles/*.scss", 
        "assets/styles/**/*.scss", 
        "assets/styles/**/**/*.scss", 
        "components/**/**/*.scss",
        "views/**/**/*.scss",
      ],
      customSyntax: "postcss-scss",
      extends: "stylelint-config-standard-scss",
      rules: {
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always", 
        "block-opening-brace-newline-before": "never-single-line",
        "rule-empty-line-before": "never-multi-line",
    
        // "color-no-invalid-hex": true,
        // "font-family-no-duplicate-names": true,
        // "function-calc-no-unspaced-operator": true,
        // "function-linear-gradient-no-nonstandard-direction": true,
        // "custom-property-no-missing-var-function": true,
        // "property-no-unknown": true,
        // "declaration-block-no-duplicate-custom-properties": true,
        // "declaration-block-no-duplicate-properties": true,
        // "declaration-block-no-shorthand-property-overrides": true,
        // "block-no-empty": true,
        // "selector-pseudo-class-no-unknown": true,
        // "selector-pseudo-element-no-unknown": true,
        // "selector-type-no-unknown": true,
        // "media-feature-name-no-unknown": true,
        // "at-rule-no-unknown": true,
        // "no-duplicate-at-import-rules": true,
        // "no-duplicate-selectors": true,
        // "no-invalid-position-at-import-rule": true,
        // "color-hex-length": "long",
        // "shorthand-property-no-redundant-values": true,
        // "declaration-block-single-line-max-declarations": 1,
    
        // // TODO: single, double 어떤 차이가 있는지.
        // "selector-pseudo-element-colon-notation": "double",
        // "max-nesting-depth": 2,
        // "no-irregular-whitespace": true,
        // "custom-property-empty-line-before": "never",
        // "color-hex-case": "lower",
        // "function-max-empty-lines": 1,
        // "string-quotes": "double",
        // "unit-case": "lower",
        // "value-list-max-empty-lines": 1,
        // "property-case": "lower",
        // "declaration-block-semicolon-newline-after": "always-multi-line",
        // "declaration-block-semicolon-space-after": "always-single-line",
        // "declaration-block-trailing-semicolon": "always",
        // "block-closing-brace-empty-line-before": "never",
    
    
    
        // "selector-attribute-brackets-space-inside": "never",
        // "selector-attribute-operator-space-after": "always",
        // "selector-attribute-operator-space-before": "always",
        // "selector-combinator-space-after": "always",
        // "selector-combinator-space-before": "always",
        // "selector-pseudo-class-case": "lower",
        // "selector-pseudo-element-case": "lower",
        // "selector-pseudo-class-parentheses-space-inside": "never",
        // "selector-max-empty-lines": 0,
        // "selector-list-comma-newline-after": "always",
        // "selector-list-comma-newline-before": "never-multi-line",
        // "selector-list-comma-space-after": "always",
        // "selector-list-comma-space-before": "never",
        // "media-query-list-comma-newline-after": "always",
        // "media-query-list-comma-newline-before": "never-multi-line",
        // "media-query-list-comma-space-after": "always",
        // "media-query-list-comma-space-after": "never",
    
        // // TODO: 이렇게 쓰는게 맞나?
        // "indentation": 2|"tab",
        // "max-empty-lines": 1,
        // "no-eol-whitespace": true,
        // "no-empty-first-line": true,
        // "no-extra-semicolons": true,
      }, 
    }
  ]
}

// https://stylelint.io/user-guide/rules/list/