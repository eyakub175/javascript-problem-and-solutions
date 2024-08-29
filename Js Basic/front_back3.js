// Using ES6 arrow function syntax to define the front_back3 function
const front_back3 = (str) => {
    // Check if the length of str is greater than or equal to 3
    if (str.length >= 3) {
      // Set str_len to 3
      const str_len = 3;
      // Extract the last three characters of str
      const back = str.substring(str.length - 3);
      // Return the concatenation of back, str, and back
      return back + str + back;
    } else {
      // If the length of str is less than 3, return false
      return false;
    }
  };
  
  // Log the result of calling the front_back3 function with the argument "abc" to the console
  console.log(front_back3("abc"));
  
  // Log the result of calling the front_back3 function with the argument "ab" to the console
  console.log(front_back3("ab"));
  
  // Log the result of calling the front_back3 function with the argument "abcd" to the console
  console.log(front_back3("abcd"));
  