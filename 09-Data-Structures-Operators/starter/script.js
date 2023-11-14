'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced ojbect literals - objects
  openingHours,

  //ES6 Enhanced literals - Functions (compare to below)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order Received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const { menu1 = [], starterMenu: starters = [] } = restaurant;
console.log(menu1, starters);
*/


//Mutating Variables
/*
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };


({ a, b } = obj);
console.log(a, b);
*/

//Nested Object Destructuring
/*
const { fri: { open: friOpen, close: friClose } } = openingHours;
console.log(friOpen, friClose);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2
})

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: '1'
})
*/

//------------------------ARRAY DESTRUCTURING
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, h]] = nested;
// console.log(i, j, h );


//----------------------------THE SPREAD (...) OPERATOR!----------------------
//We use this to expand an array into all of its elements
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr)
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
*/

//2 Main uses of Spread Operator: Create a shallow copy of an array, merge 2 arrays

//Copying an array:
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
/*
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Austin';
const letters = [...str, '', 'M.'];
console.log(letters);
*/

//REAL WORLD EXAMPLE
/*const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]

console.log(ingredients);

restaurant.orderPasta(...ingredients)
*/

//OBJECT SPREAD OPERATOR
/*
const newRestaurant = {
  ...restaurant,
  founder: 'Austin McIntyre'
}

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//-----------REST PATTERN AND PARAMTERS-----------

/*
//DESTRUCTURING

//SPREAD, because (...) is on the RIGHT side of the operator
const arr = [1, 2, ...[3, 4]];

//REST, because (...) is on the LEFT side of the operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 8, 15, 87];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

//REST Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 5);
add(1, 4, 6);
add(4, 6, 6, 7, 8)

const x = [23, 5, 7]

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
*/

//---------SHORT CIRCUITING (&& and II)-----------
// Use ANY data type, return ANY data type, short-circuiting
/*
console.log('--------OR--------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
//|| operator will skip any falsey value and return the first truthy value it comes across. If all values are falsey, the last value will be returned
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);



const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------AND--------');
console.log(0 && 'Austin');
console.log(1 && 'Austin');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//------NULLISH COALESCING OPERATOR (??)-------
//Nullish Values = 'null' or 'undefined' (NOT 0 or '')
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//--------LOGICAL ASSIGNMENT OPERATORS-----------

const rest1 = {
  name: 'Capri',
  numGuests: 0,
}

const rest2 = {
  name: 'La Pizza',
  owner: 'Gio Rossi'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//---------NULLISH Assignment Operator--------
rest1.numGuests ??= 10;
//------------OR Assignment Operator-----------
rest2.numGuests ||= 10;

//AND Assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

//Solo practice after coding challenge
/*
const [team1players, team2players] = game.players;
const [gk, ...fieldPlayers] = team1players;

const allPlayers = [...team1players, ...team2players];

const players1Final = [...team1players, 'Thiago', 'Coutihno', 'Perisic'];

const { odds: { team1, x: draw, team2 } } = game;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored today!`);
}

printGoals('Mac', 'Zac', 'Dak')
printGoals(...game.scored)

team1 < team2 && console.log('Team 1 is the projected winner!');

team1 > team2 && console.log('Team 2 is the projected winner!');

console.log(gk, fieldPlayers);
console.log(team1players, team2players);
console.log(allPlayers);
console.log(players1Final);

const austin = {
  name: 'Austin',
  classes: [[
    'advisory',
    'health',
    'pe'
  ], [
    'math',
    'science'
  ]]
}

const [electives, coreClasses] = austin.classes;
console.log(electives, coreClasses);
*/

/*
//CODING CHALLENGE ANSWERS
console.log(game.players);
//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];

//4.
const players1Final = [...players1, 'Thiago', 'Coutihno', 'Perisic'];

//5.
const { odds: { team1, x: draw, team2 } } = game;

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${arguments.length} goals were scored!`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');

team2 < team1 && console.log('Team 2 is more likely to win');

console.log(players1);
console.log(players2);
console.log(allPlayers);
console.log(players1Final);

//---------END OF CHALLENGE 1-------



// const printWinner = function (team1, team2) {
//   if (team1 > team2) {
//     console.log('Team 2 is the favorite');
//   } else console.log('Team 1 is the favorite')
// };

// (team1 > team2) ??= 'Team 2 is the favorite';

// printWinner(1.33, 6.5);
*/

//----------Looping Arrays: The For-Of Loop------
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
  console.log(item);
}

//Can destructure right away since item OF something is an array [index, item]
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
};
*/



/*
//==========Enhanced Object Literals==========
//Old way to check if properties exist
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

for (const day of weekdays) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
};

//Optional Chaining - Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!');

//Optional Chaining - Arrays
const users = [
  {
    name: 'austin',
    email: 'aumc@gmail.com'
  }
];

console.log(users[0]?.name ?? 'User array empty');
*/


/*
//==============Looping Objects=================

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
};

console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On the ${key} we open at ${open} and close at ${close}`);
}
*/


/*
//===============CODING CHALLENGE 2============
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//1.
const goalScore = Object.entries(game.scored);

console.log(goalScore);

for (const [goals, player] of goalScore) {
  console.log(`Goals ${goals}: ${player}`);
};

//2.
const { odds } = game;
console.log(odds);
const gameLines = Object.entries(odds);
console.log(gameLines);

const gameOdds = Object.values(odds);
console.log(gameOdds);

//My Solution
const oddsAvg = function (arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  avg /= arr.length;
  console.log(avg);
}

oddsAvg(gameOdds)

//His Solution
const oddsValues = Object.values(game.odds);
console.log(oddsValues);
let average = 0;
for (const odd of oddsValues)
  average += odd;
average /= oddsValues.length;
console.log(average);


//3.
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odds}`);
}
console.log(game.team1);

//BONUS
//Simply loop through the entries on the game.scored object. Turnary to see if that player already exists in the object. If so, add one to the total, if  not, that players name is added, and the goals value is set to 1.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers);
*/

//=================SETS====================

/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'pizza']);

console.log(ordersSet);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']).size);
*/


//================MAPS FUNDAMENTALS==========