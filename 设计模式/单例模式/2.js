class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString  () {
        return `(${this.x},${this.y})`
    }
    static toSum(a, b) {
        return a + b
    }
}

var p = new Point(1, 2)
console.log(p.toString());