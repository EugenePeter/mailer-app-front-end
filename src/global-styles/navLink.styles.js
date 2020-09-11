import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
`;

const fullWidth = css`
    width: 100%;
`;

const landingPage = css`
    color: #fff !important;
`;

const getStyledLink = (props) => {
    if (props.admin) {
        return fullWidth;
    }

    if (props.landingPage) {
        return landingPage;
    }
};

export const StyledLink = styled(NavLink)`
    text-decoration: none;

    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    width: 33.33%;
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
    color: #ff0058;

    &.active {
        background-color: #ff0058;
        color: #fff;
    }
    ${getStyledLink}

    ${fullWidth}
`;

export const NavBarItems = styled.div`
    box-sizing: border-box;
    font-size: 0.8rem;
`;
