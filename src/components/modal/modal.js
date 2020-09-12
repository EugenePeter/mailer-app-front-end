import React from 'react';

const Modal = () => {
    return (
        <FormContainer>
            <Title>
                <h2> Update Password</h2>
            </Title>
            <GroupContainer>
                <FormInput
                    onChange={handleEmail}
                    name="email"
                    type="text"
                    value={email}
                    label="email"
                />
                <FormInputSpan value={email}>email</FormInputSpan>
            </GroupContainer>
            <ButtonWrapper>
                <GlobalButton onClick={handleSubmit} signin>
                    Sign In
                </GlobalButton>
            </ButtonWrapper>
        </FormContainer>
    )
}

export default Modal