// Q1
const member = {
  id : "1001",
  password : "1234",
  grade : "silver",
  name : "홍길동",
  phone : "010-1234-5678"
};

const products = {
  productName : "",
  price : 10000,
  description : "",
  category : ""
};

const order = {
  orderName : "",
  quantity : 1,
  price : 10000,
  buyer : "",
  date : "",
  address : ""
};

// Q2
const person = {
  age : 30,
  name : "둘리",
  address : "서울"
};

person.age = 10;
person.name = "또치";
person.address = "인천";
console.log(person);

const product = {
  name : "노트북",
  price : 1500000,
  brand : "삼성"
}

product.price = 2000000;
product.brand = "LG";
console.log(product);

// Q3
const foodList = ['Pizza','Hamburger','Chicken','Steak'];

const food1 = foodList[0];
const food2 = foodList[foodList.length - 1];

const result = food1 + ' ' + food2;

console.log(result);
