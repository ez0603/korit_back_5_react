import { useEffect, useState } from "react";


function App() {
    const studentObj = {
      name: "",
      age: "",
      address: ""
    }

    const [ student, setStudent ] = useState(studentObj);// student라는 객체로 묶어줌
    const [ inputValues, setInputValues] = useState (studentObj)
    const [ refresh, setRefresh ] = useState(false);

    useEffect(() => { // useEffect = DOM요소의 변화 인지, 뒤 배열에 student를 넣으면 student의 값이 변하면(조건) useEffect가 동작, 배열[]이 비어있을때 = 처음 한번만 동작, 배열[]안에는 상태만 들어감
      if(refresh) {
        setInputValues(studentObj);
      } 
      setRefresh(true); // refresh를 만들어주는 이유 : useEffect가 처음에 동작할 필요가 없기 때문
    }, [student]); 

    // js객체
    // let user = { 
    //   username: "test",
    //   "password": "1234", // 특징 1번
    //   [email]: "test" , // 특징 2번
    //   phone // 특징 3번
    // }

    // let email = "email" // 특징 2번
    // let phone = "01012345678" // 특징3번

    /* 
      js객체 특징
      1. 키 값은 문자열이어도 된다.
      2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
      3. 변수명만 입력하면 변수 자체를 객체의 특성과 value로 한번에 정의할 수 있다. 
    */

    const handleInputChange = (e) => { // input에 입력이 일어나면 name에 객체의 값이 바뀜
      const { name, value } = e.target; 

      // switch문 대신 if문 사용 사능
      // if(name === "name"){
      //   inputValues.name = value;
      // } else if(name === "age") {
      //   inputValues.age = value;
      // }else if(name === "address") {
      //   inputValues.address = value;
      // }
      // switch(name) { 
      //   case "name":
      //     setName(value);
      //     break;
      //   case "age":
      //     setAge(value);
      //     break;
      //   case "address":
      //     setAddress(value);
      //     break;
      // }

      setInputValues({
        ...inputValues,
        [name]: value 
      });

    }
    
    const handleOnClickOk = () => {
      // promise를 생성해주는 이유 : await을 쓰려면 promise에만 가능하기때문 비동기를 동기로 만들어주기 위해 / 비동기를 동기로 만들어주는 이유 : setInputValues가 먼저 처리되면 setStudent에 빈값이 들어오기 때문 
      new Promise((resolve, reject) => {
        setStudent(inputValues)
        resolve();
      }).then(() => {
        setInputValues(studentObj)
      });
    }

    const handleOnClickDelete = () => {
      setStudent(studentObj);
    }



  return (
    <>
      <h1>이름 : {student.name} </h1>
      <h1>나이 : {student.age}</h1>
      <h1>주소 : {student.address}</h1>

      <input type="text" value={inputValues.name} name="name" onChange={ handleInputChange } placeholder='이름' />
      <input type="text" value={inputValues.age} name="age" onChange={ handleInputChange } placeholder='나이' />
      <input type="text" value={inputValues.address} name="address" onChange={ handleInputChange } placeholder='주소' />

      {/* <StudentInfo/>
      <StudentInfo/>
      <StudentInfo/>

      <InfoInput/>
      <InfoInput/>
      <InfoInput/> */}

      <button onClick={ handleOnClickOk }>확인</button>
      <button onClick={ handleOnClickDelete }>비우기</button>
    </>
  );
}

export default App;
