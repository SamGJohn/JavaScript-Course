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

const dolphinAvg = (97 + 80 + 101)/3;
const koalaAvg = (109 + 95 + 106)/3;
// const koalaAvg = 103.33333333333333
console.log(dolphinAvg);
console.log(koalaAvg);

if(dolphinAvg > koalaAvg && dolphinAvg >= 100){
    console.log(`dolphins win`)
} else if(dolphinAvg === koalaAvg && koalaAvg >= 100){
    console.log(`tie ball game. this is why soccer sucks`)
} else if(koalaAvg > dolphinAvg && koalaAvg >= 100) {
    console.log(`koalas win`)
}else{
    console.log(`nobody wins, you all suck`)
}