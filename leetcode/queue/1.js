const nums = []
const nums2 = new Array(5).fill(new Array(5).fill(0))


for (let i = 0; i < nums2.length; i++) {
    for(let j = 0; j < nums2[i].length; j++) {
        if(i === 0 && j === 0) {
            nums2[i][j] = 1
        }
    }
}
console.log(nums2);