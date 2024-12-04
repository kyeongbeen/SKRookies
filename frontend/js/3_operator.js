// 1. 사칙연산 : + - * / => 의도대로 작동
let x = 10;
let y = 6;
// 실습 2분 + - * /를 로그출력으로 표현
// 10 + 5 = 15 이런 형태로 4가지 연산자를 사용한 결과를 출력하시오
// 10 - 5 = 5
// ${ 값 }
console.log( `${x} + ${y} = ${x+y}` );
console.log( `${x} - ${y} = ${x-y}` );
console.log( `${x} * ${y} = ${x*y}` );
// 나누기 시에는 결과에 따라 타입이 다를수 있다
console.log( `${x} / ${y} = ${x/y}` ); // 정수, 혹은 부동소수로 결과 나옴

// 2. 나머지 연산 => %
//    일반적인 나머지 계산, 짝수/홀수 체크시 => 값%2 => 0 or 1
console.log( `${x} % ${y} = ${x%y}` );

// 특이케이스
// 앞에 값이 음수면, 나머지 연산 결과 => 무조건음수
console.log( `${5} % ${-3} = ${5   % -3}` );
console.log( `${-5} % ${3} = ${-5  % 3}` );
console.log( `${-5} % ${-3} = ${-5 % -3}` );

// 3. 문자열 더하기 => 결합 => +
//    문자열과 다른 타입이 +로 결합하면 모두 문자열이 된다!!
console.log( "A" + "B" + 10 );
let t = 10+""; // 간단하게 형변환(예시: number -> string) 가능
console.log( t, typeof t );

// 4. ++, --
//    ++a, a++
// ++i => 1증가후 값사용
// i++ => 값사용후 1증가
let i = 1;
console.log( i ); // 1
console.log( ++i, i, i++, i ); // 2 2 2 3
console.log( --i, i, i--, i ); // 2 2 2 1 

// 5. n값 증가(감소, 곱하기, 나누기)
i = 1;
console.log( i );
// 2증가
i = i + 2;
console.log( i );
// 단축표현 (더 많이 활용)
i += 2;
console.log( i );

// 6. 동등연산자( == ), 일치연산자 ( === )
//    주로, 조건문(흐름제어)의 조건식에서 주로 사용하는 내용
let x1 = 10; // number
let x2 = "10"; // string
// 액면으로 보이는 값은 같아 보이는데, 타입은 다름
console.log( typeof x1, typeof x2 );

// 조건식 => 결과 true|false <= 블린형
console.log( x1 == x2 ); // true  : 값(액면)을 비교
// 표준문법 ES6이후에서는 ===를 권장
console.log( x1 === x2 );// false : 타입과 값(액면)을 같이 비교

// 7. 삼항연산자
//    조건 : 상황(condition)이 2개(이분법적 상황)
//    문법 : 조건식 ? 참인경우(코드) : 거짓인경우(코드)
let coffeeIcePrice = 1500;
if (coffeeIcePrice > 1500) {
    // 커피가격이 1500보다 크다면,
    console.log("커피 비싸네");
} else {
    // 작거나 같다면
    console.log("커피 적당하네(싸구나)");
}
// 1줄로 표현
coffeeIcePrice > 1500 ? console.log("커피 비싸네") : console.log("커피 적당하네(싸구나)");

// ...