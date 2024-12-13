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

// TODO 환율-1. mui 모듈 import
import InputLabel from "@mui/material/InputLabel"; // select의 프롬프트, 어떤 값을 선택하는지 표기
import MenuItem from "@mui/material/MenuItem"; // <option> 대체태그
import Select from "@mui/material/Select"; // <select> 대체태그
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const EXCHANGE_URL = "http://127.0.0.1:5500/frontend/react/app_npm/hook_test/dummy/exchangeRate.json";
const nanFiltering = (s) => s.replace(/[^0-9.]/g, "");

function App7Mui(props) {
  const [exchangeCode, setExchangeCode] = useState(null);
  const [currExchangeCode, setCurrExchangeCode] = useState("USD");
  const exchangeRate = useRef(null);
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");

  const getExchangeRate = useCallback(async () => {
    const res = await axios.get(EXCHANGE_URL);
    const jsxOptions = res.data.map((exchange, index) => {
      const { name } = exchange;
      const code = name.substring(0, 3);

      // TODO 환율-3. option -> MenuItem
      return (<MenuItem key={index} value={code}>{code}</MenuItem>);
    });

    jsxOptions.push(<MenuItem key="-1" value="KRW">KRW</MenuItem>);

    setExchangeCode(jsxOptions);

    exchangeRate.current = {
      USD: parseFloat(res.data.find((code) => code.name === "USDKRW=X").rate.toFixed(4)),
      JPY: parseFloat(res.data.find((code) => code.name === "JPYKRW=X").rate.toFixed(4)),
      EUR: parseFloat(res.data.find((code) => code.name === "EURKRW=X").rate.toFixed(4))
    };
  }, []);

  useEffect(() => {
    console.log("환율정보 획득");
    getExchangeRate();
  }, []);

  function exchangeCodeHandler(event) {
    setLeftInput("");
    setRightInput("");
    setCurrExchangeCode(event.target.value);
  }

  function onExchangeLeft(event) {
    const value = parseFloat(nanFiltering(event.target.value));
    setLeftInput(value);
    setRightInput((value * exchangeRate.current[currExchangeCode]).toFixed(2));
  }

  function onExchangeRight(event) {
    const value = parseFloat(nanFiltering(event.target.value));
    setRightInput(value);
    setLeftInput((value / exchangeRate.current[currExchangeCode]).toFixed(2));
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>환율계산기</h2>
        {/* TODO 환율-2. jsx교체 */}
        <FormControl fullWidth>
          <div>
            <InputLabel id="demo-simple-select-label">통화선택</InputLabel>
            <Select
              style={{ width: "45%" }}
              onChange={exchangeCodeHandler}
              value={currExchangeCode}
              labelId="demo-simple-select-label"
            >
              {exchangeCode}
            </Select>
            =
            <Select
                style={{ width: "45%" }}
                value={"KRW"}
                disabled
            >
              {exchangeCode}
            </Select>
          </div>
          <br />
          <div>
            <TextField
              label="달러, 엔화, 유로"
              variant="outlined"
              placeholder="숫자를 입력해주세요"
              value={leftInput}
              onChange={onExchangeLeft}
            />
            =
            <TextField
              label="원화"
              variant="outlined"
              placeholder="숫자를 입력해주세요"
              value={rightInput}
              onChange={onExchangeRight}
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default App7Mui;


