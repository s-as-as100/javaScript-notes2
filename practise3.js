console.log(" what is Modules?")
// modules are just like that different piece of code are group together
// so that things are organized and as our application gets larger nd larger we can
// combine different pieces together to make these larger application


var user = {}  // problem is tight coupling 
// this is one of the major problems without modules because these var are global
// scope every part of the code that's inside of that file can change a var so that u start
// to have really hard code to debug nd u get bigger nd bigger with JS becomes 
//imposible to maintain
// u can solve this problem 
function signin(user) {
    var textfield= 'hehe'
}

function isHuman(user) {

}
// u can't modify textfield var has functional scope 
// we cant commuinicate b/w two fucntion



// we need a way to share data b/w these diffrent function
// how do we do this
// module pattern
console.log("module pattern ?")
//global Scope
 // Module Scope( module Scope we can be explicit)
  // function Scope
   // Block Scope -let vs const 

   // Module Pattern Pros nd Cons 
   
console.log(" ES6 modules")






























