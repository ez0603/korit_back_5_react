응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const responseData = {
        title: "응답데이터",
        dataList: [
            {
                name: "김준일",
                age: 31
            },
            {
                name: "김준이",
                age: 32
            },
            {
                name: "김준삼",
                age: 33
            }
        ]
    };

    console.log(타이틀_컴포넌트(responseData.title));
    for(let i = 0; i < responseData.dataList.lenght; i++) { // dataList에 있는 객체가 3개이기 때문에 for문
        console.log(테이블_TR_TD_컴포넌트(responseData.dataList[i]));
    }
    
    for(let 학생 of responseData.dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생));
    }

    // 비구조 할당
    const 타이틀 = responseData.title; 
    // const 학생 = responseData.dataList[0];
    const 학생들 = responseData.dataList;

    const { title, dataList } = responseData;
    const { name, age } = dataList[0];

    for(let 학생 of dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생, title));
    }

    const user = {
        username: "aaa",
        password: "1234",
        name: "김준일"
    }

    const { username, password } = user; // 밑에 두 코드를 비구조 할당 시킨것
    // const username = username.user;
    // const password = password.user;

    console.log(username);
    console.log(password);
}

function 타이틀_컴포넌트(타이틀) {
    return `
        <h1>${타이틀}</h1>
    `;
}   

function 테이블_TR_TD_컴포넌트({ name, age }, title) { // 비구조 할당으로 정의해주면 name,age 앞에 학생. 을 해줄필요 X, 비구조 할당에는 객체가 들어와야 하기때문에 title은 매개변수로 받아줌
    console.log(title);
    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;
}