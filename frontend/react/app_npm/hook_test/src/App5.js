/*
    - 게시판 형태로 UI를 구성
        - JSX 수정
    - 제품 한개를 클릭 -> 상세정보 보기
        - 창 띄우기 -> 서드파티 GUI 사용해 구성
        - 상세 페이지 이동 -> 라우팅 철
        - 현재 화면에서 상단부분에 표시
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


async function getAllProduct(url, cb) {
    const result = await axios.get(url);
    return result.data.map( (value, index)=>{
        const {id, title, description, price, image, category} = value;
        return (
            // <table>의 데이터 항목 <tr><td>... 구성되게 조정
            <tr key={index} onClick={()=>{cb(id)}}>
                <td>{title}</td>
                <td>{price} $</td>
                <td>{category}</td>
                <td>{description}</td> {/* 글자요약 필요 */}
            </tr>
        );
    } );
}

export default function App5 ({url, pid}) {    
    const marketUrl = useRef(url);
    const productId = useRef(parseInt(pid));
    const [allProduct, setAllProduct] = useState(null);
    const [product, setProduct] = useState(null);
    
    const showProductDetail = async(id) => {
        // 1. id값 기준 특정 상품 데이터 획득
        const res = await axios.get( `${ marketUrl.current }/${ id }` );
        // 2. 데이터:{}를 파싱 -> 동적으로 상세정보 JSX 구성
        const { title, description, price, image, category } = res.data; // 파싱
        // JSX 생성
        const pdtDetail = (
            <div>
                <img src={image} style={{ width:100, height:100 }}/>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        );
        // 3. setProduct( 동적구성된 JSX ) 
        setProduct( pdtDetail );
        // 4. 화면갱신 발생!! => 확인
    }
    
    useEffect(()=>{
        console.log('Component might be Seeing : First running')
        getAllProduct(marketUrl.current, showProductDetail)
        .then(data => {
            setAllProduct(data);
        })
        .catch()
        .finally();

    }, []);

    useEffect(()=>{
        console.log('Second Product', product);
        return data => console.log('First Product', product, data);
    }, [product]);

    return (
        <div className='App'>
            <div className="App-header">
                <p><span style={{color:'red'}}>Product</span> List</p>
                <div style={{margin:'2em'}}>
                    <div>
                        {/* 상품 상세정보 표시, fieldset:사각 테두리 박스 생성 */}
                        <fieldset>
                            {product}
                        </fieldset>
                    </div>
                    <br/>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProduct}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}