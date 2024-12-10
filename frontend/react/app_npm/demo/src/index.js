//엔트리 포인트(진입로)
// 가븍적 수정X, 커스텀 컴포넌트 수정 OK

// ES Module(ESM) 방식의 모듈 가져오기 문법
// 1. 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 커스텀 컴포넌트
import App from './App';
import reportWebVitals from './reportWebVitals';


// 2. 아이디가 root인 요소와 동일한 형태의 VDOM을 만드는 과정
// 아이디가 root인 요소를 특정하여 스왑처리르 위한 v-dom생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* React.StrictMode : 잠재된 오류를 체크, 개발시 사용 */}
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
