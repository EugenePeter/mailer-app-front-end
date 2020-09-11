import styled, { css } from "styled-components";

export const Strip = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // background-color: #fff;
    border-radius: 0.6rem;
    padding: 0.8rem;
    box-sizing: border-box !important;

    height: 4rem;

    h1 {
        box-sizing: border-box;
    }
`;

export const StripContainer = styled.div`
    width: 96%;
    // background-color: #red;
    margin-bottom: 0.8rem;

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
    max-width: 16rem;
    height: 2.4rem;
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
    width: 10rem;
    height: 2.2rem;
    background-color: #ff0058;
    outline: none;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
    box-sizing: border-box;
`;

export const EmailsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
`;
