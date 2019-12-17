import express from 'express'
import path from 'path'
import expressArtTemplate from 'express-art-template'

import router from './router.js'

let app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const __dirname = path.resolve()
// const __dirname = process.cwd()
// const __dirname = fs.realpathSync('.')
// const __dirname = process.env.PWD

app.use(router)

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', expressArtTemplate)
app.set('views', path.join(__dirname, '/views/'))

app.get('/', (req, res) => {
  res.render('index.html', {
    name: '哈哈哈哈'
  })
})

app.listen(3000, () => console.log('server running....'))
