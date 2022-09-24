let birthMonth = new Map();

for (let index = 1; index <= 50; index++) {
    console.log(index);
    let month = Math.floor((Math.random() * 12) + 1);
    let cnt = 1;
    if(birthMonth.has(month)){
        cnt = birthMonth.get(month);
        cnt = cnt + 1;
    }
    birthMonth.set(month,cnt);
}

console.log("Birth month map is ");
console.log(birthMonth);