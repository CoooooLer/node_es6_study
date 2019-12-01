import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const file = __dirname + '/data/test.txt'

// fs.readFile(file, (err, data) => {
//   if(err) {
//     console.log('fail: ',err);
//   } else {
//     console.log('success: ', data.toString());
//   }
//
// });

fs.open(file, 'r', (err, fd) => { // 检查文件是否存在
  if(err) {
    if(err.code === 'ENOENT') {
      console.log(`${file}--不存在`)
      return
    }

    throw err;
  }

  fs.readFile(file, (err, data) => {
    if(err){
      throw err
    } else {
      console.log(`success: ${data}`)
    }
  })

})
