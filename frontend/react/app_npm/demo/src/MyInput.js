/**
 * 커스텀 컴포넌트
 * 숫자만 입력받는 입력요소 구성
 * <input type="number" ... > -> 모바일에서 숫자 키패드로 등장
 * PC 버전에서 사용시 숫자만 입력되게 구성
 */

import React, {Component} from "react";

class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'' // 사용자의 입력값을 담을 변수
        }
    }

    // 컴포넌트의 커스텀 메소드
    onChangeHandlerFunction(event) {
        let iptText = event.target.value;
        const value = iptText.replace(/[^0-9]/g, '');
        this.setState({inputValue:value});
        
        console.log('입력', iptText);
        console.log(value);
    }
    
    onSubmitHandlerFunction(event) {
        event.preventDefault();
        console.log('전송', this.state.inputValue);
        this.setState({inputValue:''})
    }

    render() {
        const onChangeHandler = event => this.onChangeHandlerFunction(event);
        const {inputValue} = this.state;
        const onSubmitHandler = event => this.onSubmitHandlerFunction(event);
        return (
            <div>
                {/* 전송 클릭 처리(이벤트), 숫자만 입력(이벤트) */}
                <form onSubmit={onSubmitHandler}>
                    {/* 입력 -> 값의 변화 -> onChange */}
                    {/* 상태변수 value 사용 */}
                    <input type="text"
                            onChange={onChangeHandler}
                            value={inputValue}
                            placeholder="숫자만 입력" />
                    <input type="submit" value="전송" />
                </form>
            </div>
        );
    }
}

// 3. 커스텀 컴포넌트의 대표 모듈화
export default MyInput


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// /**
//  * 커스터 컴포넌트
//  * 숫자만 입력받는 입력 요소 구성
//  * <input type='number' ... /> <= 모바일에서 숫자 키패드로 등장
//  * PC 버전에서 사용시 숫자만 입력되게 구성
//  */

// // 1. 모듈 가져오기
// import React, { Component } from "react";

// // 2. 커스텀 컴포넌트 구현 ( (*)객체형 | 함수형 )
// class MyInput extends Component {
//     constructor(props) {
//         super(props);
//         // 4. 상태변수 생성
//         this.state = {
//             inputValue:'' // 사용자가 입력한 값을 담을 변수
//         }
//     }
//     // 3. 컴포넌트의 커스텀 맴버 함수
//     onChangeHandlerMember (evt) {
//         let ori_text = evt.target.value;
//         const value = ori_text.replace( /[^0-9]/g, '' ); // 수치만획득
//         this.setState( { inputValue:value } );

//         console.log( '입력', ori_text );
//         console.log( value );

//     }
//     render () {
//         // 2. 이벤트 함수
//         // evt : 이벤트 객체가 이벤트가 발생하면 전달됨
//         // const onChangeHandler = (evt)=>{
//         //     // 맴버 접근 : this.맴버
//         //     this.onChangeHandlerMember(evt);
//         // };
//         // render()내에 함수 내에서 맴버함수를 호출
//         // 맴버 함수내에서 this 접근 문제를 해결하기 위해(2가지 방안존재)
//         const onChangeHandler = evt => this.onChangeHandlerMember(evt);
//         const { inputValue } = this.state;
//         return (
//             <div>
//                 {/* 전송 클릭 처리(이벤트), 숫자만 입력(이벤트) */}
//                 <form>
//                     {/* 1. 입력->값이변했다->onChange */}
//                     {/* 5. 상태변수 사용 value 속성 */ }
//                     <input  type="text" 
//                             onChange={ onChangeHandler }                            
//                             value={ inputValue }
//                             placeholder="숫자만 입력"/>
//                     <input type="submit" value="전송"/>
//                 </form>
//             </div>
//         );
//     }
// }
// // 3. 커스텀 컴포넌트의 대표 모듈화
// export default MyInput;



















