// JavaScript Looping Exercise

console.log("Question 1");
// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i < livingRoom.length; i++) {
	console.log(livingRoom[i]);
}

console.log("Question 2");
// 2. Using a loop, log numbers 22-33 in the console.
for (i = 22; i <= 33; i++) {
	console.log(i);
}

console.log("Question 3");
// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
for (i = 75; i <= 100; i+= 5) {
	console.log(i);
}
console.log("Question 4");
// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

var counter = 0;
var num = 2;

while (num < 33) {
num += num;
console.log("This is how a professional loops.");
counter++;
}

console.log("Question 5");
// 5. Write a conditional statement to find the largest of the numbers in the array provided.
// way 1
// var largestNum = [-5, -2, -6, 0, -1];
// var i = 0;
// var check = i + 1;
// while ( i < largestNum.length ) {
// 	while (largestNum[i] > largestNum[check] && check < largestNum.length) {
// 		if (largestNum[i] > largestNum[check] && check == largestNum.length - 1) {
// 			console.log(largestNum[i]);
// 			break;
// 		}	
// 		check++;
// 	}
// 	i++;			
// }

var largestNum = [-5, -2, -6, 0, -1];
var largest = Math.min.apply(Math, largestNum);

for(i=0; i < largestNum.length; i++ ) {
  if( largestNum[i] > largest ) {
    largest = largestNum[i];   
  }
}
console.log(largest);




// largestNum.sort();
// largestNum.pop();

//way 2 
for ( var i = 0; i < largestNum.length; i++) {
	
	var check = i + 1;
	
	while (largestNum[i] > largestNum[check] && check < largestNum.length ) {
		
			
			while (largestNum[i] > largestNum[check + 1] && check < largestNum.length) {
				check++;
			} 
			biggest = [i];
			console.log(biggest);
		}
	
	}
}	
console.log(largestNum[i] + " is the largest number.");

console.log("Question 6");
// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
console.log("Question 6");
for (var i = 10; i < 36; i += 25) {
	var numCats = i;
}
console.log("At home, I have " + i + " cats.")

var i = 10;
while (i < 36) {
	i += 25;
}
console.log("At home, I have " + i + " cats.")

console.log("Question 7");
// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

for (var i = 0; i < numArray.length; i++) {
	if ( numArray[i] % 2 === 0 && numArray[i] > 10) {
		console.log("Even and greater than 10");
	} else if (numArray[i] % 2 === 0) {
		console.log("Even");
	} else {
		console.log("Odd"); 
	}
}


console.log("Question 8");
// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	var primeArray = [];
	for (var i = 0; i < primes.length; i += 3) {
		primeArray.push(primes[i]);
	}
console.log(primeArray);


console.log("Question 9");
// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: Google 'typeof'
var input = prompt("Please enter either a number or a word.");
if (!isNaN(input)) {
	alert("Great, looks like you entered a number.");
} else {
	alert("Great, looks like you entered a word.");
}


console.log("Question 10");
// 10. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (var i = "#"; i.length <= 7; i += "#") {
	console.log(i);
}

var i = '#';

while (i.length <= 7) {
	i+= '#';
}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

console.log("Question 10-18");
// 11. Use a variable called "human" to prompt the user to type their choice.
var human = prompt("paper, rock, or scissors?");
// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".
var choices = ['paper', 'rock', 'scissors'];
// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
var computer = Math.random();
// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console
if (computer <= 0.33) {
	computer = 'rock';
} else if (computer > 0.67) {
	computer = 'scissors';
} else {
	computer = 'paper';
}
console.log("Computer psuedo chose " + computer);
// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
if (human == computer) { 
	console.log("It's a tie!"); 
} else {
	if (human == 'rock') {
		if (computer == 'paper') {
			console.log("computer wins with " + computer);
		} else {
			console.log("you win with " + human);
		}
	} else if (human == 'scissors') {
		if (computer == 'rock') {
			console.log("computer wins with " + computer);
		} else {
			console.log("you win with " + human);
		}
	} else if (human == 'paper') {
		if (computer == 'scissors') {
			console.log("computer wins with " + computer);
		} else {
			console.log("you win with " + human);
		}
	}
}




// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 18. Give yourself a high five for completing your first javascript game!

console.log("Question 19-20");
// 19. Use the game you made above and rework it using a switch statement.
var computer = Math.random();
if (computer <= 0.33) {
	computer = 'rock';
} else if (computer > 0.67) {
	computer = 'scissors';
} else {
	computer = 'paper';
}
console.log("Computer picks " + computer);

var human = prompt("paper, rock, or scissors?");

switch (human + '|' + computer) {
	
	case 'paper|paper' : console.log("It's a tie!");
	break;
	
	case 'rock|rock' : console.log("It's a tie!");
	break;
	
	case 'scissors|scissors' : console.log("It's a tie!");
	break;

	case 'paper|rock' : console.log("You win!");
	break;

	case 'paper|scissors' : console.log("Computer wins!");
	break;

	case 'rock|paper' : console.log("Computer wins!");
	break;

	case 'rock|scissors' : console.log("You win!");
	break;

	case 'scissors|paper' : console.log("You win!");
	break;

	case 'scissors|rock' : console.log("Computer wins!");
	break;

	default : console.log("I don't think you really get me.");

}

// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

console.log("Question 21-22");
// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
       //var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 22. Use a while loop to keep flipping the coin until you get tails.
// 0 is heads, 1 is tails
var coin = Math.floor(Math.random() * 2);
var count = 1;
while (coin === 0) {
	coin = Math.floor(Math.random() * 2);
	count++;
}
console.log("It took " + count + " flip(s) to get to tails.");

console.log("Question 23");
// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for(var i = 1; i <= 100; i++) {
	if (i % 15 === 0) {
		console.log("FizzBuzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}

console.log("Question 24");
// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.


// var size = 8;
// var boardMaker = '';
// for (var i = 1; i <= size * size; i++ ) {
// 	boardMaker += ' #';
// }

var boardSize = 8;
for (var  row = 1; row <= boardSize; row++) {
	if (row % 2 !== 0) {
		console.log(" # # # #" + "\n");
	} else {
		console.log("# # # # " + "\n");
	}
}

// var boardSize = 8;
// for (var row = 1; row <= boardSize; row++) {
// 	if (row % 2 !== 0) {
// 		for 
// 		console.log(" # # # #" + "\n");
// 	} else {
// 		console.log("# # # # " + "\n");
// 	}
// }


//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
//didn't get code below on my own but had seen on http://eloquentjavascript.net/code/#2.3 before

var boardSize = 8;

var boardMaker = "";

for (var y = 0; y < boardSize; y++) {
  for (var x = 0; x < boardSize; x++) {
    if ((x + y) % 2 == 0)
      boardMaker += " ";
    else
      boardMaker += "#";
  }
  boardMaker += "\n";
}

console.log(boardMaker);

