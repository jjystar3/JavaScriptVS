// 문자열 안에서 변수 삽입하기

let nm = "John";
console.log(`Hello ${nm}`); // "Hello John"
console.log("Hello " + nm);

// 변수 여러개를 문자열에 삽입하기
let firstName = "Jane";
let lastName = "Doe";
console.log(`My name is ${firstName} ${lastName}`);
// "My name is Jane Doe"

// 문자열 안에서 계산식 사용하기
let a = 5;
let b = 10;
console.log(`${a} + ${b} = ${a + b}`); // "5 + 10 = 15"