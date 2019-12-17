import express from 'express'
import art_template from 'express-art-template'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

import router from './router.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let app = express()

// 使用 req.body 获取post的请求参数
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.engine('html', art_template);

app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')))
app.use('/public/', express.static(path.join(__dirname,'/public/')))

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, () => console.log('server start ...'))
