/**
 * 컴포넌트의 생애주기 확인
 *  - 컴포넌트의 내부 구동 매커니즘 및 워크플로우 이해
 *  - 객체형 컴포넌트 구성
 *  - 훅이라는 주제부터 함수형 컴포넌트로 전환
 *      - 훅을 통해서 생애주기와 비슷하게 처리할 수 있는 기능제공
 *      - react 16부터 지원 -> 함수형 컴포넌트로 개발 패러다임 전환
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
            r:Math.random()
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

    // 생애 주기 함수 추가
    // 1. 컴포넌트가 마운트 되기전 -> 컴포넌트가 화면에 보이기 직전 타이밍
    componentDidMount () {
        // 재정의
        // 이런 타이밍에 뭔가 작업할게 있다면, 사용
        console.log('컴포넌트가 화면에 보일려고 한다');
    }

    // 2. 컴포넌트가 마운트 된 후 화면 갱신시 발생되면 호출
    // 화면갱신 감지, 이 타이밍에 작업할 것 필요하면 사용, 아니면 미사용
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate() Call', nextProps, nextState, nextContext);
        return true;
    }

    // 3. 컴포넌트 업데이트 완료
    componentDidUpdate() {
        console.log('componentDidUpdate() Call');
    }
    
    // 화면갱신 workflow
    // 상태변수 수정 -> shouldComponentUpdate() -> render -> componentDidUpdate()
    // 4. 컴포넌트 마운트 해제 -> 컴포넌트 사라지기 직전
    componentWillUnmount() {
        // 이벤트 해제, 리소스 해제 등
        // 필요시 구현
        // 라우터를 통해 화면전환이 되면 확인 가능
        console.log('componentWillUnmount()');
    }
}

// 3. 대표 모듈화 구성
export default LifeCycle;