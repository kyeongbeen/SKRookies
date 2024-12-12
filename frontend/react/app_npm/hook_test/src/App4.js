/*
    - useRef, useEffect
    - 필요시 상태변수 사용
    - url을 이용하여 일종의 게시판형태(table 사용) 리스트 구성
        - 상품데이터 -> <tr> ... </tr>
    - 상품 데이터는? axios를 이용하여 데이터 획득
        - 통신 시점? 컴포넌트가 보이기 직전? 또는 필요시
        - 매번 요청하면 느림 -> 최적화 - memoization 사용
        - useMemo, useCallback
        - 모듈 설치
            - npm install axios
*/

import './App.css';
import {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext
} from "react";
import axios from 'axios';


async function getAllProduct(url) {
    // ajax 통신, axios 사용, 비동기처리(async ~ await 활용)
    console.log('전체 상품데이터 획득');
    const result = await axios.get(url);

    // 결과 출력
    console.log('통신결과 출력', result.data);
    
    // 얻은 결과를 JSX로 구성 -> 화면표시 가능
    // 배열데이터 순환(map()) -> 데이터 추출 -> <li key={index}>Data</li>
    return result.data.map( (value, index)=>{
        const {id, title, description, price, image, category} = value;

        return (
            <li key={index}>
                <img src={image} width='20px'/>
                <b>{title} : {price}</b>
            </li>
        );
    } );

}


// 컴포넌트로 전달된 args를 바로 분해하여 변수로 처리
export default function App4 ({url, pid}) {
    
    // 전달된 변수는 useRef로 관리
    // const|let 변수명 = useRef(초기값);
    // 사용 : 변수명.current
    const marketUrl = useRef(url); // 값이 변경되어도 렌더링 X
    const productId = useRef(pid);
    const [allProduct, setAllProduct] = useState(null);
    // useEffect -> 컴포넌트, 상태변수 등 모니터링 대상에 따라 호출
    // 기본형 -> '컴포넌트가 보일려고 한다'와 유사한 방식
    // 사용 :useEffect( Callback Function, [관찰대상]);
    useEffect(()=>{
        // 관찰대상이 없으므로 1회성으로 호출
        console.log('Component might be seeing! - componentDidMount()')

        // ajax 통신을 통해서 상품데이터를 획득
        getAllProduct(marketUrl.current) // 결과가 비동기로 도착
        .then(data => {
            setAllProduct(data);
        })
        .catch()
        .finally();



    }, []);
    return (
        <div className='App'>
            <div className="App-header">
                {/* Market URL : {marketUrl.current}
                <br/>
                Product ID : {productId.current} */}

                <p><span style={{color:'red'}}>Product</span> List</p>
                <div>
                    <ul>
                        {allProduct}
                    </ul>
                </div>

            </div>
        </div>
    )
}