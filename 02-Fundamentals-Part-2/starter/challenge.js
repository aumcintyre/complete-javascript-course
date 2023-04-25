'use strict';

//==================|CODING CHALLENGE #1|================

// console.log('I will do this later.')

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(teamOne, teamTwo) {
//     if (teamOne >= teamTwo * 2) {
//         return `Team 1 wins by a score of ${teamOne} to ${teamTwo}`;
//     } else if (teamTwo >= teamOne * 2) {
//         return `Team 2 wins by a score of ${teamTwo} to ${teamOne}`;
//     } else {
//         console.log(teamOne);
//         console.log(teamTwo);
//         return 'Neither team meets the requirements to win!';
//     }
// }

// const team1 = calcAverage(85, 54, 41);
// console.log(team1);
// const team2 = calcAverage(23, 34, 27);
// console.log(team2);

// console.log(checkWinner(team1, team2));

//===============|CODING CHALLENGE #2|=================


// function calcTip(total) {
//     let tip;
//     let subtotal;
//     if (total >= 50 && total <= 300) {
//         tip = total * .15
//     } else {
//         tip = total * .20
//     }
//     subtotal = total + tip;
//     tips.push(tip);
//     totals.push(subtotal);
//     return;
// }

// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);
// console.log(tips);
// console.log(totals);

//==============| CODING CHALLENGE: ARRAY|===========

// function calcTip1(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }


// const bills = [125, 555, 44];
// const tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2]),];
// console.log(bills, tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

//============|CODING CHALLENGE: OBJECT METHODS|===========

// const mark = {
//     fullName: 'Mark Miller',
//     height: 1.69,
//     weight: 78,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }

// }

// const john = {
//     fullName: 'John Smith',
//     height: 1.95,
//     weight: 92,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john.bmi);
// console.log(mark.bmi);

// // console.log(`(${mark.calcBMI()} > ${john.calcBMI()}) ? {${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})}` : `John's is higher`);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
// }

//===============CODING CHALLENGE #4=================

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const averages = [];

// function calcTip(bill) {
//     let tip;
//     let total;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * .15
//     } else {
//         tip = bill * .20
//     }
//     total = bill + tip;
//     tips.push(tip);
//     totals.push(total);
//     return;
// }


// for (let i = 0; i < bills.length; i++) {
//     calcTip(bills[i]);
// }

//ALTERNATE

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);


function calcAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        //sum += arr[i] -- Would do the same thing
    }
    let average = sum / (arr.length);
    averages.push(average)
    console.log(averages);
}

calcAvg(totals);


calcAvg(tips)