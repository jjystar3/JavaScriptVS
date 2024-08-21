// Q8
function sub(x, y) {
  return x - y;
}
console.log(sub(5,3));

// Q9
function sum(x, y) {
  let sum = 0;
  for (let i = x; i<= y; i++){
    sum+=i;
  }
  return sum;
}
console.log(sum(3,5));

// Q10
const arr1 = [-1,5,10,-3];
function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log(max(arr1));

// Q11
const arr2 = ["a","b","c"];
function chackType(arr) {
  let firstType = typeof arr[0];
  for (let i = 1; i < arr.length; i++){
    if(typeof arr[i] !== firstType){
      return false;
    }
  }
  return true;
}
console.log(chackType(arr2));

// Q12
const arr3 = ["apple","banana","cherry"];
function checkArr(arr, value) {
  return arr.includes(value);
}
console.log(checkArr(arr3,"banana"));

// Q13
function mult(value){
  for(let i=1; i <= 9; i++){
    let mul = value * i;
    console.log(value + " * " + i + " = " + mul);
  }
}
mult(2);

// Q14
const arr4 = [1,"apple",true,"banana",42,"cherry"];
function pickString(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "string"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(pickString(arr4));

// Q15
function Factorial(num) {
  if(num == 1){
    return 1;
  }
  return num *= Factorial(num-1);
}
console.log(Factorial(5));

// Q16
const students = [
  {name: "둘리", math: 90, english: 85},
  {name: "또치", math: 80, english: 95},
  {name: "도우너", math: 70, english: 75}
];
function calcAvg(students, subject) {
  let sum = 0;
  for(let i=0;i<students.length;i++){
    sum += students[i][subject];
  }
  let avg = sum / students.length
  return avg;
}
console.log(calcAvg(students,'math'));

// Q17
const employees = [
  {name: "짱구", position: "부장", salary: 500},
  {name: "철수", position: "차장", salary: 380},
  {name: "훈이", position: "사원", salary: 260},
  {name: "맹구", position: "차장", salary: 420},
  {name: "유리", position: "사원", salary: 220}
];
function salaryAvg(employees, position){
  let sum = 0;
  let cnt = 0;
  for(let i=0;i<employees.length;i++){
    if(employees[i].position == position){
      sum += employees[i].salary;
      cnt++;
    }
  }
  let avg = sum / cnt;
  return avg;
}
console.log(salaryAvg(employees,'사원'));