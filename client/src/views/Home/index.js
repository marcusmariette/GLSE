import { Grid, Box, Button } from "@mui/material";

import Search from "../../components/Search";

const Home = () => {
    return ( 
        <Box className="section section-home">
            <Grid container sx={{ maxWidth: "1199px", margin: "0 auto" }}>
                <Grid xs={12}>
                    <Search />
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Home;