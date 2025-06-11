# 移除元素

- 暴力解法
var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i = 0;i < len ;i++){
        if(nums[i] === val){
            for(let j = i + 1;j < len;j++){
                nums[j - 1] = nums[j];
            }
            i--;
            len--;
        }
    }
    return len;
};

- 双指针法(快慢指针)
var removeElement = function(nums, val) {
    let slowIndex = 0;
    for(let fastIndex = 0;fastIndex < nums.length;fastIndex++){
        if(nums[fastIndex] !== val){
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};

快指针对应的元素 ！= 要移除的元素，则用慢指针保存下来，慢指针往后移一位
如果快指针对应的元素=要删除的，慢指针不动，快指针往后移
