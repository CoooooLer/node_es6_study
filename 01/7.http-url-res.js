import http from 'http'

let server = http.createServer()
server.on('request', (req, res) => {
  // response.write(('哈哈哈'))
  // response.write(('嘿嘿'))
  // response.end()

  // 使用 end 结束的同时发送消息
  // res.end('哈嘿')

  // 根据不同的请求结果返回响应的内容
  let url = req.url
  let msg = ''

  if(url === '/'){
    msg = 'index page'
  } else if (url === '/login') {
    msg = 'login page'
  } else if(url === '/products') {
    let products = [
      {
        "name": '苹果',
        "price": 123
      },
      {
        "name": '香蕉',
        "price": 144
      }
    ]

    msg = JSON.stringify(products)
  } else {
    msg = '404 not found'
  }
  res.end(msg)

})

server.listen(3000, () => console.log('服务启动成功'))
