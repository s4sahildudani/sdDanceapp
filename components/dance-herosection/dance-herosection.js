
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import danceHeroImage from './images/dancebackground.avif';

function danceherosection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${danceHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
       
      }}
    >
      <Container>
        <Typography variant="h6"  sx={{ color: 'white',pt :2, mr :5}}>
          Join our dance community today!
        </Typography>
        <Box  mt={1} sx={{textAlign:"left"}}>
          <Button variant="contained" color="primary" href="#classes">Join Now</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default danceherosection;
