import express from 'express'

let app = express()

// 暴露指定目录
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./public/'))


app.get('/', (req, res) => {
  res.send('hello express')
})

app.get('/about', (req, res) => {
  res.send('你好, 世界')
})

app.listen(3000, () => console.log('app is running'))
