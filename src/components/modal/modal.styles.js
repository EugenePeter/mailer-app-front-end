import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* cursor: pointer; */
`;

export const ModalInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: #fff;
    box-sizing: border-box;

    margin-top: 25%;

    border-radius: 0.5rem;

    padding: 0 0 3rem 0;

    @media screen and (min-width: 992px) {
        max-width: 50rem;
    }
    z-index: 1000;

    h2 {
        align-self: flex-end;
        top: 0;
        padding: 0;
        margin: 1rem 1rem 0 0;
        cursor: pointer;
    }

    h1,
    h3 {
        margin: 0;
    }
`;

export const RangeWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;

    padding: 2%;

    h2 {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;
    }

    small {
        margin-top: 2rem;
    }
`;
