import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography sx={{ flexGrow: 1 }} align='left'>EmployeeApp</Typography>
            <Button>
                <Link to={'/ch'} style={{textDecoration:'none' ,color:'white'}}>View
                </Link>
                </Button>
            <Button>
                <Link to={'/add'} style={{textDecoration:'none' ,color:'white'}}>Add
                </Link>
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
