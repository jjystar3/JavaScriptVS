/* 함수 선언식 */

// 함수선언식으로 작성한 함수는 호이스팅 현상이 있다.
hello();

// 매개변수, 반환값이 없는 함수 선언
function hello() {
  console.log("안녕하세요~");
}

hello();

// 매개변수, 반환값이 있는 함수 선언
function sum(x, y) {
  return x + y;
}

const result = sum(2, 3);
console.log(result);

/* 함수 표현식 */

// 함수표현식은 순차적으로 코드를 읽음, 호이스팅 현상 없다.
// hi(); // 에러남

// 변수 선언 = 함수
const hi = function () {
  console.log("안녕~");
}

hi();