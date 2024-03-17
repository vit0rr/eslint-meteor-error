import { transformErrorConstructor } from "./transformErrorConstructor";

export const rules = {
  "transform-error-constructor": {
    defaultOptions: [],
    meta: {
      type: "problem",
      messages: {
        defaultMessage: "Use Meteor.Error instead of Error",
      },
      fixable: "code",
      schema: [],
    },
    create: transformErrorConstructor,
  },
};

export default { rules };
