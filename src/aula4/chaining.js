"use strict";
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 3
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 9
    return result * 3;
  })
  .then(function (result) {
    console.log(result); 
    return result * 3;
  })