import React from 'react';
import { ErrorMessagePropTypes } from '../../types';
import { AlertTriangle as ErrorIcon } from 'tabler-icons-react';
import { StyledErrorMessageBox, StyledErrorText } from './ErrorMessageStyles';
import { pink } from '../../resources/styles/variables';

const ErrorMessage: React.FC<ErrorMessagePropTypes> = ({ errorMessage }) => {
    return (
        <StyledErrorMessageBox data-testid={'error-container'}>
            <ErrorIcon data-testid={'error-icon'} size={30} color={pink} />
            <StyledErrorText data-testid={'error-text'}>{errorMessage}</StyledErrorText>
        </StyledErrorMessageBox>
    );
};

export default ErrorMessage;
