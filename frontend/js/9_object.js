// 1. 객체 리터럴 -> { ... }
// 용도 -> 1회성으로 여러개의 데이터를 묶어서 전달(대부분 parameter로)할때
// let obj = {};
// console.log(obj, typeof obj);

// Object를 const로 선언할 경우 obj의 address값이 상수로 지정된다
// 즉, 새로운 Object를 할당하는 것이 불가능하고, 선언된 원래의 Object 내부의 변수들은 생성, 재할당 등이 가능하다.

let height = 185; // 전역변수
let w = "weight" // 동적속성명 지원을 위한 샘플, 이 값을 키로 사용하고 싶다
const obj = {
    // 데이터 추가(데이터 관점), 멤버 추가(OOP 관점)
    // 키:값, 키:값, 키:값(모든타입, 단일형, 연속형, 컬렉션, 함수, ...)
    name: "Kyeongbin",
    age: 25,
    height,
    [w]: 85,
    arr: [1,2,3,4],
    spec: {},
    getAge:function () {
        // 같은 구성원의 데이터를 사용하고 싶다
        // 객체 내 멤버를 접근하고 싶다
        // 현재 객체를 지칭하는 용어는? this(python : self)
        return `name : ${this.name}\tage : ${this.age} `;
    },
    // 함수를 직접 넣거나, 외부에 존재하는 함수를 삽입
    print() {
        console.log("출력");
    }
};

console.log(obj);
console.log(`name : ${obj.name}\tage : ${obj.age} `)
console.log(obj.getAge());

// 4. 생성자 함수 + 프로토타입 확장 방식
// constructor -> 첫글자 대문자(일반적으로 클래스명)
function Person (nm) {
    // 생성자 => 객체지향프로그램, 클레스에서는 객체를 생성할 호출되는 함수, 객체 생성, 맴버 초기화
    // constructor call -> 객체가 생성
    this.nm = nm;
}


// 객체 생성
// const 객체명 = new 생성자함수( 인자 );
const person = new Person( 'Kyeongbin' );
console.log( person );

// 프로토타입 확장 -> 객체 생성시 포함되지 않는다. 공용으로 객체간에 사용됨!!
// 객체에 변수, 함수 형태를 확장하는 방식
// 생성자함수명.프로토타입.확장할요소명 = 변수|함수|...
Person.prototype.nm2 = 'Gang';
Person.prototype.getNm2 = function () {
    console.log( `${this.nm} ${this.nm2}` );
};
console.log( Person ); // [Function: Person]
console.log( person ); // Person { nm: 'Kyeongbin' } , 객체 자체는 변동이 없어보임
// 확장된 요소 엑세스
console.log( 'person.nm2 => ', person.nm2 );
person.getNm2(); // 함수도 정상적으로 사용됨

// 결론
// prototype으로 함수를 확장하여 추가함
// 수십개의 객체가 동일하게 만들어줘도, 함수는 오직 1개만 서로 공유하면서 사용!!
// 쓸데 없이 동일한 기능을 가진 함수를 객체 생성할때마다 생성 하지 않는다!! 
//  => 메모리 효율

// 위의 4번 방식은 구조적이 않다. 개발하기 까다롭다 => 쉽게 만들어보자 => class
// 5. class





