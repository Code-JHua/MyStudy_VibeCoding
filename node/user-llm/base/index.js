// 启动一个服务
const http = require('http')
// 引入文件系统模块
const fs = require('fs')

const server = http.createServer(function (req, res) {
    if (req.url === '/home') {// 如果前端请求的是/home 路径
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf-8'
        })
    }
    if(req.url === '/user'){// 如果前端请求的是/user 路径
        // 读取到 db.json 文件中的数据，将数据返回给前端
        const data = fs.readFileSync('./db.json', 'utf8')

        res.writeHead(200, {// 设置响应头,类型为 json 类型
            'content-type': 'application/json;charset=utf-8'
        })
        res.end(data)// 将文件内容作为响应体返回
        
    }
    // console.log(req.url);
    // res.end('hello world')

}) 

server.listen(3000, () => {
    console.log('服务启动成功');
})