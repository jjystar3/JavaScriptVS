// 객체를 분해해서 필요한 데이터만 추출하기

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  email: "john@gmail.com",
  city: "New York",
  country: "USA"
};

// 객체에서 필요한 키만 추출하여 새로운 변수에 저장
// let { firstName, lastName } = person;
// console.log(firstName);
// console.log(lastName);

// 객체에 없는 키를 사용하면 undefined가 반환됨
let {firstName, aa} = person;
console.log(aa);

// 변수명을 바꿔서 추출하고 싶을 때
let { firstName: fName, lastName: lName } = person;
console.log(fName);
console.log(lName);

// 기본값을 설정하여 객체에 없는 키를 처리
let { address = "주소없음" } = person;
console.log(address); // 주소없음

// 사람의 나이와 이메일만 함수에 입력하기

function func(ag, em){  
  console.log(ag + ", " + em);
}

func(person.age, person.email);

// 전달받은 객체에서 필요한 부분만 추출
function func2({age, email}){  
  console.log(age + ", " + email);
}

func2(person); //객체를 파라미터로 전달
