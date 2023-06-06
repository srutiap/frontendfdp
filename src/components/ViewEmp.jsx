import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//first install npm icon into terminal from material ui
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//first install edit
import EditIcon from '@mui/icons-material/Edit';
import Add from './Add';
const ViewEmp = () => {
  var[employees,setEmployee]= useState([]);
  //for setting single value
  var[oneValue,setonevalue]=useState();
  //for setting state default false
  var[edit,setEdit]=useState(false);
  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then(response=>{
      console.log(response.data)
      setEmployee(response.data)
    })
    .catch(err=>console.log(err))
  },[])
  //for creating a delete arrow function for deleting the data by passing id
  const deletevalues=(id)=>{console.log("delete clicked",id)
axios.delete("http://localhost:3005/remove/"+id)
.then((response)=>{
  alert("data deleted")
})
}
// for creating edit arrow function for editing the data by taking all values
const editvalues=(value)=>{
  console.log("data updated")
  setonevalue(value);
  setEdit(true);
}
// declare a variable
var finaJSX=<TableContainer  style={{paddingTop:'70px'}}>
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
              {employees.map((value,index)=>{
return(
  <TableRow key={index}>
    <TableCell>{value.sname}</TableCell>
    <TableCell>{value.age}</TableCell>
    <TableCell>{value.pos}</TableCell>
    <TableCell>{value.salary}</TableCell>
    <TableCell>
    <DeleteForeverIcon color='error' onClick= {()=>deletevalues(value._id)}/> 
    {/* for delete icon and create an arrow function for deleting by paasing the id when clicked on icon*/}
    </TableCell>
    <TableCell>
<EditIcon color='success' onClick={()=>editvalues(value)}></EditIcon>
{/* for edit icon */}
    </TableCell>
  </TableRow>
)
              })}
        
            </TableBody>
        </Table>
      </TableContainer>
      //if edit , we pass one value and put method then go to ADD.jsx
      if(edit)
      finaJSX = <Add data={oneValue} method='put'/>
  return (
    
      finaJSX
   
  )
}

export default ViewEmp
