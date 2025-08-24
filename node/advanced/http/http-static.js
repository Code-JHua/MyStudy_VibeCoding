const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require('mime')


const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))  // xxx/http/www/index.html

  if (fs.existsSync(filePath)) { // 判断路径是否有对应的文件
    const stats = fs.statSync(filePath) // 文件详情信息
    const isDir = stats.isDirectory() // 是否是目录(文件夹)
    if (isDir) {
      filePath = path.join(filePath, 'index.html')
    }

    // 读取文件内容
    const content = fs.readFileSync(filePath)
    const { extname } = path.parse(filePath)
    res.writeHead(200, {
      'Content-Type': mime.getType(extname)
    })
    res.end(content)
    return
  }

  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  })
  res.end('<h1>404 Not Found</h1>')

})

server.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
})

