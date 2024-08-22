// sort: 배열을 기본 방식으로 오름차순 정렬
let fruits = ['Banana','Orange','Apple','Mango'];
fruits.sort();
console.log(fruits);

// reverse: 배열을 역순으로 정렬
fruits.reverse();
console.log(fruits);

// 인자: 두수를 비교하는 함수
// sort 함수의 비교함수는 양수, 0 음수를 반환하며,
// 값에 따라 배열 요소의 순서를 결정. 양수가 나오면 위치를 바꿈
let points = [40, 100, 1, 5];

// a - b: 앞 숫자가 더 크면 양수가 됨으로 오름차수 정렬
// b - a: 뒷 숫자가 더 크면 양수가 됨으로 내림차수 정렬
points.sort(
  function (a, b) {
    return b - a;
  }
);
console.log(points);

// 객체형 배열
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울"
  },
  {
    name: "김종국",
    point: 92,
    city: "서울"
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주"
  },
  {
    name: "하하",
    point: 81,
    city: "서울"
  }
];

// 사람의 점수를 비교해서 배열을 내림차순으로 정렬하기!
persons.sort(
  function (a, b) {
    return b.point - a.point;
  }
);
console.log(persons);