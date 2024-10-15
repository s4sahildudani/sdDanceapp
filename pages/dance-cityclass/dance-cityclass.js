import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import hiphopImage from './images/hiphopdanceStyle.jpg';

const cityDanceClasses = {
  'Gondia': [
    { id: 1, title: 'Beginner Hip-Hop', image: hiphopImage },
    { id: 2, title: 'Intermediate Hip-Hop', image: hiphopImage },
  ],
  'Nagpur': [
    { id: 3, title: 'Hip-Hop for Kids', image: hiphopImage },
    { id: 4, title: 'Advanced Hip-Hop', image: hiphopImage },
  ],
  'Pune': [
    { id: 5, title: 'Hip-Hop for Kids', image: hiphopImage },
    { id: 6, title: 'Advanced Hip-Hop', image: hiphopImage },
  ],
  'Mumbai': [
    { id: 7, title: 'Hip-Hop for Kids', image: hiphopImage },
    { id: 8, title: 'Advanced Hip-Hop', image: hiphopImage },
  ]
};

const DanceCityClass = () => {
  const { state } = useLocation();
  const { city } = useParams();
  const navigate = useNavigate();
  const selectedCity = state?.city || city;

  const classes = cityDanceClasses[selectedCity] || [];

  return (
    <Box sx={{ py: 6, textAlign: 'center' }}>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 4 }}>
        Back to City Selection
      </Button>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dance Classes in {selectedCity}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {classes.length > 0 ? (
          classes.map((danceClass) => (
            <Grid item xs={12} sm={6} md={4} key={danceClass.id}>
              <Card>
                <img
                  src={danceClass.image}
                  alt={danceClass.title}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {danceClass.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: '#888' }}>No classes available!</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default DanceCityClass;
