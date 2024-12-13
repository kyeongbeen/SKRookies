/*
    환율 계산기
        - 환율 정보를 가져와서, 실시간 환전계산, 수수료부분제외
        - http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json\
        - 요구사항
            - 화면
                - 왼쪽(USD, JPY, EUR) 선택
                - 오른쪽(KRW 고정)
                - [입력창] = [입력창]
            - flow
                - 통화선택 -> 왼쪽입력창에 수치를 입력 -> 오른쪽 계산된값
                - 정반대로도 작동 가능함
            - 환율정보
                - 10분간격으로 통화데이터 갱신
                - http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json 환율정보 획득

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

// 전역변수로 환율URL 사용
const EXCHANGE_URL = 'http://127.0.0.1:5500/frontend/react/app_npm/hook_test/dummy/exchangeRate.json'
// 숫자만 입력되는 필터링 함수
const nanFiltering = s => s.replace(/[^0-9.]/g, "");



function App7(props) {
    // 상태변수, 통화코드(exchangeCode)
    const [exchangeCode, setExchangeCode] = useState(null);
    const [currExchangeCode, setCurrExchangeCode] = useState("USD"); // 특정주기로 갱신 -> 화면갱신에 영향 x -> useRef
    const exchangeRate = useRef(null);
    const [leftInput, setLeftInput] = useState("");
    const [rightInput, setRightInput] = useState("");

    // 요구사항
    // 1. 환율정보 가져오기
    //    useCallback()으로 구현, 필요한 위치에서 호출
    // 2. 환율정보 요청하여 "name" : "JPYKRW=X"를 각각 추출해서 => JPY, USD, ... 추출
    // 3. exchangeCode에 세팅할 수 있는 준비
    const getExchangeRate = useCallback(async()=>{
        // 환율정보 획득
        const res = await axios.get(EXCHANGE_URL);
        const jsxOptions = res.data.map((exchange, index)=>{
            const {name} = exchange;
            const code = name.substring(0,3);
            return (<option key={index} value={code}>{code}</option>);
        });
        // 배열에 멤버 추가 삽인
        jsxOptions.push(<option key="-1" value="KRW">KRW</option>);
        // 상태 변수에 할당
        setExchangeCode(jsxOptions);
        // 통화 정보 세팅
        exchangeRate.current = {
            USD:parseFloat((res.data.find( code => code.name === "USDKRW=X" ).rate).toFixed(4)),
            JPY:parseFloat((res.data.find( code => code.name === "JPYKRW=X" ).rate).toFixed(4)),
            EUR:parseFloat((res.data.find( code => code.name === "EURKRW=X" ).rate).toFixed(4))
        }
    }, []);


    useEffect(()=>{
        console.log("환율정보 획득");
        getExchangeRate();
    }, []);

    function exchangeCodeHandler(event) {
        // 1. 입력된 내용 초기화 -> 0 또는 반값
        setLeftInput("");
        setRightInput("");
        // 2. 현재 통화코드 조정 -> 상태변수 설정(currExchangeCode)
        setCurrExchangeCode(event.target.value);
    }

    function onExchangeLeft(event) {
        // 1. 입력값 -> 숫자만
        // 2. 왼쪽 textBox에 입력한 값 업데이트
        // 3. 환율계산하여 오른쪽 textBox에 업데이트
        //    (입력한 값 * 환율).toFixed(2) : 환율값 계산해서 소수점 2자리까지 표기
        const value = parseFloat(nanFiltering(event.target.value));
        setLeftInput(value);
        setRightInput((value * exchangeRate.current[currExchangeCode]).toFixed(2));
    }

    function onExchangeRight(event) {
        // 1. 입력값 -> 숫자만
        // 2. 왼쪽 textBox에 입력한 값 업데이트
        // 3. 환율계산하여 오른쪽 textBox에 업데이트
        //    (입력한 값 * 환율).toFixed(2) : 환율값 계산해서 소수점 2자리까지 표기
        const value = parseFloat(nanFiltering(event.target.value));
        setRightInput(value);
        setLeftInput((value * exchangeRate.current[currExchangeCode]).toFixed(2))
    }

    return (
        <div className='App'>
            <div className="App-header">
                <h2>환율계산기</h2>
                <fieldset>
                    <div>
                        {/* 통화 선택, 기본값 : USD*/}
                        <select style={{width:"45%"}} onChange={exchangeCodeHandler} value={currExchangeCode}> {exchangeCode} </select>
                        =
                        {/* KRW 고정 */}
                        <select style={{width:"45%"}} value={"KRW"} disabled> {exchangeCode} </select>
                    </div>
                    <br/>
                    <div>
                        {/* 환율에 따른 계산 */}
                        {/* 
                            - 상태변수 : leftInput, rightInput
                            - 값 변경 이벤트 함수등록 : onExchangeLeft, onExchangeRight
                        */}
                        <input placeholder='숫자를 입력해주세요' value={leftInput} onChange={onExchangeLeft}/>
                        =
                        <input placeholder='숫자를 입력해주세요' value={rightInput} onChange={onExchangeRight}/>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}


// 3. 대표 모듈화
export default App7;
