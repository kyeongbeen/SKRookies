/*
    - 게시판 형태로 UI를 구성
    - Memoization -> 최적화
    - 자주 사용되는 데이터나 함수를 캐싱해서 화면갱신시 매번 생성하지 않고 사용
        - 데이터는 바로 액세스
        - 함수 -> 매번생성X, 바로 호출
 */

// 1. 모듈 가져오기
//    스타일 가져오기
import './App.css';
//    훅 가져오기
import {
    useState,   // 상태변수 -> 화면갱신
    useEffect,  // 중요한 생애 주기 함수 부분 대체
    useMemo,    // 데이터
    useCallback,// 함수
    useRef,     // 데이터, 값의 변화가 있어도 렌더링 X, 참조
    useContext  // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
 } from "react";
import axios from 'axios';

async function getAllProducts(url, cb) {
    const res = await axios.get(url);
    return res.data.map((product, index)=>{
        const {id, title, description, price, image, category} = product;
        return (
            <tr key={index} onClick={()=>{cb(id)}}>
                <th>{title}</th>
                <th>{price}</th>
                <th>{category}</th>
                <th>{description}</th>
            </tr>
        );
    });
}

//    표준함수 스타일
function App6({url, pid}) {
    const marketUrl = useRef(url);
    const [allProduct, setAllProduct] = useState(null);
    const [product, setProduct] = useState(null);

    const showProductDetail = useCallback(async(id)=>{
        console.log('Description ask', id);
        const res= await axios.get(`${marketUrl.current}/${id}`);
        const {title, description, price, image, category} = res.data;
        const pdtDetail = (
            <div>
                <img src={image} style={{width:100, height:100}} />
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        );
        setProduct(pdtDetail);
    }, []);

    useEffect(()=>(console.log('Componene might be Seeing : Single Time Running')), []);
    useMemo(()=>{
        console.log('Memoization Setting - data');
        getAllProducts(marketUrl.current, showProductDetail)
        .then(data=>setAllProduct(data))
        .catch()
        .finally();
    }, []);

    return (
        <div className='App'>
            <div className="App-header">
                <p><span style={{color:'red'}}>Product</span> List</p>
                <div style={{margin:'2em'}}>
                    <div>
                        <fieldset>{product}</fieldset>
                    </div>
                    <br/>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>{allProduct}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


// 3. 대표 모듈화
export default App6;













