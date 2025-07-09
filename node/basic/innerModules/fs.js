const fs = require('fs')
const { loadEnvFile } = require('process')

// 同步
// const syncData = fs.readFileSync('./test.txt', 'utf-8')
// console.log(syncData);

// 异步
// const data = fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// fs.promises.readFile('./test.txt','utf-8').then(data => {
//     console.log(data);
// })

// fs.writeFileSync('./newTest.md', '谢谢你!')

const imgBuf = fs.readFileSync('C:\\Users\\Hua\\Pictures\\图片\\9282522ecc05ce40784c72b427abb81.jpg')
// console.log(Buffer.isBuffer(imgBuf), imgBuf.length)
fs.mkdirSync('./img')
fs.writeFileSync('./img/cat.jpg', imgBuf)

console.log(fs.statSync('./img/cat.jpg'));

// fs.rmSync('./img/cat.jpg')
// fs.rmdirSync('./img')
