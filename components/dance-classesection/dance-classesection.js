import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import dancehiphop from './images/dancehiphop.jpg';
import dancepopping from './images/dancepopping.jpg';
import dancesalsa from './images/dancesalsa.jpg';
import dancecontemprorary from './images/dancecontemprorary.jpg';

const danceClasses = [
  { style: 'Hip-Hop', image: dancehiphop },
  { style: 'Popping', image: dancepopping },
  { style: 'Salsa', image: dancesalsa },
  { style: 'Contemporary', image: dancecontemprorary },
];

function DanceClassesSection() {
  return (
    <Box id="classes" sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Our Dance Classes
        </Typography>
        <Grid container spacing={4}>
          {danceClasses.map(({ style, image }) => (
            <Grid item xs={12} md={3} key={style}>
              <Card sx={{ boxShadow: 4, borderRadius: '15px' }}>
                <CardMedia
                  component="img"
                  height="310px"
                  image={image}
                  alt={style}
                  sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {style}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ color: '#666' }}>
                    Join our {style} class and master the art of dance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default DanceClassesSection;
