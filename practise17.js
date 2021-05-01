console.log(" Asynchronous JavaScript")
// web browser or node.js allows us to sync or asyn code so we can interact 
// with things outside the World JS nd that is the solution " ASynchronous funcitons"
// Asyn funct are func that we can execute later 

console.log(" How does javaScript Works?")
// what is program ?
//1. allocate memory  ( allocate memory )
//2. parse nd execute( scripts which means read nd run commands)
// JS engine which is V8 enigne nd chrome has meomory heap nd call stack ?
 console.log(" JS is single threaded lang that can be non-blocking ?")
 // other language can  have multiple call stacks dn these are called multi-threaded
 // why JS designed to be single threaded while running code on single thread
 //quite easy 
 

 // recursion( function is called itself)
//  function foo() {
//      foo()
//  }
//  foo()
// Asyn like behaviour nd sync execution is great


// JS engine with memory heap nd call stack run ..
// we need what we call JS runtime environment nd JS rn time env is again part its inculde browser
// have webApi as callback Que nd event loop nd

// interview question
// console.log("1");
// setTimeout(()=> {
//  console.log("2")
// }, 2000);
// console.log("3");

// Have in our JS runtime Environment

// console.log(2)
// callback()
// CallStack


// WEP Api set characteritcs( DOM, AJAX(XML Http request) , Timeout)



// Callback Que(onclick ,onload,on())
// we have a callback nd this callback of setTimeout we added to the callback queue
// saying that hey we have to run something nd we're aleady to run it 

// Event Loop
// Event loop is check  the call stack is empty (keeps checking the call stack every time)
// nothing running now in jS engine its going to say do we have any callBacks
/// its going to check the call back queue nd say is anythng in there because the call stack is empty 
// so now move the callback into calls stack and then the callback run it 
// we have console.log("2")

// elememt.addEventListener('click', () =>{
//     console.log("click")
// })
// we run the call back function 
 
/// Asyn happen it happen  a lot when u try nd talk b/w machines like speaking to database  m
// make requests , image processing reading files
// in order to non-blocking the single threading it can be Asyn with call back functions nd these 
// call back functions get runs in the background through the callback que

console.log(" Spread operator ?")

// let a =[1,2,3,4,5];
// let b = [...a];
// a[0] = 10;
// console.log(a);  // 10  2 3 because JS Array is copy the refrence //
// // solve this porblem by spread operator 
// console.log(b);  // 10 2  3 
// var a  = [1,2]
// var b = [3,4]
// var c = [...a,...b]
// console.log(c)

// using object 
// let harry = {
//     learn : "JS",
//     alongWith: "react"
// }
//  let potter = {...harry}
 
//  // if i change
//  harry.learn ="python"   

//   console.log(harry)  // {learn: "python", alongWith: "react"}
//   console.log(potter)  // {learn: "python", alongWith: "react"}  // js 
  // instead of copy refrence u need copy the value by the help of spread operator 
















































