// Q7
let arr1 = [10,15,20,25,30];
let pass = arr1.filter(
  function (num) {
    return num > 20;
  }
);
let newPass = pass.map(
  function (num) {
    return num * 2;
  }
);
console.log(newPass);

// Q8
let str1 = "hello world welcome to programming";
let strSlice = str1.split(" ");
let newStr = strSlice.reduce(
  function (finalStr, str) {
    return finalStr + str.replace(str.charAt(0),str.charAt(0).toUpperCase()) + " ";
  }, ""
);
console.log(newStr);

// Q9
let arr2 = ["apple","banana","grape","kiwi","watermelon"];
let longStr = arr2.filter(
  function (str) {
    return str.length > 5;
  }
);
let newArr = longStr.map(
  function (str) {
    return str.toUpperCase();
  }
);
console.log(newArr);

// Q10
const products = [
  {name: "스마트폰", price: 799000, category: "전자제품"},
  {name: "노트북", price: 1200000, category: "전자제품"},
  {name: "헤드폰", price: 150000, category: "전자제품"},
  {name: "키보드", price: 100000, category: "액세서리"},
  {name: "마우스", price: 50000, category: "액세서리"},
  {name: "충전기", price: 30000, category: "액세서리"},
  {name: "블루투스 스피커", price: 90000, category: "전자제품"}
];

products.sort(
  function (a, b) {
    return a.price - b.price;
  }
);
console.log("정렬된 상품 목록:", products);

let priceFilter = products.filter(
  function (product) {
    return product.price >=50000 && product.price <=500000 && product.category == "전자제품";
  }
);
console.log("필터링된 상품 목록:", priceFilter);

let priceMap = priceFilter.map(
  function (product) {
    return {
      name: product.name,
      price: "₩" + product.price,
      category: product.category
    };
  }
);
console.log("포맷된 상품 목록:", priceMap);

// Q11
const students = [
  {name: "김철수", score: 85, gradeLevel: "1학년"},
  {name: "이영희", score: 92, gradeLevel: "2학년"},
  {name: "박지훈", score: 76, gradeLevel: "3학년"},
  {name: "최유리", score: 88, gradeLevel: "1학년"},
  {name: "정민호", score: 54, gradeLevel: "1학년"},
  {name: "한서연", score: 63, gradeLevel: "2학년"},
  {name: "장동건", score: 71, gradeLevel: "3학년"},
  {name: "오지호", score: 80, gradeLevel: "3학년"}
];
const calcGrade = function (score) {
  let grade = "";
  if(score > 90){
    grade = "A";
  }else if(score > 70){
    grade = "B";
  }else{
    grade = "C";
  }
  return grade;
}
let addGrade = students.map(
  function (student) {
    return {
      name: student.name,
      score: student.score,
      gradeLevel: student.gradeLevel,
      grade: calcGrade(student.score)
    };
  }
);
console.log("등급이 추가된 학생 목록:", addGrade);

addGrade.sort(
  function (a, b) {
    return b.score - a.score;
  }
);
console.log("정렬된 학생 목록:", addGrade);

let searchGrade = addGrade.filter(
  function (student) {
    return student.grade == "B" && student.gradeLevel == "1학년";
  }
);
console.log("필터링된 학생 목록:", searchGrade);
let sum = 0;
for (let student of searchGrade){
  sum += student.score;
}
console.log("1학년 중 등급이 'B'인 학생들의 점수 총합: " + sum);

// Q12
const inventory = [
  {product: "감자칩", quantity: 10, price: 1500},
  {product: "아이스크림", quantity: 0, price: 3000},
  {product: "쿠키", quantity: 20, price: 2000},
  {product: "탄산음료", quantity: 5, price: 1000}
];

inventory.push({product: "바나나킥", quantity: 50, price: 1000});
console.log("새로운 제품 추가:", inventory);

const addStr = function (stock) {
  let str = "";
  if(stock > 0){
    str = "(재고있음) ";
  }
  return str;
}
let checkQuantity = inventory.map(
  function (prod) {
    return {
      product: addStr(prod.quantity) + prod.product,
      quantity: prod.quantity,
      price: prod.price
    };
  }
);
console.log("재고가 있는 제품의 이름 변경:", checkQuantity);

const discount = function (stock, price) {
  if(stock > 10){
    price -= price * 0.1;
  }
  return price;
}
let discountProd = checkQuantity.map(
  function (prod) {
    return {
      product: prod.product,
      quantity: prod.quantity,
      price: discount(prod.quantity, prod.price)
    };
  }
);
console.log("재고가 10개가 넘는 제품의 가격 할인:", discountProd);

let sum2 = discountProd.reduce(  
  function (total, currentValue) {
    return total + (currentValue.price * currentValue.quantity);
  }, 0
);
console.log("전체 재고의 총 가치: " + sum2);