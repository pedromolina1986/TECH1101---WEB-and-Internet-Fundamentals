/*
    TECH1101 - Web and Internet Fundamentals
    Instructor: Michael Dorsey
    Graded Learning Activity 1
    Student Name: Pedro Kuchak Molina
    Student ID: 467777
    Created at: 2025-3-17
*/

let unformattedNumber = "1234567890"
let result1 = formatPhoneNumber(unformattedNumber);
console.log("result1",result1);

let incorrectNumber = "12345"
let result2 = formatPhoneNumber(incorrectNumber);
console.log("result2",result2);


function formatPhoneNumber(phoneNumber) {    
    if (phoneNumber.length != 10) {      
        return("ERROR")
    } else {
        return "(" + phoneNumber.substr(0,3)+ ") " +phoneNumber.substr(3,3) + "-" + phoneNumber.substr(6,4);
    }    
}