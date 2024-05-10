const stylisticJs = require('@stylistic/eslint-plugin-js');

export default [
  {
    files: [ '*.js', '*.mjs', '*.cjs' ],
    languageOptions: {
      globals: {
        suite: 'readonly',
        test: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 6,
        requireConfigFile: false,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/no-trailing-spaces': 2,
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/quotes': [
        'error',
        'single',
        {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }
      ],
      '@stylistic/js/semi': [
        'error',
        'always'
      ],
      '@stylistic/js/comma-style': [
        'error',
        'last'
      ],
      'no-console': 0,
      'no-useless-escape': 0
    }
  },
  {
    files: [ '*.js', '*.cjs' ],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: [ '*.mjs' ],
    languageOptions: {
      sourceType: 'module',
    },
  },
];
