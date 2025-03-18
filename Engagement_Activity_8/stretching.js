/*
    TECH1101 - Web and Internet Fundamentals
    Instructor: Michael Dorsey
    Graded Learning Activity 1
    Student Name: Pedro Kuchak Molina
    Student ID: 467777
    Created at: 2025-3-17
*/

let text = "She sells sea shells by the sea shore";
let searchString = "sea";

let result1 = searchforString(text, searchString);
console.log(searchString, result1);

searchString = "water";
let result2 = searchforString(text, searchString);
console.log(searchString, result2);

function searchforString(fullString, searchString) {
  let foundIndex = fullString.indexOf(searchString);  
  if (foundIndex < 0)   
    return "String not found";
  return foundIndex;
}
