const nums = [5, 3, 2, 4, 1]

// 选择排序   找最小值
function selectSort(arr) {
    const len = arr.length;
    let minIndex = 0;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
console.log(selectSort(nums)); 
