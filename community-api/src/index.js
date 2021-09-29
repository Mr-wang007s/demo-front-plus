// import Koa from 'koa'
// import path from 'path'
// import helmet from 'koa-helmet'
// import statics from 'koa-static'
// import router from './routes/routes'
// import koaBody from 'koa-body'
// import compose from 'koa-compose'
const Koa = require('koa')
const path = require('path')
const helmet = require('koa-helmet')
const statics = require('koa-static')
const router = require('./routes/routes')
const koaBody = require('koa-body')
const compose = require('koa-compose')

const app = new Koa()

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      maxFieldsSize: 5 * 1024 * 1024
    },
    onError: (err) => {
      console.log('koabody TCL: err', err)
    }
  }),
  statics(path.join(__dirname, '../public')),
  helmet()
])

const config = {
    port: 3003
}

app.use(middleware)
app.use(router())

app.listen(config.port, () => {
    console.log('localhost:'+config.port)
})


