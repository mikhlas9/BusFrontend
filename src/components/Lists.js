import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ImageGallery.css';

const Lists = () => {
  const [students, setStudents] = useState([]);





  useEffect(() => {
    // Fetch all images from the server
    axios.get('/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <ContainerBox>
      <Wrap>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Name Of Students</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Destination</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 25 }}>Department</TableCell>
                </TableRow>
            </TableHead>
            {students.map((row) => (
              <TableBody>
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                    {row.name}
                  </TableCell>


                  <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                    {row.destination}
                  </TableCell>

                  <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 17 }} >
                    {row.department}
                  </TableCell>
                </TableRow>

              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </Wrap>
    </ContainerBox>
  )
}

export default Lists

const ContainerBox = styled.div`
  display: flex;
  ${'' /* flex-direction: column; */}
  position: relative;
  margin: 10px 20px;
`
const Wrap = styled.div`
position: relative;
${'' /* display: flex; */}
  border: 2px solid;
  margin: 0 0 0 200px;
  width: 50vw;
`
