// 红绿灯算法 红灯3秒，绿灯2秒，黄灯1秒

// 方法一: setInterval()
function trafficLight1(light, time) {
  setInterval(() => {
    if (light === 'red') {
      light = 'green'
      time = 2000
    } else if (light === 'green') {
      light = 'yellow'
      time = 1000
    } else {
      light = 'red'
      time = 3000
    }
    console.log(light);
  }, time)
}
// trafficLight1('red', 3000)

// 方法二: Promise
function promise(light, time) {
  console.log(light);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// function run() {
//   promise('red', 3000)
//     .then(() => {
//       return promise('green', 2000)
//     })
//     .then(() => {
//       return promise('yellow', 1000)
//     }).then(() => {
//       run()
//     })
// }
// run()

// 方法三: async/await
async function run() {
  await promise('red', 3000)
  await promise('green', 2000)
  await promise('yellow', 1000)
  run()
}
run()

