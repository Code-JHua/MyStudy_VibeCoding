// GO: {
//     g: undefined  100
//     fn:function() {}
// }

// var g = 100
// function fn() {
//     console.log(g)
// }
// fn: {
    
// }
// fn()

global = 100
function fn() {
    console.log(global)
    global = 200
    console.log(global)
    var global = 300 
}
fn()
var global

// GO: {
//     fn: function() { }
//     global: undefined,100
// }

// fn: {
//     global: undefined, 200, 300;
// }