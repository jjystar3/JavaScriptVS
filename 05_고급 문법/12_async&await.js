// async/await: 비동기함수에서 API를 호출이 완료될 때까지 기다리는 방법

// await을 쓰는 함수 앞에는 반드시 async를 붙여야 한다
async function func1(){

  // await: 응답이 올때까지 대기
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // 응답메세지에 담긴 결과데이터를 json객체로 반환
  const resJson = await responce.json();

  console.log(resJson); //변환된 데이터 출력

}

func1();