// 정규표현식: 문자열에서 특정 패턴을 찾거나, 추출하기 위한 표현식

let str = "Hello World! world!";

// 정규표현식 객체 생성 방법
const regex = /World/;

const regex2 = new RegExp("World");

// 정규표현식.test(문자열): 문자열에서 정규표현식과 매치되는 부분이 있으면 true 반환 
console.log(regex.test(str));

// 문자열.search(정규표현식): 문자열에서 정규표현식과 매치되는 부분이 있으면 위치(index)를 반환
console.log(str.search(regex));


str = "Is this all there is";

// g 플래그: 전역 검색 의미
let patt = /[hat]/g;

// match: 주어진 문자열에서 패턴과 일치하는 부분을 찾아 배열로 반환
// [hat] 패턴은 'h', 'a', 't' 중 일치하는 문자를 찾는다
let result = str.match(patt);
console.log(result);

// i 플래그: 대소문자 상관없이 검색
patt = /[is]/gi;
result = str.match(patt);
console.log(result);

str = "123abc4523kkk";

// 0~9까지의 숫자 중에서 일치하는 숫자를 찾기

patt = /[0-9]/g;
result = str.match(patt);
console.log(result);

// \d: 숫자를 의미
str = "Give 100";
patt = /\d/g;
result = str.match(patt);
console.log(result);

// n+ 최소한 1개 이상
str = "Hellooo"
patt = /o+/g; //o문자가 하나이상 있는 부분 찾기
console.log(str.match(patt));

//n* 0 혹은 n개
str = "Hellooo World";
patt = /lo*/g; //'l'다음에 'o'가 0개 이상
console.log(str.match(patt));

//n? 0개 이거나 1개
str = "1, 100 or 1000";
patt = /10?/g; //'1'다음에 '0'이 0개 또는 1개
console.log(str.match(patt));

// 우편번호 5자리
let postalcode = "23452"

// ^는 문자열의 시작, \d는 숫자, {5}는 앞의 패턴이 5번 반복
patt = /^\d{5}$/;

console.log(patt.test(postalcode)); //우편번호가 패턴이 맞는지 확인

// 전화번호
// 010-2312-3354
let tel = "010-2312-3354";
// (010)과 -는 문자 그대로, \d{4}는 숫자 4개
patt = /^(010)-\d{4}-\d{4}$/;

console.log(patt.test(tel)); //전화번호가 패턴이 맞는지 확인

// 이메일 검사/
// ^: 문자열의 시작
// ([a-z]+\d*)+: 소문자 알파벳으로 시작하며, 숫자가 0개 이상. 이부분이 한번이상 반복
// [a-z]+: 하나 이상의 소문자 알파벳으로 시작
// \d*: 숫자가 0개 이상
// (\.?\w+)+: 점(.)으로 시작, 그 뒤에 하나 이상의 문자가 올수있음
// \.?: 점(.) 문자가 0개 또는 1개 올 수 있음
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// @: 문자 그대로
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// (\.\w{2,3})+: 점(.)으로 시작, 그 뒤에 두 개 또는 세 개의 문자(알파벳)
// $: 문자열의 끝
let regexp_email = /^([a-zA-Z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regexp_email.test("jeremy2021.go@gmail.com"));
