function ajax(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(time > 5000) {
        reject('失败')
      }
      resolve('成功')
    }, time)
  })
}

class Limit {
  constructor(max = 2) {
    this.tasks = []
    this.max = max
    this.running = 0
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push(
        {
          task,
          resolve,
          reject
        }
      )
      this.run()

    }) 
  }
  run() {
    if (this.running < this.max && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift()
      this.running++
      task().then(resolve, reject).finally(() => {
        this.running--
        this.run()
      })
    }
  }
}

function addTask(time, name) {
  limit.add(() => { return ajax(time) }).then(res => {
    console.log(`任务${name}完成`)
  }).catch(err => {
    console.log(`任务${name}失败`)
  })
}

const limit = new Limit(2)

addTask(10000, '1')
addTask(4000, '2')
addTask(2000, '3')
addTask(3000, '4')
addTask(5000, '5')
addTask(4000, '6')

