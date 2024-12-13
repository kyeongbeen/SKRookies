/**
 * 카운트 증가, 감소를 처리하는 2개의 버튼 컴포넌트
 *  - 증가 감소하는 이벤트 발생
 */
import useStore from "./store"

export default function TwoButton() {
    const {increment, decrement} = useStore()
    return(
        <>
            <button onClick={increment}>1 증가</button>
            <button onClick={decrement}>1 감소</button>
        </>
    )
}




