// 대입연산자
let x = 1;

// 비교연산자
console.log(1 == 2);
console.log(1 != 2);
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1"); // 값만 비교
console.log(1 === "1"); // 값과 자료형을 모두 비교

// 산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 문자열결합연산자
console.log("좋은 " + "하루 되세요!");

// 부호 연산자
console.log(-x);
console.log(x);

// 증감연산자
console.log(++x); //2 
console.log(x++); //2 
console.log(--x); //2 
console.log(x--); //2 

// 논리연산자
console.log(true && true); //true
console.log(true && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(!true); //false

// 삼항연산자
let point = 85;
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);

// typeof 연산자: 값의 타입을 확인하는 연산자
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof function (){}); // 'function'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
