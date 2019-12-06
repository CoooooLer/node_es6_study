import express from 'express'
import art_template from 'express-art-template'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let app = express()

app.engine('html', art_template);

app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')))
app.use('/public/', express.static(path.join(__dirname,'/public/')))

app.get('/', (req, res) => {
  // res.send('hellll')
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if(err) {
      res.status(500).send('server error')
    }
    console.log(data)
    res.render('index.html', {
      fruits: ['苹果', '香蕉', '橘子'],
      students: JSON.parse(data).students
    })
  })

})

app.listen(3000, () => console.log('server start ...'))
