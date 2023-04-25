//===============USING STRICT MODE==================

'use strict';
//Creates visible errors in the console allowing devs to more easily idenifty errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
//With strict mode on, this will produce an 'Uncaught Reference Error' because this variable doesn't exist. Without strict mode, no error or console log will show.

// if (hasDriversLicense) console.log('I can drive');

//=====================FUNCTIONS======================

//declaring a function
// function logger() {
//     console.log('My name is Austin');
// }

//calling a function
// logger();


//Parameters (apples, oranges) are basically variables that are specific only to the function they are passed into. Can be referred to as input data as well.
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//DRY Code = DON'T REPEAT YOURSELF. Reuse functions when you can!

//===============DECLARATIONS VS EXPRESSIONS=============
//Parameter is the placeholder in the function (birthYear) and then the argument is the value (1991) that replaces the parameter placeholder.

//DECLARATION
// function calcAge(birthYear) {

//     return 2023 - birthYear;
// }

// const austinAge = calcAge(1991);
// console.log(austinAge);

//EXPRESSION | Also called an anonymous function because it's assigned to a variable but never given a name

// const calcAge1 = function (birthYear) {
//     return 2023 - birthYear;
// }

// const austinAge2 = calcAge1(1991);

// console.log(austinAge, austinAge2);

//===================ARROW FUNCTIONS===============
//Added to JS in ES6
// const calcAge1 = function (birthYear) {
//     return 2023 - birthYear;
// }

// //Arrow
// const calcAge2 = birthYear => 2023 - birthYear
// const age2 = calcAge2(1991)
// console.log(age2);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }


// console.log(yearsUntilRetire(1991, 'Austin'));
// console.log(yearsUntilRetire(1981, 'Tyler'));

//You CANNOT use the 'THIS' keyword when using an arrow function!

//========CALLING FUNCTIONS IN OTHER FUNCTIONS==========

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3 ));

//===============FUNCTIONS REVIEW=====================
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsUntilRetire = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     // return retirement;
//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`
//     } else {
//         return `${firstName} has already retired!`
//     }
// }

// console.log(yearsUntilRetire(1991, 'Austin'));
// console.log(yearsUntilRetire(1955, 'Bill'));

//==================|ARRAYS|====================

// const friends = ['Austin', 'Bill', 'Tommy']
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Mike'
// console.log(friends[2]);

// friends.push('Tommy')
// console.log(friends);
// friends.pop();
// console.log(friends);

// const austin = ['Austin', 'McIntyre', 2023 - 1991, 'teacher', friends];

// console.log(austin);

//Practice
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const age4 = calcAge(years[years.length - 1])
// console.log(age1);
// console.log(age2);
// console.log(age3);
// console.log(age4);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])]

// console.log(ages);

//====================|ARRAY METHODS|================
// const friends = ['Austin', 'Mariah', 'Mike', 'Gigi']

// //ADDING ELEMENTS TO AN ARRAY
// const newLength = friends.push('Jay');
// //The PUSH method actually does return a value, the new length of the array.
// // friends.shift()
// // console.log(friends);
// // console.log(newLength);

// // friends.unshift('Billy')
// // console.log(friends);

// // //REMOVING ELEMENTS FROM AN ARRAY
// // friends.pop(); //Removes last element, no argument needed
// // let popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // let shifted = friends.shift(); //Removes first element
// // console.log(shifted);
// // console.log(friends);


// // console.log(friends.indexOf('Austin'));

// // //INCLUDES IS AN ES6 METHOD
// // console.log(friends.includes('Austin'));
// // console.log(friends.includes('Tom'));

// // if (friends.includes('Tommy')) {
// //     console.log('You have a friend named Austin');
// // } else {
// //     console.log('You have no friends, nerd.');
// // }

// //=================|INTRO TO OBJECTS|==============


// //Simple Array, we only get values here, not properties or 'value-pairs';
// const austinArray = [
//     'Austin',
//     'McIntyre',
//     'Teacher',
//     2023 - 1991,
//     ['Bill', 'Ted', 'Tom']
// ]

// //With an object, we make each value a pair by giving it a name (property) {property: 'value'}

// const Austin = {
//     firstName: 'Austin',
//     lastName: 'McIntyre',
//     age: 23,
//     occupation: 'teacher',
//     friends: ['Mike', 'Bill', 'Tim', 'Ted']

// }

// console.log(Austin.friends);
// console.log(Austin);

// const nameKey = 'Name';
// //=============|DOT vs BRACKET NOTATION|=============
// console.log(Austin['first' + nameKey]);
// console.log(Austin['last' + nameKey]);

// //Cannot use bracket notation and dot notation together
// console.log(Austin.firstName, "Born Ready", Austin.lastName);

// const interestedIn = prompt(`What would you like to learn about ${Austin.firstName}? Choose between lastName, age, occupation, or friends!`);

// //This allows us to use a variable to find specific information within an object. Here we are using client feedback from a prompt, but only if that property actually exists, otherwise you will see an undefined error
// console.log(Austin[interestedIn]);

// //If we aren't sure if the value will exist, we can use an IF statement like this:

// if (Austin[interestedIn]) {
//     console.log(Austin[interestedIn]);
// } else {
//     console.log('Invalid property');
// }


// //We can add value pairs using either method
// Austin.location = 'Chicago';
// Austin['twitter'] = '@Schmack23'

// console.log(Austin);

// //=======CHALLENGE
// console.log(`${Austin.firstName} has ${Austin.friends.length} friends and his best friend is ${Austin.friends[0]}.`);

//===================|OBJECT METHODS|====================
//Remember, functions are just another value, which means you can create a key value pair within an object.

//Any function that is attached to an object is called a 'method'

// const austin = {
//     firstName: 'Austin',
//     lastName: 'McIntyre',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Bill', 'Ted'],
//     hasDriversLicense: true,

// calcAge: function () {
//     console.log(this);
//     return 2023 - this.birthYear;
// }

//     calcAge: function () {
//         // console.log(this);
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// }

// console.log(austin.age);

//CHALLENGE
//Write a method called getSummary() which would grab a summary of all data in the austin object

// console.log(austin.getSummary());

//Arrays are also objects, albeit a special kind, so methods can be used on them. (push, pop, shift, unshift + custom made methods like calcAge)

//================|ITERATION: For Loops|=================
//For loop keeps running while the middle condition remains true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Rep #${rep}`);
}

// function numSort(num) {
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0 && i % 3 === 0) {
//             console.log(i, 'FizzBang');
//         } else if (i % 2 === 0) {
//             console.log(i, 'Fizz');
//         } else if (i % 3 === 0) {
//             console.log(i, 'Bang');
//         } else {
//             console.log(i, 'Nothing here.');
//         }

//     }
// }

// numSort(15);

// const austinArray = [
//     'Austin',
//     'McIntyre',
//     'Teacher',
//     2023 - 1991,
//     ['Bill', 'Ted', 'Tom'],
//     true,
//     false,
//     'Sup'
// ]

// const typeArray = []

// for (let i = 0; i < austinArray.length; i++) {
//     console.log(austinArray[i]);
//     typeArray.push(typeof austinArray[i]);

//could also do this...
//typeArray[i] = typeof austinArray[i]

// }
// console.log(typeArray);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages);

//===============|BREAK & CONTINUE|==============
//Continue - to exit the current iteration of the loop, and continue to the next one
//Break - Used to end the loop fully

// console.log('ONLY STRINGS USING CONTINUE:');
// for (let i = 0; i < austinArray.length; i++) {
//     if (typeof austinArray[i] !== 'string') continue;
//     console.log(austinArray[i]);

// }

// console.log('BREAK ON FIRST NUMBER');
// for (let i = 0; i < austinArray.length; i++) {
//     if (typeof austinArray[i] === 'number') break;
//     console.log(austinArray[i]);
// }

//========|LOOPING BACKWARDS & LOOPS IN LOOPS|==========
// const austinArray = [
//     'Austin',
//     'McIntyre',
//     'Teacher',
//     2023 - 1991,
//     ['Bill', 'Ted', 'Tom'],
//     true,
// ];

//Counter -- Counter condition -- Counter Update
//First part is where the index starts, second part is the condition for how long the loop will run, third part is how the loop is interated through (up 1, every other, down 1, etc...)
// for (let i = austinArray.length - 1; i >= 0; i--) {
//     console.log(austinArray[i]);
// }

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep}`);
    }
}



// let book;
// let currentBook;




// for (let book = 1; book <= 5; book++) {

// if (book = 1) {
//     currentBook = 'A Game of Thrones'
// } else if (book = 2) {
//     currentBook = 'A Clash of Kings'
// } else if (book = 3) {
//     currentBook = 'A Storm of Swords'
// } else if (book = 4) {
//     currentBook = 'A Feast for Crows'
// } else if (book = 5) {
//     currentBook = 'A Dance with Dragons'
// }

// }
// let book = 1;
// while (book <= 5) {
//     console.log();
//     book++
// }

// for (let num = 1; num <= 15; num++) {
//     if ((num % 3 == 0) && (num % 5 == 0)) {
//         console.log('FizzBang');
//     } else if (num % 3 == 0) {
//         console.log('Fizz');
//     } else if (num % 5 == 0) {
//         console.log('Bang');
//     } else {
//         console.log(`${num}`);
//     }
// }

//==============|THE WHILE LOOP|=====================
for (let rep = 1; rep <= 10; rep++) {
    console.log(` WHILE Rep ${rep}`);
}

let rep = 1
while (rep <= 10) {
    console.log(`Lifing weights rep ${rep}`);
    rep++
}

let diceRoll = Math.trunc(Math.random() * 6) + 1;

while (diceRoll !== 6) {
    console.log(`You rolled a ${diceRoll}`);
    diceRoll = Math.trunc(Math.random() * 6) + 1;
    if (diceRoll === 6) console.log('Loop is about to end');
}