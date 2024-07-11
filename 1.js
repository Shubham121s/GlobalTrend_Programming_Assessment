
// Define the fizzBuzz function
function fizzBuzz() {
  // Loop through numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    // Initialize an empty string to build the output for the current number
    let output = "";
    // If the current number is divisible by 3, add "Fizz" to the output string
    if (i % 3 === 0) output += "Fizz";
    // If the current number is divisible by 5, add "Buzz" to the output string
    if (i % 5 === 0) output += "Buzz";
    // Print the output string if it's not empty; otherwise, print the current number
    console.log(output || i);
  }
}

// Call the fizzBuzz function to execute it
fizzBuzz();

  

