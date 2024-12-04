// 1. 명시적 형변환
// 데이터
let a = 10;
console.log(a, typeof a);
// 변환처리 : literal -> string
console.log(String(a), typeof String(a));
console.log(String(false), typeof String(false));
// 수치형 -> 수치형
console.log(Number(a), typeof Number(a));
// js의 변수는 타입 추론형이라서, 값이 참조되면 타입이 결정된다.
a = "11"
// string -> literal
console.log(Number(a), typeof Number(a));
// true -> 1, false -> 0
console.log(Number(true), typeof Number(true));
// 변환이 안되는 경우 -> 값이 부정확함
console.log(Number("1 "), typeof Number("1 ")); // 공백제거해줌
console.log(Number("ABC"), typeof Number("ABC")); // 처리불가 NaN : Not N Number

// NaN 체크
console.log(isNaN(Number("1 "))); // false
console.log(isNaN(Number("ABC"))); // true

// boolean 변환 -> false 상황을 기억하는것이 편함
// 조건식에서 false로 해석되는 값(상황) : 0, "", NaN, null, nudefined
console.log(Boolean(0), Boolean("")
            , Boolean(NaN), Boolean(null)
            , Boolean(undefined));
// 수치값중 0, 0.0(부동소수)만이 false 나머지는 모두 true
console.log(Boolean(1), Boolean(-1), Boolean(0.0), Boolean("  "));

// 2. 암묵적 형변환
// + 연산자
console.log(1 + 2);
// + 연산중 하나라도 string이 있으면 전부 string으로 처리
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

// +  연산자가 아니라면? -> number가 우선순위
// string이 number로 typeCasting 되었음
console.log(1 - 2);
console.log("1" - 2);
console.log(1 - "2");
console.log("1" - "2");








