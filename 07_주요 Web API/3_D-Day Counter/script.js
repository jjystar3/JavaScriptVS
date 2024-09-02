// 사용자가 입력한 D-Day를 가져오는 함수
function getDday(){
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 남은 시간을 계산하고 화면에 표시하는 함수
function count(){

  const dday = getDday();
  const now = new Date();
  const target = new Date(dday).setHours(0, 0, 0, 0);
  
  // 남은 시간 계산: 디데이 - 현재시간
  // 1s -> 1000ms
  const remaining = (target - now) / 1000;
  console.log("남은 시간: ", remaining);  

};