// 860.柠檬水找零

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) five += 1
    if (bills[i] == 10) {
      if (five > 0) {
        ten += 1
        five--
      } else return false
    }
    if (bills[i] == 20) {
      if (ten > 0 && five > 0) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else return false
    }
  }
  return true
};