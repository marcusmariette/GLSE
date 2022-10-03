import { Grid, Box } from '@mui/material';
import { orange } from '../resources/styles/variables';
import NLPSearchBar from '../components/NLPTestSearch/NLPTestSearch';




const NLPTesting: React.FC = () => {
    return (
        <Box className='section section-help'>
            <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Grid item xs={12}>
                    <h3 style={{ color: orange }}>{'NLP Functions'}</h3>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'1. Segmentation - Break input down into sentences'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'2. Tokenisation - Break input down into words'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'3. Remove Stop words - Remove stop words for easiest understanding, stop words make words more cohesive'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'4. Stemming - Prefix and suffix words with same meaning word (play, plays, playing etc.)'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'5. Lemmatisation - Base words for gender/mood'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1%' }}>
                    <h4>{'6. Speech tagging - Recognise noun, verb, adjective, preposition'}</h4>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '6%' }}>
                    <h4>{'7. Tag Named Entities - Make NLP understand famous names, countries, movies etc. so they are not picked up'}</h4>
                </Grid>
                <Grid item xs={12}>
                    <NLPSearchBar />
                </Grid>
                
            </Grid>
        </Box>
    );  
};

export default NLPTesting;
