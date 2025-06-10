const queue = [] // 队列 push shift

queue.push(1)
queue.push(2)
queue.push(3)

for(let i = 0; i < queue.length; i++) {
    console.log(queue.shift());
    i--
}

while (queue.length) {
    console.log(queue.shift())

}