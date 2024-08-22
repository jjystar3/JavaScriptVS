// Number 객체: 숫자를 생성하고 조작, 계산하는 함수를 제공

// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString();
console.log(typeof num1, num1);
console.log(typeof str, str);

// 소수점 몇번째 자리까지 보여줄지 결정
// 해당위치에서 반올림한 값을 반환
let num2 = 10.656;
console.log(num2.toFixed(0));
console.log(num2.toFixed(2));

// 정수와 소수를 포함해서 몇번째 자리까지 보여줄지 결정
// 인자: 자리수
console.log(num2.toPrecision());
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(4));

// 문자열을 숫자로 변환하는 함수
console.log(parseInt("-10"), typeof parseInt("-10"));
console.log(parseInt("12.33"));
// 시작하는 부분에 숫자가 있으면 변환 가능
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// isNaN: 문자열이 숫자로 변환 가능한지 확인하는 함수
console.log(isNaN("aa"));
console.log(isNaN("10"));

// 문자열을 실수로 변환하는 함수
console.log(parseFloat("12.33"));