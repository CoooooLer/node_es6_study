function say() {
  console.log('hello')
}
// say(...) is not a function
say()

;(function () {
  console.log('world')
})()

// 当采用无分号代码风格时，请注意：
// 当一行代码是以 (, [, ` 开头的时候，则在前面补上一个分号避免语法错误
