import { Box, IconButton } from "@mui/material"
import { Menu2 } from "tabler-icons-react";


const Header = () => {
    return (
        <Box className="header">
            <IconButton>
                <Menu2 color="white" width={48} height={48} />
            </IconButton>
            <h4>GLSE</h4>
        </Box>
     );
}
 
export default Header;