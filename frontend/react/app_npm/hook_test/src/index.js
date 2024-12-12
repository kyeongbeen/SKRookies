import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4'; // Hook - Basic
import App5 from './App5'; // Hook - State Variable, ...
import App6 from './App6'; // Hook - Memoization
import App7 from './App7'; // Exchange Rate Calculator
import App8 from './App8'; // Hook - useContext
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}

    {/* 함수형 컴포넌트 + 훅 기본형태 */}
    {/* <App2/>  */}

    {/* useStage 사용 */}
    {/* <App3 /> */}

    {/* useRef, useEffect 사용 */}
    {/* <App4 url="https://fakestoreapi.com/products" pid="1" /> */}

    {/* <App5 url="https://fakestoreapi.com/products" pid="1" /> */}
    {/* <App6 url="https://fakestoreapi.com/products" pid="1" /> */}
    {/* <App7 /> */}
    <App8 />



  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
