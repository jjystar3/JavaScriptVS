// Q1
let email = "user@naver.com";
let str = email.split("@")
console.log("도메인: " + str[1]);

// Q2
let badWords = "나쁜, 더러운";
let badWord = badWords.split(", ");

let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";

for(let word of badWord){
  if(message.indexOf(word) != -1){
    let str = "";
    for(let i in word){
      str+="X";
    }
    message = message.replace(word, str);
  }
}
console.log(message);

// Q3
let file = "사과.txt";
if(file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".gif")){
  console.log("지원되는 파일 형식입니다")
}else{
  console.log("지원되지 않는 파일 형식입니다")
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
  if(!isNaN(parseInt(val))){
    sum2 += parseInt(val);
  }
}
console.log(sum2);

// Q6
let str3 = 'aaabbc';

let checkstr = str3[0];
let count = 1;
let finalStr = "";

for (let i=1;i<str3.length;i++){
  if(str3[i] == checkstr){
    count++;
  }else{
    finalStr += checkstr.concat(count);
    checkstr = str3[i];
    count=1;
  }
  if(i == str3.length-1){
    finalStr += checkstr.concat(count);
  }
}
console.log(finalStr);