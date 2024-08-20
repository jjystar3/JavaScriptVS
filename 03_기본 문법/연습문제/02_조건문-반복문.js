// Q4
let x = 15;
if(x > 10 && x < 20){
  console.log(x);
}

let str = "Hello World!";
if(str.length > 5){
  console.log(str);
}

const person = {
  age: 15,
  gender: "M",
  name: "둘리",
  address: "서울"
};

if(person.age < 20 && person.gender == "M"){
  console.log("남학생입니다");
}

const arr = [5,12,8,130,44];
if(arr.includes(10)){
  console.log("배열에 10이 있습니다");
}else{
  console.log("10이 배열에 없습니다");
}

// Q5
for(let i=1; i<=10;i++){
  if(i%2==0){
    console.log(i);
  }
}

for(let i=10; i>=1;i--){
  if(i%2!=0){
    console.log(i);
  }
}

let sum=0;
for(let i=1; i<=10;i++){
  sum+=i;
}
console.log(sum);

let sum2 = 0;
for(let i=1; i<=20;i++){
  if(i%3==0 || i%5==0){
    sum2 += i;
  }
}
console.log(sum2);

// Q6
const arr2 = [1,'aa',true,5,10];
let sum3 = 0;
for(let i=0; i< arr2.length;i++){
  if(typeof arr2[i] == "number"){
    sum3+=arr2[i];
  }
}
console.log(sum3);

// Q7
let str2 = "";
for(let i=0; i<3;i++){
  if(i!=0)
    str2 += "\n";
  for(let j=0; j<5;j++){
    str2 += "*";
  }
}
console.log(str2);

let str3 = "";
for(let i=0; i<5;i++){
  if(i!=0)
    str3 += "\n";
  for(let j=0; j<=i;j++){
    str3 += "*";
  }
}
console.log(str3);