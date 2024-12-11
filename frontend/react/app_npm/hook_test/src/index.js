import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}

    {/* 함수형 컴포넌트 + 훅 기본형태 */}
    {/* <App2/>  */}

    {/* useStage 사용 */}
    {/* <App3 /> */}

    {/* useRef, useEffect 사용 */}
    <App4 url="https://fakestoreapi.com/products" pid="1" />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
