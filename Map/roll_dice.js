let dictionary = new Map();

let isDone = false;
while (!isDone){
    let cnt = 0;
    let dice = Math.floor(Math.random()*(7-1)+1 );    //Dice number between 1 to 6
    if(dictionary.has(dice)){
        cnt = dictionary.get(dice);
        cnt = cnt + 1;
    }
    dictionary.set(dice,cnt); 

    if (cnt == 10)
        isDone = true;

}

let occurences = Array.from(dictionary.values());
let max = Math.max(...occurences);
let min = Math.min(...occurences);

dictionary.forEach((value, key) => {
        if (value == max) {
                console.log("Maximum : " + key + " occurring " + value + " times");
        }
    })

dictionary.forEach((value, key) => {
        if (value == min) {                                       
            console.log("Minimum : " +key + " occurring " + value + " times");
        }
    })