////////////////////////////////////////////////////////
// 32. Strict Mode

'use strict'; // activates strict code. Must be first statement
/*
let hasDeriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDeriversLicense) console.log(`I can drive!`);

const interface = 'audio';
const private = 534;

//////////////////////////////////////////////////////
33. Functions

can receive information and 
function_keyword name(paramaters) {function buddy}
function logger() {
    console.log(`My name is sam`)
}

// calling / running / invoking function: means using the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0) // when returned this statement is replaced with the value of juice

const appleJuice = fruitProcessor(5, 0); //save returned value into variable
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // returns but doesn't save value

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////////////////////////////////
// 34. Function Declarations vs. Expressions


//function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age;
}

// OR // 

function calcAge1(birthYear) { 
    return 2037 - birthYear;
}

const age1 = calcAge1(1889); 
console.log(age1);


//FUNCTION EXPRESSION
const calcAge2 = function(birthYear){ // This variable is now the function. Anon function making this an expression (produces a value). 
    return 2037 - birthYear
}

const age2 = calcAge2(1989);

console.log(age1, age2);

///////////////////////////////////////////////////////
// 35. Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear; //automatically returns the result of the function. Also saves to variable
const age3 = calcAge3(1999); 
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirment(1989, 'Sam'));
console.log(yearsUntilRetirment(1990, `Annabelle`));

/////////////////////////////////////////////////////
36. Functions Calling other Functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


///////////////////////////////////////////////////////

// 37. Reviewing Functions

const calcAge = function(birthYear){ // This birthYear is not related whatsoever to the birthYear in the following function
    return 2037 - birthYear;
}

const yearsUntilRetirment = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement>0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!!`);
        return -1;
    }
   
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirment(1989, 'Sam'));
console.log(yearsUntilRetirment(1970, 'Mike'));

///////////////////////////////////////////////////////

//38. CODING CHALLENGE 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
    const scoreDolphins = calcAverage(65,54,49);
    const scoreKoalas = calcAverage(23,34,27);


// const calcAverage = function(score1, score2, score3){
//     return (score1 + score2 + score3)/3
// }

function checkWinner(dolphinsAvg, koalasAvg){

    if(dolphinsAvg >= (2 * koalasAvg)){
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    } else if (koalasAvg >= (2 * dolphinsAvg)){
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    } else{
        console.log(`you're all losers`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////////////////////

// 39. Introduction to Arrays
const friend1 = 'Mike';
const friend2 = 'Steve';
const friend3 = 'Eric'; 

const friends = ['Mike', 'Steve', 'Eric'];
console.log(friends)

const yrs = new Array(1991, 1984, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);// All arays can be mutated even though declared with const

// friendes = [bob, allen] Cannot replace entire aray

const firstName = 'Sam'
const sam = [firstName, 'Johnson', 2021 - 1989, 'PM', friends];
console.log(sam);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967,2002,2012,2018];

// console.log(clacAge(years)); // Get NaN. Cannot do opperations with an entire array

const age1 = calcAge(years[0]);
console.log(age1);

const ages = [calcAge(years[0]),years[1], years[2]];
console.log(ages)

///////////////////////////////////////////////////////

// 40. Basic Array Operations (Methods)

// Add element to end
const friends = ['Mike', 'Steve', 'Eric'];
friends.push('Jay');
console.log(friends);

const newLength = friends.push('Jay');
console.log(newLength);

// Add element to beginning
friends.unshift('John')
console.log(friends)

//Remove last element
friends.pop();
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends)

// Remove First element
friends.shift();
console.log(friends)

console.log(friends.indexOf('Steve')) // index of returns the position of the element

console.log(friends.includes('Steve')) // tells if the element is in the array. Does not do type coersion

if (friends.includes('Steve')){
    console.log(`Yep Steve is there`)
}


// TIP APP FOR FUN
// const bill = prompt(`what is the bill?`)
// const service = prompt('How was the service? (Yes or No)')

// const calcTip = function(service, billValue){
//     if(service === 'Yes'){
//         return billValue * .20
//     } else {
//         return billValue *.15
//     }
// }

// alert(`You should tip $${calcTip(service, bill)}`)
// const tip = calcTip(service,bill);

// // alert(`Your meal will cost $${tip + bill}`)

const calcTip = function(billValue){
        if(billValue >= 50 && billValue <= 300){
            return billValue * .15
        } else {
            return billValue *.20
        }
    }

    console.log(calcTip(100))

    const bills = [125, 55, 44];
    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
    console.log(tips);

    const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
    console.log(total);

///////////////////////////////////////////////////////

// 42. Intro to Objects

const sam = { // Object Literal
    firstName: 'Sam',
    lastName: 'Johnson',
    age: 2021 - 1989,
    job: 'PM',
    friends: ['Joh', 'Jay', 'Anna']
}; 

console.log(sam.firstName)

///////////////////////////////////////////////////////

// 43. Dot vs. Bracket Notation

const sam = { // Object Literal
    firstName: 'Sam',
    lastName: 'Johnson',
    age: 2021 - 1989,
    job: 'PM',
    friends: ['Joh', 'Jay', 'Anna']
}; 

console.log(sam.firstName);
console.log(sam['lastName']); 

const nameKey = 'Name';
console.log(sam['first' + nameKey]);
console.log(sam['last'+ nameKey]); //can compute the value of this object from an expression use when you need to calculate the value


// const interestedIn = prompt(`What do you want to know about Sam? Choose between firstName, lastName, age, job, and friends`);
// console.log(sam[interestedIn]);

// if(sam[interestedIn]){
//     console.log(sam[interestedIn])
// } else {
//     console.log('Wrong reqeust! What do you want to know about Sam? Choose between firstName, lastName, age, job, and friends')
// }

sam.location = 'New York';
console.log(sam);

//Challenge
// Sam has 3 friends and his best friend is called Michael

console.log(`${sam.firstName} has ${sam.friends.length} friends and his best friend is ${sam.friends[0]}`)

///////////////////////////////////////////////////////

// 44. Object Methods

// const sam = { // Object Literal
//     firstName: 'Sam',
//     lastName: 'Johnson',
//     birthYear: 1989,
//     job: 'PM',
//     friends: ['Joh', 'Jay', 'Anna'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){ //functions attached to objects are called Methods
//     //     return 2021 - birthYear
//     // }

//     // calcAge: function(){
//     //     return 2021 - this.birthYear
//     // }

//     calcAge: function(){
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     }
// }; 

// // console.log(sam.calcAge(1989))
// // console.log(sam['calcAge'](1989));

// console.log(sam.calcAge()); //have to cal the function within the object once then can use the new property defined in the function
// console.log(sam.age);

//Challenge
//"Sam is a 32-year old teacher, and he has a driver's license"

const sam = { // Object Literal
        firstName: 'Sam',
        lastName: 'Johnson',
        birthYear: 1989,
        job: 'PM',
        friends: ['Joh', 'Jay', 'Anna'],
        hasDriversLicense: false,

        calcAge: function(){
            this.age = 2021 - this.birthYear
            return this.age;
        },

        getSummary: function(){
           return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
        }
};

console.log(sam.getSummary());

///////////////////////////////////////////////////////


// Coding Challenge Part 2 Challenge 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/this.height**2
        return this.bmi
    }
}

if(mark.calcBMI()>john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
}else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

///////////////////////////////////////////////////////

// 46. Iteration: The for Loop

console.log('lifting wights repeition 1')
console.log('lifting wights repeition 2')

// ***for loop keeps running while condition is TRUE***
for(let rep = 1; rep <= 10; rep ++){
    console.log('lifting wights repeition 1');
} 

for(let rep = 1; rep <= 10; rep ++){
    console.log(`lifting weights rep ${rep}`);
} 

///////////////////////////////////////////////////////
// 47. Looping Arrays, Breaking Continuing

const sam = [ // Object Literal
    'Sam',
    'Johnson',
    2021 - 1989,
    'PM',
    ['Joh', 'Jay', 'Anna'],
    true
    
]; 
const types = [];

// console.log(sam[0]);
// console.log(sam[1]);
// ...
// console.log(sam[0]);
// sam[5] does NOT exist

for (let i = 0; i < sam.length; i++) {
    //reading from sam array
    console.log(sam[i], typeof sam[i]);

    //filling types array
    // types[i]=typeof sam[i]
    types.push(typeof sam[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2021 - years[i]);
}

console.log(ages);

// Continue Statement : exit current itteration of the loop then move on to the next one

console.log(`ONlY STRINGS . FANS`);
for (let i = 0; i < sam.length; i++) {
    if(typeof sam[i] !== 'string') continue; // if typeof sam.i is not a string then continue 

    console.log(sam[i], typeof sam[i]);
}
// Break Statement : Terminate the loop entirely

console.log(`---Break with Number---`);
for (let i = 0; i < sam.length; i++) {
    if(typeof sam[i] === 'number') break; // if typeof sam.i is not a string then continue 

    console.log(sam[i], typeof sam[i]);
}

///////////////////////////////////////////////////////

// 48. Looping Backwards and Loops in Loops

const sam = [ // Object Literal
    'Sam',
    'Johnson',
    2021 - 1989,
    'PM',
    ['Joh', 'Jay', 'Anna'],
    true
]; 

//Looping Backwards
for(let i = sam.length-1; i>=0; i--){
    console.log(i, sam[i]);
}

console.log(sam.length)

for (let workOut = 1; workOut <4; workOut++){
    console.log(`----starting workout ${workOut}`);
    for (let rep=1; rep < 6; rep++){
        console.log(`Lifting weights repition ${rep}`);
    }
}

///////////////////////////////////////////////////////

// 49. While Loop

// for(let rep = 1; rep <= 10; rep ++){
//     console.log(`lifting wights repeition ${rep}`);
// } 

// let rep =1; //Use while loops when you don't need to depend on a counter; when you don't know how many times the loop will run

// while(rep <= 10){
//     console.log(`While: Lifting weights repitition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You fuckin win!`);
}

///////////////////////////////////////////////////////
*/
// Part 2 Challenge #4

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const tips = []
const totals = []

// for (let i = 0; i < years.length; i++){
//     ages.push(2021 - years[i]);
// }

const calcTip = function(bill){
    if(bill >= 50 && bill <= 300){
        return bill * .15
    } else {
        return bill *.20
    };
}

for (let i=0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i])+bills[i]);
    }

console.log(tips,totals);

const calcAverage = function(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
}

calcAverage([2, 3, 6]);