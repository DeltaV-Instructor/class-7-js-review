"use strict";
console.log("app.js file is connected.");

/** 
  REVIEW these concepts. 

JavaScript - Coding language of the web. Used to create and control dynamic website content.
conditionals - A series of checks that determine an outcome. If something happens, the do this. If that does not happen but this happens, do this. If all else fails, then do this last thing.
operators - Series of symbols that perform arithmetic on numbers. (+, -, *, **, /, %. ++, --)
data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array. There are more advanced data types that will be introduced in 201,301,401.
variable - a representation or nick name for some type of data.
 */

let clientName = prompt("What is your name?");
let confirmMessage = confirm("Do you want to continue?");

// function getTime(){}

function getTime() {
  //create variable and declare
  let greeting;
  //ask for user input
  let userTime = prompt(
    "What time is it, use Military time. But just first two digits."
  );
  //Determine the response.

  if (userTime > 18 && userTime < 24) {
    greeting = "Good Evening";
  } else if (userTime > 12 && userTime < 18) {
    greeting = "Good Afternoon";
  } else if (userTime > 6 && userTime <= 12) {
    greeting = "Good Morning!";
  } else {
    greeting = "Go to BED!";
  }
  console.log("greeting", greeting);

  // document.write("Hello " + userName + " " + greeting);
}

//this will call our functions. we are invoking the function call. 
getTime();



//1. use function key word
//2. add a function name
//3. we need add () after the name
//4. we add {} after the ()
//5. we put our in between the curly braces {} code block. 