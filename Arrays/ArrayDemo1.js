let array = [];
for(let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random()*(999-100+1)+100));
}

let firstMax = array[0];
let secondMax = array[0];
let firstMin = array[0];
let secondMin = array[0];

for (let number of array) {
    if (number > firstMax) {
        secondMax = firstMax;
        firstMax = number;
    }
    else if (number > secondMax) {
        secondMax = number;
    }
    if (number < firstMin) {
        secondMin = firstMin;
        firstMin = number;
    }
    else if (number < secondMin) {
        secondMin = number;
    }
}
//console.log(Math.max(...array),Math.min(...array));
console.log("2nd largest : " + secondMax + "  2nd smallest : " + secondMin);


