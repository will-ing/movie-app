# ESLINT

### [Getting started](https://eslint.org/docs/user-guide/getting-started)

Steps

1 `npm install eslint --save-dev`
2 setup config file `npx eslint --init`

  - How would you like to configure? -> Use pop style guide -> airbnb
  - do you use react? -> yes
  - What format? -> json or js
  - do you want to upgrade? -> yes
  
3 `npm install eslint-plugin-react --save-dev`

- Environments - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
- Globals - the additional global variables your script accesses during execution.
- Rules - which rules are enabled and at what error level.

> You can hit function 8 (F8) to toggle through the errors in VSCODE

Auto fix on save
1 Preferences > settings
2 eslint.autoFixOnsave : false to `true` *look for pencil on the left*


You can disable specific lines in eslint by using `// eslint-disable-line <F8 error>`
To disable for the file use: `/* eslint <F8 error>: 0 */`

## what should be in eslintrc.json

```js
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
        
        "react/jsx-filename-extension": 0,
    }
    "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
    "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}

```
