# odin-project-test-practice

## Key points

- Install jest  
  `npm install --save-dev jest`

- Add to script in package.json

  ```js
  {
  "scripts": {
      "test": "jest"
  }
  }
  ```

- Install the @babel/preset-env package

  `npm i -D @babel/preset-env`

- Create a .babelrc file in the project’s root with the following lines of code:

  `{ "presets": ["@babel/preset-env"] }`

- To run, write in cmd :

  `npm test`
