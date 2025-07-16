// 134. 加油站

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curSum = 0
  let totalSum = 0
  let res = 0
  for (let i = 0; i < gas.length; i++) {
    curSum += (gas[i] - cost[i])
    totalSum += (gas[i] - cost[i])
    if (curSum < 0) {
      res = i + 1
      curSum = 0
    }
  }
  if (totalSum < 0) return -1
  return res
};