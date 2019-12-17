import util from 'util'
import fs from 'fs'
import express from 'express'

import Student from './student.js'

// let student = new stu()

// student.update({
//   id: 4,
//   name: 'c+++++'
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
   let data = Student.find()
   data.then((data) => {
     // console.log(data)
     res.render('index.html', {
       fruits: ['苹果', '香蕉', '橘子'],
       students: data
     })
   }).catch(err => {
     // console.log(err)
     res.status(500).send('server error')
   })


})

// 添加页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

// 保存添加的数据
router.post('/students/new', (req, res) => {
  // console.log(req.body)
  new Student(req.body).save((err, ret) => {
    if(err) {
      return res.status(500).send('server error')
    }
    res.redirect('/students')
  })
  // student.save(req.body)
  //     .then(res => {
  //       res.redirect('/students')
  //     })
  //     .catch(err => {
  //       res.status(500).send('server error')
  //     })
})

// 编辑信息页面
router.get('/students/edit', (req, res) => {
  Student.findById(req.query.id, (err, student) => {
    if(err) {
      return res.status(500).send('server error...')
    }
    res.render('edit.html', {
      student: student
    })
  })
  // console.log(req.query.id)
  // let stu = Student.findById(parseInt(req.query.id))
  // stu.
  //   then(data => {
  //     // console.log(res)
  //     res.render('edit.html', {
  //       student: data
  //     })
  //   })
  //   .catch(err => {
  //     console.log(`err====${err}`)
  //   })
})

// 保存编辑信息
router.post('/students/edit', (req, res) => {
  Student.findByIdAndUpdate(req.body.id, req.body, err => {
    if(err) {
      return res.status(500).send('server error...')
    }
    res.redirect('/students')
  })
  // console.log(req.body)
  // Student.updateById(req.body)
  //     .then(data => {
  //       res.redirect('/students')
  //     })
  //     .catch(err => {
  //       res.status(500).send('server err...')
  //     })
})

// 删除用户
router.get('/students/delete', (req, res) => {
  console.log(req.query.id)
  Student.deleteOne({ _id: req.query.id }, (err, ret) => {
    if(err) {
      console.log(err)
      return res.status(500).send('Server error ...')
    }
    console.log(ret)
    res.redirect('/students')
  })
  // console.log(req.query.id)
  // Student.deleteById(req.query.id)
  //     .then(data => {
  //       res.redirect('/students')
  //     })
  //     .catch(err => {
  //       res.status(500).send('server err')
  //     })
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



