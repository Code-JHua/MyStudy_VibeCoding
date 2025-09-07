const url = 'https://www.baidu.com/order?a=1&b=2&city=%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6#c=3'

const output = {
  protocol: 'https:',
  host: 'www.baidu.com',
  pathname: '/order',
  hash: '#c=3',
  query: {
    a: '1',
    b: '2',
    city: '十六进制'
  }
}

function parser(url) {
  let res = {}
  const protocol = url.split('://')[0]
  const host = url.split('://')[1].split('/')[0]
  const pathname = url.split('://')[1].slice(host.length).split('?')[0]
  const queryArr = url.split('?')[1].split('#')[0].split('&')
  const query = {}
  queryArr.forEach(item => {
    query[item.split('=')[0]] = decodeURI(item.split('=')[1])
  })
  const hash = url.split('#')[1]
  res = {
    protocol,
    host,
    pathname,
    hash,
    query
  }
  return res
}

console.log(parser(url));
