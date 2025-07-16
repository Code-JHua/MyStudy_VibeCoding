// 135. 分发糖果

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candys = Array(ratings.length).fill(1)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candys[i], candys[i + 1] + 1)
    }
  }

  let count = 0
  for (let x of candys) {
    count += x
  }
  return count
};