// art-template 可以运行在浏览器，也可以运行在node环境

// 安装
// npm i art-template

import template from 'art-template'
import fs from 'fs'

// let ret = template.render('hello {{ name }}', {
//   name: 'node.js'
// })

fs.readFile('./tpl.html', (err, data) => {
  if(err) {
    return console.log(err)
  } else {
    let ret = template.render(data.toString(), {
      name: 'node.js',
      age: 132
    })

    console.log(ret)
  }
})


