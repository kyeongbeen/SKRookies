/**
 * 모듈 가져오기
 *  - mod를 가져와서 마치 내 것처럼 사용
 *  - import 대표모듈 from '상대경로+커스텀모듈명'/서드파티 모듈명'
 *  - import {모듈, 모듈, 모듈} from '상대경로+커스텀모듈명'/서드파티 모듈명'
 *  - import 대표모듈, {모듈,
 *      모듈,
 *      모듈} from '상대경로+커스텀모듈명'/서드파티 모듈명'
 *  - import '상대경로+커스텀모듈명'/서드파티 모듈명'
 * 특징
 *  - npm init 프로젝트 생성 -> CJS 방식으로 지원(기본값)
 *  - ESM을 사용하려면 package.json에 다음내용 추가
 *      - "type":"module"
 */
// 1. module import
// 대표 모듈명은 원본과 다르게 커스텀 가능함 -> 통상 동일하게 구성
import Human, {a, add, Person} from "./mod.js";

// 2. module using
console.log(a);
console.log(add(1, 2));
const p = new Person();
p.log();
const h = new Human();
h.log();






