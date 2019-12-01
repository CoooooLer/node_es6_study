import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __filename = fileURLToPath(import.meta.url) // 文件绝对路径
const __dirname = dirname(__filename) // 文件所属目录绝对路径

console.log(__filename)
console.log(__dirname)
