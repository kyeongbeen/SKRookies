# Javascript 언어
## 목적
- 전 세계 언어 top10에 속함 -> 수요가 많다
- FE 포지션에서 SPA 개발할 때 주력언어
- react 개발시 사용언어 (JavaScript, Typecript)

## 개요
- History
    - 2005년 이전
        - js는 해킹의 온상, 사용을 주저, 표준 x
    - 2005년
        - google map 등장
        - js에 `ajax`(Async Background tech, xml 대상) 도입 -> 지도서비스 개시
    - 2005년 이후
        - 2008년 Chrome 브라우저 등장, `v8` 기술 공개
        - `nodejs` 등장(2009 ~ 2010)
            - JS가 전방위 발전
            - 웹, 데스크톱 App, 모바일 개발 됨

- Version
    - ECMAScript(Javascript 공식명칭)
    - https://www.w3schools.com/js/js_versions.asp
    - 2009 : ES5, ECMAScript 5, 현재 형태로 개정
    - 2015 : `ES6`, ECMAScript 2015, 현재 기본 표준형태 -> `ES Next`

- JS 표현 범위
    - TS(TypeScript) > ES Next > ES5
    - 최종 작성된 JS는 ES6 기준으로 작성
        - 최신 문법에 맞게 작성 -> TransCompile -> ES6로 자동변환

- JS의 최종 산출물
    - ES6 (모든 브라우저에서 정상적으로 작동)

## 언어 기본
- 표현식(expression)
    - 값을 생성(획득)하는 코드 단위
    - 파트, 조각
    - 문장을 완성하는 과정, 조각

- 문장(statement)
    - 작업 수행 단위
    - ;으로 끝난다. 단, JS는 생략 가능함

- 키워드
    - 예약어
    - 식별자로 사용 X
    - ex) function, var, let, const, if, while, ...

- 식별자(identifier)
    - 변수명, 함수명, 클래스명, 모듈명, 속성명, ...
    - 이름정의 -> 네이밍 컨벤션
    - 네이밍 컨벤션 종류 -> 전통, 문화 -> 동일하게 작성
        - 카멜 표기법
            - 시작문자
                - 문자(A-Z, a-z, 각국문자), 달러기호($), 밑줄(언더스코어, _)
            - 두번째 문자
                - 숫자 추가됨(0-9)
            - 대소문자 구분
            - 클래스명 첫글자 -> 대문자
            - 단어가 이어지면 이어지는 첫글자 -> 대문자
            - ex) _name, getName, Person(Person 클래스)
            - Java, JavaScript, ...
        - 스네이크 표기법
            - 이름 사이에 언더바(_)를 사용
                - ex) get_name, get_age_for_man
            - Python, ...
        - ...


## 타입
- NULL      -> 값이 없다
- Undefined -> 정의되지 않았다
- Boolean   -> 참, 거짓 
- Number    -> 수치형 데이터(정수, 부동소수, ...)
- Bigint    -> 더 큰 범위를 가진 정수
- String    -> 문자열( "Javascript" )
- Symbol    -> 심볼
- Object    -> 객체

## 변수
- js파일 "1_var.js" 참고할 것

- 문법
    - 변수 선언
         키워드 변수명;
    - 변수 선언
         키워드 변수명 = 값;
- 용도
    - 값을 담는 그릇 or 값을 가르키는 주소를 가진 그릇
    - 수치, 문자열, 불리언 등 특정 타입의 데이터를 담는 그릇
- 키워드
    - var
        - 초기부터 게속 사용
        - 버그문제가 내제되어 있음
    - 표현 추가
        - 변수의 범위를 블록 스코프( { 여기서만 유효 } )
        - let
            - 변수
        - const
            - 상수 : 값을 한번 세팅하면 바꿀수 없다
            - 상수명은 통상적으로 대문자와 언더바(_)로만 표현
            - 환경변수, 설정값, CONFIG용도

## 연산자

## 형변환

## 흐름제어 : 조건문, 제어문, 반복문

## 함수

## 객체

## 클래스, 객체

## 최신문법