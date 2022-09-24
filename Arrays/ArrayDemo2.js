let array = [];
for(let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random()*(999-100+1)+100));
}

array.sort();

console.log("2nd largest : "+array[array.length-2]);
console.log("2nd smallest : "+array[1]);