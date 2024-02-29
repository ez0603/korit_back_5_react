import Mypage from "../pages/Mypage/Mypage";
import ImageEx from "../pages/ImageEx/ImageEx"
import ImageEx2 from "../pages/ImageEx2/ImageEx2";
import ImageEx3 from "../pages/ImageEx3/ImageEx3";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import BoardList from "../pages/BoardList/BoardList";


export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",   
        name: "공지사항",
        element: <>공지사항</>
    },
    {
        id: 4,
        path: "/image/ex",   
        name: "이미지 불러오기",
        element: <ImageEx />
    },
    {
        id: 5,
        path: "/image/ex2",   
        name: "다중 업로드",
        element: <ImageEx2 />
    },
    {
        id: 6,
        path: "/image/ex3",   
        name: "이미지 여러개 불러오기",
        element: <ImageEx3 />
    },
    {
        id: 7,
        path: "/board/write",   
        name: "게시글 작성",
        element: <BoardWrite />
    },
    {
        id: 8,
        path: "/board/list?page=1", // 무조건 1번페이지 부터시작해야하기 때문에 ?page=1    
        name: "게시글 목록",
        element: <BoardList />
    }
];
