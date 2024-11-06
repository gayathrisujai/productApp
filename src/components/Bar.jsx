import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <div><Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{backgroundColor:'ThreeDLightShadow'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black',fontSize: '30px', fontFamily:'cursive' }}>
          Product App
        </Typography>
        <Link to={'/'}><Button sx={{ color: 'black', backgroundColor: '#FEFAE0', margin: 2, fontWeight: 20, fontSize: '18px',padding: '12px 24px' }}>Home</Button></Link>
        <Link to={'/add'}><Button sx={{ color: 'black', backgroundColor: '#FEFAE0', margin: 2, fontWeight: 20, fontSize: '18px',padding: '12px 24px' }}>Add</Button></Link>
      </Toolbar>
    </AppBar>
  </Box><br /><br /></div>
  )
}

export default Bar