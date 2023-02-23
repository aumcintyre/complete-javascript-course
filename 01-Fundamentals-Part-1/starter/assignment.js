//=============VARIABLES AND VALUES ASSIGNMENT==============


const country = 'america';
const continent = 'north america';
const population = 10000000;




//================DATA TYPES ASSIGNMENT=================

const isIsland = false;
let language;

console.log(isIsland);
console.log(language);
console.log(country);
console.log(continent);
console.log(population);

//=================LET VAR CONST ASSIGNMENT===============

language = 'English';

//===============OPERATOR ASSIGNMENT=====================

let newPopulation = population / 2;
console.log(newPopulation);

newPopulation++;
console.log(newPopulation);

console.log(population > 6000000);

const avgPopulation = 33000000

console.log(avgPopulation > population);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese.'

console.log(description);

const sarahCountry = (population < 50000000 && language === 'English' && !isIsland)

if (sarahCountry) {
    console.log(`Sarah would love living in ${country}`);
} else { console.log(`${country} does not match what Sarah is looking for`); }