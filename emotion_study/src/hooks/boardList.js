import { useMemo } from "react";

export function useLoadList() {

    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    }, []);

    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastID = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    return { boardList, size, firstId, lastID };
}

export function useLoadListByPageNumber(page) {

    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    }, [page]);
    const pageNumber = parseInt(page); // 주소창에 입력되는 값은 다 string이기 때문에 int로 바꿔주어야함

    const size = boardList.length;

    //5페이지마다 넘어가게 만들기
    const totalPageCount = size % 10 === 0 ? size / 10 : (size / 10) + 1; // 페이지 제일 마지막 번호
    const startPageNumber = pageNumber % 5 === 0 ? pageNumber - 4 : (pageNumber - (pageNumber % 5)) + 1 
    const endPageNumber = startPageNumber + 4 < totalPageCount ? startPageNumber + 4 : totalPageCount;

    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];
        
        for(let i = startPageNumber; i <= endPageNumber; i++) {
            newPageNumbers = [...newPageNumbers, i];
        }

        return newPageNumbers;
        
    }, [startPageNumber]); // startPageNumber가 바뀔때만 렌더링 되면 되기 때문에

    return { boardList, size, pageNumbers, totalPageCount };
}