import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage(props) {
    const [ studentList, setStudentList ] = useState([]);

    const [ inputValue, setInputValue ] = useState({
        id: "",
        name: "",
        age: "",
        address: ""
    });

    const [ updateId, setUpdateId ] = useState(0);

    const staticId = useRef(0); 
    // staticId.current 값이 변해도 렌더링 X
    // 재렌더링이 발생해도 초기화되지 않음

    useEffect(() => {
        console.log(studentList);
    }, [studentList]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }   

    const handleAddClick = () => {
        // console.log(staticId.current += 1);
         
        const student = {
            ...inputValue,
            id: staticId.current += 1 // input된 정보에 id값만 +1씩 해주기
        };

        setStudentList([...studentList, student]); // list에 학생 추가
    }

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id != id)]); 
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]); // 무조건 하나의 값을 찾기 때문에 인덱스 0
    }

    const handleUpdateSubmitClick = () => {
        const findIndex  = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]) // 객체의 인덱스 찾기 
        const updateStudentList = [...studentList]; // 내용(값)만 복제(주소가 같아지면 안되기 때문) / 상태변수(studentList)는 set으로만 바꾸고 직접 건들이지 X

        updateStudentList[findIndex] = inputValue;

        setStudentList(updateStudentList);  // 정보가 바뀐 배열이 들어가야함 -> 상태
       handleCancelClick();
    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: ""
        });
    }

    return (
        <div>
            <div>
                <input type="text" name='id' disabled={true} value={inputValue.id} placeholder='ID'/>
                <input type="text" name='name' onChange={ handleInputChange } value={ inputValue.name } placeholder='이름' />
                <input type="text" name='age' onChange={ handleInputChange } value={ inputValue.age } placeholder='나이' />
                <input type="text" name='address' onChange={ handleInputChange } value={ inputValue.address } placeholder='주소' />
                <button onClick={ handleAddClick }>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}> {/* 중복없이 들어가야하는 키값들만 넣어줌 ex) id* => 상태를 비교해서 부분 렌더링을 해주기 위해서 key값을 잡아줌*/}
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>
                                {/* updateId 값과 student.id이 다르면 수정버튼, 같으면 확인버튼 */}
                                {updateId !== student.id  // 삼항연산(표현식 안에 써서 가능)
                                ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>
                            <td>
                                {updateId !== student.id 
                                ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                : <button onClick={handleCancelClick}>취소</button>
                                }
                            </td> 
                            {/* 정의 하지않고 호출로 해버리면 렌더링이 되고 난 후 바로 실행됨 {정의 () => ()}*/}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentArrayPage;