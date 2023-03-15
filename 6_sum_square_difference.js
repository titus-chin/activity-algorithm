// Sum square difference
// URL: https://projecteuler.net/problem=6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let prompt = require('prompt-sync')()
let n = parseInt(prompt("Input number n: "))

let sumOfSquares = 0
let sum = 0

while (n > 0) {
    sumOfSquares += n ** 2
    sum += n
    n--
}

console.log(sum ** 2 - sumOfSquares)
