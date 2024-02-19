
/* react component 특징
  1. 파일명과 함수명을 일치시킨다.
  2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
  3. 함수를 꼭 export 해야한다.
*/
import { useState } from "react";

 

 // 여러개의 function 이 있을때 default 는 하나 -> default로 잡혀있는 함수가 메인
export default function App() {
  let names = [ "김준일" , "김준이", "김준삼"]; // 문자열로 안묶고 태그로 묶어주면 태그로 나옴 ex) [<h1>김준일</h1>]
  // const jsxNames = names.map(name => <h1>{name}</h1>);
  // [ <h1>김준일</h1>, <h1>김준이</h1>, <h1>김준삼</h1>] 맵을 만들어 태그로 감싸서 리턴
  const [ nameArrayState, setNameArrayState ] = useState([ "김준일" , "김준이", "김준삼"]); //  useState 호출하면 0,1번 인덱스를 가진 배열을
  // 상태관리
  // 상태가 변하면(set) 렌더링이 다시 된다. state는 렌더링 X -> state 쓰는 이유

  const { name, age } = {name: "김준일", age: 31};
  const [ num1, num2, num3, num4] = [ 1, 2, 3, 4];

  console.log("콘솔 호출?"); // 추가버튼을 누를때마다 추가는 되지만 보이지않음
  
  const handleClick = () => { 
    setNameArrayState([...nameArrayState, "김준사"]);
    console.log(names); // 일반번수로 렌더링 X , useState가 존재하는 함수를 다시 렌더링(html코드가 상태말고는 처음부터 끝까지 다시 써짐 -> 성능 떨어짐)
  }

// react에서는 onClick 카멜표기법 - 함수 정의를 대입해주는 것
// 최종적으로 뿌려지는것 = return
  return <>
  <button onClick={ handleClick }>추가</button>
    <div>
      { nameArrayState.map(name => <h1>{ name }</h1>) }
    </div>
  </>; 
}




