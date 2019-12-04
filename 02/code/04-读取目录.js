import fs from 'fs'

let wwwDir = 'C:/phpStudy/PHPTutorial/WWW'

fs.readdir(wwwDir, (err, files) => {
  if(err) {
    return console.log('目录不存在')
  } else {
    console.log(files)
  }
})



