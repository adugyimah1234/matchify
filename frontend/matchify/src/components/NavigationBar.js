import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container Width="sm">
          <Typography variant="h6" component="div" style={{ flexGrow: 'revert' }}>
            Study Groups
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/create-event">Create Event</Button>
          <Button color="inherit" component={Link} to="/study-groups">Groups</Button>
          <Button color="inherit" component={Link} to="/chat">Chat</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
