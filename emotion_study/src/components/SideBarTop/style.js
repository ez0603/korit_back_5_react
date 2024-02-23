import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: ${isShow ? "0px" : "-80px"};
    right: 0;
    z-index: 99;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: -1px 0px 2px #00000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateX(-50%);
    right: 0;
    bottom: -15px;
    width: 50px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius : 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const menuList = css`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 50px;
    margin: 10px;
    background-color: white;
    text-decoration: none;
    color: black;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;