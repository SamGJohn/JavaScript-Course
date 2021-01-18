// https://stackoverflow.com/questions/5181845/git-push-existing-repo-to-a-new-and-different-remote-repo-server
//////////////////////////////////////////////////
// Coding Challenge #3

// point 1
// const dolphinAvg = (97 + 112 + 101)/3;
// const koalaAvg = (88 + 1000 + 110)/3;
// // const koalaAvg = 103.33333333333333
// console.log(dolphinAvg);
// console.log(koalaAvg);

// if(dolphinAvg > koalaAvg){
//     console.log(`fuckin a right`)
// } else if(dolphinAvg === koalaAvg){
//     console.log(`tie ball game. this is why soccer sucks`)
// } else{
//     console.log(`the god damn dolphins`)
// }

// const dolphinAvg = (97 + 112 + 101)/3;
// const koalaAvg = (109 + 95 + 123)/3;
// // const koalaAvg = 103.33333333333333
// console.log(dolphinAvg);
// console.log(koalaAvg);

// if(dolphinAvg > koalaAvg && dolphinAvg >= 100){
//     console.log(`dolphins win`)
// } else if(dolphinAvg === koalaAvg){
//     console.log(`tie ball game. this is why soccer sucks`)
// } else if(koalaAvg > dolphinAvg && koalaAvg >= 100) {
//     console.log(`koalas win`)
// }else{
//     console.log(`nobody wins, you`)
// }

// const dolphinAvg = (97 + 80 + 101)/3;
// const koalaAvg = (109 + 95 + 106)/3;
// // const koalaAvg = 103.33333333333333
// console.log(dolphinAvg);
// console.log(koalaAvg);

// if(dolphinAvg > koalaAvg && dolphinAvg >= 100){
//     console.log(`dolphins win`)
// } else if(dolphinAvg === koalaAvg && koalaAvg >= 100){
//     console.log(`tie ball game. this is why soccer sucks`)
// } else if(koalaAvg > dolphinAvg && koalaAvg >= 100) {
//     console.log(`koalas win`)
// }else{
//     console.log(`nobody wins, you all suck`)
// }


//////////////////////////////////////////////////
// 26. The Switch Statment

// const day = `wednesday`;

// switch(day) {
//     case 'monday': // basically writing day === `monday`
//         console.log(`plan course structrure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`perpare video`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`write code example`)
//         break;
//     case 'friday':
//         console.log(`Record videos`)
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`)
//         break;
//     default: // just like writing else
//         console.log(`wtf that's not a day`)
// }



// if(day === "monday") {
//     console.log(`plan course structrure`);
//     console.log(`Go to coding meetup`);
// } else if(day === "tusday") {
//     console.log(`it's tuesday`);
// }else if(day === "wednesday" || day === "thursday") {
//     console.log(`it could be wed or thurs`)
// } else if(day === "friday") {
//     console.log(`it's friyay`)
// } else if(day === "saturday" || day === "sunday") {
//     console.log(`it's the freakin weekend`)
// }

// console.log(9999)

//////////////////////////////////////////////////
// 27. Statements and Expressions

// 3 + 4 //expression: something that produces a value

// if (23 > 10) { // statment: doesn't produce a value
//     const str ='23 is bigger' // experession does produce a value
// }

// console.log(`I'm not ${24 + 18} years old`) // can only use expressions in template literals


//////////////////////////////////////////////////
// 28. The Conditional (Ternary) Operator

// const age = 23;
// // age >= 18 ? console.log(`I'm ${age} Let's get wasted`) : // can be used as expression
// // console.log(`I'm only ${age}. Can you buy me booze?`); // condition if = ? output else = : 

// const drink = age >= 18 ? `wasted` : `sober`;
// console.log(drink)

// console.log(`I like to be ${age >= 18 ? `wasted` : `sober`}`)

//////////////////////////////////////////////////
// CODING CHALLENGE 4

const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;  
console.log(`the total is ${tip + bill}`)