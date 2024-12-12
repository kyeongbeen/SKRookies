/*
    - useContext, createContext
        - React는 Component의 집합
        - Component는 트리구조로, 부모 - 자식 - 후손 형태로 배치
        - 상위 Component의 정보를 하위 COmponent에게 전달
            - Component간 데이터 전달방법
                - 1세대 : redux, ... 3세대 -> 서드파티 방식
            - useContext()를 이용한 방식
                - 상위 컴포넌트에서 전달한 데이터가 변경 -> 하위 컴포넌트 역시 변경
            - props를 활용한 구성성
 */

// 1. 모듈 가져오기
//    스타일 가져오기
import './App.css';
//    훅 가져오기
import {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
    createContext
 } from "react";
import axios from 'axios';

// 1. 전역공간에 컨텍스트 생성
//    모든 타입의 데이터 저장가능
const TextContext = createContext("오늘은 목요일 내일만 버티면 토요일")



function End() {
    const data = useContext(TextContext);
    return (
        <>
            <p>Last Component</p>
            {data}
        </>
    );
}

function Mid() {
    return (
        <>
            <End />
        </>
    );
}

function App8(props) {
    const [sendingData, setSendingData] = useState("더미데이터");

    return (
        <div className='App'>
            <div className="App-header">
                <h2>useContext Test</h2>
                {/* 
                    2. 전달할 데이터를 받을 컴포넌트를 감싸서 표현
                       전역으로 만든 컨텍스트 활용
                       상위 컴포넌트의 데이터도 전달
                       기본값은 공급할때 변경가능
                       상위 컴포넌트에서 상태변수를 변경하면 -> 하위도 영향을 받을까?
                */}
                <TextContext.Provider value={sendingData}>
                    <Mid />
                </TextContext.Provider>
                <input onChange={event=>setSendingData(event.target.value)}/>
            </div>
        </div>
    )
}

export default App8;

