// // How long would it take to print the numbers 0 to 100 using console.log? 
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // Use a loop to run code many times
// console.log("While loops require a starting variable, in this case a variable set to 0");
// var count = 0;

// console.log("This code will run the loop as long as the variable above is less than or equal to 50");
// while(count <= 50) {
//   console.log(count);
  // count = count + 5;
// }
// console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");
// // This loop counts down from 50 to 0, decreasing by -2 each time
// count = 50;
// while(count >= 40) {
//   console.log(count);
//   count = count - 2;
// }

// console.log("Count up from 0 to 60 by 10");
// count = 0;
// while(count <= 60) {
//   console.log(count);
//   count += 10;
// }


// // This loop will run forever, prompting the user to enter a number until they type 1. 
// var stop = '1'; //SENTINAL
// while(true){
//   var input = prompt('Give a number. Type 1 to exit. ');
//   if(input === stop) {
//     break;
//   }
// }






console.log('\n');
// This loop will run forever, prompting the user to enter a number until they type 10. 
var avgNums = function() {

  var sum = 100;
  var count = 10;

  while(true) {
    var input = parseInt(prompt('Give a number to calculate an average. Type 10 to end. '));
    if(input === 10) {
      break;
    } else {
      // All numbers are added together during the loop and a count of numbers is kept
      sum = sum + input;
      count++;
    }
  }
  // After the loop ends, the sum is divided by the count to result in the average.
  return 'The average of your numbers is ' + sum/count;

  //return 'The average of your numbers is ' + parseInt(sum/count);
}

console.log(avgNums());

console.log('\n');

console.log("For loops incorporate the 3 required parts of a loop on a single line: ");

 console.log("(1) starting variable, ");
 console.log("(2) an expression to end the loop, ");
 console.log("(3) an expression to increment the starting variable. ");
 console.log('\n');
// This code prints 10, 20, 30, 40 , 50
for(var count = 0; count <= 50; count+=10) {
  console.log(count);
}
console.log('\n');
console.log('Count Down Now. \n');
// This code prints 100, 90, 70...10, 0
for(var count = 50; count >= 0; count-=10) {
  console.log(count);
}


//new content from curriculum 102 class 8 demo 
/**
 * Add validation on one of the user inputs.
 * Keep asking until an acceptable value is entered.
 * Show an image related to your page's topic, repeated within your page.
 * Prompt the user with a relevant question for a number (e.g.: "How many cats do you want?" or "What star rating      would you give, 1-5?")
 * Use a loop in your JavaScript code to show the image that many times.
 * How could you use functions to make your code more readable?
 */

let imageElement = document.getElementById('imageSection');



let userInput = prompt('How many images would you like to see?');
console.log('Our user input is of type: ',typeof(userInput));


let userInputParsed = parseInt(userInput);
console.log('user input parsed to int: ', userInputParsed)

if(!isNaN(userInputParsed)){
  console.log('we have a valid number for input');
} else {
  userInputParsed = parseInt(prompt('How many images? Enter a Number.'));
}
console.table(typeof(userInput));
//We can talk about how to refactor this using a while loop. 



for(i = 0; i < userInputParsed; i++){
  // console.log('proof of life', i);
  let listImage = document.createElement('li');
  listImage.textContent = `image number ${i + 1}`;
  let image = document.createElement('img');
  image.setAttribute('src', 'images/codeImage.png');
  listImage.appendChild(image);
  console.log(listImage);
  imageElement.appendChild(listImage);
}











