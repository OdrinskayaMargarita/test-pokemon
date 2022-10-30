module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
  ],
  globals: {
    JSX: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "import", "react", "react-hooks"],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-var-requires": 0,
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          order: "asc" /* ignore case. Options: [true, false] */,
        },
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "external",
            pattern: "@lib/**",
            position: "after",
          },
          {
            group: "external",
            pattern: "**",
            position: "before",
          },
          {
            group: "builtin",
            pattern: "**",
            position: "before",
          },
          {
            group: "sibling",
            pattern: "**",
            position: "before",
          },
          {
            group: "parent",
            pattern: "**",
            position: "before",
          },
          {
            group: "object",
            pattern: "**",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "no-shadow": "off",
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "object-curly-spacing": ["error", "always"],
    semi: 2,
  },
};
