// Define the flattenArray function that takes a nested array as an argument
function flattenArray(nestedArray) {
  // Use the flat method with Infinity to flatten the nested array completely
  return nestedArray.flat(Infinity);
}

// Call the flattenArray function with a nested array and log the result
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
