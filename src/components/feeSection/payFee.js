import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
// import GooglePayButton from '@google-pay/button-react';
import './payfee.css';


 const PayFee = () => {
    const [form, setForm] = useState({
        name: '',
        destination: '',
        department: '',
        date: '',
        fee: '',
        email: '',
        myImage: null,
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (event) => {
        setForm({ ...form, myImage: event.target.files[0] });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();


        // Create form data
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('destination', form.destination);
        formData.append('department', form.department);
        formData.append('date', form.date);
        formData.append('fee', form.fee);
        formData.append('email', form.email);
        formData.append('myImage', form.myImage);

        // Send the form data to the server
        axios.post('https://privatebusbackend.onrender.com/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log(res);
                alert("Successfully uploaded");
                setForm({
                    name: '',
                    destination: '',
                    department: '',
                    date: '',
                    fee: '',
                    email: '',
                    myImage: null,
                });
                // window.location.reload();
            })
            .catch(function (error) {
                console.error(error);
            });
    };


    return (
        <>
            <div className='wrapper'>
                <div className='title'>
                    Pay Fee
                </div>
                <div className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div className='inputfield'>
                        <label>Name<span style={{color:'red'}}>  *</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='name'
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                        <label>Destination<span style={{color:'red'}}>  *</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='destination'
                            id="outlined-basic"
                            label="Destination"
                            variant="outlined"
                            value={form.destination}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                        <label>Department<span style={{color:'red'}}>  *</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='department'
                            id="outlined-basic"
                            label="Department"
                            variant="outlined"
                            value={form.department}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                        <label>Date<span style={{color:'red'}}> **</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='date'
                            id="outlined-basic"
                            label="Date  (MM-YYYY)"
                            variant="outlined"
                            value={form.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                        <label>Fee<span style={{color:'red'}}>  *</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='fee'
                            id="outlined-basic"
                            label="Fee"
                            variant="outlined"
                            value={form.fee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                        <label>Email<span style={{color:'red'}}> **</span></label>
                        <TextField
                            sx={{ marginRight: 6 }}
                            size='small'
                            name='email'
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='inputfield'>
                            <label>Image</label>
                            <input type="file" name="myImage" onChange={handleFileChange} />
                        </div>

                       <div className='inputfield'>
                        <input type='submit' value='Submit' className='btn' />
                       </div>
                        </form>
                </div>
            </div>
          
        </>
    )
}


export default PayFee;