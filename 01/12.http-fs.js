import http from 'http'
import fs from 'fs'

let server = http.createServer()
server.on('request', (req, res) => {
  let url = req.url

  if(url === '/img') {
    fs.readFile('./resource/pot.gif', (err, data) => {
      if(err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('图片读取失败')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else if(url === '/') {
    fs.readFile('./resource/index.html', (err, data) => {
      if(err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('文件读取失败')
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
  } else {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('没有相关文件')
  }
})

server.listen(3000, () => console.log('server running'))
