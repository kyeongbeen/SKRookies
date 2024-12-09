# 리액트 개요
- 개발언어
    - JavaScript/TypeScript
- 제작사
    - 메타(구 페이스북)
- 현재 포지션
    - 전자정부프레임워크
        - http://github.com/eGovFramework/egovframe-template-simple-react
    - 기타사용 빈도
        - https://trends.stackoverflow.co/?tags=angular,vue.js,reactjs,jquery
            - 현재 1위 react
        - https://tsh.io/state-of-frontend/
            - 트렌드 및 같이 언급되는 기술
            - react/next.js
                - next.js는 react기반으로 백엔드 구성가능
                - typeScript 형태로 주로 개발됨
- SPA(Single Page Application)
    - html 1개 존재
    - 사용자 인터렉션에 맞춰 화면갱신(페이지 변환(라우팅), 동적구성)
    - 유저입장의 10개의 화면 -> 개발자관점은 1개의 html
    - 프레임워크
        - react > angular, vue
        - vue는 앞선 기술을 기반으로 발전
- 특징
    - react 사용이유
        - 개발자(서적, 참고자료 등)가 가장 많다
        - 강력한 스폰서(메타)
        - 웹, 앱(React Native), PC기반(Electron 활용)
    - 기술적
        - 페이지 전환 : 라우팅
        - 페이지간 데이터 공유
            - 명시적 단방향 관리(명확함, 복잡함) <-> 양방향 관리(vue, 자유도 높음)
            - JSX(JavaScript Xml) 지원
                - html + js
                - 화면 구성, 니용, 인터렉션형태
            - 강력한 서드파티 라이브러리, 이식성 강함(공통)
                - npmjs.com
            - 훅
                - 객체지향 -> 함수지향
            - ...

- history
    - 2010 ~ 2015
        - 개발시도 -> fb, ig에 적용
        - 애플의 앱규제 정책이 시발점 -> 자체적인 플랫폼 필요
        - 실패
        - 인스타그램 인수후 적용시
            - 웹으로 개발목표 -> react, JSX 등의 개념등장
    - 2016이후
        - 인스타그램 적용
        - 넷플릭스 적용 -> FE 시장 확산
    - 국내
        - TOSS, 카카오, 네이버, 네이버지도, ...
        - 지도플랫폼 대부분 적용

# Next.js
- react기반 개발
- 기존 FE는 CSR 중심
- next.js를 도입 -> SSR을 사용할 수 있게 지원
    - 유사 제품도 많음
- react/next.js
    - Spring Boot와 next.js는 충돌점이 많음
    - 차후 프로젝트 사용시 next 사용한다면 포지션 정리 필요
- 차후 문제

# 개발환경 구축
- 공식홈페이지
    - react.dev
    - The library for web and native user interfaces
    - FE - React or ReactJS
    - App(ios, android) - React Native
- 개발환경
    - 온라인 플랫폼
        - https://codepen.io/pen
        - https://codesandbox.io/p/sandbox/new?file=%2Fpublic%2Findex.html%3A15%2C56
        - https://stackblitz.com/edit/react-jsztca?file=src%2FApp.js
    - 로컬 환경
        - html내에서 묘사 -> 환경/방식 익숙하게 하는 장치 
            - CDN방식 설치 -> 실제 개발 X
                ```js
                <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                ```
        - nodeJS기반 react 웹 구성 -> 최종형태
            - npm방식 설치

# basic
- "b1.html" 참고
- html 기반에서 cdn 방식으로 react 설치
- 기본적인 react 구동 매커니즘이해
- React Developer Tools 설치
    - Chrome Extension
    - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1
- React 코드 작성
    1. 리액트 플랫폼으로 만들어질 화면준비
        - JSX(or TSX) : xml 엄격한 규칙 + JavaScript
        - 기본규칙
            - 반드시 루트 엘리먼트를 가진다(정점은 1개)
            - 필요시 전체를 ()로 감쌀수 있다
            - 요소를 열었으면 반드시 받는다
            - 기존의 html 요소를 사용한다면 통상 소문자로 표기(관례)
            - 사용자 정의 요소(component)는 첫글자를 대문자로 표기(관례)
    2. 위에서 만든 JSX를 동적으로 렌더링하기 위해 타겟을 특정(css selector)함
    3. 최상위 엘리먼트를 재료로 리액트에서 동적 구성을 하기위해 'React DOM'을 구성한다
        - DOM : Document Object Model
            - 브라우저가 html을 그릴때, 메모리에 html을 파싱
            - 메모리에 로드된 객체 -> DOM
            - DOM을 통해 요소를 접근(css selector), 화면조작(동적구성) ...
            - 통상적으로 DOM을 조작해서 화면갱신 -> 속도가 느리다
        - 기존 방식을 빠르게 갱신할 수 있게 처리
            리액트는 VDOM(Virtual DOM)을 사용, 스왑을통해 화면 갱신 처리
        - 변경된 부분만 갱신(렌더링)
    4. 렌더링
- 값을 JSX에 삽일할때 표현
    - 형식 : { 값 }
    - 값 : 변수, 연산 표현식의 결과물
    - ex) \<p a={값}>{값}\</p>>