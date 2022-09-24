const prompt = require('prompt-sync')();

function isPrime(number) {
    if (number >= 2) {
        let isPrime = true;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            return true;
    }
    return false;
}

let input = Number(prompt("Enter a number : "));

let primeFactors = [];

for (let i = 2; i <= input; i++) {
    if (input % i == 0 && isPrime(i))
        primeFactors.push(i);
}
console.log("Prime factors are : " + primeFactors);