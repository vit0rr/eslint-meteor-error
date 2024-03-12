const { transformErrorConstructor } = require("./transformErrorConstructor");

module.exports = {
  rules: {
    "transform-error-constructor": {
      defaultOptions: [],
      meta: {
        type: 'problem',
        messages: {
          defaultMessage: "Use Meteor.Error instead of Error",
        },
        fixable: 'code',
        schema: [],
      },
      create: transformErrorConstructor,
    },
  },
};
  