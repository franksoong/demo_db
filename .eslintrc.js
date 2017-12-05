// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? "error" : "off",

    // https://eslint.org/docs/user-guide/configuring
    "linebreak-style": "off",

    "import/extensions": "off",

    "import/no-unresolved": "off",

    "indent": ["error", 4],

    "func-names": "off",
    "no-console": "off",
    "no-nested-ternary": "off",
    "no-plusplus":"off"
  }
}
