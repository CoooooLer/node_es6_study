import express from 'express'

let app = express()

// 暴露 public 目录
// app.use('/public/', express.static('./public/'))     // 请求方法 http://127.0.0.1:3000/public/index.html
// app.use(express.static('./public/'))                 // 请求方法 http://127.0.0.1:3000/index.html
app.use('/a/', express.static('./public/'))          // 请求方法  http://127.0.0.1:3000/a/index.html

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
      <h3>hello</h3>
      <p>132</p>
    </body>
    </html>
  `)
})

app.listen(3000, () => console.log('server is running'))
