// process.stdout.write(process.pid+'\n') // 标准输出接口
// console.log('Hello World!');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  data = data.toString().replace(/[??]/g,'').replace(/我/g,'你').replace(/你/g, '我').replace(/吗/g,'')
  const res = `AI: ${data}\n`
  process.stdout.write(res)
});
