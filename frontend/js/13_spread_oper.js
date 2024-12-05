// 배열의 병합
// 원하는 결과 : [1, 2, 3, 4, 5, 6]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1 + arr2); // 1, 2, 34, 5, 6 -> 의도한 결과 X
console.log([arr1, arr2]); // [[1, 2, 3], [4, 5, 6]] -> 의도한 결과 X

// 스프레드 연산 사용해 arr1, arr2를 병합
console.log([...arr1, ...arr2]) // 많이 사용됨
console.log([...arr1]); // 원본배열 깊은복사
const arr3 = [...arr1];
arr3[0] = 100; // arr1의 사본 arr3에서 index : 0 의 값을 수정
console.log(arr3, arr1); // 사본, 원본확인 -> 영향없음

// 배열구조 분해시, 나머지연산 -> 남은 멤버 일괄적으로 받기
let [a, ...rest] = [1, 2, 3, 4, 5];
console.log(a, rest); // rest는 분해한 값 제외한 나머지로 배열구성

// 문자열 + 배열 스프레드
// 문자열을 char로 쪼개 배열로 구성해준다
console.log([..."Hello World"]); // ['H', 'e', ... , 'd']

// 객체 병합
// n개의 객체(데이터)를 한개의 데이터로 통합
const s1 = { score: 50, subject: "JS"};
const s2 = { score: 90, age: 25};
// s1, s2는 score라는 key가 중복된다
// 객체 병합시 무엇이 우선되는가
// 나중에 복사된 값이 사용됨
console.log({...s1, ...s2}); // { score: 90, subject: 'JS', age: 25 }

// 객체 깊은복사
// 깊은복사를 하였기 때문에 원본에 영향이 없음
const s3 = {...s1};
s3.score = 100;
console.log(s1.score, s3.score);

// 함수 사용시 스프레드 연산 활용
function test(a, b, c) {
    console.log(a, b, c);
}
test(s1);
// 배열의 값을 각각의 parameter로 넣어서 function call
test(arr1[0], arr1[1], arr1[2]);

// 배열스프레드를 함수 파라미터로 전달 -> 배열구조분해 작동 -> 파라미터에 순서대로 대입
test(...arr1);

// 멤버수가 인자수보다 많다면? -> 앞에서부터 사용하고 남는건 사용하지 않는다
let arr4 = [...arr1, ...arr2];
test(...arr4);

// 객체 스프레드 연산을 함수에 활용
function test2(score, subject) {
    console.log(score, subject);
}
test2(s1); // score -> s1이 파라미터로, subject에는 undefined

// object unstructure
function test3({score, subject}) {
    console.log(score, subject);
}
test3(s1);

// 가변인자
// 고정인자, 가변인자 순으로 사용
function test4(a, ...data) { 
    console.log(a, data);
    for (const temp of data) {
        console.log(temp);
    }
}
test4(1);
test4(1, 2);
test4(1, 2, 3);



