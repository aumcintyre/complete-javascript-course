'use strict';

//===============FUNCTIONS PRACTICE==================

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} people and its capital city is ${capitalCity}.`
//     return description;
// }

// const describeAmerica = describeCountry('America', '300 million', 'Washington DC');

// const describeCanada = describeCountry('Canada', '38 million', 'Ottowa');

// const describeMexico = describeCountry('Mexico', '126 million', 'Mexico City');

// console.log(describeAmerica);
// console.log(describeCanada);
// console.log(describeMexico);

//==========DECLARATIONS VS EXPRESSIONS PRACTICE===========

function percentageOfWorld1(population) {
    return (population / 7900 * 100).toFixed(1);
};

// const America = percentageOfWorld1(300);
// const Canada = percentageOfWorld1(38);
// const Mexico = percentageOfWorld1(128);

// console.log(America);
// console.log(Canada);
// console.log(Mexico);

const percentageOfWorld2 = function (population) {
    return (population / 7900 * 100).toFixed(2)
}

// const America1 = percentageOfWorld2(300);
// const Canada1 = percentageOfWorld2(38);
// const Mexico1 = percentageOfWorld2(128);

// console.log(America1);
// console.log(Canada1);
// console.log(Mexico1);

//=================ARROW FUNCTION PRACTICE=================
// const percentageOfWorld3 = (population, country) => {
//     const percentage = (population / 7900 * 100).toFixed(2);
//     return `${country} accounts for ${percentage} percent of the World's population.`
// }
// console.log(percentageOfWorld3(300, 'America'));
// console.log(percentageOfWorld3(38, 'Canada'));
// console.log(percentageOfWorld3(128, 'Mexico'));

//=====CALLING FUNCTIONS IN OTHER FUNCTIONS PRACTICE=====
// function describePopulation(population, country) {
//     const popPercent = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${popPercent}% of the world.`
// }

// console.log(describePopulation(300, 'America'));