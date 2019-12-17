import express from 'express'
import User from './models/user.js'
import md5 from 'blueimp-md5'


let router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html', {

  })
})

router.get('/login', (req, res) => {
  res.render('login.html', {

  })
})

router.post('/login', (req, res) => {
  res.render('login.html', {

  })
})

router.get('/register', (req, res) => {
  res.render('register.html', {

  })
})

router.post('/register', (req, res) => {
  let body = req.body
  let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
  if(!reg.test(body.email)) {
    return res.status(200).json({
      code: '300',
      message: '请输入合法的邮箱'
    })
  }
  if(!body.nickname) {
    return res.status(200).json({
      code: '300',
      message: '请输入合法的昵称'
    })
  }
  if(!body.password) {
    return res.status(200).json({
      code: '300',
      message: '请输入合法的密码'
    })
  }
  body.password = md5(md5(body.password))
  User.findOne({
    $or: [
      { email: body.email },
      { nickname: body.nickname }
    ]
  }, (err, data) => {
    if(err) {
      return res.status(500).json({
        code: 500,
        message: '服务器繁忙，请稍后再试'
      })
    }
    if(data) {
      return res.status(200).json({
        code: 1,
        message: '邮箱或者昵称已存在'
      })
    }

    new User(body).save((err, user) => {
      if(err) {
        return res.status(500).json({
          code: 500,
          message: '服务器繁忙，请稍后再试'
        })
      }
      return res.status(200).json({
        code: 200,
        message: '注册成功'
      })
    })


  })

})

export default router
