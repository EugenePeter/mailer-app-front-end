import styled, { css } from "styled-components";
export const mainColorGreen = "#3BC453";
const signInBtn = css`
    border-radius: 4px;
    background-color: #ff0058f;
    &:hover {
        background-color: #ff0058;
        color: #fff;
        border: 1px solid #3bc453;
    }
`;

const inverse = css`
    border-radius: 4px;
    background-color: #ff0058 !important;
    color: #fff;
    border: 2px solid #fff !important;
    margin-bottom: 3rem;

    &:hover {
        background-color: #ff5892;
        color: #ff0058f;
    }
`;

const defaultStyle = css`
    border-radius: 4px;
    background-color: #ff0058;
    &:hover {
        background-color: #ff5892;
        color: #ff0058f;
    }
`;

const registerBtn = css`
    border-radius: 4px;
    background-color: #ff0058;
    &:hover {
        background-color: #ff0058;
        color: #fff;
        border: 1px solid #3bc453;
    }
`;

const shorter = css`
    height: 5px !important;
`;

const bigger = css`
    height: 4.4rem !important;
`;

const apply = css`
    height: 5px !important;
    border: 2px solid #ff0058 !important;
    background-color: none !important;
`;

const getButtonStyles = (props) => {
    if (props.signin) {
        return signInBtn;
    }

    if (props.register) {
        return registerBtn;
    }

    if (props.default) {
        return defaultStyle;
    }

    if (props.shorter) {
        return shorter;
    }

    if (props.apply) {
        return apply;
    }

    if (props.bigger) {
        return bigger;
    }

    if (props.inverse) {
        return inverse;
    }
};

export const GlobalButton = styled.button`
    width: 100%;
    /* height: 60px; */
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;

    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer!important;
    display: ${({ isActive }) => (isActive ? "none" : "inline-block")};

    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background-color: #ff0058;
    border-radius: 8px;

    /* 
    -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1); */

    box-sizing: border-box;

    /* &.inverted {
        background-color: #3bc453;
        color: black;
        border: 4px solid black;
        &:hover {
            background-color: #3bc453;
            color: white;
            border: none;
        }



    } */

    ${getButtonStyles}
`;

export const ButtonWrapper = styled.div`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    align-self: flex-end;
    cursor: pointer;

    -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-sizing: border-box;
`;
