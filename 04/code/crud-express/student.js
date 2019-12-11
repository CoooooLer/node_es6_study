/*
* 数据操作文件模块
* 操作文件中的数据，只处理数据，不关心业务
* */

import fs from 'fs'
import util from 'util'


let dbPath = './db.json'


export default class student {
  /*
  * 获取所有学生列表
  *
  * */
  find() {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
          // console.log(`err+++++++${err}`)
          reject(err)
        } else {
          resolve(JSON.parse(data).students)
        }
      })
    })
    // return new Promise( async (resolve, reject) => {
    //  await fs.readFileSync(dbPath, async (err, data) => {
    //    console.log('start')
    //    if(err) {
    //        reject(err)
    //      }
    //      console.log(JSON.parse(data).students)
    //      await resolve(JSON.parse(data).students)
    //    })
    //
    // })
  }


  /*
  * 添加保存学生
  * */
  save(student) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, (err, data) => {
        if (err) {
          reject(err)
        }
        // 获取文件的数组数据
        let students = JSON.parse(data).students

        // 添加唯一id
        student.id = students[students.length - 1].id + 1

        students.push(student)

        students = {students: students}

        let fileData = JSON.stringify(students)

        // 写入到文件中保存数据
        fs.writeFile(dbPath, fileData, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(null)
          }

        })

      })
    })
  }

  /*
  * 通过学生id查出学生信息
  * */
  findById(id) {
    return new Promise( (resolve, reject) => {
      fs.readFile(dbPath, (err, data) => {
        if(err) {
          reject(err)
        }
        let students = JSON.parse(data).students
        let stu = students.find(item => {
          return item.id === parseInt(id)
        })

        resolve(stu)
      })
    })
  }


  /*
  * 更新学生
  * */
  updateById(student) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, (err, data) => {
        if (err) {
          reject(err)
        }
        let students = JSON.parse(data).students

        student.id = parseInt(student.id)

        let stu = students.find((item, index, arr) => {
          if (item.id === parseInt(student.id)) {
            // Object.assign(arr[index], student)
            return item.id === student.id
          }
        })

        Object.assign(stu, student)

        let fileData = JSON.stringify({
          students: students
        })

        fs.writeFile(dbPath, fileData, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(null)
          }
        })

      })
    })
  }

  /*
  * 删除学生
  * */
  deleteById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, (err, data) => {
        if(err) {
          reject(err)
        }

        let students = JSON.parse(data).students

        let deleteIndex = students.findIndex(item => {
          return item.id === parseInt(id)
        })

        students.splice(deleteIndex, 1)

        let fileData = JSON.stringify({
          students: students
        })

        fs.writeFile(dbPath, fileData, err => {
          if(err) {
            reject(err)
          } else {
            resolve(null)
          }
        })

      })
    })
  }
};
