function fn(callback) {

  // setTimeout(function () {
  //   var data = 'hello'
  //   return data
  // }, 1000)

  // var data = 'init'
  // setTimeout(function () {
  //   data = 'hello'
  //
  // }, 1000)
  // return data

  setTimeout(function () {
    let data = 'hello'
    callback(data)
  }, 1000)
}

// 调用fn(), 获取定时器里面的 data
// 闭包
fn(function (data) {
  console.log(data)
})

// 如果需要获取一个函数中异步操作的结果， 则必须通过回调函数来获取
