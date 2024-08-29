// Declare a constant variable named var_name and assign it the string 'abcd'
const var_name = 'abcd';

// Declare a constant variable named n and assign it the number 120
const n = 120;

// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = n;

// Log the value of the property 'abcd' of the 'this' object to the console
console.log(this[var_name]);
