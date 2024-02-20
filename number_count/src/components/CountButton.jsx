import React from 'react';

function CountButton({ title, onClick }) { // 매개변수에 따라 기능이 달라지게 만들기

    return (
        <button onClick={ onClick }>{ title }</button>
        
    );
}

export default CountButton;