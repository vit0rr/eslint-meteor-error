const transformErrorConstructor = (context) => {
  return {
    NewExpression: (node) => {
      if (node.callee.name === "Error") {
        context.report({
          node,
          message: `Use Meteor.Error instead of Error`,
          fix: (fixer) => {
            return fixer.replaceText(
              node,
              // @TODO: Improve this to handle multiple arguments
              `new Meteor.Error(${node.arguments
                .map((arg) => arg.raw)
                .join(", ")})`
            );
          },
        });
      }
    },
  };
};


module.exports = { transformErrorConstructor };
