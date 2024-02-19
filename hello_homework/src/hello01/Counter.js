import React, { useState } from 'react'
import "../hello01/css/Counter.css" // css는 경로만 입력하면됨

function Hello01() {

  // UserState
  // 상태관리
  // let / const [변수명, set변수명] = useState(변수명에 해당하는 초기값 세팅);
  const [count, setCount] = useState(0);
  // setCount(15); -> count : 0 -> 15

  // plus
  const plus = () => {
    setCount(count + 1);
  };

  // minus
  const minus = () => {
    setCount(count - 1);
  }




  return (
    <div className='counter-layout'>
      <h1 className='title'>Counter</h1>
        <div className='counter-box'>
            <h1 className='count'>{count}</h1>
              <div className='button-box'>
                <button className='plus-button' onClick={plus}>+1</button>
                <button className='minus-button' onClick={minus}>-1</button>
              </div>
         </div>
    </div>
  )
}

export default Hello01;