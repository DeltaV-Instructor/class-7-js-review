"use strict";
console.log("app.js file is connected.");

// let makeSandwich = function(bread,meat,cheese){
// // console.log('sandwich made of: ',bread, meat, cheese);
// return 'Here is a sandwich with ' + bread + ' and ' + meat + ' and ' + cheese;
// }
// let ourSandwich = makeSandwich('wheat','turkey','gouda');
// console.log("🚀 ", ourSandwich);

//function expression
let makeSandwich = function () {
  let bread = prompt("What type of bread?");
  let meat = prompt("What type of meat or veggies?");
  let cheese = prompt("What type of cheese?");
  return "Here is a sandwich with " + bread + " and " + meat + " and " + cheese;
};
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

let imageElement = document.getElementById("imageSection");
console.log(imageElement);

let userInput = prompt("How many images would you like to see?");
console.log("🚀 ~ file: app.js:40 ~ userInput:", typeof userInput);
//lets make the user input an actual number.
let userInputParsed = parseInt(userInput);
console.log("🚀 ~ file: app.js:43 ~ userInputParsed:", userInputParsed);

if (!isNaN(userInputParsed)) {
  console.log("we have a valid number!");
} else {
  userInputParsed = parseInt(prompt("How many images would you like to see?"));
}

console.log(userInputParsed, typeof userInputParsed);

//i++
for (let i = 0; i < userInputParsed; i = i + 1) {
  console.log("images!!!", i);
  //list
  let listImage = document.createElement('li');

  listImage.textContent = `image number ${i + 1}`;
  //image
  let image = document.createElement('img');
  image.setAttribute('src', 'images/codeImage.png');
  image.setAttribute('alt', 'pic of code');
  
  //give the image to the list <li>image number 1 image</li>
  listImage.append(image);
  imageElement.append(listImage);
}
