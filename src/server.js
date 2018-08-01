
const express = require('express')
const bodyParser = require('body-parser')
const middleware = require('./middleware')

module.exports = ({config, port}) => {
  if (config) {
    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use((req, res, next) => {
      req.config = config
      next()
    })

    app.use(middleware)

    const server = app.listen(port, () => {
      const port = server.address().port
      console.log('\n> Mock server listening at http://localhost:%s \n', port);
    })

  } else {
    console.log('No Config!')
  }
}
