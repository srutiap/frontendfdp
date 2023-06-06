import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//passing props then go to App.js
const Add = (props) => {
    // set all the collected data into 1 variable
    var[datas,setDatas]=useState(props.data);//setting each textfield
    const navigate = useNavigate();//after adding home page will open.so importing navigation and set into 1 variable
    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setDatas((datas)=>({...datas,[name]:value}))//helping to set data
        }
        const addHandler = ()=>{
            console.log('clicked')
            if(props.method=='post'){
            axios.post("http://localhost:3005/new",datas)
            .then((response)=>{
                alert("Successfully added")
                navigate('/ch')//after submitting shld go to navigate page
            })
            .catch(err=>console.log(err))
        }
    if(props.method=='put'){
        axios.put("http://localhost:3005/edit/"+datas._id,datas)
        .then((response)=>{
            alert("Updated Successfully")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    }
   
  return (
    <div style={{paddingTop:"70px"}}>
      {/* importing appjsx */}
      {/* create text field to import */}
      <TextField label='name' 
      name='sname' //understanding the data
      value={datas.sname}//understanding the value
      variant='outlined' onChange={inputHandler}/>

      <TextField label='age'
      age='age'
      name='age'
      value={datas.age}
      variant='outlined'
      onChange={inputHandler}
      />
       <TextField label='position'
      age='pos'
      name='pos'
      value={datas.pos}
      variant='outlined'
      onChange={inputHandler}
      />
      <TextField label='salary'
      age='salary'
      name='salary'
      value={datas.salary}
      variant='outlined'
      onChange={inputHandler}
      />
      <br></br>
<Button variant='contained' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add
