import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
// import Navbar from './navbar';
import "./home.css";

const Home = () => {
  return (
    <>
    <div className='homePage'>
    <div className='titleH'>Welcome</div>
<Button  >
<Link className='btnH' to='/payfee' >Pay Fee</Link>
</Button>
<Button >
<Link className='btnH' to='/login' >Admin</Link>
</Button>
    </div>
    </>
  )
}

export default Home