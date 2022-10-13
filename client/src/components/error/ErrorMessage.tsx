import React from 'react';
import { ErrorMessagePropTypes } from '../../types';
import { AlertTriangle as ErrorIcon } from 'tabler-icons-react';
import { InfoCircle as InfoIcon } from 'tabler-icons-react';
import { StyledErrorMessageBox, StyledErrorText, StyledInfoText } from './ErrorMessageStyles';
import { pink, orange } from '../../resources/styles/variables';

const ErrorMessage: React.FC<ErrorMessagePropTypes> = ({ errorMessage, errorSeverity }) => {
    const renderErrorMessage = () => {
        return (
            <StyledErrorMessageBox data-testid={'error-container'}>
                <ErrorIcon data-testid={'error-icon'} size={30} color={pink} />
                <StyledErrorText data-testid={'error-text'}>{errorMessage}</StyledErrorText>
            </StyledErrorMessageBox>
        );
    };

    const renderInfoMessage = () => {
        return (
            <StyledErrorMessageBox data-testid={'info-container'}>
                <InfoIcon data-testid={'info-icon'} size={30} color={orange} />
                <StyledInfoText data-testid={'info-text'}>{errorMessage}</StyledInfoText>
            </StyledErrorMessageBox>
        );
    };

    return <>{errorSeverity === 'error' ? renderErrorMessage() : renderInfoMessage()}</>;
};

export default ErrorMessage;
