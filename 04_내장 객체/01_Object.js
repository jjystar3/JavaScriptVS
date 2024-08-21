/* 1. 객체 만들기 */

// 빈 객체 생성
let person = new Object();

// 객체에 프로퍼티 추가
person.firstName = "고";
person.lastName = "길동";
person.age = 30;

person.getName = function () {
  console.log(this.firstName + this.lastName);
}

person.getName();

/* 2. 객체 만들기 */
let person2 = {
  firstName: "고",
  lastName: "길동",
  age: 30,
  getName: function () {
    console.log(this.firstName + this.lastName);
  }
};

person2.getName();

// 첫번째 방식은 객체를 동적으로 생성하기 좋음
