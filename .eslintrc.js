const resolve = require("./webpack.config.resolve");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    context: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "jest", "react-hooks"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "no-underscore-dangle": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      configurable: resolve.alias
    }
  },
  overrides: [
    {
      files: ["*.stories.js", "**/stories/*.js"],
      rules: {
        "import/no-extraneous-dependencies": ["off"],
        "no-alert": ["off"],
        "no-console": ["off"],
        "react/prop-types": ["off"]
      }
    },
    {
      files: ["*.test.js"],
      rules: {
        "import/no-extraneous-dependencies": ["off"],
        "no-alert": ["off"],
        "no-console": ["off"],
        "react/prop-types": ["off"]
      }
    }
  ]
};
