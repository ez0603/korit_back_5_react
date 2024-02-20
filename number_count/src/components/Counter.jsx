import { useState } from "react";
import Counterinput from "./CounterInput";
import CountButton from "./CountButton";

 function Counter() {
     // const input = document.querySelector(); => 리엑트에서 사용X , react DOM을 사용하기 때문
     
     const [ number, setNumber ] = useState(0); // number초기화 세팅 , const number = 0; 와 같은 뜻 [ 값 , 값의 상태를 바꾸기 위한 set ]
     const [ count, setCount ] = useState(0);
     
     const handleOnIncrease = () => {
       setNumber(number + count); // inputValue는 문자열이기 때문에 parseInt로 바꿔줘야함
     }
    
     const handleOnDecrease = () => {
       setNumber(number - count);
     }
     
    
     return (
       <>
         <h1>{ number }</h1>
         <Counterinput setCount={ setCount } />
         <CountButton title={ "+" } onClick={ handleOnIncrease } />
         <CountButton title={ "-" } onClick={ handleOnDecrease } />
       </>
     );

 }

 export default Counter;