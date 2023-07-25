import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {  Link } from "react-router-dom";


 function navbar() {
  
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor: '#fec107',marginTop:'10px',borderRadius:'5px',  boxShadow: '5px 9px 34px 17px rgba(143,143,77,1)',
        '-webkit-box-shadow': '5px 9px 34px 17px rgba(143,143,77,1)',
        '-moz-box-shadow': '5px 9px 34px 17px rgba(143,143,77,1)'}} position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,  fontSize:' 24px', fontWeight: '700', color: '#fec107' }}>
          <Link to='/' className='text-white'  style={{ textDecoration: 'none' }} >
          Private Bus
          </Link>
          </Typography>
         
          {/* <Link to='/login'className='text-white'>
          <Button color="inherit">About</Button>

          </Link>
          <Link to='/register'className='text-white'>
          <Button color="inherit">Contact</Button>

          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default navbar;