/**
 * 상태 관리 매니저를 활용한 컴포넌트 구현
 *  - 종합 화면(컴포넌트 구성)
 *  - 해당 화면을 브라우저에 로드 및 테스트
 */
import TwoButton from "./TwoButton"
import View from "./View"
import View2 from "./View2"

export default function Counter() {
    
    return (
        <div>
            <p>카운트 : 전역상태관리(zustand)</p>
            <p>저장소, 상태변수사용, 액션작동하는 js/jsx가 모두 다르다</p>
            <View/>
            <br/>
            <TwoButton/>
            <br/>
            <View2/>
        </div>
    )
}





























