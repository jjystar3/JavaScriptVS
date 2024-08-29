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
let str8 = "2024-08-27";
//\d: 숫자
//{숫자}: 앞에 패턴이 지정된 횟수만큼 반복됨
//(): 캡처 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
//(\d{4}): 첫번째 그룹 (연도)
//(\d{2}): 두번째 그룹 (월)
//(\d{2}): 셋번째 그룹 (일)
let dateParts = str8.match(/(\d{4})-(\d{2})-(\d{2})/); //숫자4개-숫자2개-숫자2개
console.log(dateParts); 

console.log(dateParts[3]); 

str = "2024-08-27";
patt = /-/;
result = str.split(patt);
result.unshift(str);
console.log(result);