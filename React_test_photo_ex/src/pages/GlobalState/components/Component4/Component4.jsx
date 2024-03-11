import React from 'react';
import { inputState } from '../../atoms/inputState';
import { useRecoilState } from 'recoil';

function Component4() {
    const [ value, setValue ] = useRecoilState(inputState);

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(() => e.target.value)}/>
        </div>
    );
}

export default Component4;