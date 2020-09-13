import styled, { createGlobalStyle } from "styled-components";

export const Modifier = createGlobalStyle`
    .round {
        border-radius: 34px;
    }
    .round:before {
        border-radius: 50%;
    }

    .switch {
        position: relative;
        display: flex;
        width: 100%;
        height: 22px;
    }
    
    .switch {
        input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        /* width: 100%; */
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 0;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        margin-left: 4px;
    
        /* margin: 0 4px 0 4px; */
    }

    .is_allowed .slider {
        background-color: #ff0058;
        border-radius: 50%
    }

    .is_allowed input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    .is_allowed .slider:before {
        /* -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px); */
        /* transform: translateX(100); */
        /* left: 100%; */
        left: calc(100% - 24px);
    }
    
    input:checked + .slider {
        background-color: #ff0058;
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }
    
    input:checked + .slider:before {
        /* -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px); */
        /* transform: translateX(100); */
        /* left: 100%; */
        left: calc(100% - 24px);
    }
    
    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }
    
    .container {
        position: relative;
        /* background-color: yellow; */
        width: 45px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: .2rem;
    }
`;

export const SwitchToggleContainer = styled.div`
    position: relative;
    /* background-color: yellow; */
    width: 45px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Switch = styled.label`
    position: relative;
    display: flex;
    width: 100%;
    height: 22px;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &::before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 0;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        margin-left: 4px;
    }
`;

export const HiddenInput = styled.input`
    position: absolute;
    opacity: 1;
    width: 100px;
    height: 100px;

    &::checked ~ ${Slider} {
        background-color: #2196f3;
    }

    &::checked ~ ${Slider}::before {
        left: calc(100% - 24px);
    }

    &::focus ~ ${Slider} {
        box-shadow: 0 0 1px #2196f3;
    }
`;
