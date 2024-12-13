/*
    - Hook
    - useReducer
    - 기존 상태변수 업데이트
        - 1가지 형태로 값을 업데이트, 값을 증가 등등 단순한 형태로 진행
        - ex) null <-> jsx, 1->2->3, ... 단순한 형태로 반영
        - 개선
            - 다양한 방식으로 업데이트 
                - ex) +1, -1, +2, +10, 100으로 세팅, ... 등 다양한 요구사항 반영
            - useReducer를 이용하여 구현
                - 복잡, 다양한 업데이트 방식을 지원
    - 요구사항
        - 업데이트 액션
            - 'up' : +1
            - 'down' : -1
            - 'reset' : 100으로 세팅
            - 'addLang' : 'ts' 추가
*/

// 1. 모듈 가져오기
import {useReducer} from 'react';

// 2. 필요한 기능 만들기
function reducer(state, actions) {
    // state : useReducer에서 정의한 데이터
    // action : 특정 행위를 수행하라는 명령 (up, down, reset, addLang)
    const {action} = actions
    const {age, langs} = state

    if (action === 'up') {
        return {age:age+1, langs};    
    } else if (action === 'down') {
        return {age:age-1, langs}
    } else if (action === 'reset') {
        return {age:100, langs};    
    } else if (action === 'addLang') {
        return {age, langs:[...langs, 'TS']};
    }
}


// 3. 커스텀 컴포넌트 생성
export default function ReducerComponent(params) {
    const [state, dispatch] = useReducer(reducer, {
        age:25,
        langs:['JS', 'Ruby', 'Java', 'C++']
    })
    return (
        <div style={{margin:'1em'}}>
            <p>useReducer 테스트</p>
            <p>{state.age}</p>
            <div>{state.langs.map((language, index)=>{return <p key={index}>{language}</p>})}</div>
            <p>다양한 상태변수 업데이트</p>
            <button onClick={()=>{dispatch({action:"up"})}}>+ 1</button>
            <button onClick={()=>{dispatch({action:"down"})}}>- 1</button>
            <button onClick={()=>{dispatch({action:"reset"})}}>리셋</button>
            <button onClick={()=>{dispatch({action:"addLang"})}}>언어 추가</button>
        </div>
    );
}















