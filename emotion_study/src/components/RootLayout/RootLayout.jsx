/** @jsxImportSource @emotion/react */
import * as S from "./style";

function RootLayout({ children }) {
    return (
        <>
        <div css={S.backgroundLayout}></div>
        <div css={S.layout}>
            {children}
        </div>
        </>
    );
}

export default RootLayout;

// childern 의  역할
{/* <Routes>
        <Route path='/mypage' element={<>마이페이지</>}/>
        <Route path='/board' element={<>게시판</>}/>
        <Route path='/notice' element={<>공지사항</>}/> 
    </Routes> */}

{/* <div css={S.backgroundLayout}></div>  = 뒷배경 역할(흰색 영역) 뒷배경이 움직이면 안되기 때문에 position=fixed로 잡아줌
    뒷배경 위에 요소를 만든다고 생각 하면 됨 
    실제 layout = <div css={S.layout}>
                      {children}
                 </div>
    div를 따로 만들어서 위로 빼줘야함*/}