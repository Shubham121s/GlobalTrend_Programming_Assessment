function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddNumbers = filterEvenNumbers(numbers);
  console.log(oddNumbers); 
  