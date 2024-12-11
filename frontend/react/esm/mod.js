/**
 * 모듈화 하여 다른 JS가 사용할 수 있게 구성
 *  - 1개의 JS에서 모든 내용을 구현할 수 없음 -> 모듈화 필요
 *  - 필요시 재사용성, 여러 JS에서 참조하여 사용 가능해야함 -> 모듈화 필요
 * 특징
 *  - 일반적인 코드는 private
 *  - ESM 모듈화 처리 -> export 또는 export default -> 다른 파일에서 사용가능
 */

// 1. 상수/변수의 모듈화
export const a = "hi";

// 2. 함수의 모듈화
export function add(x, y) {
    return x + y;
}


// 3. 객체의 모듈화
export class Person {
    log() {
        console.log('Person log() Call');
    }
}


// 4. 대표 모듈화 (표현이 2가지)
// class 선언 아래 `export default Human` 추가
export default class Human {
    log() {
        console.log('Human log() Call');
    }
}


