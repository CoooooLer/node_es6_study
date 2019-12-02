import fs from 'fs'

fs.writeFile('./data/你好.md', 'hello node.js', (err) => {
  if(err) throw err
  console.log('文件写入成功')
})
