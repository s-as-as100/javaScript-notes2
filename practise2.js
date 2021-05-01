console.log("Asyn Await ?")
// ASyn function is func is return a promise
// big benefit of asyn wait is that it makes code easier to read 
// if i put await keyword in the front of function it return Promise 

// using promise
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp=>resp.json())
// .then(console.log)


// using Asyn Await feature it same but code is look like synchoronous

// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json();
//     console.log(data)
// }

// console.log(fetchUsers())

//using asyn await
//  const getData = async function(){
//      try {
//         const [users,albums,posts] = await Promise.all(urls.map(url=>fetch(url).then(resp => resp.json())
//         ))
//         console.log('users', users)
//         console.log('albums', albums)
//         console.log('posts',posts)
//      } catch(err){
//          console.log("OOPS", err)
//      }
     
//  }

console.log("ES6(ES2018)")

// spread operator ..
// finally() 
// finally is great for those times that you need to run piece of code no matter
// what after a promise
// .finally(data => console.log('extra', data))



// using  for await of feature does it allow us to loop through these multiple promises 
// const urls = [
//         'https://jsonplaceholder.typicode.com/users',
//         'https://jsonplaceholder.typicode.com/posts',
//         'https://jsonplaceholder.typicode.com/albums'
//     ] 

// const getData2 = async function() {
//     const arraysOfPromises = urls.map(url=>fetch(url));
//     for await (let request of arraysOfPromises) {
//         const data = await request.json()
//         console.log(data)
//     }
// }




// console.log(getData2())

console.log("Interview Question ?")

setTimeout(()=> {console.log('1', 'is the loneliest number')},0)
setTimeout(()=>{console.log('2', ' can be as bad as one')},10)

Promise.resolve('hi').then((data)=>console.log('2',data))

console.log('3', 'crowd')

//OUTPUT
// 3 crowd
//2 hi
//undefined
//1 is the loneliest number
//2 can be as bad as one


// Promise is introduced in ES6 before JS Runtime is not update
// now instead of just callbacks we noew had a native way to handle asynchronous code using promise
//now we have job-queue _Microtask Queue
// callback u just a little smaller but has a higher priority than this 
// it means that event loop is going to check the job
// job queue first a make sure that there's nothing in that
// now addition in JAvaScript Runtime is called JOb queue above callback queue







 console.log(" Is JS is asyn or syn")
// JavaScript is always synchronous and single-threaded. 
// If you're executing a JavaScript block of code on a page then
//  no other JavaScript on that page will currently be executed. 
//  JavaScript is only asynchronous in the sense that it can make,

// for example, Ajax calls


