import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Strip = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // background-color: #pink;
    border-radius: 0.6rem;
    padding: 0.8rem;
    box-sizing: border-box !important;

    height: 4rem;

    h1 {
        box-sizing: border-box;
    }
`;

export const StripContainer = styled.div`
    width: 96%!important;
    // background-color: red;
    margin-bottom: 0.8rem;
    height: 4rem;
    -webkit-box-shadow: 0px 29px 23px -30px rgba(101, 143, 171, 1);
    -moz-box-shadow: 0px 29px 23px -30px rgba(101, 143, 171, 1);
    box-shadow: 0px 29px 23px -30px rgba(101, 143, 171, 1);
    &:nth-child(1) {
        margin-top: 1.2rem;
    }
`;

export const Icon = styled.div`
    width: 0.6rem;
    height: 0.6em;
    border: solid 0.2em #69f2df;
    border-radius: 25px;
`;

const iconWrapperProps = css`
    width: 3.2rem;
    @media screen and (min-width: 993px) {
        width: 2rem;
    }
`;

const getWrapperStyles = (props) => {
    if (props.icon) {
        return iconWrapperProps;
    }
};

export const Wrapper = styled.div`
    width: 20rem;
    // height: 4rem;
    // background-color: blue; 
    margin-right: 2px;
    overflow: hidden;
    h4, h3, h4, h5 {
        margin: 0;
    }

    small {
    }
    @media screen and (min-width: 992px) {
        max-width: 50rem;
        ${getWrapperStyles}
    }
`;

export const View = styled.button`
    width: 8rem;
    height: 2.2rem;
    background-color: #ff0058;
    outline: none;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
    box-sizing: border-box;

    small {
        font-size: .6rem;
    }
`;

export const EmailsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 96%!important;
    margin-bottom: 0.8rem;


    &.active {
        background-color: #ff0058;
        color: #fff;
    }

`;

export const ToggleContainer = styled.div`
    display: flex;
    position-relative;
    width: 4 rem;
    background-color: green;
`;

export const Label = styled.label`
    position: relative;
    cursor: pointer;
    text-indent: -9999px;
    width: 200px;
    height: 100px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 90px;
        height: 90px;
        background: blue;
        border-radius: 90px;
        transition: 0.3s;
    }
     
    &:active:after {
        width: 130px;
    }
    
`;


export const Toggle = styled.input`
    position: relative;
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + ${Label} {
        background: #bada55;
    }

    &:checked + ${Label}:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }
`;





