// 배열을 분해해서 변수에 저장하기

let arr1 = [1,2,3];

// 객체를 분해할 때는 {}, 배열을 분해할 때는 []
// 배열을 분해하여 배열의 요소를 순서대로 변수에 저장됨
let [a, b, c] = arr1;

console.log(a);
console.log(b);
console.log(c);

// 배열을 분해하면서 rest 파라미터 같이 사용하기
let arr2 = [10, 20, 30, 40];
let [x, y, ...args] = arr2;
// 10과 20은 각각 변수에 저장되고 나머지는 배열에 저장
// 과정
// x = 10 y = 20 args = [30, 40]
console.log(x);
console.log(y);
console.log(args);

let arr3 = [100, 200, 300, 400];

// 배열의 첫 번째 요소는 n1, 세 번째 요소는 n3, 네 번째 요소는 n4
// 두 번째 요소는 건너뛰기
let [n1, , n3, n4] = arr3;
console.log(n1);
console.log(n3);
console.log(n4);
