import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavbarComponent = ({ onLogout, user }) => {
  return (
    <AppBar position="static" elevation={3} style={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieApp Dashboard
        </Typography>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main', marginRight: 1 }}>{user.username[0].toUpperCase()}</Avatar>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {user.username}
            </Typography>|
          </div>
        )}
        <Button
          color="inherit"
          startIcon={<ExitToAppIcon />}
          onClick={onLogout}
          sx={{ marginLeft: 2 }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;