For Node js

Install Dev Dependencies

yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier


Create a .eslintrc.json file in the project root and enter the below contents:

{
    "extends": ["prettier", "airbnb-base"],
    "parserOptions": {
      "ecmaVersion": 12
    },
    "env": {
      "commonjs": true,
      "node": true
    },
    "rules": {
      "no-console": 0,
      "indent": 0,
      "linebreak-style": 0,
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": true,
          "printWidth": 100,
          "tabWidth": 4,
          "semi": true
        }
      ]
    },
    "plugins": ["prettier"]
  }

For React js

You can also add a new script in the scripts section like below to install everything with a single command:

scripts: {
    "lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"
}

yarn lint #or 'npm run lint'


Create a .eslintrc file in the project root and enter the below contents:

{
    "extends": [
      "airbnb",
      "airbnb/hooks",
      "eslint:recommended",
      "prettier",
      "plugin:jsx-a11y/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 8
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "react/react-in-jsx-scope": 0,
      "react-hooks/rules-of-hooks": "error",
      "no-console": 0,
      "react/state-in-constructor": 0,
      "indent": 0,
      "linebreak-style": 0,
      "react/prop-types": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".js", ".jsx"]
        }
      ],
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": true,
          "printWidth": 100,
          "tabWidth": 4,
          "semi": true,
          "endOfLine": "auto"
        }
      ]
    },
    "plugins": ["prettier", "react", "react-hooks"]
  }

  Follow the below settings for VS Code -

  1.Create a new folder called ".vscode" inside the project root folder
  2.Create a new file called "settings.json" inside that folder.
  3.Paste the below json in the newly created settings.json file and save the file.
  
  {
    // Theme
    "workbench.colorTheme": "Dracula",
  
    // config related to code formatting
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "[javascriptreact]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "javascript.validate.enable": false, //disable all built-in syntax checking
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.tslint": true,
      "source.organizeImports": true
    },
    "eslint.alwaysShowStatus": true,
    // emmet
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
  }
  