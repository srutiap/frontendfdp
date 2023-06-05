import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddEmployee = () => {
    var[inputs,setinputs]=useState({sname:'',age:'',position:'',salary:''})
const inputHandler=(e)=>{
    const{name,value}=e.target
    setinputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}
  return (
    <div style={{paddingTop:'80px'}}>
      <TextField name='sname' value={inputs.sname} label='Name' variant='outlined' onChange={inputHandler}></TextField><br></br><br />
      <TextField name='age' value={inputs.age} onChange={inputHandler} label='Age' variant='outlined'></TextField><br></br><br />
      <TextField name='position' value={inputs.position} label='Position' variant='outlined' onChange={inputHandler}></TextField><br></br><br />
      <TextField name='salary' value={inputs.salary} label='Salary' variant='outlined' onChange={inputHandler} ></TextField><br></br><br />
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default AddEmployee
