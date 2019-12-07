import util from 'util'
import fs from 'fs'
import express from 'express'

import stu from './student.js'

let student = new stu()

// student.update({
//   id: 1,
//   name: '鲸落'
// })

// 推荐
// 1、创建一个路由容器
let router = express.Router()

// 2、把路由都挂载到 router 路由容器中
// 首页展示数据
router.get('/students', (req, res) => {
  // res.send('hellll')
  // fs.readFile('./db.json', 'utf-8', (err, data) => {
  //   if(err) {
  //     res.status(500).send('server error')
  //   }
  //   console.log(data)
  //   res.render('index.html', {
  //     fruits: ['苹果', '香蕉', '橘子'],
  //     students: JSON.parse(data).students
  //   })
  // })

  // console.log(student)
   let data = student.find()
   data.then((data) => {
     // console.log(data)
     res.render('index.html', {
       fruits: ['苹果', '香蕉', '橘子'],
       students: data
     })
   }).catch(err => {
     console.log(err)
     res.status(500).send('server error')
   })


})

// 添加页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

// 保存添加的数据
router.post('/students/new', (req, res) => {
  console.log(req.body)
  student.save(req.body)
      .then(res => {
        res.redirect('/students')
      })
      .catch(err => {
        res.status(500).send('server error')
      })
})

// 编辑信息页面
router.get('/students/edit', (req, res) => {

})




// 3、把 router 导出
export default router

// 不推荐
// export default function router(app) {
//   app.get('/', (req, res) => {
//     // res.send('hellll')
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//       if(err) {
//         res.status(500).send('server error')
//       }
//       console.log(data)
//       res.render('index.html', {
//         fruits: ['苹果', '香蕉', '橘子'],
//         students: JSON.parse(data).students
//       })
//     })
//
//   })
// }



