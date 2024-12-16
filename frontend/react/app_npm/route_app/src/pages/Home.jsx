/**
 * 여러개의 페이지 구성
 *  - 홈페이지
 *  - 로그인, 회원가입
 *  - 기타 필요 페이지, 페이지 요청시 데이터 전달
 */
import { useParams, // 페이지 요청시 데이터를 URL에 전달하면, 이를 받아서 추출하는 훅
         NavLink, 
 } from "react-router";

export const Home = () => {
    return(
        <>
            <div>Home 페이지</div>
        </>
    )
}

// /about
export const About = () => {
    return(
        <>
            <div>About 페이지</div>
            <nav>
                {/* 보통 nav태그 내에서 사용 */}
                <NavLink to='/'>Home</NavLink>
            </nav>
        </>
    ) 
}

// /login
// 인증 페이지
export const Login = () => {
    return(
        <>
            <div>Login 페이지</div>
        </>
    )
}

// /register
export const Register = () => {
    return(
        <>
            <div>Registration 페이지</div>
        </>
    )
}

// /auth
export const AuthLayout = () => {
    return(
        <>
            <div>AuthLayout 페이지</div>
            <Login />
            <Register />
        </>
    )
}

// /dashboard
export const HomeExtend = () => {
    return (
        <>
            <div>HomeExtend 페이지</div>
        </>
    )
}

// /dashboard/:city
// 동적페이지(/:param), 상위/하위페이지로 URL연결
export const City = () => {
    // 동적으로 데이터를 URL에 전달하는 유형의 페이지
    // '/:city' -> 현재 컴포넌트를 동적 데이터가 있는 방식으로 URL을 설정했다면
    const {city} = useParams();
    return (
        <>
            <div>상세페이지 Parameter : {city}</div>
        </>
    )
}

export const Detail = () => {
    const {pid} = useParams();
    return(
        <>
            <div>Detail 페이지 Parameter : {pid}</div>
        </>
    )
}

export const Detail2 = () => {
    const {lang} = useParams();
    return(
        <>
            <div>Detail2 페이지 Parameter : {lang}</div>
        </>
    )
}

