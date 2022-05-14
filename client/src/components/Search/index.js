import { Box, TextField } from "@mui/material";
import { Search as SearchIcon } from "tabler-icons-react";

const Search = () => {
    return ( 
        <Box className="search-container">
            <SearchIcon size={32} color="#073B4C" />
            <TextField placeholder="Lorem ipsum dolor sit amet." className="search-field" />
        </Box>
     );
}
 
export default Search;