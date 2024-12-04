// for문 : 언어 초기때부터 지원, 현재는 활용빈도가 떨어짐

// 기본 for문
for (let i = 0; i < 5; i++) {
    console.log( `카운트 : ${i}`);    
}

// 중첩 for문
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log( `${i} x ${j} = ${i*j}`);    
    }  
}
// 실습 : 구구단, 3,4단 출력
for (let i = 3; i < 5; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log( `${i} x ${j} = ${i*j}`);    
    }  
}

// 구구단, 3단, 5단 출력
for (let i = 3; i <= 5; i+=2) {
    for (let j = 1; j <= 9; j++) {
        console.log( `${i} x ${j} = ${i*j}`);    
    }  
}

// 위 코드에서 4단만 배제하시오
for (let i = 3; i <= 5; i++) {
    if ( i != 4 ) {
        for (let j = 1; j <= 9; j++) {
            console.log( `${i} x ${j} = ${i*j}`);    
        }  
    }
}

// 4단만 배제하여 실행
for (let i = 3; i <= 5; i++) {
    if ( i==4 ) {
        continue; 
    }
    for (let j = 1; j <= 9; j++) {
        console.log( `${i} x ${j} = ${i*j}`);    
    }  
}

// 4단만 출력후 반복문 종료(탈출 -> break)
for (let i = 3; i <= 5; i++) {
    if ( i==4 ) {   
        for (let j = 1; j <= 9; j++) {
            console.log( `${i} x ${j} = ${i*j}`);    
        }
        break;
    }     
}

// for ~ in : object(객체)를 대상으로 반복문 처리
// js의 object  는 {}이다
const person = {
    name:"js",
    age:10
}
// person 객체에 접근해서 멤버들의 key(name, age)를 추출
for (const key in person) {
   console.log(`${key} ${person[key]}`);
}

// for ~ of : array를 대상으로 반복문 처리, 
// js의 array는 []
const level = [1, 2, 3];
for (const element of level) {
    console.log(`${element}`)
}
for (const idx in level) {
    console.log(level[idx]);
}

// for each
// Array.array.forEach(element => {
// });

// for await -> Async 처리시 사용
// for await (const element of object) { 
// }

// 2. while문
// 기본 while문 : 0 ~ 무한대로 반복
let cnt = 0;
while (true) {
    console.log(cnt++);
    if (cnt > 10) break;
}
while (cnt > 10) {
    console.log(cnt++);
}

// do-while문 : 반드시 한번은 실행해야 할 때 사용
cnt = 0;
do {
    console.log(cnt++);    
} while (cnt < 3);

