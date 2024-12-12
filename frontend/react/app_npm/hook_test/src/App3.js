/*
    useState
*/
import './App.css';
import {
    useState,       // 상태변수 -> 화면갱신
    useEffect,      // 중요한 생애 주기 함수 부분 대체
    useMemo,        // 데이터
    useCallback,    // 함수
    useRef,         // 데이터, 값의 변화가 있어도 렌더링 X, 참조
    useContext      // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
 } from "react";

export default function App3(props) {

    // ---------------------------------------------------------------------------------------------------------------------------------- //
    // 함수형 컴포넌트 기본로직, 변수, 함수 등 구현하는 위치
    console.log("함수형 컴포넌트 구성")
    
    // A-1. 상태변수 초기화 -> useState Hook 사용
    //      const|let [변수명, set변수명] = useState(초기값);
    //      'set변수명'은 생략가능 -> 업데이트 안할때
    const [count, setCount] = useState(1);

    // A-3. 상태변수 업데이트 및 동적 JSX구성
    const countJsx = (
        <>
            {/*
                - 버튼을 클릭하면 상태변수가 ++ -> 화면갱신
                - 실습 : 클릭이벤트 등록, inline방식으로 이벤트 핸들러등록
            */}
            <button onClick={()=>{ setCount(count+1) }}>
                Count : {count}
            </button>
        </>
    );

    // ---------------------------------------------------------------------------------------------------------------------------------- //

    // ---------------------------------------------------------------------------------------------------------------------------------- //
    // B-1. useState를 이용한 조건부 렌더링
    //      통신을 통해 데이터를 받아서 세팅할때 -> 동적 화면 처리
    //      JSX의 세팅값 null이면 처리 X
    const [pageContents, setPageContents] = useState(null);

    // B-2. JSX 생성
    //      div 요소준비, onClick 이벤트 등록, 람다함수를 이벤트핸들러 등록
    //      pageContents = [{pageContents}]
    const pageContentsJSX = (
        <>
            <div onClick={()=>{ setPageContents(pageContents? null : 'Hello World!!!') }}>
                Page Contents = [ {pageContents} ]
                <br/>
                {pageContents ? "True" : "False"}
            </div>
        </>
    );

    // ---------------------------------------------------------------------------------------------------------------------------------- //

    // ---------------------------------------------------------------------------------------------------------------------------------- //
    // JSX반환
    return (
        <div className='App'>
            <div className="App-header">
                작성
                <br/>
                {/* A-2. useState (상태변수 사용) */}
                {countJsx}

                {/* B-2. useState (조건부 렌더링) */}
                {pageContentsJSX}
            </div>
        </div>
    )
}

