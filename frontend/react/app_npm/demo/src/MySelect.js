import React, {Component} from "react";

class MySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue:this.props.initValue
        }
    }
    render() {
        const {languages, initValue} = this.props;
        const options = languages.map((language, index)=>{
            return (
                <option value={language} key={index}>{language}</option>
            );
        });
        const {selectedValue} = this.state;

        const onChangeHandler = (event)=>{this.setState({selectedValue:event.target.value})
        }


        return (
            <div>
                <select>
                    <option value='서울'>서울</option>
                    <option value='울산'>울산</option>
                    <option value='제주'>제주</option>
                </select>
                <br>
                </br>
                {/*
                    커스텀 컴포넌트를 활용하여 select를 커스텀
                    MySelect의 컴포넌트로 전달된 props에 languages를 이용하여, select 구성
                    
                    결과 예시
                    <select>
                        <option value='자바'>Java</option>
                        <option value='JavaScript'>JavaScript</option>
                        <option value='React'>React</option>
                    </select>
                */}
                <select value={selectedValue}
                        onChange={onChangeHandler}        
                >
                    {options}
                </select>
            </div>
        );
    }
}

export default MySelect