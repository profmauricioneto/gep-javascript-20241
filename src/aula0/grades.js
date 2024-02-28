"use strict";
const prompt = require("prompt-sync")();
var grade1, grade2, grade3, result;
grade1 = prompt("Enter with grade 1: ");
grade2 = prompt("Enter with grade 2: ");
grade3 = prompt("Enter with grade 3: ");
result = resultStudent(grade1, grade2, grade3);
console.log(result);
function resultStudent(grade1, grade2, grade3) {
  if (parseFloat(grade3) >= 4.0) {
    let average =
      (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) / 3;
      console.log("Average: " + average);
    if (average >= 5.0) {
      return "Passed!";
    } else {
      return "Failed";
    }
  } else {
    return "Failed! 3th grade was less than 4.0!";
  }
}
