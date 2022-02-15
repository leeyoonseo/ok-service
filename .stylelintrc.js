module.exports = {
  extends: "stylelint-config-standard-scss",
  plugins: ["stylelint-scss", "stylelint-order"],
  files: [
    "*.scss"
  ],
  rules: {
    "order/properties-alphabetical-order": true,
    "no-eol-whitespace": true, 
    "color-hex-length": "long",
    "declaration-block-trailing-semicolon": "always", 
    "color-no-invalid-hex": true, 
    "font-family-no-duplicate-names": true, 
    "declaration-block-no-duplicate-properties": true, 
    "declaration-block-no-duplicate-custom-properties": true,
    "no-duplicate-at-import-rules": true,
    "media-query-list-comma-newline-after": "always",
    "no-descending-specificity": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    // 개행
    "rule-empty-line-before": "always-multi-line", 
    "block-opening-brace-newline-before": "never-single-line", 
    "block-opening-brace-newline-after": "always", 
    "block-closing-brace-newline-after": "always", 
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-space-before": "always",
  },
}

