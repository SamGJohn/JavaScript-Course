// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//  how to ad
//

const arr = [12, 5];
const printForcast = function (arr) {
  let forcast = "";
  for (let i = 0; i < arr.length; i++) {
    forcast += `... ${arr[i]}°C in ${arr.indexOf(arr[i]) + 1} days`;
  }
  console.log(forcast);
};

printForcast(arr);
