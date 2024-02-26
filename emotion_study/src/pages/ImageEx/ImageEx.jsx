/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

function ImageEx() {
    const [ imgpreviews, setImgpreviews ] = useState([]);
    const imgRef = useRef();

    const handleClickChange = (e) => {
        let promises = []; // 정의만

     // 이미지 하나당 하나의 fileReader만 가져야하기 때문에 fileReader 자체를 for문으로 돌려준다
        for(let file of e.target.files) {
            promises = [...promises, new Promise((resolve) => { // 새로운 프로미스를 생성해 배열에 넣기
                const fileReader = new FileReader();
        
                if(e.target.files.length === 0) {
                    return;
                } 
        
                fileReader.onload = (e) => {
                    // // 비동기(set)라 배열에 들어가기전에 덮어씌우기 때문에 이미지를 2개 넣어도 마지막 하나밖에 안뜸 => 프로미스 배열 정의하고 resolve를 매개변수로 넣어주기
                    // setImgpreviews([...imgpreviews, e.target.result]);
                    resolve(e.target.result);
                }
    
                fileReader.readAsDataURL(file);
                
            })]; 
        }

 // 프로미스 = 비동기 / Promise.all(스테틱 메소드) 을 써주면 동기
 // 실행 순서 = 들어간 순서 (지정된 자리에 들어감)
        Promise.all(promises)  // => 기존의 프로미스들을 순서대로 실제 실행
        .then(result => {
            setImgpreviews(result);
        });

       
    }

    return (
        <div css={layout}>
            {imgpreviews.map((imgpreview, index) => 
                    <div key={index} css={imageLayout}>
                        <img src={imgpreview} alt="" />
                    </div>
            )}
        <input style={{display: "none"}} type="file" ref={imgRef} onChange={handleClickChange} multiple={true}/>
        <button onClick={() => imgRef.current.click()}>이미지 불러오기</button>
    </div>
    );
}

export default ImageEx;