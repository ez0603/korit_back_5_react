/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx2() {
    const uploadFilesId = useRef(0); // id 자동증가를 위해 상태선언
    const [ oldFiles, setOldFiles ] = useState([]); // 여러개의 값들이 들어갈 것이기 때문에 배열 , 기존에 저장되어 있는 파일 = oldFiles
    const [ newFiles, setNewFiles ] = useState([]); // 업로드 할 파일 = newFiles
    const imgFileRef = useRef(); // 객체를 선택하기 위한 Ref는 비워둠

    useEffect(() => { // localStorage에서 값을 가지고 오는 용도
        setOldFiles(!localStorage.getItem("oldFiles") ? [] : JSON.parse(localStorage.getItem("oldFiles")));
    }, []); // 비어있으면 빈배열로 값을 넣어주고 데이터가 있다면 json으로 넘겨준다

    const handleFileChange = (e) => {
        const loadFiles = Array.from(e.target.files); // Array.from = fileList는 map, filter들을 못쓰기 때문에 배열들을 다 옮겨주는 역할(파일 변환)

        if(loadFiles.length === 0) { // 아무 값도 들어오지 않았기 때문에 취소, 취소버튼 눌렀을 때 = value를 비워주고 리턴
            imgFileRef.current.value = "";
            return;
        }

        const uploadFiles = loadFiles.map(file => { // 파일객체(loadFiles)를 하나씩 꺼내서 객체로 바꿔준 뒤 배열에 넣어줌
            return {
                id: uploadFilesId.current += 1,
                percent: 0,
                originFile: file,
                url: ""
            };
        });

        uploadFilesId.current = 0; // 초기화

        let promises = [];

        promises = uploadFiles.map(file => new Promise((resolve) => { 
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result);
            }

            fileReader.readAsDataURL(file.originFile);
        }));

        Promise.all(promises)
        .then(result => {
            setNewFiles(result.map((dataUrl, index) => {
                return {
                    ...uploadFiles[index],
                    preview: dataUrl
                };
            }));
        });        
    }

    const handleImageUpload = () => {
        const promises = newFiles.map(file => new Promise(resolve => {
            const storageRef = ref(storage, `files/test/${uuid()}_${file.originFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file.originFile);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setNewFiles(newFiles.map(sFile => {
                        return sFile.id !== file.id ? sFile : {
                            ...sFile, 
                            percent: Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        }
                    }));
                },
                (error) => {},
                () => {
                    getDownloadURL(storageRef).then(url => {
                        const newFile = {
                            ...file,
                            ["url"]: url
                        }
                        resolve(newFile);
                    })
                }
            );
        }));

        Promise.all(promises)
        .then((newFile) => {
            setOldFiles(newFile);
            localStorage.setItem("oldFiles", JSON.stringify(newFile));
        }).then(() => {
            setNewFiles([]);
        });
    }

    return (
        <div css={layout}>
            {oldFiles?.map(file => 
                <div key={file.id} css={imageLayout}>
                    <img src={file.url} alt="" />
                </div>
            )}
            {newFiles?.map(file => 
                <>
                    <div key={file.id} css={imageLayout}>
                        <img src={file.preview} alt="" />
                    </div>
                    <Line percent={file.percent} strokeWidth={4} strokeColor={"#dbdbdb"}/>
                </>
            )}
            
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange}/> 
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx2;

// 다른 사람의 코드를 볼때
// 1. 상태선언, 변수선언
// 2. 컴포넌트(return) 부분


//----------------------------------------------
// multiple = 다중선택
