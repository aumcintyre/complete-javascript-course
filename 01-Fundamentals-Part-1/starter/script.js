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
const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('YAY 👌');
} else {
    console.log('BOO');
}