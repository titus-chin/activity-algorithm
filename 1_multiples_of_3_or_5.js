// Multiples of 3 or 5
// URL: https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let prompt = require('prompt-sync')()
let n = parseInt(prompt("Input number n: "))

let multiple = 1
let total = 0

while ((multiple * 3 < n) | (multiple * 5 < n) | (multiple * 15 < n)) {
    if (multiple * 3 < n) {
        total += multiple * 3
    }
    if (multiple * 5 < n) {
        total += multiple * 5
    }
    if (multiple * 15 < n) {
        total -= multiple * 15
    }
    multiple += 1
}

console.log(total)
