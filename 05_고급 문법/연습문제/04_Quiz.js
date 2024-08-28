// Q21
let book = {
  title: "위대한 개츠비",
  author: "스콧 피츠제럴드",
  publishedYear: 1925
}
console.log("원본객체:", book);
let bookCopy = {...book};
console.log("복사된객체:", bookCopy);
bookCopy.publishedYear = 2023;

console.log("원본객체의 출판년도:", book.publishedYear);
console.log("복사된객체의 출판년도:", bookCopy.publishedYear);

// Q22
console.log();
let book2 = {
  title: "자바 프로그래밍 입문",
  author: {
    firstName: "은종",
    lastName: "박"
  }
}
console.log("원본객체:", book2);

let bookCopy2 = JSON.stringify(book2);
let deepCopy = JSON.parse(bookCopy2);
console.log("복사된객체:", deepCopy);

deepCopy.author.lastName = "김";
console.log("원본객체의 성:", book2.author.lastName);
console.log("복사된객체의 성:", deepCopy.author.lastName);

// Q23
console.log();
let phone = {
  brand: "Apple",
  price: 990000,
  model: "iPhone 13"
}
let {brand, price} = phone;
console.log("객체:", phone);
console.log("브랜드:", brand);
console.log("가격:", price);

// Q24
console.log();
let movie = {
  title: "인셉션",
  director: "크리스토퍼 놀란",
  year: 2010
}
let {title: movieTitle, year: releaseYear} = movie;
console.log("객체:", movie);
console.log("제목:", movieTitle);
console.log("출시년도:", releaseYear);

// Q25
console.log();
let car = {
  brand: "Tesla",
  model: "Model S",
  color: "Red"
}
console.log("객체:", car);
function printCarInfo({brand, model}){  
  console.log(`자동차 브랜드: ${brand}, 모델명: ${model}`);
}
printCarInfo(car);

// Q26
console.log();
let colors = ["red","green","blue"];
let [a, b, c] = colors;
console.log("배열:", colors);
console.log("출력:", a,b,c);

// Q27
console.log();
let fruits = ["사과","바나나","오렌지","키위"];
let [a1, , ,d1] = fruits;
console.log("배열:", fruits);
console.log("출력:", a1,d1);

// Q28
console.log();
let fruits2 = ["사과","바나나","오렌지","키위"];
function printFruits([a,,c]){  
  console.log(`출력: ${a}와 ${c}`);
}
console.log("배열:", fruits2);
printFruits(fruits2);