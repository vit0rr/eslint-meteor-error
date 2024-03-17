export const transformErrorConstructor = (context) => {
  return {
    NewExpression: (node) => {
      if (node.callee.name === "Error") {
        context.report({
          node,
          message: "Use 'Meteor.Error' instead of 'Error'.",
          fix: (fixer) => fixer.replaceText(node.callee, `Meteor.Error`),
        });
      }
    },
    ClassDeclaration: (node) => {
      if (node.superClass && node.superClass.name === "Error") {
        context.report({
          node,
          message: "Extend 'Meteor.Error' instead of 'Error'.",
          fix: (fixer) => fixer.replaceText(node.superClass, `Meteor.Error`),
        });
      }
    },
  };
};
