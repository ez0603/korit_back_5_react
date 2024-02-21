import { React, useRef } from "react";

function InfoInput({ name, onChange, value, placeholder, inputRef }) {
    
    // const [ inputName, setInputName ] = useState("");
    // const [ inputAge, setInputAge ] = useState(0);
    // const [ inputAddress, setInputAddress ] = useState("");


    // const handleOnchangeName = (e) => {
    //     setInputName(e.target.value)
    // }

    // const handleOnchangeAge = (e) => {
    //     setInputAge(e.target.value)
    // }

    // const handleOnchangeAddress = (e) => {
    //     setInputAddress(e.target.value)
    // }

    // const handleOnClickOk = () => {
    //     setName(inputName)
    //     setAge(inputAge)
    //     setAddress(inputAddress)
    // }

    // const handleOnClickDelete = () => {
    //     setName("");
    //     setAge("");
    //     setAddress("");
    //     setInputName("");
    //     setInputAge("");
    //     setInputAddress("");
    // }

    

    return (
        <>
        <input type="text" value={ value } name="{ name }" onChange={ onChange } placeholder={ placeholder } ref={ inputRef }/>
            {/* <input type="text" placeholder='이름' onChange={ handleOnchangeName } value={inputName} />
            <input type="text" placeholder='나이' onChange={ handleOnchangeAge } value={inputAge} />
            <input type="text" placeholder='주소' onChange={ handleOnchangeAddress } value={inputAddress}/>
            <button onClick={ handleOnClickOk }>확인</button>
            <button onClick={ handleOnClickDelete }>비우기</button> */}
        </>
    );
}

InfoInput.defaultProps = {
    ref: null
}

export default InfoInput;