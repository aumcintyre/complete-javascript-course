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
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Austin';
let job = 'Teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example:

if (!numProducts) {
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}
