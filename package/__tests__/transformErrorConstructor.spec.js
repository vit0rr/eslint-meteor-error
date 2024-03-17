import { describe, it } from "vitest";
const { RuleTester } = require("eslint");
const { rules } = require("../index");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

describe("transformErrorConstructor", () => {
  it("transform Error constructor to Meteor.Error", () => {
    ruleTester.run(
      "transformErrorConstructor",
      rules["transform-error-constructor"],
      {
        valid: [
          {
            code: "throw new Meteor.Error('error')",
          },
        ],
        invalid: [
          {
            code: "throw new Error('error')",
            errors: [{ message: "Use 'Meteor.Error' instead of 'Error'." }],
            output: "throw new Meteor.Error('error')",
          },
        ],
      }
    );
  });

  it("transform Error constructor to Meteor.Error in class declaration", () => {
    ruleTester.run(
      "transformErrorConstructor",
      rules["transform-error-constructor"],
      {
        valid: [
          {
            code: "class CustomError extends Meteor.Error{}",
          },
        ],
        invalid: [
          {
            code: "class CustomError extends Error{}",
            errors: [
              {
                message: "Extend 'Meteor.Error' instead of 'Error'.",
              },
            ],
            output: "class CustomError extends Meteor.Error{}",
          },
        ],
      }
    );
  });
});
