function a() {
    b()
    console.log("a");
}

function b() {
    c()
    console.log("b");
}

setTimeout(()=>{
    console.log("From set timeout");
},3000)
setTimeout(()=>{
    console.log("From set timeout2");
},3000)

function c() {
    d()
    console.log("C")
}

function d() {
    e()
    console.log("d")
}

function e() {
    console.log("e")
}

a()