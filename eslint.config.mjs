import pluginJs from "@eslint/js";
import mochaPlugin from 'eslint-plugin-mocha';


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },

  {
    languageOptions:
    {
      globals: {
        __dirname: "readable",
        setTimeout: "readable",
        window: "readable",
        process: "readable",
      }
    }
  },
  pluginJs.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  {
    rules: {
      semi: "error",
      "mocha/no-exclusive-tests": "error",
      "mocha/no-skipped-tests": "warn",
      "mocha/no-mocha-arrows": "error",
      "mocha/no-synchronous-tests": "warn",
      "mocha/no-top-level-hooks": "error",
      "mocha/max-top-level-suites": ["warn", { "limit": 1 }],
      "mocha/no-async-describe": "error",
      "mocha/no-return-and-callback": "error",
      "mocha/no-setup-in-describe": "off",
      "mocha/no-hooks-for-single-case": "off",
      "mocha/valid-test-description": "off"
    }
  }
];