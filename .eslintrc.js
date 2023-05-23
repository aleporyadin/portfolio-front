module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:import/recommended",
    "react-app",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y"],
  root: true,
  rules: {
    "no-mixed-spaces-and-tabs": "off",
    "import/no-unresolved": "off",
    "react/button-has-type": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "comma-dangle": ["warn", "never"],
    "eol-last": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
