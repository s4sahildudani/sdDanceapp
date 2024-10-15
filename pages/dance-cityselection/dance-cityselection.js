/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Box, Typography, Button, Grid, TextField, Card, CardContent } from '@mui/material';
import hiphopImage from './images/hiphopdanceStyle.jpg';

const cities = ['Gondia', 'Nagpur', 'Pune', 'Mumbai'];

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
    { id: 3, title: 'Hip-Hop for Kids', image: hiphopImage },
    { id: 4, title: 'Advanced Hip-Hop', image: hiphopImage },
  ],
  'Mumbai': [
    { id: 3, title: 'Hip-Hop for Kids', image: hiphopImage },
    { id: 4, title: 'Advanced Hip-Hop', image: hiphopImage },
  ]
  
};

function DanceCitySelection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedCity, setSelectedCity] = useState(null);
  const [classes, setClasses] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(searchValue)
    );
    setFilteredCities(filtered);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setClasses(cityDanceClasses[city] || []);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}>
        Select Your City for Dance Classes
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', mb: 4, width: '80%', maxWidth: '400px', alignItems: 'center' }}>
        <TextField
          label="Search City"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ flexGrow: 1, backgroundColor: '#fff', borderRadius: '5px' }}
        />
      </Box>

      {/* City Cards */}
      <Grid container spacing={3} justifyContent="center">
        {filteredCities.length ? (
          filteredCities.map((city) => (
            <Grid item xs={12} key={city}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                  width: '100%',
                  maxWidth: '400px',
                  margin: 'auto',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                    {city}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleCityClick(city)}
                    sx={{
                      width: '100%',
                      backgroundColor: 'black',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#333',
                      },
                    }}
                  >
                    See Dance Classes in {city}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ mt: 2, color: '#888' }}>No cities found</Typography>
        )}
      </Grid>

      {/* Display Classes for Selected City */}
      {selectedCity && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Dance Classes in {selectedCity}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {classes.map((danceClass) => (
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
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default DanceCitySelection;
