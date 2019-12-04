import http from 'http'

let server = http.createServer()

server.on('request', (req, res) => {
  // 服务端发送的数据默认是utf-8编码
  // 浏览器会按操作系统的默认编码去解析  中文操作系统默认是 gbk 编码
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // res.end('你好')

  let url = req.url
  if(url === '/plain'){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('你好')
  } else if(url === '/html') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h2>你好</h2>')
  }

})

server.listen(3000, () => console.log('server running'))
