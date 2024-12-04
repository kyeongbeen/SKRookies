// 1. 기본 if문
// 조건 1개, 해당되면 수행, 아니면 생략
let coffeePrice = 1500;
if (coffeePrice > 1500) {
    console.log("커피 구매 실패");
}

// 2. 기본 if문 
// 조건이 2개 <-> 삼항연산자로 대체 가능
// 모든 상황이 둘중에 하나이므로, 둘 중 하나의 statement는 반드시 실행된다
if (coffeePrice > 1500) {
    console.log("커피 구매 실패");
} else {
    console.log("커피 구매 성공");
}

// 3. 기본 if문
// 조건이 3개 이상
let score = 70;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// 4. 삼항연산자, 값세팅 예시
// let memberLv = 10;
// let levelName = memberLv >= 10 ? "VIP" : "NORMAL"
// console.log(levelName);
// 실습, 위의 삼항연산자 코드르 if문으로 표현
let memberLv = 10;
let levelName;
if (memberLv >= 10) {
    levelName = "VIP"
} else {
    levelName = "NORMAL"
}
console.log(levelName);

// 5. switch문 -> case별로 분기 처리한다, 일치여부를 활용
// break생략하면 다음 case의 statement를 실행
let currDay = new Date().getDay(); //new Date() 현재 시간(년월일시분초)
console.log(currDay);
// currDay 값에 따라 요일을 출력하시오.
switch (currDay) {
    case 0:
        console.log("일요일");    
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    default:
        console.log("목~토요일 중 하나");
        break;        
}

// 6. 중첩 조건문
// 대상을 좁혀가면서 표현할때, 기타 필요시 사용
// 너무 많이 중첩하지는 말자
let age = 30;
if (age > 10) {
    if (age < 40) {
        console.log(`age : ${age}`);
    }
}

// 7. 논리연산자(쇼트 연산자) 조건문
if (age > 10 && age < 40) {
    console.log(`age : ${age}`);
}

