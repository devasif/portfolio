import AccountCircleIcon from '@mui/icons-material/AccountCircle';import { Alert, Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


const theme = createTheme();


export const Register = () => {
  const [open, setOpen] = useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const [input,setInput] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = (e)=>{
      setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8800/register",input)
      console.log(res)

    } catch(err){
     console.log(err)
    }
    setOpen(true);
  };


  return (
    <div>


<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="  User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}

            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              Sign Up
            </Button>
            <Grid container>
              
              <Grid item>
                <p>Do You have an account <Link to="/login" variant="body2" >Sing In </Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Account Created Succesfully
        </Alert>
      </Snackbar>
       
      </Container> 




    </div>
  )
}
