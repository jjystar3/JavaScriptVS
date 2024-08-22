// Q1
let email = "user@naver.com";
let domain = email.split("@")[1]
console.log("도메인: " + domain);

// Q2
const badWords = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";

for(let word of badWords){
  message = message.replaceAll(word, "X".repeat(word.length));
}
console.log(message);

// Q3
const allowedExtensions = ['.jpg', '.png', '.gif'];
let file = "사과.txt";

const index = file.lastIndexOf(".");
const extension = file.slice(index);

if(allowedExtensions.includes(extension)){
  console.log("지원되는 파일 형식입니다");
}else{
  console.log("지원되지 않는 파일 형식입니다");
}

// Q4
let num = "0112233";
let sum = 0;
for(let i of num){
  sum += parseInt(i);
}
console.log(sum);

// Q5
let arr2 = [1,"aa",true,"5",10];
let sum2 = 0;
for (let val of arr2){
  if(!isNaN(val)){
    if(typeof val == "number" || typeof val == "boolean"){
      sum2 += val;
    }else if(typeof val == "string"){
      sum2 += parseInt(val);
    }
  }
}
console.log(sum2);

// Q6
let str3 = 'aaabbc';
let finalStr = "";
let count = 1;

for (let i=0;i<str3.length;i++){
  if(str3[i] === str3[i+1]){
    count++;
  }else{
    finalStr += str3[i].concat(count);
    count=1;
  }
}
console.log(finalStr);