// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Austin');

// let firstName = 'Austin'

// let lastName = 'McIntyre'

// let fullName = (lastName + " " + firstName)
// console.log(fullName);

// let people = ["Sam", "Ben", "Jon"]

// I AM LEARNING HOW TO COMMENT MY CODE AGAIN YAY



// ============DATA TYPES===============

/*
let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof jsIsFun);
console.log(typeof 1);
console.log(typeof 'jsIsFun');

jsIsFun = 'YES';

console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

//================= LET VAR CONST=================
//BEST PRACTICE, USE CONST BY DEFAULT, USE LET WHEN YOU ARE POSITIVE THE VALUE WILL BE CHANGING
//GOOD PRACTICE IS A LITTLE VARIABLE MUTATION AS POSSIBLE
//AVOID VAR, BUT UNDERSTAND IT FOR LEGACY USAGE (WORKS SIMILAR TO LET)

// let age = 30;
// age = 31;

// const birthYear = 1991;

//==================OPERATORS=====================


// //Math Operators
// const now = 2037;
// const ageAustin = now - 1991;
// const ageSara = now - 2018;
// console.log(ageAustin, ageSara);
// console.log(ageAustin * 2, ageAustin / 10, 2 ** 3);

// const firstName = 'Austin';
// const lastName = 'McIntyre';

// console.log(firstName + ' ' + lastName);


// //Assignment Operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--
// // x = x + 10

// console.log(x);

// //Comparison Operators
// // <,>,<=,>=
// console.log(ageAustin > ageSara);
// console.log(ageSara >= 18);

// const isLegalAge = ageSara >= 18;
// console.log(isLegalAge);

//===============OPERATOR PRECEDENCE=================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const now = 2037;
// const ageAustin = now - 1991;
// const ageSara = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5 // x = y = 10

// console.log(x, y);

// const averageAge = (ageAustin + ageSara) / 2;
// console.log(ageAustin, ageSara);
// console.log(averageAge);


//================TEMPLATE LITERALS====================
// const firstName = 'Austin';
// const birthYear = 1991;
// const currentYear = 2037;
// const job = 'teacher';

// const austin = 'Hi, my name is ' + firstName + ' and I am ' + (currentYear - birthYear) + ' years old. I work as a ' + job + '.';

// console.log(austin);

// const austinNew = `Hi, my name is ${firstName}, and I am ${currentYear - birthYear} years old.
// I work as a ${job}.`

// console.log(austinNew);

//==================IF / ELSE STATEMENTS===============
// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('YAY 👌');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`BOO, you still have ${yearsLeft} year(s) to go!`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear < 2000) {
//     century = '20th';
// } else {
//     century = '21st';
// }

// console.log(century);

//==============TYPE CONVERSION & COERCION==============
//Conversion - Manually convert from one type to another
//Can only convert to a string, number, or boolean

// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(String(23), 23)
// console.log(inputYear + 18);

//Coercion - JavaScript can automatically change the data type
// console.log('I am ' + 23 + ' years old.');
//String, number, then another string. The plus (+) operator initiates the coercion done on the backend.
// console.log('23' - '10' - 3);
//The minus(-) operator iniates the coercion and converts everything to numbers. The plus (+) operator would instead convert to strings

// let n = '1' + 1 // '11'
// n = n - 1 // '11' -> 11-1=10
// console.log(n);
//This results in an answer of 10 because '1' + 1 will show as 11 in the console (+) coerces data into strings. Then 1 is subtracted leaving 10.

//==================TRUTHY & FALSEY=====================
//In JS, there are 5 falsey values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Austin'));
// console.log(Boolean({}));

// const money = 1000;

// if (money) {
//     console.log("Don't spend it all in one place!");
// } else {
//     console.log("You're broke AF.");
// }

// let height = 0;

// if (height) {
//     console.log('Yay');
// } else {
//     console.log('Boo, undefined.');
// }

//==============|EQAULITY OPERATORS == & === |===========
// const age = '18';

// if (age === 18) console.log('STRICT. You just became an adult!');
// if (age == 18) console.log('LOOSE. You just became an adult!');

//(===) (Strict equality operator) will return a 'True' or 'False' boolean value. Only returns true when both values are EXACTLY the same. (No type coercion)
//(==) (Loose equality operator) Will return a true boolean if both values are exactly the same or become the same after JS handles type coercion
//GENERAL RULE IS TO AVOID LOOSE EQUALITY AS MUCH AS POSSIBLE. CONVERT TYPES BEFORE THE EQUALITY COMPARISON IF NECESSARY.(Shown below)

// const favorite = Number(prompt('What is your favorite number?'));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool, 23 is a dope number.');
// } else if (favorite === 7) {
//     console.log('7 is cool, but not as cool as 23');
// } else {
//     console.log(`The number ${favorite} sucks!`);
// }

//================BOOLEAN LOGIC===================
//BASIC OPERATORS: AND (&&) OR (||) NOT (!)

// const age = 16;

// if (age >= 20);

//===========LOGICAL OPERATORS============

// const hasDriversLicense = true; // Variable A
// const hasGoodVision = true; // Variable B

// if (hasDriversLicense || hasGoodVision) { console.log('Yay'); } else { console.log('Boo'); }

// if (hasDriversLicense && hasGoodVision) { console.log('Yay'); } else { console.log('Boo'); }

// if (!hasDriversLicense) { console.log('Yay'); } else { console.log('Boo'); }



// if (shouldDrive) {
//     console.log('Sara is able to drive.');
// } else {
//     console.log('Sara can not drive.');
// }

// const isTired = true; // Variable C

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (shouldDrive) {
//     console.log('Sara is able to drive.');
// } else {
//     console.log('Jesus take the wheel.');
// }

//===============SWITCH STATEMENTS================
// const day = 'Monday';


//Switch statements use strict equality. Capitalization and data types matter!!
// switch (day) {
//     case 'Monday':
//         console.log('Plan my course structure.');
//         console.log('I can execute multiple lines of code for each case!');
//         break;
//     case 'Tuesday':
//         console.log('I sleep all day.');
//         break;
//     case 'Wednesday':
//         console.log('HUMP DAY.');
//         break;
//     case 'Thursday':
//     case 'Friday':
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Long weekends are great.');
//         break;


//     default:
//         console.log('Not a valid day!');
//         break;
// }

// if (day === 'Monday') {
//     console.log('Plan my course structure.');
// } else if (day === 'Tuesday') {
//     console.log('I sleep all day.');
// } else if (day === 'Wednesday') {
//     console.log('HUMP DAY.');
// } else if (day === 'Thursday' || 'Friday' || 'Saturday' || 'Sunday') {
//     console.log('Long weekends are great.');
// } else {
//     console.log('Not a valid day!');
// }

//============STATEMENTS VS EXPRESSIONS==============

// Expressions will produce a value | Example: 3 + 4
//Single numbers can also be an expression as they are inherently a value. Boolean values are also expressions

//Statements are the complete sentence, whereas expressions can be viewed as the words in the sentence.
//IF ELSE / SWITCH is an easy example of a statement

// if (23 > 18) {
//     console.log('Neat');
// }

//Above is a statement. It does not produce a value on it's own, just logs a sentence to the console

//==============CONDITIONAL TERNARY OPERATOR===========
const age = 23;
age >= 18 ? console.log('Good, you are old enough') : console.log('Too Young');

const drink = age >= 18 ? 'Wine' : 'Water';

console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);