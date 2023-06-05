import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const View = () => {
    var [pname,setpname]=useState("Tiya")
    var[val,setval]=useState()
const changeName =() => {
    console.log=("clicked")
    setpname(val)
}
const inputHandler=(e)=>{
    console.log(e.target.value)
    setval(e.target.value)
}
  return (
    <div>
      <h1>Sruti K Harilal</h1>
      <Typography variant='h1'>Sruti {pname}</Typography>
      {/* <input placeholder='Name'></input> */}
      <TextField label='Name' onChange={inputHandler}></TextField>   
      <Button variant='contained' onClick={changeName}>Change</Button>  
    </div>
  )
}

export default View
