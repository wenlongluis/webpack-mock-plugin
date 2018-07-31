/**
 * @file:
 * @author: Luis
 * @date: 2018/7/31
 */

const path = require('path')
const fs = require('fs')

module.exports = (req, res, next) => {
  const config = req.config
  const dir = path.join(process.cwd(), config.path)
  const api = req.url.split('?')[0]
  const filePath = path.join(dir, api + '.js')
  const params = req.method === 'GET' ? req.query : req.body

  if (fs.existsSync(filePath)) {
    console.log('mock up数据：' + req.url)

    if (require.cache[require.resolve(filePath)]) {
      delete require.cache[require.resolve(filePath)]
    }

    const response = require(filePath)(req, res, next, params)
    res.json(response)
  } else {
    res.json({msg: 'can not find the mock file:' + filePath})
  }
  next()
}
