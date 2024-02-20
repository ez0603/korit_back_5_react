import { useState } from "react";

function Countinput({ setCount }) { // props가 아닌 비구조 할당을 쓰는이유 : 키값이 자동완성이 되기 때문
    const [ inputValue, setInputValue ] = useState("0"); // inputValue = 문자열이 들어와야함

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setCount(parseInt(e.target.value));
      }

    return  <input type="text" onChange={ handleInputChange } value={ inputValue }/>; /* onChange = value의 값이 바뀌면 일어남, 입력이 될때마다 inputValue의 값이 바뀌기 때문에 onChange */
}

export default Countinput;