import { Search as SearchIcon } from "tabler-icons-react";
import {
    StyledSearchBarBox,
    StyledSearchBarTextField,
} from "./SearchBarStyles";

const SearchBar: React.FC = () => {
    return (
        <StyledSearchBarBox className="search-container">
            <SearchIcon size={32} color="#073B4C" />
            <StyledSearchBarTextField placeholder="Lorem ipsum dolor sit amet." />
        </StyledSearchBarBox>
    );
};

export default SearchBar;
