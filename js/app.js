"use strict";
console.log("app.js file is connected.");

// let makeSandwich = function(bread,meat,cheese){
// // console.log('sandwich made of: ',bread, meat, cheese);
// return 'Here is a sandwich with ' + bread + ' and ' + meat + ' and ' + cheese;
// }
// let ourSandwich = makeSandwich('wheat','turkey','gouda');
// console.log("🚀 ", ourSandwich);

//function expression 
let makeSandwich = function(){
  let bread = prompt("What type of bread?");
  let meat = prompt("What type of meat or veggies?");
  let cheese = prompt("What type of cheese?");
  return 'Here is a sandwich with ' + bread + ' and ' + meat + ' and ' + cheese;
  }
  // let ourSandwich = makeSandwich();
  // console.log("🚀 ", ourSandwich);





  /**
 * Add validation on one of the user inputs.
 * Keep asking until an acceptable value is entered.
 * Show an image related to your page's topic, repeated within your page.
 * Prompt the user with a relevant question for a number (e.g.: "How many cats do you want?" or "What star rating      would you give, 1-5?")
 * Use a loop in your JavaScript code to show the image that many times.
 * How could you use functions to make your code more readable?
 */