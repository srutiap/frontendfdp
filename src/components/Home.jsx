import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[users,setusers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response)
            setusers(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    
  return (
    <div style={{paddingTop:'70px'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Salary</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
{users.map((value,index)=>{
    return(
        <TableRow key={index}>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.username}</TableCell>
            <TableCell>{value.email}</TableCell>
            <TableCell>{value.phone}</TableCell>
        </TableRow>
    )
})}
                </TableBody>
           
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
