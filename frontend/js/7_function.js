// 1. 표준함수
// 형태 : 표준함수
// 기능 : 더하기 기능을 가진 함수 add를 구현
// 입력 : 두개의 수 x, y를 입력-> Parameter(매개변수, 정의시 용어)
// 출력 : x + y의 결과를 반환 
function add(x, y) {
    return x + y;
}

console.log(add(3,5));

// 실습
/**
 * 요구사항
 * - 표준함수
 * - Parameter : x, y, z
 * - x, y는 더하고, x, y를 더한결과을 z와 곱한다
 * - Output : 연산결과 return
 * - Function Name : cal
 */
function cal(x, y, z) {
    return (x + y) * z;
}

console.log(cal(1,2,3));

// 함수를 정의한곳보다 더 위에서 함수를 호출 -> 오류 X -> 호이스팅
console.log(cal2(1,2,3));
function cal2(x, y, z) {
    return (x + y) * z;
}

// 2. 익명함수
const cal3 = function (x, y, z) {
    return (x + y) * z;
}
console.log(cal3(1,2,3));

// 3. 매개변수
// 실습 : name, age를 템플릿 문자열로 표현하여 출력
function setInfo (name = "String", age = 20) {
    console.log(`name : ${name}\nage : ${age}`)
}
setInfo("KyeongBin", 25);
setInfo();

// 4. 화살표(에로우, 람다)함수
const calLamda = (x, y, z) => (x + y) * z;

// 실습
// 1. 표준함수 형태로 매개변수 2개를 입력받아서 더하는 함수, add2
function add2(x, y) {
    return x + y;
}

// 2. 위 함수를 상수 add3의 이름으로 값을 받도록 익명함수로 변환
const add3 = function (x, y) {
    return x + y;
}

// 3. 위 함수를 상수 add4의 이름으로 값을 받도록 람다함수로 변환
const add4 = (x, y) => { 
    return x + y;
}

// 4. 위 함수를 상수 add5의 이름으로 값을 받도록 생략가능한 부분을 모두 생략
const add5 = (x, y) => x + y;

// 5. 매개 변수가 1개라면? 화살표함수에서 () 생략 가능함
// 아래 두개의 함수는 같은 함수
const cal4 = (x) => x * 5;
const cal5 = x => x * 5;

// 6. 함수가 객체를 반환한다면? (참고)
const cal6 = (a, b) => { return {result:a+b} };
// 값의 의미로 ()로 감싸면 처리됨 -> react에서 자주 등장
const cal7 = (a, b) => ( {result:a+b} );
console.log(cal6(1, 2));
console.log(cal7(1, 2));

