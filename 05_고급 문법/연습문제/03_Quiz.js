// Q13
let ariName = "아리";
let ariAge = 17;
console.log(`${ariName}의 나이는 ${ariAge} 입니다.`);

// Q14
let a = 10;
let b = 20;
console.log(`${a}과 ${b}을 곱한 결과는 ${a * b} 입니다`);

// Q15
let a2 = 10;
let b2 = 20;
console.log(`${a2}과 ${b2}의 평균은 ${(a2 + b2)/2} 입니다`);

// Q16
let cityName = "서울";
let population = 9736000;
console.log(`${cityName}의 인구는 ${population} 명 입니다`);

// Q17
let studentName = "소영";
let studentGrade = 75;

console.log(`${studentName}의 점수는 ${studentGrade}점으로 ${studentGrade>=60?"합격":"불합격"}입니다`);

// Q18
let key1 = "make";
let key2 = "model";
let key3 = "year";
let car = {
  [key1]: "현대",
  [key2]: "쏘나타",
  [key3]: 2021
};

// Q19
let property = "address";
let person = {
  name: "철수",
  age: 21
};
person[property] = "인천 남동구 만수동";

// Q20
let key4 = "productName";
let key5 = "productPrice";
let product = {};
product[key4] = "필통";
product[key5] = 5000;