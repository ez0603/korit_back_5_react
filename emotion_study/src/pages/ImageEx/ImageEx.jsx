/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";

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
    const [ url, setUrl ] = useState("");
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ imgpreviews, setImgpreviews ] = useState([]);
    const [ progressPercent, setProgressPercent ] = useState(0);
    const imgRef = useRef();

    useEffect(() => {
        setUrl(!localStorage.getItem("url") ? "" : localStorage.getItem("url")); // ! 하나 = 비어 있으면 참
    }, []);

    const handleClickChange = (e) => {
        // map으로 만들기
        const files = Array.from(e.target.files); // fileList => ArrayList(배열)로 바꿔주기

        if(files.length === 0) {
            imgRef.current.value = "";
            return;
        }
 
        setUploadFiles(files);

        let promises = []; // 정의만
        
        promises = files.map(file => new Promise((resolve) => { // 새로운 프로미스를 생성해 배열에 넣기
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                // // 비동기(set)라 배열에 들어가기전에 덮어씌우기 때문에 이미지를 2개 넣어도 마지막 하나밖에 안뜸 => 프로미스 배열 정의하고 resolve를 매개변수로 넣어주기
                // setImgpreviews([...imgpreviews, e.target.result]);
                resolve(e.target.result);
            }

            fileReader.readAsDataURL(file);
        })); 

     // 이미지 하나당 하나의 fileReader만 가져야하기 때문에 fileReader 자체를 for문으로 돌려준다
        // for(let file of e.target.files) {
        //     promises = [...promises, new Promise((resolve) => { // 새로운 프로미스를 생성해 배열에 넣기
        //         const fileReader = new FileReader();
        
        //         if(e.target.files.length === 0) {
        //             return;
        //         } 
        
        //         fileReader.onload = (e) => {
        //             // // 비동기(set)라 배열에 들어가기전에 덮어씌우기 때문에 이미지를 2개 넣어도 마지막 하나밖에 안뜸 => 프로미스 배열 정의하고 resolve를 매개변수로 넣어주기
        //             // setImgpreviews([...imgpreviews, e.target.result]);
        //             resolve(e.target.result);
        //         }
    
        //         fileReader.readAsDataURL(file);
                
        //     })]; 

        // }

 // 프로미스 = 비동기 / Promise.all(스테틱 메소드) 을 써주면 동기
 // 실행 순서 = 들어간 순서 (지정된 자리에 들어감)
        Promise.all(promises)  // => 기존의 프로미스들을 순서대로 실제 실행
        .then(result => {
            setImgpreviews(result);
        });
    }

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        console.log(uploadFiles);
        const storageRef = ref(storage, `files/test/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            }, 
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url", url);
                    setUrl(url);
                    setImgpreviews([]); // 업로드가 되면 필요없기 때문에 빈값 넣어줌
                })
            }
        );
    }

    return (
        <div css={layout}>
                <div css={imageLayout}>
                    <img src={url} alt="" />
                </div>
            {imgpreviews.map((imgpreview, index) => 
                <>
                    <div key={index} css={imageLayout}>
                        <img src={imgpreview} alt="" />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#dbdbdb"}/>  
                </>
            )}
        <input style={{display: "none"}} type="file" ref={imgRef} onChange={handleClickChange} multiple={true}/>
        <button onClick={() => imgRef.current.click()}>이미지 불러오기</button>
        <button onClick={handleImageUpload}>이미지 업로드</button>
    </div>
    );
}

export default ImageEx;