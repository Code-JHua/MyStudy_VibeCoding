import { spawn } from 'child_process'

// 启动子进程
const child = spawn('node', ['server.js']);

// 监听子进程的标准输出(服务端的响应)
child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

// 测试消息
const testMessage = [
  '你好吗?',
  '地球是圆的吗?',
  '再见!',
]

// 测试消息循环
testMessage.forEach((msg, index) => {
  setTimeout(() => {
    console.log(`user: ${msg}`);
    // 向子进程的标准输入写入数据
    child.stdin.write(msg + '\n');
  }, index * 1000);
});
