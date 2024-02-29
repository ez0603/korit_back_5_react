function ComponentStudy(props) { // props 대신 비구조 할당으로 {a,b}도 가능 -> 변수를 만들어서 바로 대입 , 비구조 할당으로 걸면 자동완성 가능
    // 상태관리 useState
    // 마운트관리 useEffect -> useMemo, useCallback

    return <div>{props.a} //// {props.b}</div> // <div>{a} //// {b}</div> 
}

export default ComponentStudy;

// 함수 = 입력,출력
// (매개변수,리턴)
// 컴포넌트 = 리턴되어지는 값이 jsx

// 응집도 = 기능별로 묶어놓는것
// 응집도는 높이고 결합도는 낮춰줘야함

// 함수정의,export를 해줘야 import가 됨

// 함수정의에서 default가 붙는 차이 : default가 잡혀있으면 객체로, 안잡혀있으면 비구조로 가져옴

// 컴포넌트 이름은 대문자로 시작해야 가져올 수 있음

// 컴포넌트의 리턴은 jsx로 가져옴

// 주소창에 엔터 = 새로고침