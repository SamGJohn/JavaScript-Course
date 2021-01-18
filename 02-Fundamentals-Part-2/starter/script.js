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
*/

///////////////////////////////////////////////////////
// 37. Reviewing Functions

const calcAge = function(birthYear){ // This birthYear is not related whatsoever to the birthYear in the following function
    return 2037 - birthYear;
}

const yearsUntilRetirment = function(birthYear, firstName) {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`; 
}