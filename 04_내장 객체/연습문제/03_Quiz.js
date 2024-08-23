// Q13
let date1 = new Date();
let currentTime = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + " " + date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
console.log("현재 날짜와 시간:",currentTime);

// Q14
let date2 = new Date(2024, 0, 1, 9, 0, 0, 0);
date2.setDate(date2.getDate() + 10);
console.log("10일 후 날짜:", date2.toLocaleString());

// Q15
let date3 = new Date();
date3.setHours(date3.getHours() + 1);
date3.setMinutes(date3.getMinutes() + 30)
console.log("1시간 30분 후의 시간:", date3.toLocaleString());

// Q16
const visits = [
  {name: "김철수", date: "2024-08-20", purpose: "회의"},
  {name: "이영희", date: "2024-08-18", purpose: "상담"},
  {name: "박지훈", date: "2024-08-21", purpose: "회의"},
  {name: "최유리", date: "2024-08-19", purpose: "교육"},
  {name: "정민호", date: "2024-08-17", purpose: "상담"}
];

visits.sort(
  function (a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB;
  }
);
console.log("정렬된 방문 기록:", visits);

let visitFilter = visits.filter(
  function (visit) {
    return visit.purpose == "회의";
  }
);
console.log("회의 목적의 방문 기록:", visitFilter);

let visitMap = visitFilter.map(
  function (visit) {
    let date = new Date(visit.date);
    return {
      name: visit.name,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      purpose: visit.purpose
    };
  }
);
console.log("형식이 변환된 방문 기록:", visitMap);