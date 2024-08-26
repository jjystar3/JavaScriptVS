// Q21
console.log(Math.round(7.5));

// Q22
console.log(Math.floor(5.9));

// Q23
console.log(Math.sign(42));

// Q24
console.log(Math.min(10, 20, 30, 40, 50));

// Q25
console.log(Math.max(3, 6, 9, 12, 15));

// Q26
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let dice = randomIntFromInterval(1, 6);
console.log("주사위 결과:", dice);

// Q27
let diceResults = [];
for(let i=0; i<10; i++){
  let randomDiceNum = randomIntFromInterval(1, 6);
  diceResults.push(randomDiceNum);
}

console.log("10번 던진 결과:", diceResults);

// Q28
let player1 = [];
let sum1 = 0;

let player2 = [];
let sum2 = 0;

for(let i=0; i<3; i++){
  let randomDiceNum = randomIntFromInterval(1, 6);
  sum1 += randomDiceNum;
  player1.push(randomDiceNum);
}
for(let i=0; i<3; i++){
  let randomDiceNum = randomIntFromInterval(1, 6);
  sum2 += randomDiceNum;
  player2.push(randomDiceNum);
}

console.log("Player 1의 주사위 결과:", player1, "합:", sum1);
console.log("Player 2의 주사위 결과:", player2, "합:", sum2);

if(sum1 > sum2){
  console.log("Player 1 승리!");
}else if(sum1 < sum2){
  console.log("Player 2 승리!");
}else{
  console.log("무승부!");
}