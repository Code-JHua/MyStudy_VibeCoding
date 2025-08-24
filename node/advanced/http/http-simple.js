const http = require('http')
const url = require('url')

const responseData = {
  ID:'123',
  Name:'张三',
  Age: 18,
  Data:'2023-01-01'

}
function toHTML(data) {
  return `
    <ul>
      <li>ID: ${data.ID}</li>
      <li>Name: ${data.Name}</li>
      <li>Age: ${data.Age}</li>
      <li>Data: ${data.Data}</li>
    </ul>
  `
}


const server = http.createServer((req, res) => {
  const { pathname } = url.parse(`http://${req.headers.host}${req.url}`)
  if (pathname == '/') {
    const accept = req.headers.accept
    if (accept.indexOf('application/json') >= 0) {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify(responseData), 'utf-8')

    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(toHTML(responseData), 'utf-8')


    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>404 Not Found</h1>')

  }

  console.log(pathname);
})

server.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
})

