console.log("Promise?")
// promise is feature of JS
//  A promise is a object that may produce a single value sometime in the future 
// Either a resolve value or reason that it's not resolved!
//1. fullfilled(resolve) 2. rejected 3.pending

// before promise we are using callback
//  grabTweets('twitter/andreineagoie', (error, andreTweets) => {
//      if(error) {
//          throw Error;
//      }
//  })
//  displayTweets(andreTweets)
//  grabTweets('twitter/elonmusk', (error, elonTweets) => {
//     if(error) {
//         throw Error;
//     }
// })
// displayTweets(elonTweets)

// // promise feature is introduced in ES6
//  const promise = new Promise((resolve, reject) =>{
//      if(true) {
//          resolve(' Stuff worked !');
//      } else {
//          reject("Error")
//      }
//  })

// const promise2 = new promise((resolve, reject) =>{
//     setTimeout(resolve,100,'HII')
// })
// const promise3 = new promise((resolve, reject) =>{
//     setTimeout(resolve,1000,'HIII')
// })
// const promise4 = new promise((resolve, reject) =>{
//     setTimeout(resolve,5000,'HIIII')
// })

// promise.all([promise,promise2,promise3,promise4])
// .then(values => {
//     console.log(values)
// })

// // it wait nd print after 5 sec it print all promise is resoved


//  promise
//  .then(result => result + '!')
//  .then(result2 => result2 + '?')

//   .catch(()=> console.log('Error !'))  // catch any error that promise may have 
// .then(result3 => {
//     console.log(result3)
// })

// real life example


// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url=> {
//     return fetch(url).then(resp =>resp.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }) 
// fetch() simply return promise 
//by adding . then we are answering to whatever the promise returns 
// this is extremely useful for things that are Asynchoronous 
// success nd failure such as API calls bec we're less intereested in the exact time something

console.log("what is JSON?")
//javaScript object notations
//json is syntax to storing nd exchanging the data
//eg message is send 
// server nd client b/w communication u need JSON























