// 객체명 pay, 데이터 name, price 샘플값 "Coffee", "1500"
// object literal로 구성
const pay = {
    name: "커피",
    price: 1500
};
console.log(pay);

// 기존방식
// 데이터 추출 : 객체명.멤버명
console.log(pay.name, pay.price);

// 개선 -> 비구조화 할당, 분해
// 분해시 멤버명과 동일해야 함
let {price, name} = pay; // 순서 X
console.log(price, name);

// 분해한 값을 수정해도 원본값은 바뀌지 않는다
price = 2000;
console.log(price, pay.price);

// 중첩구성
const person = {
    name: "KyeongBin",
    spec: {
        age: 25
    }
}
// age를 추출해보자
const {spec:{age}} = person;
console.log(age);

