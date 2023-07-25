import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import GooglePayButton from '@google-pay/button-react';



export const AddStudent = () => {
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
    axios.post('http://localhost:5000/upload', formData, {
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
        window.location.reload();
      })
      .catch(function (error) {
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
            <TextBox>
              <span>Date</span>
              <input
                type="text"
                name='date'
                id='date'
                value={form.date}
                onChange={handleChange}
                placeholder='MM-YYYY'
              />
            </TextBox>
            <TextBox>
              <span>fee</span>
              <input
                type="text"
                name='fee'
                id='fee'
                value={form.fee}
                onChange={handleChange}
                placeholder='Enter your fee'
              />
            </TextBox>
            <TextBox>
              <span>email</span>
              <input
                type="text"
                name='email'
                id='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Enter your email'
              />
            </TextBox>
            <div>
              <label>Image:</label>
              <input type="file" name="myImage" onChange={handleFileChange} />
            </div>
<TextBox>
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '100.00',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('success', paymentRequest);
              }}
              onPaymentAuthorized={paymentData => {
                console.log('payment authorised sucess', paymentData);
                return{transactionState: 'SUCCESS'}
              }}
              existingPaymentMethodRequired='false'
              buttonColor='black'
              buttonType='pay'

            />
            </TextBox>

            <Submit>
              <input type='submit' onClick={handleFormSubmit} value="Submit" name='signup' />
            </Submit>
          </Wrap>
        </form>
      </Container>
    </>
  )
}

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

 input[type="text"],
 input[type="file"] {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  margin-left: 120px; /* Adjust this value as needed */
}


 input[type="text"]:focus,
 input[type="file"]:focus {
  outline: none;
  border-color: #4CAF50;
}

 input[type="file"] {
  padding: 0;
}

 input[type="file"]::-webkit-file-upload-button {
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

 input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #45a049;
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
