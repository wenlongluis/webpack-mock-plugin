# webpack-mock-plugin
`webpack-mock-plugin` is a webpack plugin using [Express](https://expressjs.com/) to create mock APIs. It will be helpful when you try to test your application without the actual API server.

## Installation
```bash
  npm install -D webpack-mock-plugin
```

## Usage
webpack-mock-plugin dev support mock, configured in webpack.conf.js.
```js
  const WebpackMockPlugin = require('webpack-mock-plugin')

  module.exports = {
      devServer: {
          proxy: {
              '/your-api': 'http://localhost:3000'
          }
      },
      plugins: [
          new WebpackMockPlugin({
              config: {
                  path: '/mock'  // default mock path  '/mock'
              },
              port: 3000  // default 3000 
          })
      ]
  }
```
mock api example:

Directory `/mock/your-api/test.js` => `http://localhost:3000/your-api/test`
```js
  /**
    * api example
    * @param req request
    * @param res response
    * @param next next
    * @param params get or post query/body
    * @returns json object
    */
  module.exports = (req, res, next, params) => {
      return {
          error: 0,
          data: {
              id: 123
          }
      }
  }
```
