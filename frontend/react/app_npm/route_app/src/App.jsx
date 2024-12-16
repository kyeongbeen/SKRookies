/**
 * App.stx : 전체 화면의 레이아웃을 가진 컴포넌트, 상단:링크, 하단내용
 */
import { useState } from 'react'
import { 
  Routes,
  Route,
  Link, 
} from 'react-router'
import {
  Home,
  About,
  Login, AuthLayout, Register,
  HomeExtend, City,
  Detail, Detail2
} from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <fieldset>
        {/* 하위 페이지, 특정페이지로 이동하느 링크제공, 지속적으로 노출 */}
        {/* &nbsp; -> html에서 빈칸하나 */}
        <nav>
          <Link to='/'>Home 페이지</Link>
          &nbsp;
          <Link to='/about'>■ about 링크</Link>
          &nbsp;
          <Link to='/login'>■ login 링크</Link>
          &nbsp;
          <Link to='/register'>■ register 링크</Link>
          &nbsp;
          <br />
          <Link to='/dashboard'>■ dashboard 링크</Link>
          &nbsp;
          <Link to='/dashboard/100'>■ URL에 데이터전송(상세페이지 보기)</Link>
          &nbsp;
          <Link to='/dashboard/20'>■ URL에 데이터전송</Link>
          &nbsp;
          <br />
          <Link to='/dashboard/30/detail'>■ URL에 데이터전송응용1</Link>
          &nbsp;
          <Link to='/dashboard/50/detail2'>■ URL에 데이터전송응용2</Link>
          &nbsp;
          <Link to='/dashboard/detail2'>■ URL에 데이터전송응용2</Link>
          &nbsp;
        </nav>
      </fieldset>
      <fieldset>
        {/* 라우트 되어야 하는 페이지들을 등록, 개별페이지 세팅, 페이지에 따라 변경 */}
        {/* Routes 하위에 등록된 컴포넌트들은 이 영역에서만 페이지가 교체 */}
        <Routes>
          {/* Route 등록 : 1개가 URL이 되고, 톡정 컴포넌트 세팅 */}
          {/* element -> 각 페이지 요청시 보이는 화면 */}
          <Route path='/' element={ <Home/> }/>
          <Route path='about' element={ <About/> }/>
          {/* 컴포넌트를 묶어서 표현 */}
          <Route element={ <AuthLayout/> }>
            <Route path='login' element={ <Login/> } />
            <Route path='register' element={ <Register/> } />
          </Route>
            {/* 상위URL, 하위URL 세팅 */}
            {/* /dashboard, /dashboard/xxx, /dashboard/데이터/yyy, ... */}
            <Route path='/dashboard'>
            {/* /dashboard -> index를 Route 내부에 표기*/}
            {/* 특정 비즈니스 로직을 가진 URL들의 대표 홈페이지 */}
            <Route index element={ <HomeExtend/> } />
            {/* 동적 세그먼트, URL에 데이터를  동적으로 전달*/}
            <Route path=':city' element={ <City/> }/>
            {/* /dashboard/데이터/detail, 데이터가 주소 중간에 위치 */}
            <Route path=':pid/detail' element={ <Detail/> }/>
            {/* ?는 생략가능한 데이터터 */}
            {/* /dashboard/데이터/detail2 or /dashboard/detail2 */}
            <Route path=':lang?/detail2' element={ <Detail2/> }/>
          </Route>


        </Routes>
      </fieldset>
    </>
  )
}

export default App
