import { IconButton } from "@mui/material";
import { Menu2 } from "tabler-icons-react";
import { StyledHeaderBox } from "./HeaderStyles";

const Header: React.FC = () => {
    return (
        <StyledHeaderBox>
            <IconButton>
                <Menu2 color="white" width={48} height={48} />
            </IconButton>
            <h4>GLSE</h4>
        </StyledHeaderBox>
    );
};

export default Header;
