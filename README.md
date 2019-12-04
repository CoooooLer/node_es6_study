# node_es6_study
> node版本：13.2.0
### 喜大普奔node支持es6模块导入导出

  导入模块不使用`require(xx)` X

  导入模块使用`import xx from 'xx'` √

### ReferenceError: __filename is not defined解决方法
### ReferenceError: __dirname is not defined解决方法

  * 在项目目录控制终端执行命令`npm init -y`创建 `package.json`文件,并添加一句`"type": "module"`

  * 利用 `import.meta`
  ```javascript
  import { fileURLToPath } from 'url'
  import { dirname } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  console.log(__filename)
  console.log(__dirname)
  ```


> 详情点击 <kbd> [import.meta](https://nodejs.org/api/esm.html) </kbd>查看
