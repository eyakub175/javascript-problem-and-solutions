 // Using ES6 arrow function syntax to define the first_last function
 const first_last = (str1) => {
    // Check if the length of str1 is less than or equal to 1
    if (str1.length <= 1) {
      // If true, return str1 as is
      return str1;
    }
    // Extract the substring from the second character to the second-to-last character of str1
    const mid_char = str1.substring(1, str1.length - 1);
    // Return the last character of str1 followed by mid_char and then the first character of str1
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
  };
  
  // Log the result of calling the first_last function with the argument 'a' to the console
  console.log(first_last('a'));
  
  // Log the result of calling the first_last function with the argument 'ab' to the console
  console.log(first_last('ab'));
  
  // Log the result of calling the first_last function with the argument 'abc' to the console
  console.log(first_last('abc'));
  