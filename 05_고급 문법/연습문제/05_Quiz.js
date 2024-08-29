// Q29
let str = "I have 2 apples and 3 oranges.";
let patt = /[0-9]/g;
let result = str.match(patt);
console.log(result);

// Q30
str = "Hello, JavaScript is fun!";
patt = /[aeiou]/g;
result = str.match(patt);
console.log(result);

// Q31
str = "Welcome to the world of coding!";
patt = /coding/;
result = patt.test(str);
console.log(result);

// Q32
str = "JavaScript is powerful";
patt = /is/;
result = str.search(patt);
console.log(result);

// Q33
str = "banana";
patt = /a+/g;
console.log(str.match(patt));

// Q34
str = "abc123ABC";
patt = /abc/gi;
result = str.match(patt);
console.log(result);

// Q35
str = "Hello, World! How are you today?";
patt = /[A-Z]/g;
result = str.match(patt);
console.log(result);

// Q36
str = "2024-08-27";
patt = /-/;
result = str.split(patt);
result.unshift(str);
console.log(result);