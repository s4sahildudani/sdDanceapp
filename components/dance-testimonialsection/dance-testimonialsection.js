
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  { name: 'Alex', quote: 'This studio transformed my dance skills!' },
  { name: 'Maria', quote: 'I love the energy of every class!' },
  { name: 'Chris', quote: 'The instructors are top-notch!' },
];

function danceTestimonialsection() {
  return (
    <Box id="testimonials" sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          What Our Students Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map(({ name, quote }) => (
            <Grid item xs={12} md={4} key={name}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">{name}</Typography>
                  <Typography variant="body2" align="center">"{quote}"</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default danceTestimonialsection;
