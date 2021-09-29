const combineRouters = require('koa-combine-routers')

const login = require('./modules/loginRouter')
// 加载目录中的Router中间件

const router = combineRouters(
  login
)

module.exports = router
