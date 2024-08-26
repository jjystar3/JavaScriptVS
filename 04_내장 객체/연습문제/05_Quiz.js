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
function rollDice(times){
  const arr = [];
  for(let i=0; i<times;i++){
    let num = randomIntFromInterval(1, 6);
    arr.push(num);
  }
  return arr;
}

const player1 = rollDice(3);
const player2 = rollDice(3);

const sum1 = player1.reduce((sum, n) => sum + n, 0);
const sum2 = player2.reduce((sum, n) => sum + n, 0);

console.log("Player 1의 주사위 결과:", player1, "합:", sum1);
console.log("Player 2의 주사위 결과:", player2, "합:", sum2);

if(sum1 > sum2){
  console.log("Player 1 승리!");
}else if(sum1 < sum2){
  console.log("Player 2 승리!");
}else{
  console.log("무승부!");
}

/*
let players = new Map();

players.set("Player 1", 0);
players.set("Player 2", 0);

function throwDice(player, times) {
  for (let [key, value] of player) {
    let diceResult = [];
    let sum = 0;
    for(let i=0; i<times; i++){
      let randomDiceNum = randomIntFromInterval(1, 6);
      sum += randomDiceNum;
      diceResult.push(randomDiceNum);
    }
    console.log(key + "의 주사위 결과:", diceResult, "합:", sum);
    player.set(key, sum);
  }
  let max = 0;
  let winner = "";
  for (let [key, value] of player) {
    if(value > max){
      max = value;
      winner = key;
    }
  }
  console.log(winner + " 승리!");
}

throwDice(players, 3);

*/