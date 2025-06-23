const arr = [1, 2]
const obj = {
    name: '小华',
    '1': 1
}
obj[arr] = '12'
console.log(obj);


const m = new Map()

m.set(arr, '12')
// m.delete(arr)
console.log(m);
console.log(m.get(arr));
console.log(m.has(arr));

