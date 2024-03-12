const someFunction = () => {
    throw new Error("Hello", "World");
  }
  
  const someOtherFunction = () => {
    throw new Meteor.Error("Hello");
  }
  
  someFunction();
  someOtherFunction();
  