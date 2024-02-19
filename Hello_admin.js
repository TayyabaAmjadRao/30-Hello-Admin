"use strict";
//Written by: TAYYABA RAO
//Roll no : 00388416
//array for username
const username = ['admin', 'Aslam', 'Arshad', 'Afzal', 'Akram'];
//using for each method
username.forEach(username => {
    //step 3 , inside the loop, special greeting for 'admin' , for others printing a simple greeting
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
