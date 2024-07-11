
   // Define a function named capital_letter with parameter str
function capital_letter(str) 
{
    // Split the input string into an array of words
    str = str.split(" ");

    // Iterate through each word in the array
    for (var i = 0, x = str.length; i < x; i++) {
        // Capitalize the first letter of each word and concatenate it with the rest of the word
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    // Join the modified array of words back into a string
    return str.join(" ");
}

// Log the result of calling capital_letter with the given string to the console
console.log(capital_letter("write a javaScript program to capitalize the first letter of each word of a given string.")); 
