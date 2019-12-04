import http from 'http'

let server = http.createServer()

server.on('request', (req, res) => {
  console.log(`ip地址为: ${req.socket.remoteAddress}`)
  console.log(`端口号为: ${req.socket.remotePort}`)
  res.end('over')
})

server.listen(5000, () => console.log('服务开启成功'))
