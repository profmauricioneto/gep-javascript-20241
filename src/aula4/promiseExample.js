'use strict';

let myPromise1 = new Promise(function (resolve, reject) {
  setInterval(() => resolve("done"), 3000);
});

// let myPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Error")), 1000);
// });


myPromise1.then(
    result => console.log(result),
    error => console.log(error)
);


// myPromise2.then(
//     result => console.log(result),
//     error => console.log(error)
// );