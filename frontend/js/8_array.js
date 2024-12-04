// 배열 정의
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// 배열의 특정 구성원 접근 -> 인덱싱
console.log(arr[2]);

// 실습 : 반복문을 이용하여 모든 멤버의 값을 출력

// 기본 for문
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in
for (const key in arr) {
    console.log(arr[key]);
}

// for of
for (const element of arr) {
    console.log(element);
}

// 배열을 위한 반복문
// 배열의 구성원을 하나씩 추출하여 작업해야 할 때 사용
arr.forEach((item, index) => {
    console.log(`arr[${index}]`,'->', item);
});

// map
// 배열의 멤버를 하나씩 꺼내서 일괄연산

// filter
// 배열의 멤버를 하나씩 꺼내서 조건에 맞는 멤버만 추린다

// reduce
// 배열의 멤버를 하나씩 꺼내서 누적합, 누적곱 등 일괄 연산
