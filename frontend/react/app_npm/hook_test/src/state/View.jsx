/**
 * 카운터 값을 표현하는 컴포넌트1
 *  - 전역 상태 변수값 사용
 */

import useStore from "./store"

export default function View() {
    const {count} = useStore()
    return (
        <>
            {count}
        </>
    )
}