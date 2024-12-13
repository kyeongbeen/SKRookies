/*
    - useWindowInfo라는 커스텀훅을 사용하는 컴포넌트
*/

import useWindowInfo from "./custom/useWindowInfo";

const CustomHook = () => {
    const {width, height} = useWindowInfo();
    return (
        <>
        <div style={{margin:"2em"}}>
            <p>윈도우 크기</p>
            <p>{width} px / {height} px</p>
        </div>
        </>
    )
}

export default CustomHook
