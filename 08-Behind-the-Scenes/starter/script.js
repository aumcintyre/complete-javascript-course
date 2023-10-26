'use strict';

//SCOPING LECTURE

/* function calcAge(birthYear) {
    const age = 2023 - birthYear;
    console.log(firstName);
    //Won't find the firstName variable in this scope, so JavaScript will do a variable lookup in the global scope

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            add(2, 3)
        }

    }
    printAge();
    return age;
}

const firstName = 'Austin';
calcAge(1991); */

//HOISTING LECTURE

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Austin';
// let job = 'Teacher';
// const year = 1991;

//Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

//Example:

// if (!numProducts) {
//     deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2023 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2023 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1991);

// const austin = {
//     year: 1991,
//     calcAge: function (birthYear) {
//         console.log(this);
//         console.log(2023 - this.year);
//     }
// }

// austin.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = austin.calcAge;
// matilda.calcAge();

// const f = austin.calcAge;
// f();

// const austin = {
//     firstName: 'Austin',
//     year: 1991,
//     calcAge: function (birthYear) {
//         // console.log(this);
//         console.log(2023 - this.year);

//         //SOLUTION #1
//         // const self = this // 'self' OR 'that'
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };

//         //SOLUTION #2 (ES6 or Newer)
//         const isMillenial = () => {
//             console.log(this);
//             // console.log(this.year >= 1981 && this.year <= 1996);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };

//         isMillenial();
//     },
//     greet: function () { console.log(`Hey ${this.firstName}`) },
// }


// austin.greet();
// austin.calcAge();


//ARGUMENTS keyword
// function addDecl(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// addDecl(2, 5);

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }
// addExpr(2, 5);

// const addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b
// };

// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// 
// console.log(age);
// console.log(oldAge);
// 
// const me = {
// name: 'Austin',
// age: 30,
// }
// 
// const friend = me;
// 
// friend.age = 29;
// 
// console.log(friend);
// console.log(me);

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

//Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Jim', 'Jon']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Beth');
jessicaCopy.family.push('Mary');

console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);