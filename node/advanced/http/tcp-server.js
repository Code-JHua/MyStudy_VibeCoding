
const net = require('net')

function responseData(str, status=200, desc='OK', type='text/html') {
  return `HTTP/1.1 ${status} ${desc}\r\nConnection: keep-alive\r\nContent-Type: ${type}\r\nContent-Length: ${str.length}\r\nDate: ${new Date()}\r\n\r\n${str}`

}

const server = net.createServer((socket) => { // 建立连接的时候调用
  console.log('有客户端连接了')

  socket.on('data', (data) => {
    const matched = data.toString().match(/^GET \/ HTTP\/1\.1/)
    console.log(matched)

    if (matched) {
      const path = matched[1]
      if (path === '/') {
        socket.write(responseData('<h1>hello world</h1>'))
      } else {
        socket.write(responseData('<h1>404 Not Found</h1>', 404, 'Not Found'))
      }

    }

    // console.log(`DATA: \n${data}`)
  })

  socket.on('close', () => {
    console.log('当前连接已关闭')
  })
})
server.listen(8080, () => {
  console.log('Server is running on port 8080')
})
