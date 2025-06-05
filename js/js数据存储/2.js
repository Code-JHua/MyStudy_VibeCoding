let obj = {
    name: 'xiaohua',
    age: 18,
    health: 100,
    smoking: function () {
        console.log('来根华子')
        this.health--
    },
    drink: function () {
        console.log('来杯台子');
        this.health++
    }
}


// obj.age++  // console.log(obj.age);

// obj.smoking()
// obj.smoking()
// obj.smoking()
// obj.drink()
// obj.drink()
// obj.drink()
// obj.drink()

// obj.girlfriend = '章若楠'

// let meiGirl = 'myGirl'
// obj[meiGirl] = '章若楠'

delete obj.smoking

console.log(obj);


let obj2 = new Object({
    name: 'xiaohu',
    age: 21
})
console.log(obj2);
