# 프런트엔드
- html + css +javascript
    - 사용자가 브라우저를 통해 만나는 서버의 응답 결과
    - 기본 구성
        - html, css, javascript
            - html5 : 구조(뼈대), 콘텐츠포함
            - css3  : 레이아웃, 디자인(템플릿 활용), 반응형, 애니메이션
                - 부트스트랩, 머터리얼, ...
            - javascript : 인터렉션(사용자 <-> 브라우저, 상호작용), 이벤트, 통신, 동적화면구성
                - 기존 수업 -> nodejs 기반 문법 정리
                    - vsCode에서 실행
                - html, css와 연계 12/6일 부터 진행
                    - 브라우저에서 실행
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
            - 기본
                - DOCTYPE : html 문서 작성 문법을 정의한 DTD(Document Type Definition) 참조선언
                    - 생략 가능
                - html
                    - 문서의 시작과 끝
                - head, body
                    - 메타정보, 화면에 보이는 정보기술
            - 시작태그 : <요소명|태그명>
            - 종료태그 : </요소명|태그명>
            - 주요 태그
                - 구조
                    - div : 영역 -> 레이아웃
                    - table, theader, tbody, tr, td, th : 테이블표시 -> 게시판
                - 입력
                    - 사용자로부터 데이터를 입력
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
                - 이벤트(트리거)
                    - button, ...
                - 외부자원 참조(html 내부로 적용)
                    - script, style, ...
                        - js/css external 방식으로 html에 참조시킬때 사용
                        - js/css internal 방식으로 직접 구현할 때 사용
                - 2D/3D 렌더링
                    - canvas : 차트, 게임(빈도가 낮음, 별도의 엔진을 주로 사용)
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
    - 클래스
    - 요소명
    - 조합(위의 표현)
    - 열거
    - 서열(부모, 자식, 형제, 후손)
    - 기타
        - 의사결정
        - 속성셀렉터
- jQuery 사용
    - "5_jQuery_css_selector.html" 참고
    - html 요소를 특정하여 css 스타일 적용
        1. 아이디 지정 -> 특정, 문서내에서 고유한 값
            - html상에서 고유한 값을 가진다
            - html : \<요소명 id="아이디값">
            - css selector : #아이디값
        2. 클래스
            - 여러 디자인을 묶어서 한 가지 형태의 스타일을 제공
            - 동일 엘리먼트 혹은 다른 엘리먼트에게도 적용가능
            - 스타일 : style="키:값; 키:값;", class="여러스타일이 묶여있는 하나의 디자인"
            - 문법 : .클래스값
        3. 요소명
            - 문법 : 요소명
        4. 조합
            - 아이디, 클래스, 요소명, ... 등 모든 표현법을 합쳐서 묘사
            - h2#subject : 생략, 아이디는 굳이 조합 X
            - h2.myStyle : 문서상에 존재하는 모든 h2 중 클래스가 myStyle인 요소
        5. 열거
            - 공통점이 없는 요소들을 한번에 선택할때 사용
            - 문법 : css selector, scc selector, ... <- 나열
        6. 서열
            - 부모와 자식간의 관계, 시초(조상)와 후손간의 관계
            - xxmL -> 구조 표현을 트리형식, 서열관계 표현
            - id나 클래스값으로 특정이 안되면 -> 위로 올라가면서 특정(서열관계 고려)
            - 만약 규칙이 생각 안나면 -> 요소 > 우클릭 > copy > copy selector
            - table, ul/ol, ... 특징적으로 보임
            - 문법
                - 부모 <-> 자식 : 부모 > 자식
                - 루트 <-> 요소 : 루트 후손
        7. 의사결정 셀렉터
            - table 요소
            - 반복적인 요소가 등장 -> 부모:자식(반복)형태로 특정할 수 있음
            - 자식들의 서열관계를 특정(첫째, 막내, n번째, 특수번째, 이상/이하)
            - first, last
            - even, odd
            - eq, lt, gt : index
            - nth-child(순번) 특정번째 요소, 브라우저별로 표현이 다를 수 있음(주의)
            - 문법 : selector(반복되는직계요소):특정값
        8. 속성 셀렉터
            - input 요소
            - 속성을 이용하여 요소를 특정
            - 문법 : css selector(선택) + [속성명=속성값]
            
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
        - "4_jQuery.html" 참고
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
        - "6_chart_jQuery.html" 참고
    - 유료

# 기본 html, css 컨셉
- html 기본구성 이해, 필요한 html 요소들을 사용할때 체크
- css
    - UI 구성등 -> 백엔드에서 체크, 무료 템플릿 활용(bootstrap, ...)
    - css selector를 확인
        - 기본 스타일 적용
    - 반응형, 애니메이션
        - 생략, 무료 템플릿 제품에서 지원되면 그대로 활용

# jQuery
- js framework 중 하나
- js의 표현을 간결하게 대체할 수 있음
- 2008 ~ 현재까지 계속 사용, 2015년 이전까지는 엄청난 점유율을 보유
- 활용
    - SSR중심으로 웹서비스 구성시 활용빈도가 높다
- 실습
    - "4_jQuery.html" 참고
        - "2_html_js_1.html" -> jQuery적용 -> 간결하게 구성 
- 기본 문법
    - html 요소를 정의하는 변수표현 방법
        - $('css selector|키워드')
    - 기능
        - js의 모든 기능을 간결하게 함수로 제공 -> 생산성의 극대화
        - 요소조작(html 동적구성)
        - 통신(네트워크 -> ajax중심 통신)
        - css 스타일 쉽게 적용(동적)
        - 이벤트 처리
        - ... 
