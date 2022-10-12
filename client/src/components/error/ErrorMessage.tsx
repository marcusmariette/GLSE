import React from 'react';
import { ErrorMessagePropTypes } from '../../types';
import { AlertTriangle as ErrorIcon } from 'tabler-icons-react';
import { StyledErrorMessageBox, StyledErrorText } from './ErrorMessageStyles';
import { pink } from '../../resources/styles/variables';

const ErrorMessage: React.FC<ErrorMessagePropTypes> = ({ errorMessage }) => {
    return (
        <StyledErrorMessageBox>
            <ErrorIcon size={30} color={pink} />
            <StyledErrorText>{errorMessage}</StyledErrorText>
        </StyledErrorMessageBox>
    );
};

export default ErrorMessage;
