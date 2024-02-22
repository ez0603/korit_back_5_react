import React, { useCallback } from 'react';

function MemoizationTest2({ num1, num2 }) {

    // useCallvback = 함수 Memoization -> 
    const fx1 = useCallback(() => { // num1이 바꼈을 때 [num1]이 들어있는 함수만 재정의되어 useCallback 함수 주소가 바뀌고 다른건 재정의 되지 않기 때문에 주소변경X
        return num1 + 10000;
    }, [num1]);

    const fx2 = useCallback(() => {
        return num2 + 20000;
    }, [num2]);

    return (
        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    );
}

export default MemoizationTest2;