// fetch: 서버와 데이터를 주고받기 위한 API 호출 함수

// 인자: 서버주소(URL), HTTP 메소드, 전송할 데이터 등
// GET 방식은 생략 가능

//fetch함수는 자체적으로 promise객체를 생성하여 반환한다
//그래서 fetch 함수 뒤에 then 또는 catch함수를 이어서 사용할 수 있다

// fetch("http://192.168.0.67:8080/board/read?no=1")
// .then((response) => response.json()) // 응답데이터를 객체로 변환
// .then((json) => console.log(json)); // 변환한 데이터 출력

// POST - 새로운 게시물 생성
// fetch("http://192.168.0.67:8080/board/register", {
//   method: "POST",
//   body: JSON.stringify(
//     {
//       title: "가입인사",
//       content: "안녕하세요~",
//       writer: "user"
//     }
//   ), // 전송할 데이터
//   headers: {
//     "content-type": "application/json; charset=UTF-8"
//   }
// })
// .then((response) => response.text()) //응답이 단순한 텍스트일 때
// .then((text) => console.log(text)); 

// 16

// PUT - 본인이 작성한 게시물 수정
// fetch("http://192.168.0.67:8080/board/modify", {
//   method: "PUT",
//   body: JSON.stringify(
//     {
//       no: 16,
//       title: "PUT테스트",
//       content: "반갑습니다^^",
//       writer: "정주용",
//     }
//   ), // 전송할 데이터
//   headers: {
//     "content-type": "application/json; charset=UTF-8"
//   }
// })
// .then((response) => response.status)
// .then((status) => console.log(status));

// DELETE - 본인의 게시물 삭제
fetch("http://192.168.0.67:8080/board/remove?no=16", {
  method: "DELETE"
})
.then((response) => response.status)
.then((status) => console.log(status));