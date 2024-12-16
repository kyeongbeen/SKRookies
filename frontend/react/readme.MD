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

# Basic - CDN
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
- 리액트 구동 매커니즘 이해
- 커스텀 컴포넌트 구성
    - 함수형, 객체형
    - props, state, 이벤트 처리
    - 화면갱신 매커니즘 (상태변수 업데이트 -> 화면갱신)

# App - npm
- React로 FE App(Web)을 구성하는 방식
- nodeJS기반
- npm : nodeJS의 패키지 관리자
    - yarn도 사용
    - 타 언어/OS
        - Mac : brew
        - Linux : apt
        - Python : pip, conda
    - 용도
        - 패키지 설치
- React App을 기본적으로 생성하는 패키지
    - create-react-app
        - https://www.npmjs.com/package/create-react-app
        - 설치
            ```
            npm i create-react-app -g
            ```
        - 사용이유
            - 기본 프로젝트 뼈대가 간결함
            - 차후에 더 많은 기능이 추가된 보일러플레이트 사용
                - 기본 프로젝트 구조, 명령어(빌드포함), 포매터, ...
- 프로젝트 생성
    - 적절한 위치로 이동
        - .\frontend\react\app_npm
    - npx create-react-app demo
- 프로젝트 구동
    - 해당 파일로 이동
    - 실행
        - npm start
    - React 버전이 19로 업그레이드 되면서 설정에 에러가 발생
        - package.json
            ```json
            ...
            "dependencies": {
                "cra-template": "1.2.0",
                "react": "^19.0.0",
                "react-dom": "^19.0.0",
                "react-scripts": "5.0.1",
                "web-vitals": "^4.2.4"
            },
            ...
            ```
        - 패키지 수동설지 (현 프로젝트 dir 내부)
            - npm install

- 프로젝트 구조
    ```
    ├─node_modules          : 프로젝트에 필요한 라이브러리
    │                       : npm install 명령어 실행후 설치됨 (여기서는 자동설치), git 업로드 x
    │
    ├─.gitignore            : git에 올라가지 않을 파일들을 기재
    │                       : node_modules는 반드시 추가
    │
    │
    ├─package.json          : 프로젝트에 대한 메타데이터 기술
    │                       : 명령어, 메타정보, 라이브러리 등 기술
    │                       : 프로젝트 체크시 가장 먼저 검토
    │
    ├─package-lock.json     : npm install하면 package.json에 포함된 라이브러리들을 포함시켜주는 파일
    │
    │
    ├─public
    │      favicon.ico
    │      index.html       : SPA 관점에서 1개의 html이 됨
    │      logo192.png
    │      logo512.png
    │      manifest.json
    │      robots.txt
    │
    └─src
            App.css         : 커스텀 컴포넌트의 CSS
            App.js          : 커스텀 컴포넌트 (관습적, 첫글자 대문자), App.js 또는 App.jsx로 표기하기도 함
            App.test.js     : 단위 테스트용
            index.css       : 메인 CSS
            index.js        : React 메인코드, 기본구성
            logo.svg
            reportWebVitals.js
            setupTests.js
    ```

# package.json
- nodeJS 계열 프로젝트 구조 중 가장 먼저 체크
- dependencies
    - 해당 프로젝트에서 사용하는 라이브러리
    - create-react-app은 자동으로 npm install됨
    - 라이브러리 설치
        - 목표 : dependencies 기술, 설치
        - 위 목표를 명렁어 1번에 수행 가능
            - 차후 라이브러리 추가시 사용
        - 샌드박스 모델 -> 외부사용 불가
- scripts : 명령어
    - 개발 예시
        - 기술내용 -> "start": "react-scripts start"
        - 실제내용 -> npm [run] start
    - 빌드예시
        - "build": "react-scripts build"
        - npm run build
        - 프로젝트 내부에 build폴더 생성 -> 배포파일
            - 정적데이터로 구성된 파일
            - *.html, *.css , *.js, 리소스, 폴더
            - 백엔드에 배포, 단독서버구동시 배포용

# ES Module(ESM) 방식
- 모듈(*.js) 가져오기
    - 목적
        - 다른 개발자가 만든 모듈을 내가 작성하는 코드에 가져와서 사용
    - 문법
        - ESM, CJS 존재
- node
    - 모듈 + 디렉토리(같은 유형의 모듈을 묶어둔 그룹, 패키지라고 부르기도 하지만 뉘앙스는 다름)
- ESM 문법 (가져오기)
    - import App from '모듈의이름|상대경로+커스텀모듈';
        - 모듈의이름 : 써드 파트 모듈, npmjs에서 검색되는 모듈
            - from 'react'; <= 써드파트 모듈중에 react에서 ..
        - 상대경로+커스텀모듈 : 직접 만든 모듈
            - from './App' <= 현재 작성중인 코드와 같은 경로에 있는 App.js를 찾아서(출처)
    - import App
        - 가져온 모듈을 특정 이름으로 대체한것임(임의의 이름)
        - 예시
            - import App from './App';
            - import App2 from './App';
            - import App3 from './App';
        - 통상
            - 파일명와 동일하게 구성
            - 대표 모듈명
    - import { A, B, c  } from './Xxx';
        - 개별 모듈 가져오기
        - 출처에서 모듈화된 개별 모듈을 가져오는 표현
- ESM 문법 (모듈화)
    - 대표 모듈
        - export default App;
            - 코드 가장 마지막줄에 표현(통상)
            - export default 컴포넌트명;
    - 개별 모듈
- 실습
    - 현재위치 ~/react
    - mkdir esm
    - node 프로젝트 생성
        - npm init
    - 코드작성
        - index.js
        - mod.js
    - 구조
        ```
        ├─index.js
        │
        ├─mod.js
        │
        └─package.json
        ```

# 컴포넌트의 라이프사이클
- 목적
    - 컴포넌트의 생애주기 이해
    - 객체형 컴포넌트 사용 (여기서만 테스트 가능함)
    - 함수형 컴포넌트는 사용 불가
        - 16버전 이후 추가된 `훅`에서 대체 처리 가능
- 구조
    - App.js에 LifeCycle 컴포넌트를 모듈 가져오기를 하여 추가
- 구성
    - ~/src/LifeCycle.js 생성

# 커스텀 컴포넌트 구현
- npm 기반
- "MyInput.js", "MyInput.js","MyCheckBox.js" 참고
    - app_npm/demo/src에 생성
    - input 태그를 사용해서 
    - 객채형 컴포넌트로 구현
- 템플릿
    ```js
    import React, {Component} from "react";

    class MyInput extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <>
                </>
            );
        }
    }

    export default MyInput
    ```

# Hook(훅)
- 리액트 16에서 추가된 기능
- 함수형 컴포넌트에 훅이 추가 -> 리액트 개발 방식 전환
- hook
    - 함수형 컴포넌트에 객체형 컴포넌트의 기능을 그럴싸하게 대체처리
    - 생애주기함수(함수형 X) 훅을 통해 대체처리
- 종류
    - 제공되는 기본 훅
    - 커스텀 훅 -> 대부분 라이브러리에서 응용
- 프로젝트 생성
    - hook_test

# hook_test
- 훅 연습
- 함수형 컴포넌트 연습 -> 세션1 프로젝트의 FE 최종개발형태
- 기본형태
    ```js
    import './App.css';
    import {
        useState,       
        useEffect,      
        useMemo,        
        useCallback,    
        useRef,         
        useContext      
    } from "react";
    
    export default function App(props) {
        return (
            <div className='App'>
                <div className="App-header">
                    작성
                </div>
            </div>
        )
    }
    ```

# 기타
- 네트워크 처리 -> 통신, ajax
- 라우팅 -> 페이지 이동, 페이지간 데이터 전달
- 페이지간 데이터 공유, 관리 -> 1세대 : redux ~ `3세대` : ??
    - 전역적 데이터 관리
    - 상위 텀포넌트 -> 하위텀포넌트 공유 useConetext
    - 관계(없는) 컴포넌트가 동일한 데이터를 바라보고, 컨트롤, 업데이트 등 처리
    - (공유) -> redux(Gen 1) -> mobx(Gen 2) -> zustand(Gen 3) : 서드파티 라이브러리
        - zustand
            - state-management solution ((전역)상태관리 솔루션)
            - useReducer 사용하는 방식과 유사함
        - 실습
            - ~/src/state
        - 설치
            - npm install zustand
    - 기본개념 유사 -> 사용편의성 차이
- 템플릿 적용 -> UI, 디자인
    - 대시보드 + 게시판, 계산기 등 서브페이지로 세팅
    - material 디자인 (AOS에 적용된 디자인)
        - mui.com
- 커스텀 훅
    - 많은 개발사에서 자체 개발로 사용중
- useReducer
- 다양한 CSS 적용
    - CSS 직접 적용
    - CSS Modules 방식
    - 서드파티 라이브러리
        - css style-components 라이브러리 적용
        - emotion 라이브러리 적용(mui 컴포넌트가 emotion 사용)
        - tailwind 라이브러리 적용
            - 'px-2 py-1 bg-red hover:bg-dark-red'
            - 스타일을 나열하듯이 작성하여서 표현, 용어는 재구성되어 있음
                - bg-red -> backgroundColor:red
        - *.scss|sass (Sassy CSS)
- 빌드 -> 최종형태 -> 단독서비스 <-> 백엔드 또는 백엔드 포함

# 라우팅
- 리액트의 페이징처리
    - URL 요청시 특정페이지가 처리되도록 구성
    - react-router-dom -> react-router
- 프로젝트 생성
    - npx create-vite@latest
    - 디렉토리 : ~/app-npm
        ```
        √ Project name: ... route_app -> 프로젝트명
        √ Select a framework: » React -> 타겟 플랫폼
        √ Select a variant: » JavaScript + SWC -> 개발언어 + 트랜스컴파일러(SWC <-> Babel)
        ```
    - cd route-app
    - npm i react-router
    - npm install
    - npm run dev
    - vite
        - FE 빌드 툴
        - SWC와 연게하여 사용
        - 개발 서버 가동, 수정시 빠른 재가동
        - TypeScript, Next.js -> vite 사용
- 빌드 -> 최종서비스 형태
    - npm run build
- 최종 결과물
    - dist
        index.html, 리소스, *.js, *.css

# ADV
- TypeScript 업그레이드
- Next.js 이식

# 기본형
- 함수형 컴포넌트사용
- 프로젝트 템플릿
    - npx create-vite@latest 에서 진행
- 절차
    - 요구사항에 맞게 페이지 구성
    - 개별페이지에서 요구사항 구현
        - 훅 중심사용
            - useState, useEffect, useRef를 기본사용
        - 통신 axios 사용
- 기타
    - 페이지가 계속 이어지면서(예약, 뱅킹, 회원가입서비스 등) 데이터를 화면별로 들고 있어야 한다면 -> zustand


