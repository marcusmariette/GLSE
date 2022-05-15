import { Grid, Box } from "@mui/material";
import SearchBar from "../components/searchBar/SearchBar";

const Home: React.FC = () => {
    return (
        <Box className="section section-home">
            <Grid container sx={{ maxWidth: "1199px", margin: "0 auto" }}>
                <Grid xs={12}>
                    <SearchBar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
