module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    'prettier/prettier': 1,
    'no-shadow': 'off',
    // // TODO: process.env.NODE_ENV === "production" ? "error" : "off",
    'no-console': 'off',
    // // TODO: process.env.NODE_ENV === "production" ? "error" : "off",
    'no-debugger': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', 'stroustrup'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'require-await': 'error',
    // "no-constant-condition": "error",
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-trailing-spaces': 'error',
    'no-empty': 'error',
    'no-inline-comments': 'error',
    'no-whitespace-before-property': 'error',
    // 'array-bracket-newline': { "multiline": true, "minItems": 2 },
    // 'object-property-newline': [
    //   'error',
    //   { allowAllPropertiesOnSameLine: false },
    // ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
};
