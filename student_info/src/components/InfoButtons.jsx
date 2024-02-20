import React from 'react';

function InfoButtons( {children} ) { // children(자식요소) : 컴파운드에서 태그 사이에 다른태그가 들어와야한다 할때 사용 
    return (
        <>
            { children }
        </>
    );
}

export default InfoButtons;