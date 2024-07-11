// Define the function to evaluate a simple arithmetic expression
function calculateExpression(expression) {
    // Remove any whitespace from the expression
    expression = expression.replace(/\s+/g, '');
    
    // Initialize the result to 0 and the current number to an empty string
    let result = 0;
    let currentNumber = '';
    // Default operator is addition
    let currentOperator = '+';
  
    // Iterate through each character in the expression
    for (let char of expression) {
      // If the character is a digit, add it to the current number
      if (/\d/.test(char)) {
        currentNumber += char;
      } else {
        // If the character is an operator, update the result based on the previous operator
        if (currentOperator === '+') {
          result += Number(currentNumber);
        } else if (currentOperator === '-') {
          result -= Number(currentNumber);
        }
        // Set the current operator to the new operator
        currentOperator = char;
        // Reset the current number
        currentNumber = '';
      }
    }
  
    // Update the result with the last number in the expression
    if (currentOperator === '+') {
      result += Number(currentNumber);
    } else if (currentOperator === '-') {
      result -= Number(currentNumber);
    }
  
    // Return the final result
    return result;
  }
  
  // Test the function with a sample expression
  console.log(calculateExpression("3 + 5 - 2 + 8 - 6")); 
  console.log(calculateExpression("10 + 20 - 5")); 
  
  