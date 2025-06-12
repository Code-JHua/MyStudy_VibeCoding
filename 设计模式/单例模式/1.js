function Point(x, y) {
    this.x = x
    this.y = y
}
Point.prototype.toString = function () {
    return `(${this.x},${this.y})`
}
Point.toSum = function (a, b) {
    return a + b
}

var p = new Point(1, 2)
console.log(Point.toSum(1, 2));