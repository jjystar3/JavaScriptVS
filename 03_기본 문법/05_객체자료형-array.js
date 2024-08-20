/* Array(배열) */

// 배열 만드는 방법: []대괄호 쓰고 안에 값을 나열할 것
const arr1 = [ "Apple", "Banana", "Cherry" ];

// 배열의 값을 꺼내려면 "배열이름[인덱스번호]"를 사용
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 배열에 새로운 요소를 추가
arr1.push("Grape");
console.log(arr1);

// 배열에 특정한 값이 있는지 확인
console.log(arr1.includes("Apple"));

// 자바스크립트에서는 배열에 여러가지 자료형을 저장할 수 있음
const arr2 = ["a","b",1,2,true];
console.log(arr2);

// 객체타입 배열
// const인데 왜 값을 변경 가능한가?
// 참조변수에는 주소값이 저장되어 있음
// 실제 요소는 힙영역에 저장되어있음
// 따라서 주소를 변경하지 않고, 배열의 값만 변경 가능!
const objArr = [];
objArr.push({ name: "Americano" });
objArr.push({ name: "Latte" });

console.log(objArr);
console.log(objArr[0]);
console.log(objArr.length);