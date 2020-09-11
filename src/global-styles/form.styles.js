import styled, { css } from "styled-components";

export const FormInner = styled.div`
    transform: ${({ clicked }) => (clicked ? "translateY(-100%)" : "null")};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    width: 100%;
    margin: 0 auto;
    box-shadow: 15px 20px 70px -10px;
    background-color: white;
    box-sizing: border-box;
`;

const subColor = "grey";
const mainColor = "black";
export const mainColorGreen = "#3BC453";

const shrinkLabelStyles = css`
    top: 12px !important;
    font-size: 12px;
    color: ${mainColor};
`;

const success = css`
    color: #9000cf;
`;

const getTextColor = (props) => {
    if (props.success) {
        return success;
    }
};

export const GroupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    max-height: 10rem;

    flex-shrink: 1;
    flex-grow: 1;
    align-items: center;
    margin-bottom: 0.4rem !important;
    width: 100%;
    input[type="password"] {
        letter-spacing: 0.3em;
    }

    h2 {
        text-align: center;
        ${getTextColor}
    }

    @media screen and (min-width: 992px) {
        max-width: 100%;
    }
`;

export const RadioInput = styled.input``;

export const Span = styled.span``;

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* background-color: yellow; */
    width: 100% !important;

    cursor: pointer;
    position: relative;

    ${Span} {
        color: red;
        padding: 0.5rem 0.25rem;
    }

    .titleLabel {
        /* background-color: yellow; */
        text-align: center;
        width: 100%;
        height: 32px;
    }

    .titleRadioInputContainer {
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .titleCheckboxItems {
        display: flex !important;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        border: 0.5px solid black;
        box-sizing: border-box;
        width: 33.33%;
        height: 70px;
        padding-left: 26px;

        label {
            margin-left: 26px;
        }
        &__Mr {
            background-color: pink;
        }
        &__Mrs {
            background-color: pink;
        }
        &__Miss {
            background-color: pink;
        }
        /* background-color: green; */
    }

    .titleCheckboxItems:nth-of-type(2) {
        border-right: none;
        border-left: none;
    }

    ${RadioInput} {
        height: 25px;
        width: 25px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border: 1px solid #34495e;
        border-radius: 4px;
        outline: none;
        transition-duration: 0.2s;
        background-color: whitesmoke;
        cursor: pointer;
        user-select: none;
    }

    ${RadioInput}:checked {
        border: 2px solid #41b883;
        background-color: #3bc453;
        outline: none;
        transform: scale(1.4);
    }
`;

export const FormContainer = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    background-color: #fff;

    border-radius: 1rem;
    padding: 2rem;
    box-sizing: border-box !important;

    h2 {
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width: 992px) {
        padding: 1.6rem;
        box-sizing: border-box;
    }

    -webkit-box-shadow: 0px 71px 73px -37px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 71px 73px -37px rgba(0,0,0,0.28);
box-shadow: 0px 71px 73px -37px rgba(0,0,0,0.28);
`;

export const FormTitle = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1.705882352941176rem;
    margin-bottom: 1.705882352941176rem;
`;

const huntGigsInput = css`
    height: 5rem !important;
    margin-bottom: 2rem;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

const getInputStyles = (props) => {
    if (props.huntGigs) {
        return huntGigsInput;
    }
};

export const FormInput = styled.input`
    position: relative;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 20px 10px 18px 26px;
    margin-bottom: 4px;
    /* display: block; */
    width: 100%;
    border: none;
    /* border-radius: 4px; */
    border-bottom: 1px solid ${subColor};
    /* margin: 15px 0 15px 0; */

    box-sizing: border-box;

    font-size: 0.8rem;

    &:focus {
        outline: blue;
        border: solid 2px #ff0058;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }

    ${getInputStyles}
`;

export const FormTextArea = styled.textarea`
    position: relative;
    // background-color: red;
    color: ${subColor};
    font-size: 18px;
    padding: 20px 10px 18px 26px;
    margin-bottom: 4px;
    height: 12rem;
    width: 100%;
    border: none;
    /* border-radius: 4px; */
    border-bottom: 1px solid ${subColor};
    /* margin: 15px 0 15px 0; */

    box-sizing: border-box;

    font-size: 0.8rem;

    &:focus {
        outline: blue;
        border: solid 2px #ff0058;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }

`;


export const ErrorMessage = styled.div`
    color: #ff5d93;
    font-size: 0.8rem;
`;

const ha = (props) => {
    if (props.value) {
        return shrinkLabelStyles;
    } else {
        return;
    }
};

export const FormInputSpan = styled.label`
    display: ${({ label, value }) => (label && value ? "none" : "")};
    display: flex;
    flex-direction: column;
    color: ${subColor};
    /* background-color: red; */
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 26px;
    top: 30px;
    /* transform: translateY(200px) */
    transition: 300ms ease all;

    font-size: 0.8rem;

    &.shrink {
        ${shrinkLabelStyles}
    }

    ${ha}
`;

export const ButtonWrapper = styled.div`
    position: relative;
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    align-self: flex-end;
    cursor: pointer;

    -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-sizing: border-box;
`;

export const MockSelect = styled.div`
    position: relative;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    /* display: block; */
    width: 100%;
    height: 5rem;
    border: none;
    /* border-radius: 4px; */
    border-bottom: 1px solid ${subColor};
    /* margin: 15px 0 15px 0; */

    box-sizing: border-box;

    font-size: 0.8rem;
`;

export const Select = styled.select`
  width: 100%;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  margin-left: 10px;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;
