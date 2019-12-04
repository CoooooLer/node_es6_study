import http from 'http'
import fs from 'fs'

let server = http.createServer()

let wwwDir = 'C:/phpStudy/PHPTutorial/WWW'
server.on('request', (req, res) => {
  let url = req.url
  fs.readFile('./template.html', (err, data) => {
    if(err) {
      return res.end('404 not found')
    }

    fs.readdir(wwwDir, (err, files) => {
      if(err) {
        return res.end(`can not found ${wwwDir}`)
      } else {
        // console.log(files)
        let content = ''
        for(let v of files) {
          content += `
            <li><a href="/C:/phpStudy/PHPTutorial/WWW/study/es6">${v}</a></li>
          `
        }

        data = data.toString()
        data = data.replace('^_^', content)
        res.end(data)

      }
    })

  })

})

server.listen(3000, () => console.log('server start...'))
