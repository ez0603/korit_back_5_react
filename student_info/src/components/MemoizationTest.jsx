import React, { useMemo, useState } from 'react';

function MemoizationTest({ num1, num2 }) {

    const [ num3, setNum3 ] = useState(0);

    console.log("MemoizationTest 렌더링");

    // 값의 Memoization -> useMemo(연산,계산)를 쓰는 이유 : 계산할 필요 없는것도 같이 계산되면 메모리 낭비되기 때문(원하는것만 렌더링 시키기)
    // uesEffedt 와 다른점 : uesEffedt는 렌더링이 2번씩 됨
    const tempNum1 = useMemo(() => {
        console.log("memo: num1");
        return num1 * 10;
    }, [num1]);  

    const tempNum2 =  useMemo(() => {
        console.log("memo: num2");
        return num2 + 10000;
    }, [num2]);

    const tempNum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
    }, [num3]);

    const tempNum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
    }, [num1, num2]);

    return (
        <>
            <button onClick={() => setNum3(num3 + 1)}>num3 증가</button>
            <h3>{tempNum1}</h3>
            <h3>{tempNum2}</h3>
            <h3>{tempNum3}</h3>
            <h3>{tempNum4}</h3>
        </>
    );
}

export default MemoizationTest;