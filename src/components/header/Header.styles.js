import styled from 'styled-components';


export const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #EAF0F1;

`;

export const TwoColumnWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    // background-color: blue;

`;

export const Blocks = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    // background-color: pink;
    margin: 4px;
`;

export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: red;


    h1 {
        margin: 0;
    }
    h1,h2,h3 {
        text-align: center;
    }
    
`;
