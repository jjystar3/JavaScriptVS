// 타이머 실행시 생성되는 Interval ID를 저장할 배열
let intervalIdArr = [];

// 스토리지에 저장된 디데이 꺼내기
let savedDate = localStorage.getItem("saved-date");

// 브라우저가 처음 로드할 때, 저장된 날짜가 있으면 바로 타이머 시작

if(savedDate != null){
  console.log(savedDate);  
  start(savedDate);
}else{
  console.log("지정된 날짜가 없습니다..");
}

// 사용자가 입력한 D-Day를 가져오는 함수
function getDday(){
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 남은 시간을 계산하고 화면에 표시하는 함수
function count(dday){

  // const dday = getDday();
  
  const now = new Date();
  const target = new Date(dday).setHours(0, 0, 0, 0);
  
  // 남은 시간 계산: 디데이 - 현재시간
  // 1s -> 1000ms
  const remaining = (target - now) / 1000;

  // 잘못된 날짜일 경우 함수를 종료
  if(remaining <= 0 || isNaN(remaining)){
    console.log("잘못된 날짜가 들어왔습니다..");
    return;
  }

  // 남은 시간을 (일, 시간, 분, 초)로 계산하기
  const remainObj = {
    date: Math.floor(remaining / 3600 / 24), 
    hour: Math.floor(remaining / 3600) % 24,
    min: Math.floor(remaining / 60) % 60,
    sec: Math.floor(remaining) % 60
  };

  // 남은시간을 화면에 표시
  document.getElementById("day").textContent = remainObj.date;
  document.getElementById("hour").textContent = remainObj.hour;
  document.getElementById("min").textContent = remainObj.min;
  document.getElementById("sec").textContent = remainObj.sec;

};

// 타이머 시작 함수

// 함수 호출 시 전달받은 인자에 따라 불기문으로 처리
//전달받은 인자가 있다면 브라우저 로드 시 타이머가 실행된 것
//없으면 사용자가 새로운 D-Day를 입력한 후 실행된 것
function start(prevDate){

  let dday = null;

  // 버튼을 눌렀다면 prevDate는 undefined
  // 사용자가 입력한 날짜 가져오기
  // 새로운 디데이를 스토리지에 교체
  if(prevDate === undefined){
    dday = getDday();
    localStorage.setItem('saved-date', dday);
  } else {
    // 이전에 저장한 날짜를 사용
    dday = prevDate;
  }

  // setInterval 함수를 이용하여 1초 간격으로 타이머 설정
  // 타이머 ID 반환
  const intervalId = setInterval(()=>{
    count(dday);
  }, 1000);

  // 생성된 타이머 아이디를 배열에 추가
  intervalIdArr.push(intervalId);
};

// 타이머를 중지하는 함수
function stop(){
  // 모든 타이머 중지
  for(let i=0;i<intervalIdArr.length;i++){
    let id = intervalIdArr[i]
    clearInterval(id);
  }
  // 배열 비우기
  intervalIdArr = [];
};

function reset(){

  stop();

  // 남은 시간을 0으로 초기화
  document.getElementById("day").textContent = "0";
  document.getElementById("hour").textContent = "0";
  document.getElementById("min").textContent = "0";
  document.getElementById("sec").textContent = "0";
  
  // 스토리지에서 날짜 삭제
  localStorage.removeItem('saved-date');
};