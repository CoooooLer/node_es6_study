import http from 'http'
import fs from 'fs'
import template from 'art-template'
import url from 'url'

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

http
  .createServer((req, res) => {
    // 使用 url.parse 将路径解析为一个方便操作的对象,获取用户 get 方式传递过来的数据
    let parseObj = url.parse(req.url, true)
    // pathname 是不包含 ？ 后面的参数的
    let pathname = parseObj.pathname
    // let url = req.url
    if(pathname === '/') { // 首页
      fs.readFile('./views/index.html', (err, data) => {
        if(err) {
          return res.end('404 not found')
        }
        let htmlStr = template.render(data.toString(), {
          comments: comments
        })
        res.end(htmlStr)

      })
    } else if(pathname === '/post') { // 添加数据页
      fs.readFile('./views/post.html', (err, data) => {
        if(err) {
          res.end('404 Not Found.')
        }

        res.end(data)
      })
    } else if(pathname.indexOf('/public/') === 0) { // 使用公共资源
      // console.log(url)
      fs.readFile('.' + pathname, (err, data) => {
        if(err) {
          res.end('404 not found')
        }
        res.end(data)
      })
    } else if(pathname === '/addComment') { // 处理用户提交的数据
      // console.log(parseObj.query)
      // res.setHeader('content-type', 'text/plain; charset=utf-8')
      // res.end(JSON.stringify(parseObj.query))

      let comment = parseObj.query // 获取用户传递的参数
      comment.createTime = new Date().toLocaleString()
      comments.unshift(comment)
      res.statusCode = 302
      res.setHeader('location', '/')
      res.end()
    } else {
      fs.readFile('./views/404.html', (err, data) => {
        if(err) {
          res.end('404 Not Found.')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, () => console.log('server start...'))
