import React from 'react';

import { HeaderContainer, TwoColumnWrapper, Blocks, HeaderTextContainer } from './Header.styles'

import { ModfierNarrowWidth } from '../../global-styles/styles'

import Login from '../login/Login';

const Header = () => {
    return (
        <HeaderContainer>
            <TwoColumnWrapper>
                <Blocks>
                    <HeaderTextContainer>
                        <h1>MAILER PRO</h1>
                        <h3>Designed and developed by team DNA Micro.</h3>
                    </HeaderTextContainer>
                </Blocks>
                <Blocks>
                    <ModfierNarrowWidth>
                        <Login />
                    </ModfierNarrowWidth>
                </Blocks>
            </TwoColumnWrapper>
        </HeaderContainer>
    )
}

export default Header;