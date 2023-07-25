import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Buffer } from 'buffer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./searchResultPage.css";

function SearchResultsPage() {

  const location = useLocation();
  const searchDate = location.pathname.split('/')[2];
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [sno, setSno] = useState([1]);

  useEffect(() => {
    // Fetch students based on the search date
    axios
      .get(`http://localhost:5000/students/${searchDate}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchDate]);

  const handleEmailSend = async (studentId, email, name, fee, date) => {
    try {
      setLoading(prevLoading => ({
        ...prevLoading,
        [studentId]: true, // Set loading state to true for the specific student
      }));
      const response = await axios.post('http://localhost:5000/send', {
        studentId,
        recipient: email,
        subject: 'Buss Fee Paid',
        message: `Hello ${name} ,your bus fee of ${date}, of Rs. ${fee} is paid, Thank you `,
    
      });

      console.log(response.data);
      
      setLoading(prevLoading => ({
        ...prevLoading,
        [studentId]: false, // Set loading state to true for the specific student
      }));

      setSearchResults((prevStudents) => {
        return prevStudents.map((student) => {
          if (student._id === studentId) {
            return { ...student, paid: true };
          }
          return student;
        });
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };



  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='container'>
    <div className='title'>
    Search Results
    Showing results for date: {searchDate}
    </div>
      

      {searchResults.length > 0 ? (
        <ContainerBox>
          <Wrap>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>S no.</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Name Of Students</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Destination</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Department</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Date</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Image</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Send Email</TableCell>
                  </TableRow>
                </TableHead>
                {searchResults.map((student,index) => (
                  <TableBody>
                    <TableRow
                      key={student._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                        {index + 1}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                        {student.name}
                      </TableCell>


                      <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                        {student.destination}
                      </TableCell>

                      <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                        {student.department}
                      </TableCell>


                      <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                        {student.date}
                      </TableCell>



                      <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17, cursor: "pointer" }} >
                        {/* <img src={`data:${row.image.contentType};base64,${row.image.data}`} alt={row.name} /> */}
                        <img width="50" height="50" src={`data:${student.image.contentType};base64, ${Buffer.from(student.image.data).toString('base64')}`} onClick={() => handleImageClick(student)} alt='not avaliable'></img>
                      </TableCell>

                      <TableCell>
                        {student.paid ? (
                          <span className="tick-mark" style={{fontSize:'30px'}}>✅</span>
                        ) : (
                          <button
                            onClick={() => handleEmailSend(student._id, student.email, student.name, student.fee, student.date)}>{loading[student._id] ? 'Sending Email...' : 'Send Email'}</button>
                        )}
                      </TableCell>

                    </TableRow>

                  </TableBody>

                ))}
              </Table>
            </TableContainer>

            {selectedImage && (
              <div className="modal" onClick={handleCloseModal}>
                <div className="modal-content">
                  <span className="close" >
                    &times;
                  </span>
                  <img
                    src={`data:${selectedImage.image.contentType};base64,${Buffer.from(selectedImage.image.data).toString('base64')}`}
                    alt={selectedImage.name}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </Wrap>
        </ContainerBox>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;


const ContainerBox = styled.div`
  display: flex;
  position: relative;
  position:relative;
  text-align: center;
    margin: 30px 0;
`
const Wrap = styled.div`
position: relative;
  border: 2px solid;
  margin: 0 0 0 200px;
  width: 55vw;
`
