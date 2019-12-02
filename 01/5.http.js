// 使用node构建一个web服务器

// 1、加载http核心模块
import http from 'http'

// 2.使用 http.createServer() 创建一个web服务器
let server = http.createServer()

// 3.监听客户端的请求
server.on('request', () => {
  console.log('收到来自客户端的请求')
})

// 4.绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('服务启动成功')
})
