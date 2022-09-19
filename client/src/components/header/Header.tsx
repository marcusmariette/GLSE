import { StyledHeaderBox, StyledTextButton } from './HeaderStyles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyledHeaderBox>
            <StyledTextButton onClick={() => navigate('/')}>{'GLSE'}</StyledTextButton>
        </StyledHeaderBox>
    );
};

export default Header;
