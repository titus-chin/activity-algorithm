// 10001st prime
// URL: https://projecteuler.net/problem=7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

let prompt = require('prompt-sync')()
let n = parseInt(prompt("Input number n: "))

let nthPrime = 2
let primeNumbers = [2, 3]
let currentNumber = 3
let isPrime = true

if (n === 1) {
    currentNumber = 2
} else {
    while (nthPrime !== n) {
        currentNumber += 2
        for (let i = 0; i < primeNumbers.length; i++) {
            if (currentNumber % primeNumbers[i] === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime === true) {
            primeNumbers.push(currentNumber)
            nthPrime += 1
        } else {
            isPrime = true
        }
    }
}

console.log(currentNumber)
