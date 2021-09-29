// import Router from 'koa-router'
// import loginController from '@/api/LoginController'

const Router = require('koa-router')
const loginController = require('../../api/LoginController')

const router = new Router()

router.prefix('/login')

// 登录接口
router.post('/login', loginController.login)

module.exports = router
