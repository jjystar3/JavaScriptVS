// 변수를 객체의 키로 사용하기

let type = "name";

let person = {
  [type]: "John", // name: "John"
  score: 95
};

console.log(person);

// 객체의 키를 동적으로 추가하기
let property = "grade";

person[property] = "A"; //person["grade"] = "A"와 같다

console.log(person);