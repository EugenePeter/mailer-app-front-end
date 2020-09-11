import React from 'react';
import { Modifier, SwitchToggleContainer, Switch, Slider, HiddenInput, } from './SwitchToggle.styles';

const SwitchToggle = ({handleChange}) => {
    return (
        <>
            <Modifier />
             {/* <SwitchToggleContainer>
                 <Switch />
                 <HiddenInput type="checkbox" />
                 <Slider className="round"/>

             </SwitchToggleContainer> */}
        <div className="container" onChange={handleChange}>
            <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
            </label>
        </div>
        </>
    )
}

export default SwitchToggle;