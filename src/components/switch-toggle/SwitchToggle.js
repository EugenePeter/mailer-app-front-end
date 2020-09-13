import React from "react";
import {
    Modifier,
    SwitchToggleContainer,
    Switch,
    Slider,
    HiddenInput,
} from "./SwitchToggle.styles";

const SwitchToggle = ({ handleChange, checked }) => {
    return (
        <>
            <Modifier />
            {/* <SwitchToggleContainer>
                 <Switch />
                 <HiddenInput type="checkbox" />
                 <Slider className="round"/>

             </SwitchToggleContainer> */}
            <div className={checked ? "container is_allowed" : "container"}>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    );
};

export default SwitchToggle;
