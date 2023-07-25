import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import "./searchDate.css";
const SearchDate = () => {
    const [searchDate, setSearchDate] = useState('');
    const navigate = useNavigate();

    // const handleChange = (event) => {
    //   const {name,value} = event.target;
    //   setSearchDate({...searchDate, [name]: value});
     
    // }

    const handelDateSubmit = (event) =>{
      event.preventDefault();

      navigate(`/students/${searchDate}`);
    }
  return (

    <div className='wrapperD'>
    <div className='titleD'>
Enter the month and year to search (MM-YYYY)
    </div>
    <div className='formD'>
        <div className='inputfieldD'>
        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='date'
                            id="outlined-basic"
                            // label="date"
                            variant="outlined"
                            placeholder='Date (MM-YYYY)'
                            // value={form.email}
                            onChange={(event) => setSearchDate(event.target.value)}
                        />
              </div>
      <div className='inputfieldD'>

          <input className='btnD' type='submit' onClick={handelDateSubmit} value="Submit" name='submit' />     
      </div>
    </div>
    </div>
  )
}

export default SearchDate