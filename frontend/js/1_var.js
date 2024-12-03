
// 1. 상수 (const)
const PI = 3.14;
console.log("PI : " + PI);

// 상수값 수정 -> Runtime Error -> 상수값을 변경시도해서 발생
// TypeError: Assignment to constant variable.
// PI = 3.141592;
// console.log(PI);

// 2. 변수 (var or let)
// 스코프 관점 : 전역변수(코드 전반에서 사용가능)
// 타입 관점 : 수치형 -> 정수형 -> Number
var a = 1;
// const, var, typeof -> 키워드, 특수목적을 가지고 있음
// typeof -> 변수타입을 조사
console.log(a, typeof a);

// a의 데이터 변경
a = "Hello" // String으로 변경
console.log(a, typeof a);

// 변수는 값을 언제든디 바꿀수 있다
// 변수는 값을 가지고 있는 것이 아니라 가리키고 있는 것(참조)
// 이런 유형의 언어의 타입을 "타입 추론형"으로 부른다
// 변수의 타입은 값이 할당될때 결정된다

// 스코프 체크
a = 1;
console.log(a, typeof a);
if(true) {
    var a = 10;
    var b = 11; // 지역(local) 변수
    let c = 12; // var의 어색한 상황을 해결하기 위해 let을 만듦
}
// a라는 변수가 전역, 지역 겹친다 -> 변수명동일 -> 같은변수로 취급
console.log(a, typeof a);

// b는 로컬변수, 스코프를 벗어나도 에러 X -> var로 선언했기 때문
// 변수명이 다르면 문제가 없음(피해서 작성, var을 굳이 사용하려면)
console.log(b, typeof b);

// ReferenceError: c is not defined
// 지역변수인 c를 스코프 바깥에서 사용하려고 해서 에러가 발생
// console.log(c, typeof c);

// 스코프 체크 결론
// let을 키워드로 사용 -> 각각의 범위에 맞게 사용 가능. 틀리면 에러
// var을 키워드로 사용 -> 범위에 상관없이 사용 가능. 잠재적으로 버그를 가지고 있음
// 전역변수, 지역변수 적절히 사용

// 변수 호이스팅 -> 경우에 따라서 잠재적 버그를 가지고 있음
// 호이스팅 : 인터프리터가 코드 실행전 함수, 변수, 클래스 등의 선언문을 최상위로 배치하는 증상/현상
console.log(a2);
var a2 = 10;
console.log(a2);
