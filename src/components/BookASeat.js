import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';



const BookASeat = () => {
  const [form, setForm] = useState({
    name: '',
    destination: '',
    department: '',
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit =  (event) => {
    event.preventDefault();

    
      // Create form data
      const {name, destination, department} = form;
      // Send the form data to the server
       axios.post('/students', form)
      .then(res => {
        console.log(res);
        alert(res.data.message);
        setForm({ 
          name: '',
          destination: '',
          department: '',
        });
        // window.location.reload();
      })
     .catch (function(error) {
      console.error(error);
    });
  };


  return (
    <>
      <Container>
        <form method='POST'>
          <Wrap>
            <TextBox>
              <span>Name</span>
              <input
                type="text"
                name='name'
                id='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Enter your Name'
              />
            </TextBox>
            <TextBox>
              <span>Destination</span>
              <input
                type="text"
                name='destination'
                id='destination'
                value={form.destination}
                onChange={handleChange}
                placeholder='Enter your Destination'
              />
            </TextBox>
            <TextBox>
              <span>Department</span>
              <input
                type="text"
                name='department'
                id='department'
                value={form.department}
                onChange={handleChange}
                placeholder='Enter your Department'
              />
            </TextBox>
           
            <Submit>
              <input type='submit' onClick={handleFormSubmit} value="Submit"  />
            </Submit>
          </Wrap>
        </form>
      </Container>
    </>
  )
}


export default BookASeat;


const Container = styled.div`
    background-color: #F5EDF0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-itmes: center;
`
const Wrap = styled.div`
  position: relative;
  display: flex;
  margin: 70px 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #7d7d98;
  height: 70vh;
  border: 2px solid black;
  border-radius: 30px;
`
const TextBox = styled.div`

    {
  display: flex;
  flex-direction: column;
}

span {
  font-weight: bold;
  marging-top: 10px;
  ${'' /* margin-bottom: 1px; */}
}

 input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  margin-left: 120px; /* Adjust this value as needed */
}



`
const Submit = styled.div`
    input{
    
    text-decoration: none;
    position:relative;
    top:15px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 26px;
    padding: 8px;
    font-weight: bold;
    background-color: #bebebe;
    cursor:pointer;
    }
    input:hover{
    background-color: rgb(147 137 137);
   }
   
`
