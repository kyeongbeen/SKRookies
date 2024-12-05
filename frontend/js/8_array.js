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
// 요구사항 : 배열의 모든 값을 3배씩 증가
function mulx3(data) {
    return data * 3;
}
// mulx3이라는 함수를 map() 함수의 parameter로 전달 -> 함수의 parameter로 함수 전달
// 이때 전달된 함수 -> callback 함수
let result = arr.map(mulx3);

// 위 코드 간소화
let result2= arr.map(data => data * 3);

console.log(arr, result);
console.log(arr, result2);

// filter
// 배열의 멤버를 하나씩 꺼내서 조건에 맞는 멤버만 추린다
// 요구사항 : arr3에서 30이상인 데이터만 추출
let arr3 = [10, 20, 30, 40, 50];
let result3 = arr3.filter(data => data >= 30);
console.log(result3);
let result4 = arr3.filter(data => data % 2 == 0);
console.log(result4);


// reduce
// 배열의 멤버를 하나씩 꺼내서 누적합, 누적곱 등 일괄 연산
// 누적합 많이 함
console.log(arr3.reduce((pb, cv) => pb + cv));

