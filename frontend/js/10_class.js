// 

class Food {
    // constructor -> 객체 생성, 멤버 초기화
    constructor (name, age) {
        // 멤버 -> this 로 접근
        // Field를 생성, 초기화
        this.name = name;
        this.age = age;
    }
    
    // Method, 개정 문법에서는 function 키워드 생략
    info() {
        console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
    }


}
const obj = new Food("KyeongBin", 25);
obj.info();

// inheritance, overloading -> Java, SpringBoot 에서 확인