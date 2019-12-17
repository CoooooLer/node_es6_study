import mongoose from 'mongoose'

let Schema = mongoose.Schema

// 1.连接数据库
// 当指定连接的数据库不存在时，当你插入第一条数据之后会自动被创建
mongoose.connect('mongodb://localhost/itcast')

// 2.设计表机构
let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 3、将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数： 传入一个大写名词字符串用来表示数据库名称
//            mongoose 会自动将大写名词的字符串生成 小写复数 的名称集合
//            例如这里的 User 最终会变成 users 名称集合
// 第二个参数： 架构 schema
// 返回值： 模型构造函数
let User = mongoose.model('User', userSchema)

// 4.利用构造函数对 users 表进行操作
// let admin = new User({
//   username: 'mike',
//   password: '123',
//   email: 'admin@admin.com'
// })
//
// // 添加数据
// admin.save((err, ret) => {
//   if(err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })

// 查询所有数据
User.find((err, ret) => {
  if(err) {
    console.log('查询失败')
  } else {
    console.log(ret)
  }
})

// 查询符合条件的所有数据
// User.find({
//   username: 'mike'
// }, (err, ret) => {
//   if(err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

// 查询符合条件的一条数据
// User.findOne({
//   username: 'mike',
//   password: '123'
// }, (err, ret) => {
//   if(err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

// 删除数据
// User.deleteOne({
//   username: 'mike'
// }, (err, ret) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(`删除成功`)
//     console.log(ret)
//   }
// })

// 删除数据
// User.deleteMany({
//   username: 'mike'
// }, (err, ret) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(`删除成功`)
//     console.log(ret)
//   }
// })

// 更新数据
// User.findByIdAndUpdate('5df19979a38f9604f05dcab4', {
//   password: '14789'
// }, (err, ret) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(`修改成功`)
//     console.log(ret)
//   }
// })


