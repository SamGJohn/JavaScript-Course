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
*/
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