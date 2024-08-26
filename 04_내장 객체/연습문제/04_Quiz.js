// Q17
let watchedMovieList = new Set();
watchedMovieList.add("인셉션");
watchedMovieList.add("매트릭스");
watchedMovieList.add("인터스텔라");

// let wishMovieList = new Set();
// wishMovieList.add("파이트 클럽");
// wishMovieList.add("더 울프 오브 월 스트리트");
// wishMovieList.add("노인을 위한 나라는 없다");

let wishMovieList = new Set(
  ["파이트 클럽", "더 울프 오브 월 스트리트", "노인을 위한 나라는 없다"]
);

console.log("시청한 영화 목록:")
watchedMovieList.forEach(function (item) {
  console.log(item);
});

console.log("\n보고 싶은 영화 목록:")
wishMovieList.forEach(function (item) {
  console.log(item);
});

let movie = "파이트 클럽";
if(!watchedMovieList.has(movie)){
  watchedMovieList.add(movie);
  wishMovieList.delete(movie);
  console.log("\n" + movie + "을(를) 시청한 영화 목록에 추가하고, 보고 싶은 영화 목록에서 삭제했습니다");
}

console.log("\n현재 시청한 영화 목록:")
watchedMovieList.forEach(function (item) {
  console.log(item);
});

console.log("\n현재 보고 싶은 영화 목록:")
wishMovieList.forEach(function (item) {
  console.log(item);
});

// Q18
let readBook = new Set();
readBook.add("해리포터");
readBook.add("반지의 제왕");
readBook.add("어린왕자");
readBook.add("데미안");
readBook.add("1984");
readBook.add("위대한 개츠비");

console.log("\n현재 읽은 책 목록:");
readBook.forEach(function (item) {
  console.log(item);
});

readBook.forEach(function (item) {
  if(item.length >= 7){
    readBook.delete(item);
  }
});
console.log("\n위대한 개츠비을(를) 책 목록에서 삭제했습니다.");

let readBookFriend = new Set();
readBookFriend.add("어린왕자");
readBookFriend.add("1984");
readBookFriend.add("노인과 바다");
readBookFriend.add("그리스인 조르바");

console.log("\n친구가 읽은 책 목록:");
readBookFriend.forEach(function (item) {
  console.log(item);
});

console.log("\n두 명의 사용자가 공통으로 읽은 책:");
readBook.forEach(function (item) {
  if(readBookFriend.has(item)){
    console.log(item);
  }
});

// Q19
let phone = new Map();

phone.set("민수", {phone: "010-1234-5678", address: "서울특별시 강남구"});
phone.set("지영", {phone: "010-8765-4321", address: "부산광역시 해운대구"});
phone.set("현우", {phone: "010-2345-6789", address: "대구광역시 수성구"});
phone.set("수빈", {phone: "010-9876-5432", address: "인천광역시 남동구"});
phone.set("동민", {phone: "010-3456-7890", address: "광주광역시 서구"});
phone.set("하은", {phone: "010-6543-2109", address: "대전광역시 유성구"});

console.log("\n연락처 목록:");
for (let [key, value] of phone) {
  console.log(key + ": " + value.phone + ", " + value.address);
}

if(phone.has("동민")){
  let info = phone.get("동민");
  info.phone = "010-9999-9999";
  phone.set("동민", info);
}
console.log("\n동민의 연락처를 수정했습니다.");

if(phone.has("지영")){
  phone.delete("지영");
}
console.log("\n지영의 연락처를 삭제했습니다.");

console.log("\n현재 연락처 목록:");
for (let [key, value] of phone) {
  console.log(key + ": " + value.phone + ", " + value.address);
}

console.log("\n현재 연락처 개수:", phone.size);

// Q20
let student = new Map();

student.set("김민준", {grade: "2학년", study: "컴퓨터공학"});
student.set("이서윤", {grade: "3학년", study: "경영학"});
student.set("박지호", {grade: "1학년", study: "물리학"});
student.set("최지민", {grade: "4학년", study: "화학"});
student.set("정예린", {grade: "2학년", study: "수학"});
student.set("한지우", {grade: "3학년", study: "영어영문학"});

console.log("\n학생 목록:");
for (let [key, value] of student) {
  console.log(key + ": " + value.grade + ", " + value.study);
}

for (let [key, value] of student) {
  let info = value;
  if(value.grade === "3학년"){
    info.study = "융합공학";
    student.set(key, info);
  }
}
console.log("\n3학년 학생들의 전공을 융합공학으로 변경했습니다.");

for (let [key, value] of student) {
  if(key === "정예린"){
    console.log("\n" + key + ": " + value.grade + ", " + value.study);
  }
}

console.log("\n3학년별 학생 수:");

let grade = new Map();
student.forEach(function (value) {
  let count = 1;
  if(grade.has(value.grade)){
    count = grade.get(value.grade) + 1;
  }
  grade.set(value.grade, count);
});

for (let [key, value] of grade) {
  console.log(key + ": " + value + "명");
}