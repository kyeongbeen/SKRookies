/**
 * 전역 상태관리를 위한 저장소, js
 *  - zustand 모듈 사용
 *  - 사용법
 *      1. create 함수 사용 -> 저장소 생성
 *          - 저장소 생성시, 상태변수화 액션을 정의
 */
import {create} from "zustand"

// 1. 저장소 생성
//    set : 콜백함수(내부정의)
const useStore = create((set) => ({
    // 상태변수
    count:0,
    // 액션 (버튼 클릭시 +1, -1 증가)
    // 업데이트 -> 새로운 객체로 대체
    // 람다함수에서 반환값이 {}이고, 수행문이 1개면 () => ({})로 표현가능
    increment:() => set((state) => ({count: state.count+1})),
    decrement:() => set((state) => ({count: state.count-1}))
}))

export default useStore;
