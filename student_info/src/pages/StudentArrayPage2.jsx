import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {
    const [ studentList, setStudentList ] = useState([]);

    const [ student, setStudent ] = useState({
        id: "",
        name: "",
        score: ""
    })

    const [ updateId, setUpdateId ] = useState(0) // id도 처음엔 1이기 때문에 0으로 잡아줌

    const [ scoreData, setScoreData ] = useState({ // 평균계산 tpFixed(숫자) => 숫자번째에서 반올림 
        total: 0,
        avg: 0
    });

    const staticId = useRef(0);

    useEffect(() => {
        let sum = 0;
        for(let i = 0; i < studentList.length; i++) {
           sum += parseInt(studentList[i].score)
        }
        setScoreData({
            total: sum,
            avg: sum / studentList.length // 0 / 0 = 계산 X 때문에 NaN
        }) 

        

    }, [studentList])

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        })
    }
    
    const handleAddButton = () => {
        const studentAdd = {
            ...student,
            id: staticId.current += 1
        };

        setStudentList([...studentList, studentAdd]);
    }

    const handleDeleteButton = (id) => {
        setStudentList([...studentList.filter(student => student.id != id)])
    }

    const handleUpdateButton = (id) => {
        setUpdateId(id);
        setStudent(studentList.filter(student => student.id === id)[0]);
    }

    const handleUpdateSubmitButton = () => {
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList];

        updateStudentList[findIndex] = student;

        setStudentList(updateStudentList);
        handleCancleButton();
        
    }

    const handleCancleButton = () => {
        setUpdateId(0);
        setStudent({
            id: "",
            name: "",
            score: ""
        })
    }



    return (
        <div>
            <div>
                <input type="text" name='id' disable={true} value={student.id} placeholder='ID'/>
                <input type="text" name='name' onChange={handleInputChange} value={student.name} placeholder='이름'/>
                <input type="text" name='score' onChange={handleInputChange} value={student.score} placeholder='점수'/>
                <button onClick={handleAddButton}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map(student => {
                            return <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.score}</td>
                                <td>
                                    {updateId !== student.id
                                        ? <button onClick={() => {handleUpdateButton(student.id);}}>수정</button>
                                        : <button onClick={handleUpdateSubmitButton}>확인</button>
                                    }
                                </td>
                                <td>
                                    {updateId !== student.id
                                        ? <button onClick={() => {handleDeleteButton(student.id);}}>삭제</button>
                                        : <button onClick={handleCancleButton}>취소</button>
                                    }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

// 맨밑에 반의 총점과 평균 div

export default StudentArrayPage2;