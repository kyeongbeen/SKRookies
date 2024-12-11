/*
    - useRef, useEffect
*/

import './App.css';
import {
    useState,       
    useEffect,      
    useMemo,        
    useCallback,    
    useRef,         
    useContext      
} from "react";

// 컴포넌트로 전달된 args를 바로 분해하여 변수로 처리
export default function App4 ({url, pid}) {
    
    // 전달된 변수는 useRef로 관리
    // const|let 변수명 = useRef(초기값);
    // 사용 : 변수명.current
    const marketUrl = useRef(url); // 값이 변경되어도 렌더링 X
    
    // productId라는 변수명으로 useRef를 생성
    const productId = useRef(pid);

    // use Effect -> 컴포넌트, 상태변수 등 모니터링 대상에 따라 호출
    // 기본형 -> '컴포넌트가 보일려고 한다'와 유사한 방식
    // 사용 :useEffect( Callback Function, [관찰대상]);
    useEffect(()=>{
        // 관찰대상이 없으므로 1회성으로 호출
        console.log('Component might be seeing! - componentDidMount()')
    }, []);
    return (
        <div className='App'>
            <div className="App-header">
                Market URL : {marketUrl.current}
                <br/>
                Product ID : {productId.current}
            </div>
        </div>
    )
}