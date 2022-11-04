// Define an array.
const originalArray = [1, 3, 2, 5, 10]

// Take originalArray and save its even numbers to a new array.
const evenNumbers = originalArray.filter(function(data) {
  // If modulo = 0 (the number is even)...
  if (data % 2 === 0) {
    // ...return true
    return true
  }
})

console.log(originalArray)
console.log(evenNumbers)

function isPrime(num) {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1
};

// Take originalArray and save its prime numbers to a new array.
const primeArray = originalArray.filter(isPrime)

console.log(primeArray)

// Take originalArray and save any number that’s greater than 5.
const moreThan5Array = originalArray.filter(num => num > 5)

console.log(moreThan5Array)
