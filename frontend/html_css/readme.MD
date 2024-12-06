# 프런트엔드
- html + css +javascript
    - 사용자가 브라우저를 통해 만나는 서버의 응답 결과
    - 기본 구성
        - html, css, javascript
            - html5 : 구조(뼈대), 콘텐츠포함
            - css3  : 레이아웃, 디자인, 반응형, 애니메이션
            - javascript : 인터렉션(사용자 <-> 브라우저, 상호작용), 이벤트, 통신, 동적화면구성
    - 방식
        - 브라우저를 통해서 유저가 확인하는 화면의 렌더링방식
        - 종류
            - SSR (Server Side Rendering)
                - 유저가 보는 화면을 서버에서 모두 완성하여 전송
                - 전통적인 방식
                - 개발플랫폼
                    - SpringBoot, node.js, .net
            - CSR (Client Side Rendering)
                - 유저가 보는 화면을 브라우저에서 완성
                    - 렌더링 부하가 클라이언트에게 가중된다
                    - 개발플랫폼
                        - react.js/vue.js, ... -> SPA
# HTML
- Hyper Text Markup Language
- 구조, 뼈대, `콘텐츠 == 데이터`를 가지고 있다
    - 웹
        - 구조 + 데이터세팅 -> 화면처리에 기본정보
    - 데이터
        - 구조 + 데이터 -> 반정형 데이터
        - 웹스크래핑/웹크롤링 -> 데이터 수집 대상
- 태그 각각의 용도가 있음
- html5
    - 1995년 최초 고안
        - html4가 2015이전까지 주력 사용 -> 지금은 html5
    - 2008 드래프트 이후 2009 ~ 10 적용
    - 스마트폰의 보급 및 확산 시기
- 구조
    - "1_basic.html" 참고
    - \<!-- 주석은 이렇게 -->
    - <\!DOCTYPE html>
        - 브라우저에게 html5을 사용한다는 것을 알리는 표식 
        - 브라우저가 html문서를 파싱받아 메모리로드 후 화면 렌더링 시 참고
        - 생략 가능함(표기하지 않아도 상관 x)
        - <\!DOCTYPE RootElement> -> DTD라는 형식으로 문법을 규정
            - html5 문서는 html로 시작하고, html로 끝난다
    - 엘리먼트(element)
        - 구성 = 시작태그(start tag) + 콘텐츠(contents) + 종료태그(end tag)
        - 시작태그 = 태그명 + n개의 속성[= 속성명]
    - 기본 규칙
        - 오버랩 금지 -> 렌더링 에러
            ``` html
            <div>
                <a>
            <\div>
            <\a>
            ```
    - 내부
        - html태그 하위에 head, body로 구성된다.
            - head
                - html 문서의 메타정보(데이터를 설명하는 데이터) 담당
                - 문서제목, 뷰포트(화면크기), 인코딩, 검색시 체크되는 키워드, 아이콘(파비콘), ...
                - css, js를 포함가능
            - body
                - 화면에 보이는 실제적인 내용 기술
                - css, js를 포함가능 (js를 주로 <\/body>위에 배치)
                - 기본 블럭(영역) 구성
                    - div
                        컨텐츠가 없으면 존재 X
        - 태그
            - 시작태그 : <요소명|태그명>
            - 종료태그 : </요소명|태그명>
            - 주요 태그
                - 구조
                    - div : 영역 -> 레이아웃
                    - table, theader, tbody, tr, td, th : 테이블표시 -> 게시판
                - 입력
                    - 사용자로부터 데이터를 입력받아 서버로 전송
                    - form, input(단독태그), select, textarea, radio, ...
                        - input
                            - 단독태그
                            - \<input type="text">
                            - type
                                - 입력받은 데이터를 가장 효과적으로 입력할 수 있도록 지정
                                - text, password, number, date, time, email, ...

                - 전송
                    - form
                    - 서버로 전송 역할
                - 정보표시
                    - p(단락, 줄바꿈 O), span(조각, 줄바꿈 X), ... : 텍스트
                    - img, video, audio, ... : 멀티미디어
                - 이동
                    - a : 링크
                - 이벤트
                    - button : 버튼
                - 외부자원 참조(html 내부로 적용)
                    - script, style, ...
                - 2D/3D 렌더링
                    - canvas : 차트, 게임
# 개별기능
- html, js 연동
    - "2_html_js.html" 참고
    - "2_html_js_2.html" 참고
    - html에 js, css를 포함시키는 방법(SSR 기준)
        - external
            - *.js, *.html로 파일이 존재
            - \<script src='xxx.js">
        - internal
            - *.html만 존재
            - \<script> ... \</script>
        - inline
            - html 요소에 직접 적용
            - \<button onclick="xxx();">로그인\</button>
    - html 컨텐츠에 js를 연결하여 이벤트, 통신 등 인터렉션 처리
        1. 뼈대 준비 -> html
        2. js세팅 -> 인터렉션 처리
    - 로그인 과정
        - 로그인 버튼 클릭 -> 이벤트 발생 -> 인터렉션 발생 -> JS로 처리
            1. 로그인 버튼 특정(css selector 기법으로 버튼을 찾는다)
            2. 로그인 버튼에 이벤트 등록
            3. 이벤트 발생, 입력값 추출
            4. 서버로 입력값 전송

# CSS Selector
- css에서 요소를 특정하(찾)는 기법(방법, 표현)
- css selector 이해, 개발자도구 자동으로 찾기(툴 사용)
- 규칙 (우선 검토하는 순위)
    - 아이디
        - html상에서 고유한 값을 가진다
        - html : \<요소명 id="아이디값">
        - css selector : #아이디값
    - 클래스
    - 요소명
    - 조합(위의 표현)
    - 열거
    - 서열(부모, 자식, 형제, 후손)
    - 기타
        - 의사결정
        - 속성셀렉터

# HTML 내에서 통신
- 프로토콜 : 웹페이지 기준 http, https
- html 요청
    - form 태그 
        - 폼 전송 이동
        - 데이터 전송방법(method)
            - GET, POST, PUT, DELETE
        - "2_html_js_2.html" 참고
    - a 태그
        - 링크로 이동
        - 데이터 전송방법(method)
            - GET
    - 주요 메소드
        - GET
            - 소량의 데이터 전송
            - 보안이 중요하지 않을때
            - 프로토콜 헤더에 데이터를 전달
            - 형식 : url + ? + parameter(key=value&key=value...)
            - ex) http://localhost:8080/api/news?id=1234567890
        - POST
            - 대량의 데이터
            - 보안이 중요(데이터는 숨겨져야 함)
            - 파일 업로드
            - 프로토콜의 바디에 데이터를 전달
            - 바디로 데이터를 전송 -> 대량의 데이터를 쪼개서 전송가능
            - 가변처리가 가능
- JS로 전송한다
    - AJAX
        - 모든 메소드 방식 지원
        - xml 전송을 목표, 비동기처리, 백그라운드 통신 설계
            - 데이터포맷 xml -> json
        - OpenAPI 회사들은 xml, json 모두 지원 -> restful 방식으로 벡엔드 구성
        - txt 포맷이면 모두 지원가능, 파일 ,...
            - 사람, 컴퓨터, 프로그램이 모두 이해할 수 있는 방식
- http 요청시 응답코드
    - 100 ~ : 
    - 200 ~ : 200(정상응답)
    - 300 ~ : 
    - 400 ~ : 404(해당 페이지 없음), 405(해당 메소드 지원 X)
    - 500 ~ : 500(서버측에러)

# 차트 그리기
- 대시보드용, 수집된 데이터 -> 시각화 -> 분석, 관제
- 차트용 라이브러리
    - 무료
        - chartjs.org
        - "3_chart.html" 참고
    - 유료








