import "./App.css";

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
} from "react";
import axios from "axios";

// TODO 게시판-1. mui 디자인이 적용된 컴포넌트 가져오기
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// TODO 게시판-4. mui 디자인 적용된 Dialog
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,

  // TODO 게시판-9. mui Card는 생략, 필요시 해볼것
  Card,
  CardActions,
  CardContent,
  CardMedia,

  Button,
  Typography,
} from "@mui/material";

async function getAllProducts(url, cb) {
  const res = await axios.get(url);
  return res.data.map((product, index) => {
    const { id, title, description, price, image, category } = product;
    // TODO 게시판-3. mui 관련 데이터 동적세팅부분 교체
    return (
      <>
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          onClick={() => {
            cb(id);
          }}
        >
          <TableCell component="th" scope="row">
            {title.substring(0, 25)}
          </TableCell>
          <TableCell align="center">{category}</TableCell>
          <TableCell align="center">{description.substring(0, 30)}</TableCell>
          <TableCell align="right">{price}</TableCell>
        </TableRow>
      </>
    );
  });
}

function App6Mui({ url, pid }) {
  const marketUrl = useRef(url);
  const [allProduct, setAllProduct] = useState(null);
  const [product, setProduct] = useState(null);

  const showProductDetail = useCallback(async (id) => {
    console.log("Description ask", id);
    const res = await axios.get(`${marketUrl.current}/${id}`);
    const { title, description, price, image, category } = res.data;
    const pdtDetail = (
      <div>
        <img src={image} style={{ width: 100, height: 100 }} />
        <p>{title}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    );
    setProduct(pdtDetail);

    // TODO 게시판-7. mui 팝업 띄우기
    dialogOpenHandler();
  }, []);

  // TODO 게시판-6. mui 상태변수, 이벤트함수, 기타필요기능
  const [open, setOpen] = useState(false); // 팝업 열고, 닫는역할

  const dialogCloseHandler = () => {
    setOpen(false);
    setProduct(null);
  };

  const dialogOpenHandler = () => {
    setOpen(true);
  };

  useEffect(
    () => console.log("Componene might be Seeing : Single Time Running"),
    []
  );

  useMemo(() => {
    console.log("Memoization Setting - data");
    getAllProducts(marketUrl.current, showProductDetail)
      .then((data) => setAllProduct(data))
      .catch()
      .finally();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p>
          <span style={{ color: "red" }}>Product</span> List
        </p>
        <div style={{ margin: "2em" }}>
          <div>
            {/* TODO 게시판-8. 기존 제품상세정보 mui dialog로 변경 */}
            {/* <fieldset>{product}</fieldset> */}
          </div>
          <br />
          {/* TODO 게시판-2. mui 관련 JSX내에 테이블 교체, 기존 table 제거  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{allProduct}</TableBody>
            </Table>
          </TableContainer>

          {/* TODO 게시판-5. mui 팝업표시*/}
          {/* open : 팝업의 열림여부 */}
          {/* onClose : 빈 공간클릭시 dialogCloseHandler 호출 */}
          <Dialog
            open={open}
            onClose={dialogCloseHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Product Details</DialogTitle>
            <DialogContent>
              {/* product는 card 컴포넌트 재구성 교쳬예정 */}
              {product}
            </DialogContent>
            <DialogActions>
              <Button onClick={dialogCloseHandler} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default App6Mui;
