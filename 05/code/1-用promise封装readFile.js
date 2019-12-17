import fs from 'fs'

function pReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

pReadFile('./data/a.txt')
    .then(res => {
      console.log(res)
      return pReadFile('./data/b.txt')
    })
    .then(res => {
      console.log(res)
      return pReadFile('./data/c.txt')
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(`err==> ${err}`)
    })


