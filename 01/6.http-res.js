import http from 'http'

let server = http.createServer()

// request: 客户端的请求信息
// response： 给客户端发送响应信息
server.on('request', (request, response) => {
  console.log(request.url)

  // response 对象有一个方法: write 用于给客户端发送响应信息
  // write 可以使用多次，最后一定要使用 end 结束响应, 否则客户端会一直等待
  response.write('hello')
  response.write('node.js')

  // 根据请求不同的路径响应不同的内容
  // 例如:
  // /  index
  // login  登录
  // register   注册
  

  response.end()
})

server.listen(3000, () => console.log('服务启动成功'))
