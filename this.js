
// 1 Rule
function a(){
    console.log(a)
}

a() // in this case value of this is Window object 

function b(){
    "use strict"
    console.log(a)
}

b() // In this case the value of this is undefined 