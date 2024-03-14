module.exports = {
  env: {
    node: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: ["eslint:recommended"],
  plugins: ["meteor-error"],
  rules: {
    "meteor-error/transform-error-constructor": 2
  }
};
