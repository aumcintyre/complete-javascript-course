// Remember, we're gonna use strict mode in all scripts now!
/* 'use strict';

const xyz = 1;

const calcAge = birthYear => 2023 - birthYear;
console.log(xyz);

console.log(calcAge(1991));

const numbers = [1, 5, 6, 3, 2, 9, 4];

numbers.sort((a, b) => a - b);

console.log(numbers);

const firstTwo = numbers.slice(0, 2);

console.log(firstTwo); */

//=============Pseudo - Code Example================
//function reverseSort(value)
//if value type is string OR number OR object
//sort value (b - a)
//if value is NOT string or number or object
//return value

//Actual code below

/* function reverseSort(value) {
  if (typeof value === 'string' || typeof value === 'number') {
    return value.split('').reverse().join('');
  } else if (typeof value === 'object') {
    return value.reverse();
  } else {
    return value;
  }
}

const numbers2 = [5, 1, 4, 6, 200];
const word = 'dog';
console.log(typeof numbers2);
console.log(reverseSort(numbers2));
console.log(reverseSort(word));
 */
//PROBLEM:
//We work for a company building smart home thermometers. Our most recent task is this: "Given an array of temperations of one day, calculate the termperature amplitude. Keep in mind that sometimes there might be a sensor error"

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//---What is amplitude?
//----The difference between the highest and lowest temperatures in an array
//----How to calculate max and min temperatures?
//----What does a sensor error look like?

// 2) Breaking up into small sub-problems
// --How do we ignore the errors?
// --Find the max value in array
// --Find the min value in array
// --Subtract min from max and return value (amplitude)

/* function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

//PROBLEM 2
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - Do I need to impletement functionality twice? | NO, you can simply merge the 2 arrays at the start

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/* const temps1 = [1, 3, 6, -3, 12];
const temps2 = [2, 4, 1, -5, 11];

function calcTempAmplitude2(temp1, temp2) {
  let temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
}

const amplitude2 = calcTempAmplitude2(temps1, temps2);
console.log(amplitude2); */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius')),
    value: 10,
    // Prompt value will always return as a string
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

function calcTempAmplitudeBug(temp1, temp2) {
  let temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(min, max);
  return max - min;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug); */

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 day ... 21°C in 2 days... 23°C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above console.

Use the problem solving framework: Understand the problem and break it up into sub problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let tempReadout = '';

  for (let i = 0; i < arr.length; i++) {
    let index = i + 1;
    let temp = arr[i];
    let day = '';
    i > 0 ? (day = 'days') : (day = 'day');
    tempReadout += `... ${temp}°C in ${index} ${day} `;
  }
  console.log(tempReadout);
};

printForecast(data1);
printForecast(data2);
