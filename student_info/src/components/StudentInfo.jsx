function StudentInfo({ title, text }) {
    // const [ name, setName ] = useState("");
    // const [ age, setAge ] = useState(0);
    // const [ address, setAddress ] = useState("");



    return (
        <>
        <h1>{title}: {text} </h1>

            {/* <h1>이름 : {name} </h1>
            <h1>나이 : {age}</h1>
            <h1>주소 : {address}</h1>
            <InfoInput setName={setName} setAge={setAge} setAddress={setAddress}/> */}
        </>
    );
}

export default StudentInfo;