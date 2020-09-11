import React from 'react';

import { ContainerNarrow } from '../../global-styles/styles';
import { RightPanelBtn } from './RightSideBarInner.styles'

const RightSideBarInner = () => {
    return (
        <ContainerNarrow>
            <h3>User Details</h3>
            <h5>Danillo Quisada</h5>
            <RightPanelBtn>Update User</RightPanelBtn>
        </ContainerNarrow>
    )
}

export default RightSideBarInner;