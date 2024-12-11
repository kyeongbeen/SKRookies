import React, { Component } from "react";

class MyCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked:false
    }
  }
  render() {
    const {label} = this.props;
    const {checked} = this.state;
    return (
        <div>
            {/* 선택여부를 상태변수로 저장 */}
            <input  type="checkbox"
                    checked={checked}
                    onChange={()=>{this.setState({checked:!checked})}}
                    /> {label}
        </div>
    );
  }
}

export default MyCheckBox;
