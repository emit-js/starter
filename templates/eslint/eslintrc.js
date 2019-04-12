module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
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
