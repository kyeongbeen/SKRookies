# Web Service의 이해
## Web 이용
1. 브라우저(Chrome, Edge, Safari, ...) 오픈
    - PC
    - Mobile

2. 원하는 서비스 이용
    - 주소창에 도메인 입력 (https://www.coupang.com/)
    - 엔터(행위 -> 요청(request))
    - 검색 -> 검색결과 클릭 -> 진입(request)

3. 내부적인 요청 처리
    1. DNS(Domain Name System) 조회
        - www.coupang.com -> 92.132.44.13 (IP 주소로 변환)
        - 요청을 이어감
    2. 서버와 연결 설정
        - TCP/IP 기반
            - 프로토콜을 기반해서 용어가 정의
            - 프로토콜 : 통신규약, ...
                - 웹은 어떤 프로토콜으로 통신하는가?
                - http or https (HyperText Transfer Protoco(Secure))
        - 클라이언트(브라우저) <-> 서버(서비스 제공주체)
            - 서버는 어디에 위치?
                - 과거(레거시) : 자사내부, IDC 센터
                - 현재 : 클라우드 서비스내 특정 존에 존재(분산)
                    - 클라우드는 전세계 여러 데이터센터에 존재할 있다.
                    - AWS, Azure, Google Cloud, ...
            - IP를 통해서 서버를 찾아간다
4. 서버측 요청 처리
    - 클라이언트의 요청 도착
    - 요청 해석 -> 누가 처리할것인가? -> 특정대상에게 요청 전달
        - 라우팅 -> Spring Boot에서 확인
    - 처리
        - 로그인 : 클라이언트가 보낸 ID/PW 획득
        - 조회 : DB 접속, 쿼리, ...
        - 다양한 비즈니스 업무 처리
5. 응답 (Response)
    - html + css + javascript 을 구성해서 응답
        - 웹 페이지
    - xml or json(데이터포맷, 반정형데이터) 으로 구성하여 응답
        - restful, openAPI로 응답받는 형식
        - 화면 x
        - 내부적으로 사용(백단에서 사용)
6. 응답 데이터 클라이언트에게 전송
    - 클라이언트  <-> 서버 연결되어 있으므로 가능
    - http|http
7. 브라우저 렌더링
    - 응답 데이터 -> 파싱(해석, 메모리로드) -> 화면처리(렌더링)
    - 사용자는 브라우저를 통해서 결과를 확인한다
    - 여기까지 처리시간 o.x초

## 웹서비스 구조 (3-tier)
### 프런트엔드
- html + css +javascript
    - 사용자가 브라우저를 통해 만나는 서버의 응답 결과
    - 구성
        - html5 : 구조(뼈대), 콘텐츠포함
        - css3  : 레이아웃, 디자인, 반응형, 애니메이션
            - 반응형 : 사이즈에 따라 UI가 변형
        - javascript : 인터렉션(사용자 <-> 브라우저, 상호작용), 이벤트, 통신, 동적화면구성
- 2012 ~ 2015
    - javascript -> chrome(2007 ~ 2008) -> v8엔진 공개 -> nodejs 등장 -> js가 주력 언어로 도약
    - SPA(Single Page Application) 개념 등장, 개발(플랫폼)
        - Angularjs(구글) -> `reactjs`(메타) -> vuejs(커뮤니티)
        - 1개 페이지내에서 랜더링만 처리하여 새로운 화면을 구성할 수 있다면 -> 더 빠른 서비스를 제공할 수 있지 않을까?
        - 대시보드(실시간처리), 지도기반서비스, 넷플릭스(OTT), 신규서비스(데이터분석 등등), ... 적용중

### 백엔드
- `웹서비스`를 제공하는 s/w
    - 프로젝트의 목적 -> 웹서비스
- 개발언어 중심분류
    - Java(oracle)
        - servlet -> jsp, ejs -> Spring -> `SpringBoot`
        - 전자정부프레임워크 : Spring, `SpringBoot`
        - 기업체(엔터프라이즈급, 중/대형) 역시 많이 사용
    - Python
        - Django(국내), Flask(북미), FastApi(가장 빠르다)
        - 데이터분석, ML/DL, GenAi 활용 서비스
    - C#(MS)
        - asp -> asp.net -> .net
        - 여행, 항공, 숙박 예약(중대형 서비스)
        - MS진영(윈도우서버 기반) 서비스
    - Javascript/Typescript(node 기반)
        - nodejs(백엔드)
        - expressjs(Framework)
        - react -> nextjs, ...
        - spa(백엔드)
            - angularjs
                - youtube, ... 
            - react
                - 국내 많이 사용중
            - vue
                - 최근 많이 확산중
    - php
        - php ~
        - 소형 기업, 개인프로젝트 등 많이 사용

### 데이터베이스
- 데이터를 저장하는 저장소, ...
- 종류
    - RDB : 관계형 데이터베이스
        - 기존의 시스템의 데이터 저장에 적합
        - `Mysql`, Mariadb, AWS Aurora, PostgreSQL
        - MS-sql
        - Oracle
        - ...
    - NoSQL
        - 로그, 비정형데이터등 빅데이터 저장에 적합
        - MongoDB
        - Redis
        - ...
        

## 프로토콜

# JavaScript
## 개발환경 구축
- nodejs 설치
    - https://nodejs.org/en
    - Node.js® is a free, open-source, cross-platform JavaScript runtime environment
    - js를 개발하고 구동시키는 환경을 제공
- IDE (통합개발환경)
    - vsCode 설치
    - https://code.visualstudio.com/
    - 경량, 대부분의 언어 지원(범용)
    - 강력한 extension 지원

## vsCode extension 설치
- code runner
    - js 코드를 작동시 내부에서 바로 실행가능하게 버튼 제공
- live server
    - html 코드를 가상 서버를 가동시켜 작동(확인)
- prettier-code formatter
    - 포매터
    - 팀내에서 동일한 스타일의 코드를 유지보수
- auto rename tag
    - html 태그명 변경시 자동으로 닫기태그 수정
- material icon theme
    - 꾸미기 (아이콘들이 흔히 보는 로고들로 사용)

## Javascript 언어
- 개요
- 언어 기본
- 타입
- 변수
- 연산자
- 형변환
- 흐름제어 : 조건문, 제어문, 반복문
- 함수
- 객체
- 클래스, 객체
- 최신문법

# Git/GitHub
- 로컬 PC 개발 -> git에서 관리하는 repo에 저장 : 관리
    - 인증
        - 기기에 무관하게 git 사용가능
    - 기기 기반
        - 개인 엑세스 기반 인증
        - 특정 기기의 ssh값을 활용하여 등록
        - ssh key를 생성하여 github에 등록