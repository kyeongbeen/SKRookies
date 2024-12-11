// 커스텀 컴포넌트, 홈페이지 담당(의미를 부여)
// 커스텀 컴포넌트, 하나의 화면(로그인...)|하나의 모듈(버튼|게시판)|구조

// 1. 리소스(이미지, css) 가져오기, 개발자 의도에 따라 달라질 수 있음
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle'; // LifeCycle.js로부터 대표 모듈을 가져온다
import MyInput from './MyInput';
import MyCheckBox from './MyCheckBox';
import MySelect from './MySelect';

// 2. 함수형 컴포넌트 -> 커스텀 JSX를 생성, 특정기능 가지고 있다
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MySelect languages={['Java','JavaScript','React']} initValue='React' />
        <MyCheckBox label="연말 여행지 선택"/>
        <MyInput/>
        {/* <LifeCycle/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>SPA기반 React로 구현한 홈페이지</p>
      </header>
    </div>
  );
}

// 현 파일에 대표
// 3. 대표 모듈화 처리 -> App 컴포넌트는 외부에서 사용가능
export default App;
