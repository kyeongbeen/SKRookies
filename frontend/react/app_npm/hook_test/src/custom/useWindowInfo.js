/*
    - 커스텀 훅, 사용자 정의 훅, 필요에 의해 생성
        - useXXXX 로 이름설정
        - 요구사항
            - 기존의 훅을 활용하여 새로운 기능을 가진 훅을 생성
            - useState, useEffect 활용
*/

import {useState, useEffect} from 'react'

// 커스텀 훅 생성

const useWindowInfo = ()=>{
    // 목표 : 현재 브라우저 화면(윈도우)의 정보를 획득(가로길이, 세로길이)하여 제공
    //        컴포넌트의 크기가 변경되면같이 윈도우 정보도 변경되어 제공
    // 1. 상태변수 초기화, 현재 브라우저정보 세팅
    const [windowSize, setWindowSize] = useState({
        // window는 브라우저상 js를 통해 접근 가능한 내장객체
        width: window.innerWidth,
        height:window.innerHeight
    })
    
    // 2. useEffect 활용
    useEffect(()=>{
        const eventHandler = () => {
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }


        // 윈도우의 크기가 변경되면 resize호출 -> 람다 호출 -> 정보갱신
        window.addEventListener('resize', eventHandler)
        
        // 훅을 더 이상 사용하지 않을때
        return ()=>{
            // 반드시 브라우저에 존재하는 윈도우 객체 이벤트 삭제
            window.removeEventListener('resize', eventHandler)
        }

    }, [])

    // 커스텀 후 상태변수 반환 <-> 컴포넌트는 JSX반환하는 렌더링함수 구성하면서 마무리
    return windowSize;
}

export default useWindowInfo




















