/**
 * 컴포넌트의 생애주기 확인
 *  - 컴포넌트의 내부 구동 매커니즘 및 워크플로우 이해
 *  - 객체형 컴포넌트 구성
 *  - 훅이라는 주제부터 함수형 컴포넌트로 전환
 */
// 1. 모듈가져오기
import React, { Component } from "react"; // react 모듈로부터 가져온다
// Component 는 개별모듈
// React는 대표모듈 ( export default XX; )

// 2. 클레스형 컴포넌트 구성
class LifeCycle extends Component{
    constructor( props ) {
        super( props );
        // 상태변수
        this.state = {
            r:Math.random() // 난수값을 상태변수로 세팅
        }
    }
    render () {
        return (
            <>
                라이프사이클!! { this.state.r }
                <button onClick={ ()=>{
                    this.setState( { r:Math.random() } );
                } }>상태 변경</button>
            </>
        );
    }
    // 생애 주기 함수 추가 -> 참고용!!
    // 1. 컴포넌트가 마운트 되기전 => 컴포넌트가 화면에 보이기 직전 타이밍
    componentDidMount () {
        // 재정의
        // 이런 타이밍에 뭔가 작업할게 있다면, 사용
        console.log('컴포넌트가 화면에 보일려고 한다');
    }
}

// 3. 대표 모듈화 구성
export default LifeCycle;