/**
 *  여러 유형의 css 적용 스타일 컴포넌트
 */
// 이름이 index면 '.'으로 표현가능함함
import myStyle from "."
import styled from 'styled-components'

// 스타일 4. css 작성하는 방식을 새로운 문법으로 구성하는 스타일
import './styles.scss'


const Title = styled.h2`
    color:red;
`
const Button = styled.button({
    color:'gray',
})



export default function CssComponent() {
    return (
        <div>
            <h3>CSS 적용테스트</h3>
            <div style={{backgroundColor:'lightgray', margin:'1em', padding:'1em'}}>
                스타일 1. 직접(inline) CSS 적용
            </div>
            <div style={myStyle.styleDiv}>
                스타일 2. CSS Modules 적용 방식
                CSS를 별도의 JS로 구성하여 스타일 적용
            </div>
            <div>
                <Title>스타일 3. css styled-compononts</Title>
                <Button>styled 버튼</Button>
            </div>
            <div className="title">
                스타일 4. scss, sass 사용

            </div>
        </div>
    )
}






