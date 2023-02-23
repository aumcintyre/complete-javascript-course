// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markWeight = 78;
// const johnWeight = 92;

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2
// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI

// );

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ( ${markBMI} ) is higher than John's! ( ${johnBMI} )`);
// } else {
//     console.log(`Johns's BMI ( ${johnBMI} ) is higher than Mark's! ( ${markBMI} )`);
// }


//=============CODING CHALLENGE #3==============

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//Data 1
let dolphinAvg = ((96 + 108 + 89) / 3);
console.log(dolphinAvg);
let koalasAvg = ((88 + 91 + 110) / 3);
console.log((koalasAvg));

if (dolphinAvg > koalasAvg && dolphinAvg >= 100) {
    console.log(`Dolphins win by a score of ${dolphinAvg} to ${koalasAvg}!`);
} else if (koalasAvg > dolphinAvg && koalasAvg >= 100) {
    console.log(`Koalas win by a score of ${koalasAvg} to ${dolphinAvg}!`);
} else if (dolphinAvg === koalasAvg && dolphinAvg >= 100) {
    console.log('It is a draw!');
} else if (dolphinAvg < 100 && koalasAvg < 100) {
    console.log('Neither team scored high enough to win!');
}

//Data 2
dolphinAvg = ((97 + 112 + 101) / 3);
console.log(dolphinAvg);
koalasAvg = ((109 + 95 + 123) / 3);
console.log((koalasAvg));

if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
    console.log(`Dolphins win by a score of ${dolphinAvg} to ${koalasAvg}!`);
} else if (koalasAvg > dolphinAvg && koalasAvg > 100) {
    console.log(`Koalas win by a score of ${koalasAvg} to ${dolphinAvg}!`);
} else if (dolphinAvg === koalasAvg && dolphinAvg >= 100) {
    console.log('It is a draw!');
} else if (dolphinAvg < 100 && koalasAvg < 100) {
    console.log('Neither team scored high enough to win!');
}

//Data 3
dolphinAvg = ((97 + 112 + 101) / 3);
console.log(dolphinAvg);
koalasAvg = ((109 + 95 + 106) / 3);
console.log((koalasAvg));

if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
    console.log(`Dolphins win by a score of ${dolphinAvg} to ${koalasAvg}!`);
} else if (koalasAvg > dolphinAvg && koalasAvg > 100) {
    console.log(`Koalas win by a score of ${koalasAvg} to ${dolphinAvg}!`);
} else if (dolphinAvg === koalasAvg && dolphinAvg >= 100) {
    console.log('It is a draw!');
} else if (dolphinAvg < 100 && koalasAvg < 100) {
    console.log('Neither team scored high enough to win!');
}