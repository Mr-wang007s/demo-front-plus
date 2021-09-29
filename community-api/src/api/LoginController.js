
class LoginController {

  // 用户登录
  async login (ctx) {
    // 接收用户的数据
    ctx.body = {
        code: 200,
        data: [],
        msg: '登录成功'
    }
  }

  // refreshToken
  async refresh (ctx) {
    ctx.body = {
      code: 200,
    //   token: generateToken({ _id: ctx._id }),
      msg: '获取token成功'
    }
  }

  // 注册接口
  async reg (ctx) {
    // 接收客户端的数据
    const { body } = ctx.request
    ctx.body = {
        code: 200,
        data: [],
        msg: '注册成功'
    }
  }

  // 密码重置
  async reset (ctx) {
    const { body } = ctx.request
    ctx.body = {
        code: 500,
        msg: '链接已经失效'
    }
  }

  async getMobile (ctx) {
    const { body } = ctx.request
    if (body.code) {
      // TODO: 省略校验
      ctx.body = {
        code: 200,
        data: [],
        msg: '获取手机号成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '参数不正确'
      }
    }
  }

}

module.exports = new LoginController()
