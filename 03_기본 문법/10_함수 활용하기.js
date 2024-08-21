// 부가세 계산하기

let salePrice = 100000;
let vat = 0.1;
let tax = salePrice * vat;
console.log(tax);

let salePrice2 = 240000;
let vat2 = 0.1;
let tax2 = salePrice2 * vat2;
console.log(tax2);

let salePrice3 = 940000;
let vat3 = 0.1;
let tax3 = salePrice3 * vat3;
console.log(tax3);

// 함수 없이 부가세를 계산하면 동일한 계산 코드가 반복됨

// 부가세 계산하는 함수 만들기
const taxCalc = function (price) {
  let vat = 0.1;
  return price * vat;
}

// 함수 이용해서 10만원, 24만원, 94만원에 대한 부가세 계산
console.log(taxCalc(100000));
console.log(taxCalc(240000));
console.log(taxCalc(940000));