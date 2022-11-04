const originalArray = [1, 3, 2, 5, 10]

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(value) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return value * 2
})

console.log(originalArray)
console.log(doubledArray)

// Multiply values in array by 3.
const tripledArray = originalArray.map(value => value * 3)

console.log(tripledArray)

// Replace values with whether its odd or even.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

console.log(oddOrEven)
