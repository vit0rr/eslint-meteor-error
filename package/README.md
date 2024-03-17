##  eslint-meteor-error 

Rule to alert and fix `new Error` constructors in Meteor projects to use `new Meteor.Error` instead.

![meteor-lint-pic](https://github.com/vit0rr/eslint-meteor-error/assets/70543018/00175c25-0738-4903-8083-3eff4ead4ab1)


- Alert/Error using `new Error`
- Fixable rule

## How to install
```sh
meteor npm i eslint-plugin-meteor-error -D
```

```javascript
// .eslintrc.js

 plugins: ["meteor-error"],
  rules: {
    "meteor-error/transform-error-constructor":
     2, // or 1
  },
```
