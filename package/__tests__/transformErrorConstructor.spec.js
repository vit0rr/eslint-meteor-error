const { RuleTester } = require("eslint");
const { rules } = require("../index");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run(
  "transformErrorConstructor",
  rules["transform-error-constructor"],
  {
    valid: [
      { code: "throw new Meteor.Error('error')" },
      { code: "class CustomError extends Meteor.Error{}" },
    ],
    invalid: [
      {
        code: "throw new Error('error')",
        errors: [{ message: "Use 'Meteor.Error' instead of 'Error'." }],
        output: "throw new Meteor.Error('error')",
      },
      {
        code: "class CustomError extends Error{}",
        errors: [{ message: "Extend 'Meteor.Error' instead of 'Error'." }],
        output: "class CustomError extends Meteor.Error{}",
      },
    ],
  }
);
