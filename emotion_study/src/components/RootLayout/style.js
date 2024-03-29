import { css } from "@emotion/react";

export const backgroundLayout = css`
    position: fixed;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    z-index: -1;
    margin: 0px auto;
    width: 1000px;
    height: 100vh;
    background-color: white;

    overflow-y: auto;
`;

export const layout = css`
    margin: 0px auto;
    width: 1000px;
`;