import express from 'express'
import art_template from 'express-art-template'

let app =  express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let comments = [
  {
    "name": "mike",
    "message": "hello",
    "createTime": "2018-02-12"
  },
  {
    "name": "mike2",
    "message": "hello",
    "createTime": "2018-02-12"
  },
  {
    "name": "mike3",
    "message": "hello",
    "createTime": "2018-02-12"
  },
  {
    "name": "mike4",
    "message": "hello",
    "createTime": "2018-02-12"
  }
]

app.use('/public/', express.static('./public/'))

// 配置使用art-template 模板引擎
// 第一个参数，表示当渲染以 .art 结尾的文件的时候，使用art-template模板引擎
app.engine('html', art_template)

// express 为 response 相应对象提供了一个方法: render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以了使用
// res.render('html模板名', { 模板数据 })
// 第一个参数不能写路径，默认会去项目中的 views 目录查找改模板文件
// express有一个约定: 开发人员把所有的视图文件都放到 views 目录中

// 如果想修改默认的 views 目录， 则可以
// app.set('views', render函数的默认路径)

app.get('/', (req, res) => {
  res.render('index.html', {
    comments: comments
  })
})

app.get('/admin', (req, res) => {
  res.render('admin/index.html')
})

app.get('/post', (req, res) => {
  // res.send('post')
  res.render('post.html')
})

app.post('/post', (req, res) => {
  // console.log(req.body)
  let comment = req.body
  comment.createTime = new Date().toLocaleString()
  comments.unshift(comment)
  res.redirect('/')
})

app.get('/addComment', (req, res) => {
  let comment = req.query
  comment.createTime = new Date().toLocaleString()
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000, () => console.log('server start...'))
