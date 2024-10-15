/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import danceLogo from './images/dance3Image.jpg';

function DanceHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="#contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component="a" href="#about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component="a" href="#login">
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <img src={danceLogo} alt="Logo" style={{ height: '50px', width: '110px' }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button sx={{ color: '#fff' }} href="/contact-us">Contact Us</Button>
          <Button sx={{ color: '#fff' }} href="/about-us">About Us</Button>
          <Button sx={{ color: '#fff' }} href="/login">Login</Button>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            edge="start"
            sx={{ color: 'white' }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {list}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DanceHeader;
