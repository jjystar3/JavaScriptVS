/* JSON문자열과 객체 사이의 변환 과정 */

// json과 자바스크립트 객체의 차이점: 객체의 키는 ""를 꼭 안써도 됨

//자바스크립트의 객체
let data = {
  employees: [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Anna", lastName: "Smith"},
    {firstName: "Peter", lastName: "Jones"}
  ]
};
console.log(data);
console.log(typeof data); //object
console.log(data.employees[0]);

// 자바스크립트 객체를 JSON 형식의 문자열로 변환 (object->string)
let stringValue = JSON.stringify(data);
console.log(stringValue);
console.log(typeof stringValue); //string

// json형식의 문자열
// JSON: 데이터를 전송할때 사용하는 데이터 형식 (예: JSON, XML ..)
let text = 
  '{ "employees" : [' +
  '{ "firstName" : "John", "lastName" : "Doe"},' +
  '{ "firstName" : "Anna", "lastName" : "Smith"},' +
  '{ "firstName" : "Peter", "lastName" : "Jones"} ]}';

  console.log(text);
  console.log(typeof text); //string
  
// JSON 문자열을 자바스크립트 객체로 변환
let obj = JSON.parse(text); // string->object
console.log(obj);
console.log(typeof obj); //object

console.log(obj.employees[0].lastName);

// JSON을 변환해야하는 이유
// 외부와 통신할 때(예: API 요청), 데이터를 주고받기 위해 JSON형식의 문자열을 사용함
// 하지만 문자열은 자바스크립트에서 바로 사용하기 어려움
// JSON 문자열을 자바스크립트 객체로 변환하여 프로퍼티를 꺼내 쓸 수 있음
