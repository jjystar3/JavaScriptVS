// Q1
function greet(name, words = "안녕하세요"){
  return words + ", " + name + "님!";
}
console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"));

console.log();
// Q2
function calculateGrade(name, eng = 0, math = 0, kor = 0){
  let total = eng + math + kor;
  let avg = total / 3;
  console.log(name + "님의 평균 성적은 " + avg.toFixed(2) + "점입니다.");
}
calculateGrade("철수", 85, 90, 78);
calculateGrade("훈이", 80);

console.log();
// Q3
function createSentence(ignore, ...words){
  let total = "";
  for(let i=0; i< words.length; i++){
    if(i!=0){
      total += " ";
    }
    total += words[i];
  }
  return total;
}
console.log(createSentence("Hello","this","is","JavaScript"));

console.log();
// Q4
function printPerson(name, age, ...hobby){
  let total = "";
  for(let i=0; i< hobby.length; i++){
    if(i!=0){
      total += ", ";
    }
    total += hobby[i];
  }
  console.log(name + "의 나이는 " + age + "살이고, 취미는 " + total + "입니다.")
}
printPerson("맹구", 5, "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꿉놀이");

console.log();
// Q5
const students = [
  {name: "짱구", eng: 80, math: 50, kor: 70},
  {name: "철수", eng: 90, math: 85, kor: 88},
  {name: "훈이", eng: 75, math: 95, kor: 92},
  {name: "맹구", eng: 65},
  {name: "유리", math: 80, kor: 90}
];

console.log("학생 목록:");
for(let student of students){
  console.log(student);
}
console.log();

function calcGrade(subject, ...names){
  let sum = 0;
  let num = 0;
  let studentNames = "";
  let subjectString = "";
  if(subject == "eng"){
    subjectString = "영어과목";
  }else if(subject == "math"){
    subjectString = "수학과목";
  }else if(subject == "kor"){
    subjectString = "국어과목";
  }

  for(let i=0; i< names.length; i++){
    if(i!=0){
      studentNames += ", ";
    }
    studentNames += names[i];
    if(i==names.length-1){
      studentNames += "의 " + subjectString + "의 평균점수는 ";
    }
    for(let student of students){
      if(student.name === names[i]){
        if(student[subject] != null){
          sum += student[subject];
          num++;
        }
      }
    }
  }
  if(students.length == names.length){
    studentNames = subjectString + "의 전체 평균점수는 ";
  }

  let avg = sum / num;
  console.log(studentNames + avg.toFixed(1) + "점 입니다");
}
calcGrade("eng", "짱구", "철수", "훈이", "맹구");
calcGrade("math", "맹구", "유리");
calcGrade("kor", "짱구", "철수", "훈이", "맹구", "유리");

// Q6
console.log();
const products = [
  {name: "새우깡", price: 1500, discount: 10},
  {name: "홈런볼", price: 2000, discount: 5},
  {name: "포카칩", price: 2500},
  {name: "칙촉", price: 3000, discount: 15},
  {name: "오잉", price: 1800}
];

function calcPrice(...names){
  let sum = 0
  let snackNames = "";
  for(let i=0; i< names.length; i++){
    if(i!=0){
      snackNames += ", ";
    }
    snackNames += names[i];
    if(i==names.length-1){
      snackNames += "의 ";
    }

    for(let product of products){
      if(product.name === names[i]){
        if(product.discount != null){
          sum += product.price * (100 - product.discount)/100;
        }else{          
          sum += product.price;
        }
      }
    }
  }
  if(products.length == names.length){
    snackNames = "전체 ";
  }
  let avg = sum / names.length;
  console.log(snackNames + "평균 가격은 " + avg.toFixed(2) + "원 입니다.");
}
calcPrice("새우깡", "홈런볼", "포카칩");
calcPrice("새우깡", "홈런볼", "포카칩", "칙촉", "오잉");