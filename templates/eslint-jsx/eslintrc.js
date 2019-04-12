module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  rules: {
    curly: "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        code: 60,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    quotes: ["error", "double"],
    "react/display-name": "off",
    "react/jsx-key": "off",
    "react/no-deprecated": "off",
    "react/no-find-dom-node": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "never"],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    "sort-vars": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    strict: 0,
  },
}
