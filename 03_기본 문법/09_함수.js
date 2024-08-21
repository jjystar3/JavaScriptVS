/* 함수 선언식 */

// 매개변수, 반환값이 없는 함수 선언
function hello() {
  console.log("안녕하세요~");
}

hello();
hello();
hello();

// 매개변수, 반환값이 있는 함수 선언
function sum(x, y) {
  return x + y;
}

const result = sum(2, 3);
console.log(result);